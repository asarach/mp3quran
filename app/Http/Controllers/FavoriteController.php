<?php

namespace App\Http\Controllers;

use Mail;
use App\Read;
use Honeypot;
use Carbon\Carbon;
use App\Models\Favorite;
use LaravelLocalization;
use App\Mail\ContactMail;
use Spatie\Sitemap\Sitemap;
use Illuminate\Http\Request;
use Spatie\Sitemap\Tags\Url;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\MessageRequest;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Response;
use App\Repositories\Read\ReadRepository;
use App\Repositories\Sora\SoraRepository;
use App\Repositories\Radio\RadioRepository;
use App\Repositories\Video\VideoRepository;
use App\Repositories\Mushaf\MushafRepository;
use App\Repositories\Rewaya\RewayaRepository;
use App\Repositories\Message\MessageRepository;
use App\Repositories\Reciter\ReciterRepository;
use App\Repositories\Favorite\FavoriteRepository;

class FavoriteController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(SoraRepository $sora,  Favorite $favorite, MessageRepository $contact, VideoRepository $video, ReciterRepository $reciter, RadioRepository $radio, ReadRepository $read)
    {
        $this->favorite = $favorite;
        $this->contact = $contact;
        $this->radio = $radio;
        $this->reciter = $reciter;
        $this->video = $video;
        $this->read = $read;
        $this->sora = $sora;
    }



    public function getFavorites(Request $request)
    {
        if (Auth::check()) {
            $user = Auth::user();
            $favorites = Favorite::where('user_id', $user->id)->get()->groupBy('favorable_type');
            $results = [];

            foreach ($favorites as $key => $favorite) {
                $items = $favorite->pluck('favorable_id')->toArray();
                $results[$key] = $items;
            }
            return $results;
        } else {
            $mp3quran_favorites =  request()->cookie('mp3quran_favorites');
            $results = json_decode($mp3quran_favorites, true);
            return $results;
        }
    }

    public function postFavorites(Request $request)
    {
        $input = $request->all();
        unset($input['_token']);
        if (Auth::check()) {
            $user = Auth::user();
            if (isset($input['reads'])) {
                $this->syncItems($user, 'reads', $input['reads']);
            }
            if (isset($input['radios'])) {
                $this->syncItems($user, 'radios', $input['radios']);
            }
            if (isset($input['videos'])) {
                $this->syncItems($user, 'videos', $input['videos']);
            }
            if (isset($input['soar'])) {
                $this->syncItems($user, 'soar', $input['soar']);
            }
        } else {
            $response = new \Illuminate\Http\Response('');
            $response->withCookie(cookie('mp3quran_favorites',  json_encode($input), 5256000));
            return $response;
        }
    }
    public function syncItems($user, $type, $items)
    {
        Favorite::where('user_id', $user->id)->where('favorable_type', $type)->delete();
        foreach ($items as $item) {
            $favorite = new Favorite;
            $favorite->favorable_id = $item;
            $favorite->favorable_type = $type;
            $favorite->user_id = $user->id;
            $favorite->save();
        }
    }
}
