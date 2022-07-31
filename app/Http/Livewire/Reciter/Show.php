<?php

namespace App\Http\Livewire\Reciter;

use App\Read;
use Livewire\Component;
use Illuminate\Support\Facades\Cache;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class Show extends Component
{
    public $slug;
    public $search = null;

    public function mount($slug)
    {
        $this->slug = $slug;
    }

    public function render()
    {
        $read = Read::where('slug', $this->slug)
            ->where('status', 1)
            ->firstOrFail();

        $active_read_id = $read->id;

        $reciter = $read->reciter;

        if ($this->search) {
            $reciter_reads = $this->getReciterReads($reciter, $read);
        } else {

            $cache_name = 'reciter_reads_index_read_' . $read->id . '_long_' .  LaravelLocalization::getCurrentLocale();
            // dd($cache_name);
            // Cache::forget($cache_name);
            $reciter_reads = Cache::rememberForever($cache_name, function () use ($reciter, $read) {
                return $this->getReciterReads($reciter, $read);
            });
        }


        $reciter = $reciter->toArray();

        $reciter['reads'] = $reciter_reads;
        $reciter['name'] = $read->getLocaleTitle();

        $page = 'reciter';
        $active_read = 0;
        $i = 0;
        foreach ($reciter_reads as $reciter_read) {
            if ($reciter_read['read_id'] == $active_read_id) {
                $active_read = $i;
            }
            $i++;
        }

        $len = count($reciter_reads[$active_read]['soar']);

        $soar_part_a = array_slice($reciter_reads[$active_read]['soar'], 0, $len / 2);
        $soar_part_b = array_slice($reciter_reads[$active_read]['soar'], $len / 2);
        //get page info
        $page = [
            'title' => $read->getSeoTitle($read->rewaya, $reciter['name']),
            'description' => $read->getDescriptionTitle($read->rewaya, $reciter['name']),
            'keywords' => trans('read.keywords-' . $read->id)
        ];

        $this->emit('changeDom');
        return view('livewire.reciter.show', compact('soar_part_a', 'soar_part_b', 'reciter_reads', 'reciter', 'active_read', 'read', 'page'));
    }
    public function preparword($q)
    {
        // $q = str_replace('أ', 'ا', $q);
        // $q = str_replace('إ', 'ا', $q);

        return $q;
    }
    public function getReciterReads($reciter, $read)
    {
        $query =  $this->preparword($this->search);
        $reciter_reads = [];
        foreach ($reciter->reads as $readItem) {
            $read_item = [];
            $read_item['read_id'] = $readItem->id;
            $read_item['itunes'] = $readItem->itunes;
            $read_item['slug'] = $readItem->slug;
            $read_item['torrent'] = $readItem->torrent;
            if ($readItem->radio) {
                $read_item['radio'] = $readItem->radio->id;
            } else {
                $read_item['radio'] = '';
            }


            $read_item['rewaya_name'] = $readItem->rewaya->getLocaleName();
            if ($readItem->mushaf) {
                $read_item['mushaf_name'] = ' - ' . $readItem->mushaf->getLocaleName();
            } else {
                $read_item['mushaf_name'] = '';
            }

            $read_item['share_title'] = $readItem->getLocaleShareTitle();
            $read_item['share_description'] = $readItem->getLocaleShareDescription();
            $read_item['share_url'] = route('reciter.show', ['slug' => $readItem->slug]);
            $read_item['soar'] = [];

            $soar = $readItem->soar()->orderBy('id', 'ASC')->withPivot(['duration', 'filename', 'report'])->get();
            foreach ($soar as $sora) {
                $soar_item = [];

                $soar_item['id'] = $sora->getNum() . '-' . $readItem->id;
                $soar_item['sora_id'] = $sora->id;
                $soar_item['sora_num'] = $sora->getNum();
                $soar_item['sora_name'] = $sora->getLocaleName();
                $soar_item['read_slug'] =  $read->slug;
                $soar_item['sora_report'] = $sora->pivot->report;
                $soar_item['sora_duration'] = $sora->pivot->duration;
                $soar_item['sora_link'] = route('reciter.sora', ['slug' => $read->slug, 'sora_id' => $sora->id]);
                $soar_item['sora_audio'] = $readItem->getAudioUrl($sora->id);

                $soar_item['share_url'] = route('reciter.sora', ['slug' => $read->slug, 'sora_id' => $sora->id]);
                $soar_item['share_title'] = $read->getLocaleShareTitle($sora->getLocaleName());
                $soar_item['share_description'] = $read->getLocaleShareDescription($sora->getLocaleName());
                if (!$query || ($query && strpos(make_query($soar_item['sora_name']), make_query($query)) !== false)) {
                    $soar_item['show'] = 'show';
                } else {
                    $soar_item['show'] = '';
                }
                $read_item['soar'][] = $soar_item;
            }
            // if (!empty($read_item['soar'])) {
            $reciter_reads[] = $read_item;
            // }
        }

        return $reciter_reads;
    }
}
