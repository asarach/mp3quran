<?php

namespace App\Http\Livewire\Page;

use Livewire\Component;
use App\Page;

class Api extends Component
{
    public function render()
    {
        $page = Page::where('name', 'API')->where('status', 1)->firstOrFail();
        $docContent = file_get_contents(storage_path() . "/api3-doc/default.html");
        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();
        // dd($html);

        return view('livewire.page.api', compact('page', 'docContent'));
    }
}
