<?php

namespace Mp3quran\Http\Controllers\Admin;

use Mp3quran\Http\Controllers\Controller;
use Mp3quran\Http\Requests\TvRequest;
use Mp3quran\Repositories\Tv\TvRepository;
use Mp3quran\Repositories\Mushaf\MushafRepository;
use Mp3quran\Repositories\Rewaya\RewayaRepository;
use Mp3quran\Repositories\Reciter\ReciterRepository;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Mp3quran\Tv;
use Illuminate\Http\Request;
use DB;

class TvController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(TvRepository $tv, ReciterRepository $reciter, RewayaRepository $rewaya, MushafRepository $mushaf)
    {
        $this->tv = $tv;
        $this->reciter = $reciter;
        $this->rewaya = $rewaya;
        $this->mushaf = $mushaf;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $columns = ['statu' => 'status', 'type' => 'type'];
        $trashed = request('trashed');

        $tvs = $this->tv->model
            ->sortable(['id' => 'desc'])
            ->filterColumns($columns);
        if ($trashed) {
            $tvs = $tvs->onlyTrashed();
        }
        $tvs = $tvs->paginate(24);

        $reciters = $this->reciter->list(['id', 'name']);
        $rewayat = $this->rewaya->list(['id', 'name']);
        $mushafs = $this->mushaf->list(['id', 'name']);

        return compact('tvs', 'reciters', 'rewayat', 'mushafs');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TvRequest $request)
    {
        $input = $request->all();
        $input['slug'] = SlugService::createSlug(Tv::class, 'slug', $input['name']);
        $tv = $this->tv->create($input);
        clearPostCache(['admin_home_stats']);
        return compact('tv');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $tv = $this->tv->model->findOrFail($id);

        $image = $tv->images()->first();
        if ($image) {
            $tv->old_image = ['file_name' => $image->id, 'file_path' => $image->getImage('tvs')];
        }

        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $title = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'tv-title')->where('item',  $id)->first();
            if ($title) {
                $arr['title'] = $title->text;
            } else {
                $arr['title'] = '';
            }

            $translations[$language->locale] = $arr;
        }

        $reciters = $this->reciter->list(['id', 'name']);
        $rewayat = $this->rewaya->list(['id', 'name']);
        $mushafs = $this->mushaf->list(['id', 'name']);

        return compact('tv', 'translations', 'reciters', 'rewayat', 'mushafs');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TvRequest $request, $id)
    {
        $tv = $this->tv->model->findOrFail($id);
        $input = $request->all();
        if ($input['slug'] !== $tv->slug) {
            if (is_null($input['slug'])) {
                $input['slug'] = SlugService::createSlug(Tv::class, 'slug', $input['name']);
            } else {
                $input['slug'] = SlugService::createSlug(Tv::class, 'slug', $input['slug']);
            }
        }

        $result = $this->tv->update($id, $input);
        return compact('tv');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->tv->destroy($id, request('forced'));
        clearPostCache(['admin_home_stats']);
        return compact('result');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restore($id)
    {
        $result = $this->tv->model->withTrashed()->find($id)->restore();
        clearPostCache(['admin_home_stats']);
        return compact('result');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function changeStatus($id, $status)
    {
        $tv = $this->tv->changeStatus($id, $status);
        $status = $tv->status;
        return compact('status');
    }    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function translations(Request $request, $id)
    {
        $input = $request->all();
        foreach ($input as $key => $translation) {
            $title = DB::table('translator_translations')->where('locale', $key)->where('group', 'tv-title')->where('item',  $id)->first();
            if ($title) {
                DB::table('translator_translations')->where('id', $title->id)->update(array('text' => $translation['title']));
            } elseif ($translation['title']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'tv-title', 'item' =>  $id, 'text' => $translation['title']]);
            }
        }
        $result = true;
        flushTrans();
        
        return compact('result');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function actions(Request $request)
    {
        $input = $request->all();
        $results = [];
        switch ($input['action']) {
            case 'delete':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $result = $this->tv->destroy($id, request('forced'));
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                clearPostCache(['admin_home_stats']);
                break;
            case 'restor':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $result = $this->tv->model->withTrashed()->find($id)->restore();
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                clearPostCache(['admin_home_stats']);
                break;
            case 'activate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $tv = $this->tv->changeStatus($id, 1);
                        $status = $tv->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $tv = $this->tv->changeStatus($id, 0);
                        $status = $tv->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            default:
                break;
        }

        return compact('results');
    }
}
