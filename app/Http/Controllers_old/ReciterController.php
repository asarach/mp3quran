<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use LaravelLocalization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Repositories\Page\PageRepository;
use App\Repositories\Read\ReadRepository;
use App\Repositories\Sora\SoraRepository;
use CyrildeWit\EloquentViewable\Support\Period;
use App\Repositories\Reciter\ReciterRepository;


class ReciterController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(PageRepository $page, ReadRepository $read, ReciterRepository $reciter, SoraRepository $sora)
    {
        $this->reciter = $reciter;
        $this->read = $read;
        $this->sora = $sora;
        $this->page = $page;
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Reciter  $reciter
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reciters = $this->reciter->model
            ->where('status', 1)
            ->sortable(['name' => 'asc'])
            ->get();

        $path = request()->path();

        $seo_page = $this->page->model->where('name', 'reciters')->where('status', 1)->firstOrFail();


        $page_title = $seo_page->getLocaleTitle();

        $recitersb = $reciters->groupBy(function ($item, $key) {
            return mb_substr($item->getLocaleName(), 0, 1);
        })
            ->sortBy(function ($item, $key) {
                return $key;
            });
        $letters = $recitersb->forget('أ')->forget('إ')->keys();

        $page = 'reciters';


        $data = compact('page', 'letters', 'reciters', 'path', 'page_title');

        if (request()->ajax()) {
            return $data;
        }

        $params = get_params($data);
        $params['metas'] = getMetas([
            'seo_title' => $seo_page->getLocaleTitle(),
            'seo_description' => $seo_page->getLocaleDescription(),
            'seo_keywords' => $seo_page->getLocaleKeywords()
        ]);


        return view('layouts.app', $params);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Reciter  $reciter
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $read = $this->read->model
            ->where('slug', $slug)
            ->where('status', 1)
            ->firstOrFail();
        $active_read_id = $read->id;


        $query = request('q');

        $reciter = $read->reciter;

        $reciter_reads = [];
        foreach ($reciter->reads as $readItem) {
            $read_item = [];
            $read_item['read_id'] = $readItem->id;
            $read_item['itunes'] = $readItem->itunes;
            $read_item['slug'] = $readItem->slug;
            $read_item['torrent'] = $readItem->torrent;
            if ($readItem->radio) {
                $read_item['radio_url'] = $readItem->radio->url;
            } else {
                $read_item['radio_url'] = '';
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
                $soar_item['sora_audio'] = $readItem->getAudioUrl($sora->id);
                if ($query) {
                    if (strpos(make_query($soar_item['sora_name']), make_query($query)) !== false) {
                        $read_item['soar'][] = $soar_item;
                    }
                } else {
                    $read_item['soar'][] = $soar_item;
                }
            }
            if (!empty($read_item['soar'])) {
                $reciter_reads[] = $read_item;
            }
        }

        $page_title = $read->getLocaleTitle() . ' | MP3 Quran';

        $reciter = $reciter->toArray();


        $reciter['reads'] = $reciter_reads;
        $reciter['name'] = $read->getLocaleTitle();
        // dd($reciter);

        $page = 'reciter';
        $active_read = 0;
        $i = 0;
        foreach ($reciter_reads as $reciter_read) {
            if ($reciter_read['read_id'] == $active_read_id) {
                $active_read = $i;
            }
            $i++;
        }

        $data = compact('page', 'reciter_reads', 'reciter', 'page_title', 'active_read');

        if (request()->ajax()) {
            return $data;
        }


        $params = get_params($data);
        $params['metas'] = getMetas([
            'seo_title' => $page_title,
            'seo_description' => trans('read.description-' . $read->id),
            'seo_keywords' => trans('read.keywords-' . $read->id)
        ]);
        // dd($read->reciter_id);

        return view('layouts.app', $params);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Reciter  $reciter
     * @return \Illuminate\Http\Response
     */
    public function reportSora($read_slug, $item){
        try {
            $read = $this->read->model
            ->where('slug', $read_slug)
            ->where('status', 1)
            ->firstOrFail();

            $sora = DB::table('sura_read')->where('read_id', $read->id)->where('sura_id', $item)->first();

            if ($sora && $sora->report != '-1') {
                DB::table('sura_read')->where('read_id', $read->id)->where('sura_id', $item)->update(['report' => $sora->report + 1]);
                return ['success' => true];
            }
            
        } catch (\Throwable $th) {
            return ['success' => false];
        }
        return ['success' => false];

    }
    public function sora($read_slug, $item)
    {
        $read = $this->read->model
            ->where('slug', $read_slug)
            ->where('status', 1)
            ->firstOrFail();

        $soar_item = $read->soar()->where('id', $item)->orderBy('id', 'ASC')->withPivot(['duration', 'filename', 'report'])->firstOrFail();

        $sora = [];
        $sora['id'] = $soar_item->getNum() . '-' . $read->id;
        // $sora['id'] = $soar_item->id;
        $sora['read_id'] = $read->id;
        $sora['reciter'] = $read->getLocaleTitle();
        $sora['url'] = route('reciter.sora', ['slug' => $read->slug,'sora' => $soar_item->id]);
        $sora['rewaya'] = $read->rewaya->getLocaleName();
        $sora['description'] = $read->getLocaleShareDescription();
        $sora['title'] = $read->getLocaleShareTitle();
        $sora['num'] = $soar_item->getNum();
        $sora['name'] = $soar_item->getLocaleName();
        $sora['report'] = $soar_item->pivot->report;
        $sora['read_slug'] =  $read->slug;
        $sora['duration'] = $soar_item->pivot->duration;
        $sora['file'] = $read->getAudioUrl($soar_item->id);       

        $page_title = $read->getLocaleTitle() . ' - ' . $sora['name'] . ' | MP3 Quran';

        $page = 'sora';

        $data = compact('page', 'page_title', 'sora');

        if (request()->ajax()) {
            return $data;
        }


        $params = get_params($data);
        $params['metas'] = getMetas([
            'seo_title' => $page_title,
            'seo_description' => trans('read.description-' . $read->id),
            'seo_keywords' => trans('read.keywords-' . $read->id)
        ]);
        // dd($read->reciter_id);

        return view('layouts.app', $params);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Read  $read
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        $reciters = $this->reciter->model->where('status', 1);

        $reciters = $reciters->get();

        return compact('reciters');
    }
}
