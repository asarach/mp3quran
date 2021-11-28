<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Tv\TvRepository;
use LaravelLocalization;
use CyrildeWit\EloquentViewable\Support\Period;
use App\Repositories\Page\PageRepository;
use Carbon\Carbon;

class TvController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(PageRepository $page, TvRepository $tv)
    {
        $this->tv = $tv;
        $this->page = $page;
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Tv  $tv
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tvs = $this->tv->model
        ->where('status', 1)
        ->sortable(['created_at' => 'desc'])
        ->paginate(30);

        
        $path = request()->path();
        $seo_page = $this->page->model->where('name', 'live')->where('status', 1)->firstOrFail();

        $page_title = $seo_page->getLocaleTitle();

        $page = 'tvs';

        $data = compact('page', 'tvs', 'path', 'page_title');

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
