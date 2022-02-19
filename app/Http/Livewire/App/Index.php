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
        $page = $pageRepo->model->where('name', 'APP')->where('status', 1)->firstOrFail();

        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();
        $page->keywords = $page->getLocaleKeywords();

        $data = compact('page', 'apps', 'path');

        return view('livewire.app.index', $data);
    }
}
