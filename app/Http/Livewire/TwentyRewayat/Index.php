<?php

namespace App\Http\Livewire\TwentyRewayat;

use App\Models\TwentyRead;
use App\Models\TwentyRewaya;
use App\Page;
use App\Read;
use App\Rewaya;
use App\Setting;
use Livewire\Component;
use App\Services\Search;
use Illuminate\Support\Facades\App;
use function GuzzleHttp\json_decode;
use Illuminate\Support\Facades\Cache;
use Waavi\Translation\Models\Language;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;


class Index extends Component
{

    public $query = NULL;
    public $rewaya = NULL;
    public $type = NULL;

    protected $listeners = ['selectRewaya'];

    public function render()
    {

        if ($this->query) {
            $data  =  $this->getReads();
        } else {
            $cache_name = 'twenty-rewayat_reads_index_rewaya' . $this->rewaya . '_type_' . $this->type . '_long_' .  LaravelLocalization::getCurrentLocale();
            Cache::forget($cache_name);
            $data  =  Cache::rememberForever($cache_name, function () {
                return $this->getReads();
            });
        }

        return view('livewire.twenty-rewayat.index', $data);
    }

    public function selectRewaya($rewaya)
    {
        $this->rewaya = $rewaya;
    }
    public function getReads()
    {
        $reads = TwentyRead::where('status', 1)
            // ->groupBy('reciter_id')
            ->select('id','title', 'twenty_rewaya_id', 'slug', 'reciter_id');

        if ($this->rewaya) {
            $reads =  $reads->where('twenty_rewaya_id', $this->rewaya);
        }

        if ($this->query) {
            $search = new Search();
            $qids  = $search->search(make_query($this->query), 'reads_index');
            $reads =  $reads->whereIn('id', $qids);
        }


        $reads = $reads->get();
        // dd($reads);
        $reads = $reads->groupBy(function ($item, $key) {
            return $item->getReciter();
        })
            ->sortBy(function ($item, $key) {
                return $key;
            });
        $newReads = [];
        foreach ($reads->toArray() as $read_key => $read_group) {
            $newReads[$read_key] = collect($read_group)->sortBy('title')->values();
        }
        $reads  = $newReads;



        $rewayata = Rewaya::get();
        $rewayat = [];
        foreach ($rewayata as $rewaya) {
            $rewayat[] = ['id' => $rewaya->id,  'name' => $rewaya->getLocaleName()];
        }


        $path = request()->path();

        $page = Page::where('name', 'index')->where('status', 1)->firstOrFail();

        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();

        $show_tadabor = Cache::rememberForever('show_tadabor_' . App::getLocale(), function () {
            try {
                $tadabor_languages = json_decode(Setting::where('key', 'tadabor_languages')->first()->value, true);
                $locale_id = Language::where('locale', App::getLocale())->first()->id;
                return $tadabor_languages[$locale_id];
            } catch (\Throwable $th) {
                return false;
            }
        });

        // dd($reads);
        return compact('page', 'reads', 'rewayat', 'path',  'show_tadabor');
    }
}
