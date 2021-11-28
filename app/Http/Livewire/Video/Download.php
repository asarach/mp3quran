<?php

namespace App\Http\Livewire\Video;

use App\Video;
use Livewire\Component;

class Download extends Component
{
    public $download_id;
    public function mount($download_id)
    {
        $this->download_id = $download_id;
    }
    public function render()
    {

        $full_video = Video::where('id', $this->download_id)
            ->where('status', 1)
            ->firstOrFail();

        $video_reads = [];

        $video = [
            'id' => $full_video->id,
            'url' => upload_url($full_video->url),
            'title' => $full_video->getLocaleTitle(),
            'image' => $full_video->getImage(),
        ];

        $page = [
            'title' =>  trans("text.download-video-with-logo") . ' | MP3 Quran',
            'description' =>  trans('video.description-' . $full_video->id),
            'keywords' => trans('video.keywords-' . $full_video->id)
        ];

        return view('livewire.video.download', compact('page', 'video'));
    }
}
