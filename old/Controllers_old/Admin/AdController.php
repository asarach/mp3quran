<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdRequest;
use App\Repositories\Ad\AdRepository;
use Waavi\Translation\Repositories\LanguageRepository;
use Illuminate\Http\Request;
use DB;
use Carbon\Carbon;
use Cache;

class AdController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(AdRepository $ad, LanguageRepository $language)
    {
        $this->ad = $ad;
        $this->language = $language;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $columns = ['statu' => 'status'];
        $trashed = request('trashed');

        $ads = $this->ad->model
            ->sortable(['id' => 'desc'])
            ->filterColumns($columns);
        if ($trashed) {
            $ads = $ads->onlyTrashed();
        }
        $ads = $ads->paginate(24);

        $places = [];
        foreach (config('mp3quran.ads_places') as $key => $value) {
            $places[] = ['id' => $key, 'name' => $value];
        }

        $languages = $this->language->all();

        return compact('ads', 'places', 'languages');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AdRequest $request)
    {
        $input = $request->all();
        $ad = $this->ad->create($input);
        $this->clearCache();

        return compact('ad');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $ad = $this->ad->model->findOrFail($id);
        $ad->start_date = Carbon::parse($ad->start_date)->format('Y-m-d');
        $ad->end_date = Carbon::parse($ad->end_date)->format('Y-m-d');

        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $name = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'ad-name')->where('item',  $id)->first();
            if ($name) {
                $arr['name'] = $name->text;
            } else {
                $arr['name'] = '';
            }
            $translations[$language->locale] = $arr;
        }

        $image = $ad->images()->first();
        if ($image) {
            $ad->old_image = ['file_name' => $image->id, 'file_path' => $image->getImage('mpa')];
        }
        $places = [];

        foreach (config('mp3quran.ads_places') as $key => $value) {
            $places[] = ['id' => $key, 'name' => $value];
        }

        $languages = $this->language->all();

        return compact('ad', 'translations', 'places', 'languages');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AdRequest $request, $id)
    {
        $input = $request->all();
        $ad = $this->ad->update($id, $input);
        $this->clearCache();

        return compact('ad');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->ad->destroy($id, request('forced'));
        $this->clearCache();

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
        $result = $this->ad->model->withTrashed()->find($id)->restore();
        $this->clearCache();

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
        $ad = $this->ad->changeStatus($id, $status);
        $status = $ad->status;

        $this->clearCache();

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
            $name = DB::table('translator_translations')->where('locale', $key)->where('group', 'ad-name')->where('item',  $id)->first();
            if ($name) {
                DB::table('translator_translations')->where('id', $name->id)->update(array('text' => $translation['name']));
            } elseif ($translation['name']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'ad-name', 'item' =>  $id, 'text' => $translation['name']]);
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
                        $result = $this->ad->destroy($id, request('forced'));
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'restor':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $result = $this->ad->model->withTrashed()->find($id)->restore();
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'activate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $ad = $this->ad->changeStatus($id, 1);
                        $status = $ad->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $ad = $this->ad->changeStatus($id, 0);
                        $status = $ad->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            default:
                break;
        }
        $this->clearCache();

        return compact('results');
    }

    public function clearCache(){
        $languages = $this->language->all();
        foreach ($languages as $key => $language) {
            Cache::forget('all_ads_'. $language->locale);
        }
        return true;
    }
}
