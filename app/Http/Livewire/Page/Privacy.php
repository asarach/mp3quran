<?php

namespace App\Http\Livewire\Page;

use Livewire\Component;
use App\Page;

class Privacy extends Component
{
    public function render()
    {
        $page = Page::where('name', 'privacy')->where('status', 1)->firstOrFail();

        $page->content = $page->getLocaleContent();
        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();
        $page->keywords = $page->getLocaleKeywords();

        return view('livewire.page.privacy', compact('page'));
    }
}
