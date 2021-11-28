<?php

namespace App\Http\Livewire\Video;

use App\Video;
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

        $full_video = Video::where('slug', $this->slug)
            ->where('status', 1)
            ->firstOrFail();

        $video_reads = [];


        $video = [
            'id' => $full_video->id,
            'url' => upload_url($full_video->url),
            'type' => $full_video->type,
            'youtube_id' => $full_video->youtube_id,
            'title' => $full_video->getLocaleTitle(),
            'reciter_name' => $full_video->geReciterName(),
            'image' => upload_url($full_video->getImage()),
        ];
        $page = [
            'title' => $video['title'] . ' | MP3 Quran',
            'description' =>  trans('video.description-' . $full_video->id),
            'keywords' => trans('video.keywords-' . $full_video->id)
        ];

        return view('livewire.video.show', compact('page', 'video_reads', 'video'));
    }
}
