<?php

namespace App\Http\Livewire\App;

use App\App;
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
        $app = App::where('id', $this->slug)
            ->where('status', 1)
            ->firstOrFail();

        $page = [
            'title' => $app->getLocaleTitle() . ' | MP3 Quran',
            'description' => trans('app-description.' . $app->id),
        ];

        return view('livewire.app.show', compact('app', 'page'));
    }
}
