<?php

namespace App\Http\Livewire\Page;

use App\Video;
use App\Read;
use Livewire\Component;

class Sitemap extends Component
{
    public function render()
    {
        $page_content = [];


        $page_content[] = ['text' => trans('text.home'), 'url' => route('index'), 'sublinks' => []];
        $page_content[] = ['text' => trans('text.about'), 'url' => route('page.about'), 'sublinks' => []];
        $page_content[] = ['text' => trans('text.apps'), 'url' => route('apps.index'), 'sublinks' => []];
        $page_content[] = ['text' => trans('text.api'), 'url' => route('page.api'), 'sublinks' => []];
        $page_content[] = ['text' => trans('text.contact'), 'url' => route('page.contact'), 'sublinks' => []];
        $page_content[] = ['text' => trans('text.live-tvs'), 'url' => route('tv.index'), 'sublinks' => []];
        $page_content[] = ['text' => trans('text.quran'), 'url' => route('mushaf'), 'sublinks' => []];
        $page_content[] = ['text' => trans('text.surah-al-kahfi'), 'url' => route('alkahf'), 'sublinks' => []];

        $page_content[] = ['text' => trans('text.radios'), 'url' => route('radio.index'), 'sublinks' => []];

        $re_sublinks = [];
        $reads = Read::where('status', 1)->whereNull('special_rewaya_id')->get();
        foreach ($reads as $read) {
            $re_sublinks[] = ['text' => $read->getLocaleTitle(), 'url' => route('reciter.show', ['slug' => $read->slug])];
        }
        $page_content[] = ['text' => trans('text.reciters'), 'url' => route('reciter.index'), 'sublinks' => $re_sublinks];

        $vi_sublinks = [];
        $videos = Video::where('status', 1)->orderBy('vgroup_id', 'asc')->get();
        foreach ($videos as $video) {
            $vi_sublinks[] = ['text' => $video->geVgroupName() . ' - ' . $video->geReciterName(), 'url' => route('video.show', ['slug' => $video->slug])];
        }
        $page_content[] = ['text' => trans('text.videos'), 'url' => route('video.index'), 'sublinks' => $vi_sublinks];
        $page['title'] = trans('text.sitemap') . ' | MP3 Quran';
        $page['description'] = trans('text.sitemap-description');
        // dd($page_content);
        return view('livewire.page.sitemap', compact('page', 'page_content'));
    }
}
