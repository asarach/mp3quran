<?php

namespace App\Http\Livewire\Tv;

use App\Tv;
use App\Page;
use Livewire\Component;

class Show extends Component
{
    public $tvid;

    public function mount($tvid)
    {
        $this->tvid = $tvid;
    }

    public function render()
    {
        $tv = Tv::where('status', 1)
            ->where('id', $this->tvid)
            ->sortable(['created_at' => 'desc'])
            ->paginate(30);

        $page = Page::where('name', 'live')->where('status', 1)->firstOrFail();

        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();
        $page->keywords = $page->getLocaleKeywords();

        return view('livewire.tv.show', compact('page', 'tv'));
    }
}
