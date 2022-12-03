<?php

namespace App\Http\Livewire\Tafsir;

use App\Page;
use App\Models\Tsora;
use App\Models\Tafsir;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Illuminate\Support\Facades\Cache;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class Show extends Component
{
    public $search = null;
    public $t = '';

    protected $queryString = [
        't',
    ];

    public $tafsir_id;
    public $sura_id;
    public function mount($tafsir_id, $sura_id)
    {
        $this->tafsir_id = $tafsir_id;
        $this->sura_id = $sura_id;
    }

    public function render()
    {
        //get tafsirs
        $tafsir = Tafsir::where('id', $this->tafsir_id)->where('status', 1)->firstOrFail();

        //get tsoras
        $cache_name = 'tsoras_index_tafsir_' . $tafsir->id . '_long_' .  LaravelLocalization::getCurrentLocale();
        Cache::forget($cache_name);
        $tsoras = Cache::rememberForever($cache_name, function () use ($tafsir) {
            $tsoras = Tsora::where('status', 1);
            $tsoras = $tsoras->where('tafsir_id', $tafsir->id)->where('sura_id', $this->sura_id);
            $tsoras = $tsoras->get();
            return $tsoras->sortBy('name')->values()->toArray();
        });
        // dd($tsoras);
        //get page info
        $page = Page::where('name', 'tafsir')->where('status', 1)->firstOrFail();
        $page->content = $page->getLocaleContent();
        $page->title = $page->getLocaleTitle() . ' - '. $tafsir->getLocaleName(); 
        $page->description = $page->getLocaleDescription();


        $tbookmarks = Auth::user()->tbookmarks()->with('tsora')->get()->toArray();

        return view('livewire.tafsir.show', compact('page', 'tafsir', 'tsoras', 'tbookmarks'));
    }
    public function preparword($q)
    {
        $q = str_replace('أ', 'ا', $q);
        $q = str_replace('إ', 'ا', $q);

        return $q;
    }
}
