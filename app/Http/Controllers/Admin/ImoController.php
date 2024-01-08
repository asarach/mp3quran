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
use LaravelLocalization;


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
        // \App::setLocale('eng');
        dd(LaravelLocalization::getCurrentLocale());
        $reads = $this->read->model->get();
        $rewayat = $this->rewaya->model->get();

        foreach ($reads as $key => $read) {
            $read->title = $read->getLocaleTitle();
        }
        foreach ($rewayat as $key => $rewaya) {
            $rewaya->name = $rewaya->getLocaleName();
        }

        $this->setAccessToken();

        return compact('reads', 'rewayat');
    }


    public function setAccessToken()
    {
        $ImoAccessTokena = session('ImoAccessTokena');

        if (!$ImoAccessTokena) {
            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
            ])->post(env('IMO_CLIENT_DOMAIN') . '/api/oauth/token', [
                'grant_type' => 'client_credentials',
                'client_id' => env('IMO_CLIENT_ID'),
                'client_secret' =>  env('IMO_CLIENT_SECRET'),
                'scope' => 'radio',
            ]);
            session(['ImoAccessTokena' => $response->json()['data']['access_token']]);
        }
    }

    public function read($id)
    {
        \App::setLocale('eng');

        $read = $this->read->model
            ->with(['soar', 'reciter', 'special_rewaya:id,name', 'rewaya:id,name', 'mushaf:id,name', 'server'])
            ->findOrFail($id);

        $read->title = $read->getLocaleTitle();
        $read->rewaya_name = $read->getRewaya();
        $read->reciter_name = $read->getReciter();

        $read->rewaya->name = $read->rewaya->getLocaleName();
        $read->reciter->name = $read->reciter->getLocaleName();

        foreach ($read->soar as $key => $sora) {
            $sora->name = $sora->getLocaleName();
        }

        $lang = App::getLocale();
        $read->time = $read->created_at->timestamp;
        $read->base_url = $read->server->url . '/' . $read->url . '/';
        return compact('read', 'lang');
    }
    public function store(Request $request)
    {
        $input = $request->all();
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . session('ImoAccessTokena'),
        ])->post(env('IMO_CLIENT_DOMAIN') . '/api/radio/album/add', [
            'album_list'    => [$input['album']]
        ]);
        if ($response['message'] == 'success') {
            return  $this->storeItems($input['items'], $input['album']['album_id']);
        } else {
            return $response->json();
        }
    }
    public function storeItems($items, $album_id)
    {
        foreach ($items as $key => $item) {
            $item['album_id'] =$album_id;
            $items[$key] = $item;
        }

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . session('ImoAccessTokena'),
        ])->post(env('IMO_CLIENT_DOMAIN') . '/api/radio/item/add', [
            'item_list'    => $items
        ]);

        if ($response['message'] == 'success') {
            return true;
        } else {
            return $response->json();
        }
    }
}
