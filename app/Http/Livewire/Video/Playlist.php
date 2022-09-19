<?php

namespace App\Http\Livewire\Video;

use App\Page;
use App\Video;
use Livewire\Component;

class Playlist extends Component
{
    public $playlist_id;
    public $limitPerPage = 24;


    public function mount($playlist_id)
    {
        $this->playlist_id = $playlist_id;
    }

    public function render()
    {
        $videos = Video::where('status', 1)
            ->where('uploaded', 1)
            ->where('vgroup_id', $this->playlist_id)
            ->sortable(['created_at' => 'desc'])
            ->paginate($this->limitPerPage);

        $page = Page::where('name', 'video')->where('status', 1)->firstOrFail();

        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();

        return view('livewire.video.playlist', compact('page', 'videos'));
    }
    public function loadMore()
    {
        $this->limitPerPage = $this->limitPerPage + 6;
    }
}
