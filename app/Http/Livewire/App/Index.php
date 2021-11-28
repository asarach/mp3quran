<?php

namespace App\Http\Livewire\App;

use Livewire\Component;
use App\Repositories\App\AppRepository;
use App\Repositories\Page\PageRepository;

class Index extends Component
{
    public function render(PageRepository $pageRepo, AppRepository $appRepo)
    {
        $apps = $appRepo->model
        ->where('status', 1)
        ->sortable(['order_num' => 'asc'])
        ->get();
   
        $path = request()->path();
        $seo_page = $pageRepo->model->where('name', 'APP')->where('status', 1)->firstOrFail();

        $page_title = $seo_page->getLocaleTitle();

        $page = 'apps';

        $metas = getMetas([
            'seo_title' => $seo_page->getLocaleTitle(),
            'seo_description' => $seo_page->getLocaleDescription(),
            'seo_keywords' => $seo_page->getLocaleKeywords()
        ]);

        $data = compact('metas','page', 'apps', 'path', 'page_title');


        return view('livewire.app.index', $data);
    }
}
