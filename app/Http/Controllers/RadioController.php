<?php

namespace Mp3quran\Http\Controllers;

use Illuminate\Http\Request;
use Mp3quran\Repositories\Radio\RadioRepository;
use Mp3quran\Repositories\Rewaya\RewayaRepository;
use Mp3quran\Repositories\Page\PageRepository;
use LaravelLocalization;
use CyrildeWit\EloquentViewable\Support\Period;
use Carbon\Carbon;

class RadioController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(PageRepository $page, RadioRepository $radio, RewayaRepository $rewaya)
    {
        $this->radio = $radio;
        $this->rewaya = $rewaya;
        $this->page = $page;
    }

    /**
     * Display the specified resource.
     *
     * @param  \Mp3quran\Radio  $radio
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rewaya = request()->get('r');
        
        $radios = $this->radio->model
            ->where('status', 1);
        if ($rewaya) {
            $radios =  $radios->where('rewaya_id', $rewaya);
        }

        $radios =  $radios->get()->toArray();
        // dd($radios);
        $radios = collect($radios)->sortBy('sort_name')->values();
       

        $rewayata = $this->rewaya->model->get();
        $rewayat = [];
        foreach ($rewayata as $rewaya) {
            $rewayat[] = ['id' => $rewaya->id,  'name' => $rewaya->getLocaleName()];
        }

        $path = request()->path();
        $seo_page = $this->page->model->where('name', 'radio')->where('status', 1)->firstOrFail();

        $page_title = $seo_page->getLocaleTitle();

        $page = 'radios';
       // dd($radios);

        $data = compact('page', 'radios', 'rewayat', 'path', 'page_title');

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
}
