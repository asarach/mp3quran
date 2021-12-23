<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\App\AppRepository;
use App\Repositories\Page\PageRepository;

class AppController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(PageRepository $page, AppRepository $app)
    {
        $this->app = $app;
        $this->page = $page;
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\App  $app
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $apps = $this->app->model
        ->where('status', 1)
        ->sortable(['order_num' => 'asc'])
        ->get();
        //dd($apps->toArray());
   
        $path = request()->path();
        $seo_page = $this->page->model->where('name', 'APP')->where('status', 1)->firstOrFail();

        $page_title = $seo_page->getLocaleTitle();

        $page = 'apps';

        $data = compact('page', 'apps', 'path', 'page_title');

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
