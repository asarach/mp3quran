<?php

namespace App\Http\Livewire\Radio;

use App\Page;
use App\Radio;
use App\Rewaya;
use Livewire\Component;
use Illuminate\Support\Facades\Cache;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class Index extends Component
{
    public $search = null;
    public $selected_rewaya = ['id' => false, 'name' => ''];

    public function render()
    {
        if ($this->selected_rewaya['id'] == false) {
            $this->selected_rewaya['name'] = trans('text.all');
        }
        //get page info
        $page = Page::where('name', 'radio')->where('status', 1)->firstOrFail();
        $page->content = $page->getLocaleContent();
        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();

        //get radios
        if ($this->search) {
            $radios = $this->getRadios();
        } else {
            $cache_name = 'radios_index_rewaya' . $this->selected_rewaya['id'] . '_long_' .  LaravelLocalization::getCurrentLocale();
            // Cache::forget($cache_name);
            $radios = Cache::rememberForever($cache_name, function () {
                return $this->getRadios();
            });
        }

        //get rewayat
        $rewayata = Rewaya::get();
        $rewayat = [['id' => false,  'name' => trans('text.all')]];
        foreach ($rewayata as $rewaya) {
            $rewayat[] = ['id' => $rewaya->id,  'name' => $rewaya->getLocaleName()];
        }

        return view('livewire.radio.index', compact('page', 'rewayat', 'radios'));
    }

    public function selectRewaya($rewaya)
    {
        $this->selected_rewaya = $rewaya;
    }
    public function preparword($q)
    {
        $q = str_replace('أ', 'ا', $q);
        $q = str_replace('إ', 'ا', $q);

        return $q;
    }
    public function getRadios()
    {
        $radios = Radio::where('status', 1)->get()->toArray();
        $radios = collect($radios);
        if ($this->selected_rewaya['id']) {
            foreach ($radios as $key => $radio) {
                if ($radio['rewaya_id'] != $this->selected_rewaya['id']) {
                    $radio['show'] = false;
                    $radios[$key] = $radio;
                }
            }
        }

        if ($this->search) {
            $q = $this->preparword($this->search);
            foreach ($radios as $key => $radio) {
                if (false === stristr($this->preparword($radio['name']), $q)) {
                    $radio['show'] = false;
                    $radios[$key] = $radio;
                }

            }
        }

        return $radios->sortBy('name')->values();
    }
}
