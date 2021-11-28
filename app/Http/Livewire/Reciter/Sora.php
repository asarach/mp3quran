<?php

namespace App\Http\Livewire\Reciter;

use Livewire\Component;
use App\Read;

class Sora extends Component
{
    public $slug;
    public $sora_id;
    public $search = null;

    public function mount($slug, $sora_id)
    {
        $this->slug = $slug;
        $this->sora_id = $sora_id;
    }

    public function render()
    {

        $read = Read::where('slug', $this->slug)
            ->where('status', 1)
            ->firstOrFail();

        $soar_item = $read->soar()->where('id', $this->sora_id)->orderBy('id', 'ASC')->withPivot(['duration', 'filename', 'report'])->firstOrFail();

        $sora = [];
        $sora['id'] = $soar_item->getNum() . '-' . $read->id;
        // $sora['id'] = $soar_item->id;
        $sora['read_id'] = $read->id;
        $sora['sora_id'] = $soar_item->id;
        $sora['reciter'] = $read->getLocaleTitle();
        $sora['url'] = route('reciter.sora', ['slug' => $read->slug,'sora_id' => $soar_item->id]);
        $sora['rewaya'] = $read->rewaya->getLocaleName();
        $sora['description'] = $read->getLocaleShareDescription();
        $sora['title'] = $read->getLocaleShareTitle();
        $sora['num'] = $soar_item->getNum();
        $sora['name'] = $soar_item->getLocaleName();
        $sora['report'] = $soar_item->pivot->report;
        $sora['read_slug'] =  $read->slug;
        $sora['duration'] = $soar_item->pivot->duration;
        $sora['file'] = $read->getAudioUrl($soar_item->id);       

        $page = [
            'title' => $read->getLocaleTitle() . ' - ' . $sora['name'] . ' | MP3 Quran',
            'description' => trans('read.description-' . $read->id),
            'keywords' => trans('read.keywords-' . $read->id)
        ];

        // dd($sora);

        return view('livewire.reciter.sora', compact('page', 'sora', 'read'));
    }
}
