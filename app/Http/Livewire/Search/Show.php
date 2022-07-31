<?php

namespace App\Http\Livewire\Search;

use Livewire\Component;
use App\Repositories\Read\ReadRepository;
use App\Repositories\Tv\TvRepository;
use App\Repositories\Reciter\ReciterRepository;
use App\Repositories\Video\VideoRepository;
use App\Repositories\Radio\RadioRepository;

class Show extends Component
{
    public $active_tab = '';
    public $s = '';

    protected $queryString = ['s'];

    public function render(VideoRepository $video, ReciterRepository $reciter, RadioRepository $radio, TvRepository $tv, ReadRepository $read)
    {

        $q['s'] = $this->preparword($this->s);
        
        // $reads = $read->search($q, 'reads_index');
        // if (!$reads->isEmpty() && $this->active_tab == '') {
        //     $this->active_tab = 'reads';
        // }
        // $reads = $reads->toArray();

        $reciters = $reciter->search($q, 'reciters_index');
        if (!$reciters->isEmpty() && $this->active_tab == '') {
            $this->active_tab = 'reciters';
        }
        $reciters = $reciters->toArray();

        $radios = $radio->search($q, 'radios_index');
        if (!$radios->isEmpty() && $this->active_tab == '') {
            $this->active_tab = 'radios';
        }
        $radios = $radios->toArray();

        $videos = $video->search($q, 'videos_index');
        if (!$videos->isEmpty() && $this->active_tab == '') {
            $this->active_tab = 'videos';
        }
        $videos = $videos->toArray();

        $tvs = $tv->search($q, 'tvs_index');
        if (!$tvs->isEmpty() && $this->active_tab == '') {
            $this->active_tab = 'tvs';
        }
        $tvs = $tvs->toArray();
        
        $page = [
            'title' => trans('text.search-result-for', ['q' => $this->s]) . ' | MP3 Quran',
            'description' => '',
            'keywords' => ''
        ];
        // dd($reciters['data']);

        return view('livewire.search.show',  compact('page',  'videos', 'reciters', 'radios', 'tvs'));
    }
    public function preparword($q)
    {
        // $q = utf8_decode($q);
        // $q = str_replace('أ', 'ا', $q);
        // $q = str_replace('إ', 'ا', $q);

        return $q;
    }
    public function showTab($tab)
    {
        $this->active_tab = $tab;
        $this->emit('changeDom');
    }
}
