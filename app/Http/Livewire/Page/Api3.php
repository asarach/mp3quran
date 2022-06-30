<?php

namespace App\Http\Livewire\Page;

use Livewire\Component;
use App\Page;

class Api3 extends Component
{
    public $index  = 0;
    public $api  = [];
    public function render()
    {
        $page = Page::where('name', 'API')->where('status', 1)->firstOrFail();
        $this->api = json_decode(file_get_contents(storage_path() . "/api3.json"), true);
        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();
        $page->keywords = $page->getLocaleKeywords();

        $menu = [
            'reads',
            'recent_reads'
        ];

        return view('livewire.page.api3', compact('page', 'menu'));
    }
    public function showTab($key)
    {
        $this->index = $key;
        $this->dispatchBrowserEvent('index-updated');

    }
}
