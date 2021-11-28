<?php

namespace App\Http\Controllers;

use Auth;
use App\Setting;
use LaravelLocalization;
use Illuminate\Http\Request;
use App\Services\Search;
use App\Services\Upload;
use Illuminate\Support\Facades\App;
use function GuzzleHttp\json_decode;
use Illuminate\Support\Facades\Cache;

use Waavi\Translation\Models\Language;
use App\Repositories\Page\PageRepository;
use App\Repositories\Read\ReadRepository;
use App\Repositories\Media\MediaRepository;
use App\Repositories\Radio\RadioRepository;

use App\Repositories\Rewaya\RewayaRepository;
use App\Repositories\Reciter\ReciterRepository;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(PageRepository $page, Search $search, MediaRepository $media, Upload $upload, RadioRepository $radio, ReadRepository $read, ReciterRepository $reciter, RewayaRepository $rewaya)
    {
        $this->read = $read;
        $this->reciter = $reciter;
        $this->rewaya = $rewaya;
        $this->radio = $radio;
        $this->upload = $upload;
        $this->media = $media;
        $this->search = $search;
        $this->page = $page;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $query = request()->get('q');
        $rewaya = request()->get('r');
        $type = request()->get('t');

        $reads = $this->read->model
            ->where('status', 1)
            ->groupBy('reciter_id')
            ->select('id', 'rewaya_id', 'slug', 'reciter_id');


        if ($rewaya) {
            $reads =  $reads->where('rewaya_id', $rewaya);
        }

        if ($query) {
            $qids  = $this->search->search(make_query($query), 'reads_index');
            $reads =  $reads->whereIn('id', $qids);
        }


        switch ($type) {
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


        $rewayata = $this->rewaya->model->get();
        $rewayat = [];
        foreach ($rewayata as $rewaya) {
            $rewayat[] = ['id' => $rewaya->id,  'name' => $rewaya->getLocaleName()];
        }


        $path = request()->path();

        $seo_page = $this->page->model->where('name', 'index')->where('status', 1)->firstOrFail();

        $page_title = $seo_page->getLocaleTitle();

        $page = 'home';

        $show_tadabor = Cache::rememberForever('show_tadabor_' . App::getLocale(), function () {
            try {
                $tadabor_languages = json_decode(Setting::where('key','tadabor_languages')->first()->value, true);
                $locale_id = Language::where('locale', App::getLocale())->first()->id;
                return $tadabor_languages[$locale_id];
            } catch (\Throwable $th) {
                return false;
            }
        });

        $data = compact('page', 'reads', 'rewayat', 'path', 'page_title', 'show_tadabor');

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



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function language(Request $request)
    {
        $input = $request->all();
        $data = [];
        $data['file'] = $request->file('file');
        $data['file'] = $this->upload->image($data, $request->type);
        $data['type'] = $request->type;
        $media = $this->media->create($data);

        return response()->json(array('success' => true, 'image_id' => $media->id));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function adsClosed($id)
    {
        $closed_ads = request()->cookie('closed_ads');
        if (is_null($closed_ads)) {
            $closed_ads = [];
        } else {
            $closed_ads = json_decode($closed_ads);
        }
        $closed_ads[] = $id;

        return response()->json(array('success' => true))->withCookie(cookie('closed_ads', json_encode($closed_ads), 45000));
    }
}
