<?php

namespace App\Http\Livewire\Tv;

use App\Tv;
use App\Page;
use Livewire\Component;

class Index extends Component
{
    public function render()
    {
        $tvs = Tv::where('status', 1)
            ->sortable(['created_at' => 'desc'])
            ->paginate(30);

        $page = Page::where('name', 'live')->where('status', 1)->firstOrFail();

        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();
        $page->keywords = $page->getLocaleKeywords();

        return view('livewire.tv.index', compact('page', 'tvs'));
    }
}
