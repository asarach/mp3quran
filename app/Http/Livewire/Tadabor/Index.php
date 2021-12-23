<?php

namespace App\Http\Livewire\Tadabor;

use Livewire\Component;
use App\Sora;
use App\Tadabor;
use App\Page;

class Index extends Component
{
    public $search = null;
    public $selected_sora = '';
    public $limitPerPage = 10;
    public $sora;

    protected $queryString = ['sora'];


    public function render()
    {
        $columns = ['s' => 'tadabors.sura_id'];
        if ($this->sora) {
            $this->selected_sora = Sora::where('id', $this->sora)->where('status', 1)->first()->name;
        }else{
            $this->selected_sora = trans('text.all');
        }
       
        if ($this->sora) {
            $items =  Tadabor::where('sura_id', $this->sora )->paginate($this->limitPerPage);
        }else{
            $items =  Tadabor::paginate($this->limitPerPage);
        }

        $soar_ids = Tadabor::groupBy('sura_id')->get()->pluck('sura_id');
        $soar = Sora::whereIn('id', $soar_ids)->where('status', 1)->orderBy('num', 'asc')->get();

        $page = Page::where('name', 'tadabor')->where('status', 1)->firstOrFail();

        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();
        $page->keywords = $page->getLocaleKeywords();
        

        return view('livewire.tadabor.index', compact('page', 'items', 'soar'));
    }
    public function loadMore()
    {
        $this->limitPerPage = $this->limitPerPage + 6;
    }
}
