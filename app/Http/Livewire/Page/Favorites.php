<?php

namespace App\Http\Livewire\Page;

use Livewire\Component;
use App\Models\Favorite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Repositories\Read\ReadRepository;
use App\Repositories\Sora\SoraRepository;
use App\Repositories\Radio\RadioRepository;
use App\Repositories\Video\VideoRepository;

class Favorites extends Component
{
    public $input = [
        'radios' => [],
        'reads' => [],
        'soar' => [],
        'videos' => [],
    ];

    protected $listeners = ['closeComponent' => 'closeComponent'];

    public function render(Request $request, VideoRepository $videoRepo, RadioRepository $radioRepo, ReadRepository $readRepo)
    {
        if (Auth::check()) {
            $user = Auth::user();
            $favorites = Favorite::where('user_id', $user->id)->get()->groupBy('favorable_type');

            foreach ($favorites as $key => $favorite) {
                $items = $favorite->pluck('favorable_id')->toArray();
                $this->input[$key] = $items;
            }
            // return $results;
        } else {
            // $mp3quran_favorites =  request()->cookie('mp3quran_favorites');
            // $results = json_decode($mp3quran_favorites, true);
            // return $results;
            $mp3quran_favorites =  request()->cookie('mp3quran_favorites');
            if ($mp3quran_favorites) {
                $items = json_decode($mp3quran_favorites, true);
                if (isset($items['reads'])) {
                    $this->input['reads'] = $items['reads'];
                }
                if (isset($items['radios'])) {
                    $this->input['radios'] = $items['radios'];
                }
                if (isset($items['videos'])) {
                    $this->input['videos'] = $items['videos'];
                }
                if (isset($items['soar'])) {
                    $this->input['soar'] = $items['soar'];
                }
            }
        }



        $videos = $radios = $soar = $reads  = [];


        $active_tab =  'reads';
        if (isset($this->input['videos']) && !empty($this->input['videos'])) {
            $videos = $videoRepo->getFavs($this->input['videos']);
            $active_tab = 'videos';
        }
        if (isset($this->input['radios']) && !empty($this->input['radios'])) {
            $radios = $radioRepo->getFavs($this->input['radios']);
            $active_tab = 'radios';
        }
        if (isset($this->input['soar']) && !empty($this->input['soar'])) {
            $soar = $readRepo->getFavsSoar($this->input['soar']);
            $active_tab = 'soar';
        }
        if (isset($this->input['reads']) && !empty($this->input['reads'])) {
            $reads = $readRepo->getFavs($this->input['reads']);
            $active_tab = 'reads';
        }

        $page = [
            'title' => trans('text.favorites') . ' | MP3 Quran',
            'description' => trans('text.favorites-description'),
            'keywords' => trans('text.favorites-keywords'),
        ];

        return view('livewire.page.favorites', compact('page', 'active_tab', 'reads', 'soar', 'radios', 'videos'));
    }
}
