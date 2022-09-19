<?php

namespace App\Http\Livewire\Mushaf;

use Livewire\Component;
use App\Page;

class Mushaf extends Component
{
    public function render()
    {
        $page = Page::where('name', 'mushaf')->where('status', 1)->firstOrFail();

        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();

        return view('livewire.mushaf.mushaf', compact('page'));
    }
}
