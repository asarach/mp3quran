<?php

namespace App\Http\Livewire\Video;

use App\Page;
use App\Vgroup;
use Livewire\Component;
use App\Services\Search;

class Index extends Component
{
    public $limitPerPage = 24;
    public $search = null;


    public function render(Search $search)
    {
        $query = request()->get('q');


        if ($this->search) {
            $qids = $search->search($query, 'vgroups_index');
        }

        $playlists = Vgroup::where('status', 1);
        if ($this->search) {
            $playlists = $playlists->whereIn('id', $qids);
        }
        $playlists = $playlists->orderBy('id', 'desc')
            ->paginate($this->limitPerPage);

        $page = Page::where('name', 'video')->where('status', 1)->firstOrFail();

        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();

        return view('livewire.video.index', compact('page', 'playlists'));
    }
    public function loadMore()
    {
        $this->limitPerPage = $this->limitPerPage + 6;
    }
}
