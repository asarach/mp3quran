<?php

namespace App\Http\Livewire\Tadabor;

use App\Page;
use App\Tadabor;
use Livewire\Component;

class Show extends Component
{
    public $slug;
    public function mount($slug)
    {
        $this->slug = $slug;
    }

    public function render()
    {
        $item =  Tadabor::findOrFail($this->slug);
        
        $page = Page::where('name', 'tadabor')->where('status', 1)->firstOrFail();
        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();

        return view('livewire.tadabor.show', compact('page', 'item'));
    }
}
