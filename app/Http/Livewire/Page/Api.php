<?php

namespace App\Http\Livewire\Page;

use Livewire\Component;
use App\Page;

class Api extends Component
{
    public $current_tab  = [];
    public function render()
    {
        $page = Page::where('name', 'API')->where('status', 1)->firstOrFail();

        $page->content = [
            'api1' => json_decode(file_get_contents(storage_path() . "/api1.json"), true),
            // 'api2' => json_decode(file_get_contents(storage_path() . "/api2.json"), true),
        ];
        $this->current_tab = $page->content['api1'][0];

        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();
        $page->keywords = $page->getLocaleKeywords();

        return view('livewire.page.api', compact('page'));
    }
    public function showTab($key)
    {
        $api1 = json_decode(file_get_contents(storage_path() . "/api1.json"), true);
        $this->current_tab = $api1[$key];
    }
}
