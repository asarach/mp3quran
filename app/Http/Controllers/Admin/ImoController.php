<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RadioRequest;
use App\Repositories\Radio\RadioRepository;
use App\Repositories\Read\ReadRepository;
use App\Repositories\Rewaya\RewayaRepository;
use Cviebrock\EloquentSluggable\Services\SlugService;
use App\Radio;
use DB;
use App\Services\Search;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Http;


class ImoController extends Controller
{
    //



    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Search $search, RadioRepository $radio, ReadRepository $read,  RewayaRepository $rewaya)
    {
        $this->radio = $radio;
        $this->read = $read;
        $this->search = $search;
        $this->rewaya = $rewaya;
    }

    public function index()
    {
        $reads = $this->read->list(['id', 'title']);
        $rewayat = $this->rewaya->list(['id', 'name']);

        $this->setAccessToken();

        return compact('reads', 'rewayat');
    }


    public function setAccessToken()
    {
        $ImoAccessTokenc = session('ImoAccessTokenc');

        if (!$ImoAccessTokenc) {
            $response = Http::asForm()->post(env('IMO_CLIENT_DOMAIN') . '/oauth/token', [
                'grant_type' => 'client_credentials',
                'client_id' => env('IMO_CLIENT_ID'),
                'client_secret' =>  env('IMO_CLIENT_SECRET'),
                'scope' => 'radio',
            ]);

            session(['ImoAccessTokenc' => $response->json()['access_token']]);
        }
    }

    public function read($id)
    {
        $read = $this->read->model
            ->with(['soar', 'reciter', 'special_rewaya:id,name', 'rewaya:id,name', 'mushaf:id,name', 'server'])
            ->findOrFail($id);
        $lang = App::getLocale();
        $read->time = $read->created_at->timestamp;
        $read->base_url = $read->server->url . '/' . $read->url . '/';
        return compact('read', 'lang');
    }
    public function store(Request $request)
    {
        $input = $request->all();

        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Authorization' => 'Bearer ' . session('ImoAccessTokenc'),
        ])->asForm()->post(env('IMO_CLIENT_DOMAIN') . '/api/radio/album/add', [
            'album_list'    => [$input['album']]
        ]);
        if ($response['message'] == 'success') {
            return  $this->storeItems($input['items']);
        } else {
            return $response->json();
        }
    }
    public function storeItems($items)
    {
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Authorization' => 'Bearer ' . session('ImoAccessTokenc'),
        ])->asForm()->post(env('IMO_CLIENT_DOMAIN') . '/api/radio/item/add', [
            'item_list'    => $items
        ]);

        if ($response['message'] == 'success') {
            return true;
        } else {
            return $response->json();
        }
    }
}
