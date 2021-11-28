<?php

namespace App\Http\Livewire\Uploader;

use Livewire\Component;

class Show extends Component
{
    public function render()
    {
        $uploads = [];

        $page = [
            'title' => 'File Uploader',
            'description' =>  'File Uploader',
            'keywords' => 'File Uploader'
        ];

        return view('livewire.uploader.show',  compact('page','uploads'));
    }
}
