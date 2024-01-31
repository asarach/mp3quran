<?php

namespace App\Http\Livewire\Tafsir;

use App\Page;
use App\Sora;
use App\Models\Tsora;
use App\Models\Tafsir;
use Livewire\Component;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Builder;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class Bookmarks extends Component
{
    public $search = null;
    public $t = '';
    public $selected_tafsir = ['id' => false, 'name' => ''];

    protected $queryString = [
        't',
    ];

    protected $listeners = ['selectTafsir'];

    public function mount()
    {
        if (!Auth::check()) {
            return redirect()->to('/login');
        }
    }

    public function render()
    {
        $tbookmarks = Auth::user()->tbookmarks()->with('tsora')->get()->toArray();
        $page = Page::where('name', 'tafsir')->where('status', 1)->firstOrFail();
        $page->content = $page->getLocaleContent();
        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();
        return view('livewire.tafsir.bookmarks', compact('page', 'tbookmarks'));
    }

    public function deleteBookmark($tbookmark_id)
    {
        $tbookmark = Auth::user()->tbookmarks()->where('id',$tbookmark_id )->first();
        if ($tbookmark) {
            $tbookmark->delete();
        }
    }
}
