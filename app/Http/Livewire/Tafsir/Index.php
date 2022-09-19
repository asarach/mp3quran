<?php

namespace App\Http\Livewire\Tafsir;

use App\Page;
use App\Models\Tsora;
use App\Models\Tafsir;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Illuminate\Support\Facades\Cache;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class Index extends Component
{
    public $search = null;
    public $t = '';
    public $selected_tafsir = ['id' => false, 'name' => ''];

    protected $queryString = [
        't',
    ];

    public function render()
    {
        //get tafsirs
        $tafsirsa = Tafsir::where('status', 1)->get();
        $tafsirs = [];
        foreach ($tafsirsa as $tafsir) {
            $tafsirs[$tafsir->id] = ['id' => $tafsir->id,  'name' => $tafsir->getLocaleName()];
        }

        if (!empty($this->t) && isset($tafsirs[$this->t])) {
            $this->selected_tafsir['id'] = $tafsirs[$this->t]['id'];
            $this->selected_tafsir['name'] = $tafsirs[$this->t]['name'];
        } elseif ($this->selected_tafsir['id'] == false && $tafsirsa->first() && isset($tafsirs[$tafsirsa->first()->id])) {
            $this->selected_tafsir['id'] = $tafsirs[$tafsirsa->first()->id]['id'];
            $this->selected_tafsir['name'] = $tafsirs[$tafsirsa->first()->id]['name'];
        } else {
            $this->selected_tafsir['name'] = trans('text.all');
        }

        //get page info
        $page = Page::where('name', 'tafsir')->where('status', 1)->firstOrFail();
        $page->content = $page->getLocaleContent();
        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();

        //get tsoras
        if ($this->search) {
            $tsoras = $this->getTsoras();
        } else {
            $cache_name = 'tsoras_index_tafsir' . $this->selected_tafsir['id'] . '_long_' .  LaravelLocalization::getCurrentLocale();
            // Cache::forget($cache_name);
            $tsoras = Cache::rememberForever($cache_name, function () {
                return $this->getTsoras();
            });
        }

        $tbookmarks = Auth::user()->tbookmarks()->with('tsora')->get()->toArray();

        return view('livewire.tafsir.index', compact('page', 'tafsirs', 'tsoras', 'tbookmarks'));
    }
    public function preparword($q)
    {
        $q = str_replace('أ', 'ا', $q);
        $q = str_replace('إ', 'ا', $q);

        return $q;
    }
    public function getTsoras()
    {
        $tsoras = Tsora::where('status', 1);

        if ($this->selected_tafsir['id']) {
            $tsoras = $tsoras->where('tafsir_id', $this->selected_tafsir['id']);
        }

        $tsoras = $tsoras->get();

        if ($this->search) {
            $q = $this->preparword($this->search);
            $tsoras = $tsoras->filter(function ($item) use ($q) {
                return false !== stristr($item->name, $q);
            });
        }

        return $tsoras->sortBy('name')->values()->toArray();
    }
}
