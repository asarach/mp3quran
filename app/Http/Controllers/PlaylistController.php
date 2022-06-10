<?php

namespace App\Http\Controllers;

use App\Read;
use App\Sora;
use App\Radio;
use App\Tadabor;
use App\Models\Playlist;
use App\Models\PlaylistItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\PlaylistRequest;

class PlaylistController extends Controller
{
    public function __construct(Playlist $playlist)
    {
        $this->playlist = $playlist;
    }

    public function show($id)
    {
        $playlist = Playlist::find($id);
        $items = [];
        foreach ($playlist->items as $item) {

            switch ($item->listable_type) {
                case 'sora':
                    $sora = Sora::where('id', $item->sora_id)->first();
                    $read = Read::where('id', $item->listable_id)->first();
                    $item = $sora->getSoraItem($read);
                    $items[] = $item;
                    break;
                case 'radio':
                    $radio = Radio::where('id', $item->listable_id)->first();
                    $item = $radio->getRadioItem();
                    $items[] = $item;
                    break;
                case 'tadabor':
                    $tadabor = Tadabor::where('id', $item->listable_id)->first();
                    $item = $tadabor->getTadaborItem();
                    $items[] = $item;
                    break;
                default:
                    # code...
                    break;
            }
        }

        return $items;
    }

    public function store(PlaylistRequest $request)
    {
        $inputs = $request->input();
        $items = json_decode($inputs['playlist'], true);

        if ($inputs['id']) {
            $playlist =  Playlist::find($inputs['id']);
            $playlist->items()->delete();
            // dd($playlist->items);
        } else {
            $playlist = new Playlist();
        }

        $playlist->name = $inputs['name'];
        $playlist->status = 1;
        $playlist->user()->associate(Auth::user()->id);
        $playlist->save();

        foreach ($items as $key => $item) {
            $playlistItem = new PlaylistItem();
            $playlistItem->listable_type = $item['type'];
            switch ($item['type']) {
                case 'sora':
                    $playlistItem->listable_id = $item['read_id'];
                    $playlistItem->sora_id = $item['sora_id'];
                    break;
                case 'radio':
                    $playlistItem->listable_id = $item['radio_id'];
                    $playlistItem->sora_id = null;
                    break;
                case 'tadabor':
                    $playlistItem->listable_id = $item['tadabor_id'];
                    $playlistItem->sora_id = null;
                    break;
            }

            $playlistItem->playlist()->associate($playlist->id);
            $playlistItem->save();
        }

        return true;
    }
    public function destroy($id)
    {
        return $this->playlist->findOrFail($id)->delete();
    }
}
