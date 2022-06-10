<?php

namespace App\Http\Livewire\Page;

use App\Page;
use Livewire\Component;
use App\Models\Playlist;
use Illuminate\Support\Facades\Auth;

class Playlists extends Component
{
    public function render()
    {
        $playlists = Auth::user()->playlists()->where('status', 1)
            ->sortable(['created_at' => 'desc'])
            ->paginate(30);

        $page = Page::where('name', 'playlists')->where('status', 1)->firstOrFail();

        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();
        $page->keywords = $page->getLocaleKeywords();

        return view('livewire.page.playlists', compact('playlists', 'page'));
    }
}
