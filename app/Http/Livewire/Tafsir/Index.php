<?php

namespace App\Http\Livewire\Tafsir;

use App\Page;
use App\Sora;
use App\Models\Tsora;
use App\Models\Tafsir;
use Livewire\Component;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Builder;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class Index extends Component
{
    public $search = null;
    public $t = '';
    public $selected_tafsir = ['id' => false, 'name' => ''];

    protected $queryString = [
        't',
    ];

    protected $listeners = ['selectTafsir'];

    public function render()
    {
        $tafsirs = $this->getTafsirs();

        $soar = $this->getSoar();

        if (Auth::check()) {
            $tbookmarks = Auth::user()->tbookmarks()->with('tsora')->get()->toArray();
        } else {
            $tbookmarks = [];
        }

        $page = Page::where('name', 'tafsir')->where('status', 1)->firstOrFail();
        $page->content = $page->getLocaleContent();
        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();

        return view('livewire.tafsir.index', compact('tafsirs', 'soar', 'page', 'tbookmarks'));
    }

    public function selectTafsir($t)
    {
        $this->t = $t;
    }

    public function getTafsirs()
    {
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

        return $tafsirs;
    }
    public function getSoar()
    {
        $soar = Sora::wherehas('tsoars', function (Builder $query) {
            if ($this->selected_tafsir['id']) {
                $query->where('status', 1)->where('tafsir_id', $this->selected_tafsir['id']);
            } else {
                $query->where('status', 1);
            }
        })
            ->with('tsoars')
            ->get();

        if (style_version() != 'm') {
            $half = ceil($soar->count() / 2);
        } else {
            $half = $soar->count();
        }
        return $soar->chunk($half);
    }
}
