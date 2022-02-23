<?php

namespace App\Http\Livewire\Newsletter;

use Livewire\Component;
use App\Page;

class Show extends Component
{
    public function render()
    {
        $page = Page::where('name', 'index')->where('status', 1)->firstOrFail();
        
        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();
        $page->keywords = $page->getLocaleKeywords();
        
        return view('livewire.newsletter.show', compact('page'));
    }
}
