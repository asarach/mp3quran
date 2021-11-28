<?php

namespace App\Http\Livewire\Mushaf;

use Livewire\Component;
use App\Page;

class Mushaf extends Component
{
    public function render()
    {
        $page = Page::where('name', 'mushaf')->where('status', 1)->firstOrFail();

        $metas = getMetas([
            'seo_title' => $page->getLocaleTitle(),
            'seo_description' => $page->getLocaleDescription(),
            'seo_keywords' => $page->getLocaleKeywords()
        ]);

        return view('livewire.mushaf.mushaf', compact('metas'));
    }
}
