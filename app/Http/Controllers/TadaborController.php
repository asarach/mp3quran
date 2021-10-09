<?php

namespace Mp3quran\Http\Controllers;

use Mp3quran\Tadabor;
use Mp3quran\Http\Controllers\Controller;
use Mp3quran\Repositories\Page\PageRepository;
use Mp3quran\Repositories\Read\ReadRepository;
use Mp3quran\Repositories\Sora\SoraRepository;
use Mp3quran\Repositories\Reciter\ReciterRepository;

class TadaborController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Tadabor $tadabor,  PageRepository $page, ReadRepository $read, ReciterRepository $reciter, SoraRepository $sora)
    {
        $this->reciter = $reciter;
        $this->read = $read;
        $this->tadabor = $tadabor;
        $this->sora = $sora;
        $this->page = $page;
    }

    public function index()
    {
        $columns = ['s' => 'tadabors.sura_id'];

        $path = request()->path();
        $seo_page = $this->page->model->where('name', 'tadabor')->where('status', 1)->firstOrFail();
        $page_title = $seo_page->getLocaleTitle();
        if (request('s') == 'all') {
            $items =  $this->tadabor->paginate(10);
        } else {
            $items =  $this->tadabor->filterColumns($columns)->paginate(10);
        }

        $soar_ids = $this->tadabor->groupBy('sura_id')->get()->pluck('sura_id');
        $soar = $this->sora->model->whereIn('id',$soar_ids)->where('status', 1)->orderBy('num', 'asc')->get();
        
        $page = 'tadabors';
        $data = compact('page', 'items', 'path', 'page_title', 'soar');

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
    public function show($id)
    {
        $path = request()->path();
        $seo_page = $this->page->model->where('name', 'tadabor')->where('status', 1)->firstOrFail();
        $page_title = $seo_page->getLocaleTitle();

        $item =  $this->tadabor->find($id);

        $page = 'tadabor';
        $data = compact('page','item' ,'path', 'page_title');

        if (request()->ajax()) {
            return $data;
        }

        $params = get_params($data);
        $params['metas'] = getMetas([
            'seo_title' => $seo_page->getLocaleTitle(),
            'seo_description' => $seo_page->getLocaleDescription(),
            'image' => $item->image_url,
            'seo_keywords' => $seo_page->getLocaleKeywords()
        ]);

        return view('layouts.app', $params);
    }
}
