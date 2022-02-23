<?php

namespace App\Http\Livewire\Mushaf;

use App\Page;
use Livewire\Component;

class Alkahf extends Component
{
    public function render()
    {       
        $page = Page::where('name', 'alkahf-surah')->where('status', 1)->firstOrFail();
        
        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();
        $page->keywords = $page->getLocaleKeywords();

        return view('livewire.mushaf.alkahf', compact('page'));
    }
}
