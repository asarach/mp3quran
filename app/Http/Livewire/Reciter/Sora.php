<?php

namespace App\Http\Livewire\Reciter;

use App\Read;
use Livewire\Component;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

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
        $sora['url'] = route('reciter.sora', ['slug' => $read->slug, 'sora_id' => $soar_item->id]);
        $sora['rewaya'] = $read->rewaya->getLocaleName();
        $sora['description'] = $read->getLocaleShareDescription();
        $sora['title'] = $read->getLocaleShareTitle();
        $sora['num'] = $soar_item->getNum();
        $sora['name'] = $soar_item->getLocaleName();
        $sora['report'] = $soar_item->pivot->report;
        $sora['read_slug'] =  $read->slug;
        $sora['duration'] = $soar_item->pivot->duration;
        $sora['file'] = $read->getAudioUrl($soar_item->id);
        $sora['share_title'] = $read->getLocaleShareTitle();
        $sora['share_url'] = route('reciter.sora', ['slug' => $read->slug, 'sora_id' => $soar_item->id]);
        $sora['share_description'] = $read->getLocaleShareDescription();

        $page = [
            'title' => $soar_item->getSeoTitle($read->rewaya, $sora['reciter'], $sora['name']),
            'description' => $soar_item->getDescriptionTitle($read->rewaya, $sora['reciter'], $sora['name']),
            'keywords' => trans('read.keywords-' . $read->id)
        ];
        $verses = collect();
        // $verses = $this->getVerses($soar_item->id, $read->id);
        // dd(  $verses);
        return view('livewire.reciter.sora', compact('page', 'sora', 'read', 'verses'));
    }


    public function getVerses($sura, $read)
    {
        // dd($sura);
        // dd($read);
        $name = 'ayat_timing_soar_read_' . $read . '_sura_' . $sura;
        // Cache::forget($name);
        return Cache::rememberForever($name, function () use ($read,  $sura) {
            $data = DB::table('reads_timing')
                ->leftJoin('quran_pages', function ($join) {
                    $join->on('reads_timing.ayah', '=', 'quran_pages.ayah');
                    $join->on('reads_timing.sura_id', '=', 'quran_pages.sura_id');
                })
                ->where('reads_timing.read_id', $read)
                ->where('reads_timing.sura_id', $sura)
                ->select('reads_timing.ayah', 'quran_pages.polygon', 'reads_timing.start_time', 'reads_timing.end_time', 'quran_pages.x', 'quran_pages.y', DB::raw('CONCAT("https://www.mp3quran.net/api/quran_pages_svg/", quran_pages.page,".svg") as page'))
                ->get();
            return $data;
        });
    }
}
