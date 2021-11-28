<?php

namespace App\Http\Livewire\Mushaf;

use App\Page;
use Livewire\Component;

class Alkahf extends Component
{
    public function render()
    {       
        $page = Page::where('name', 'alkahf-surah')->where('status', 1)->firstOrFail();

        $metas = getMetas([
            'seo_title' => $page->getLocaleTitle(),
            'seo_description' => $page->getLocaleDescription(),
            'seo_keywords' => $page->getLocaleKeywords()
        ]);

        return view('livewire.mushaf.alkahf', compact('metas'));
    }
}
