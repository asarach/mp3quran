<?php

namespace App\Http\Livewire\Reciter;

use App\Page;
use App\Reciter;
use Livewire\Component;
use Illuminate\Support\Facades\Cache;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class Index extends Component
{
    public $search = null;
    public $selected_letter = '';

    public function render()
    {
        //get page info
        $page = Page::where('name', 'reciters')->where('status', 1)->firstOrFail();
        $page->content = $page->getLocaleContent();
        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();
        $page->keywords = $page->getLocaleKeywords();

        if ($this->search) {
            $reciters = $this->getReciters();
        } else {
            $cache_name = 'reciters_index_rewaya' . $this->selected_letter . '_long_' .  LaravelLocalization::getCurrentLocale();
            // Cache::forget($cache_name);
            $reciters = Cache::rememberForever($cache_name, function () {
                return $this->getReciters();
            });
        }
        $reciters['page'] =  $page;



        return view('livewire.reciter.index', $reciters );
    }
    public function selectLetter($letter)
    {
        $this->selected_letter = $letter;
    }
    public function preparword($q)
    {
        $q = str_replace('أ', 'ا', $q);
        $q = str_replace('إ', 'ا', $q);

        return $q;
    }
    public function getReciters()
    {
        $reciters = Reciter::where('status', 1)
            ->sortable(['name' => 'asc'])
            ->get();


        $recitersb = $reciters->groupBy(function ($item, $key) {
            return mb_substr($item->getLocaleName(), 0, 1);
        })
            ->sortBy(function ($item, $key) {
                return $key;
            });
        $letters = $recitersb->forget('أ')->forget('إ')->keys();

        $reciters = $reciters->toArray();
        $reciters = collect($reciters);
        if ($this->selected_letter) {
            $q = $this->preparword($this->selected_letter);
            $reciters = $reciters->filter(function ($item) use ($q) {
                return str_starts_with($this->preparword($item['name']), $q);
            });
        }
        if ($this->search) {
            $q = $this->preparword($this->search);
            $reciters = $reciters->filter(function ($item) use ($q) {
                return false !== stristr($this->preparword($item['name']), $q);
            });
        }

        return compact('letters', 'reciters');
    }
}
