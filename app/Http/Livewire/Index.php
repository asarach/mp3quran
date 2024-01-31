<?php

namespace App\Http\Livewire;

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
use App\Repositories\Page\PageRepository;
use App\Repositories\Read\ReadRepository;
use App\Repositories\Rewaya\RewayaRepository;
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
            $cache_name = 'home_reads_index_rewaya' . $this->rewaya . '_type_' . $this->type . '_long_' .  LaravelLocalization::getCurrentLocale();
            // Cache::forget($cache_name);
            $data  =  Cache::rememberForever($cache_name, function () {
                return $this->getReads();
            });
        }
        
        return view('livewire.index', $data);
    }

    public function selectRewaya($rewaya)
    {
        $this->rewaya = $rewaya;
    }
    public function getReads()
    {
        $reads = Read::where('status', 1)
            ->whereNull('special_rewaya_id')
            ->groupBy('reciter_id')
            ->select('id', 'rewaya_id', 'slug', 'reciter_id');


        if ($this->rewaya) {
            $reads =  $reads->where('rewaya_id', $this->rewaya);
        }

        if ($this->query) {
            $search = new Search();
            $qids  = $search->search(make_query($this->query), 'reads_index');
            $reads =  $reads->whereIn('id', $qids);
        }
        // dd($reads->paginate(5));

        switch ($this->type) {
            case 'recent':
                $reads =  $reads->orderBy('created_at', 'desc')
                    ->take(25)->get();
                break;
            case 'popular':
                $reads =  $reads->orderByViews()
                    ->take(25)->get();
                break;
            case 'discover':
                $reads =  $reads->inRandomOrder()
                    ->take(25)->get();
                break;

            default:
                $reads =  $reads->get();
                $reads = $reads->groupBy(function ($item, $key) {
                    return mb_substr($item->getReciter(), 0, 1);
                })
                    ->sortBy(function ($item, $key) {
                        return $key;
                    });
                /* group arabeic A */
                if (isset($reads['ا'])) {
                    $A1 = $reads['ا'];
                    $A2 = [];
                    $A3 = [];
                    if (isset($reads['أ'])) {
                        $A2 = $reads['أ'];
                    }
                    if (isset($reads['إ'])) {
                        $A3 = $reads['إ'];
                    }
                    if (count($A1) > 0 or count($A2) > 0 or count($A3) > 0) {
                        $A1 = $A1->merge($A2);
                        $A1 = $A1->merge($A3);
                    }
                    $reads['ا'] = $A1;
                    $reads->forget('أ');
                    $reads->forget('إ');
                }
                /* end group arabeic A */

                $newReads = [];
                foreach ($reads->toArray() as $read_key => $read_group) {
                    $newReads[$read_key] = collect($read_group)->sortBy('title')->values();
                }
                $reads  = $newReads;

                break;
        }


        $rewayata = Rewaya::get();
        $rewayat = [];
        foreach ($rewayata as $rewaya) {
            $rewayat[] = ['id' => $rewaya->id,  'name' => $rewaya->getLocaleName()];
        }


        $path = request()->path();

        $page =Page::where('name', 'index')->where('status', 1)->firstOrFail();

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

      
        return compact('page', 'reads', 'rewayat', 'path',  'show_tadabor');
    }
}
