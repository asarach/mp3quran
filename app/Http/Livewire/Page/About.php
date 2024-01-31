<?php

namespace App\Http\Livewire\Page;

use Livewire\Component;
use App\Page;

class About extends Component
{
    public function render()
    {
        $page = Page::where('name', 'about')->where('status', 1)->firstOrFail();
        
        $page->content = $page->getLocaleContent();
        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();
        
        return view('livewire.page.about', compact('page'));
    }
}
