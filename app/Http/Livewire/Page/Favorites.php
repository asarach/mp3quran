<?php

namespace App\Http\Livewire\Page;

use Livewire\Component;

class Favorites extends Component
{
    public function render()
    {
        $page = [
            'title' => trans('text.favorites') . ' | MP3 Quran',
            'description' => trans('text.favorites-description'),
            'keywords' => trans('text.favorites-keywords'),
        ];

        return view('livewire.page.favorites', compact('page'));
    }
}
