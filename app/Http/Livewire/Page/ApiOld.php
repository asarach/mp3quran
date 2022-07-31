<?php

namespace App\Http\Livewire\Page;

use Livewire\Component;
use App\Page;

class ApiOld extends Component
{
    public $api  = [];
    public $index  = 0;
    public function render()
    {
        $page = Page::where('name', 'API')->where('status', 1)->firstOrFail();
        
        $this->api = json_decode(file_get_contents(storage_path() . "/api1.json"), true);

        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();
        $page->keywords = $page->getLocaleKeywords();

        return view('livewire.page.api_old', compact('page'));
    }
    public function showTab($key)
    {
        $this->index = $key;
        $api1 = json_decode(file_get_contents(storage_path() . "/api1.json"), true);
        $this->current_tab = $api1[$key];
    }
}
