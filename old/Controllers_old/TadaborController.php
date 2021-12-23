<?php

namespace App\Http\Controllers;

use App\Tadabor;
use App\Http\Controllers\Controller;
use App\Repositories\Page\PageRepository;
use App\Repositories\Read\ReadRepository;
use App\Repositories\Sora\SoraRepository;
use App\Repositories\Reciter\ReciterRepository;

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
        $soar = $this->sora->model->whereIn('id', $soar_ids)->where('status', 1)->orderBy('num', 'asc')->get();

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
        $data = compact('page', 'item', 'path', 'page_title');

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


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function item()
    {
        $item =  $this->tadabor->find(request('id'));

        $item = [
            'id' =>  'tb' . $item->id,
            'read_id' => 'read_id',
            'sora_id' => 'sora_id',
            'num' => $item->id,
            'name' => $item->getLocaleTitle(),
            'rewaya' => $item->getRewayaName(),
            'reciter' => $item->reciter->getLocaleName(),
            'read_slug' => $item->slug,
            'type' => 'item',
            'url' => 'url',
            'share_url' => route('tadabor.show', ['id' => $item->id]),
            'share_description' => $item->getLocaleShareDescription(),
            'description' => $item->getLocaleShareDescription(),
            'share_title' => $item->getLocaleShareTitle(),
            'file' => $item->audio_url,
        ];

        return  $item;
    }
}
