<?php

namespace Mp3quran\Http\Controllers\Admin;

use DB;
use Mp3quran\Tadabor;
use Illuminate\Http\Request;
use Mp3quran\Services\Search;
use Illuminate\Support\Facades\Cache;
use Mp3quran\Http\Controllers\Controller;
use Mp3quran\Http\Requests\TadaborRequest;
use Mp3quran\Repositories\Sora\SoraRepository;
use Mp3quran\Repositories\Rewaya\RewayaRepository;
use Mp3quran\Repositories\Reciter\ReciterRepository;
use Mp3quran\Repositories\Tadabor\TadaborRepository;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Waavi\Translation\Repositories\LanguageRepository;

use Mp3quran\Repositories\Setting\SettingRepository;

use function GuzzleHttp\json_decode;

class TadaborController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Search $search,SettingRepository $setting,  LanguageRepository $language, TadaborRepository $tadabor,  ReciterRepository $reciter, SoraRepository $sora,   RewayaRepository $rewaya)
    {
        $this->tadabor = $tadabor;
        $this->reciter = $reciter;
        $this->sora = $sora;
        $this->setting = $setting;
        $this->language = $language;
        $this->search = $search;
        $this->rewaya = $rewaya;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $columns = ['statu' => 'status', 'rewaya' => 'tadabors.rewaya_id', 'sora' => 'tadabors.sura_id', 'reciter' => 'tadabors.reciter_id'];
        $trashed = request('trashed');
        $q = request('q');
        $tadabors = $this->tadabor->model
            ->with(['reciter:id,name', 'sora:id,name', 'rewaya:id,name'])
            ->sortable(['id' => 'desc'])
            ->filterColumns($columns);
        if ($trashed) {
            $tadabors = $tadabors->onlyTrashed();
        }
        if ($q) {
            $ids = $this->search->search($q, 'tadabors_index');
            $tadabors = $tadabors->whereIn('id', $ids);
        }
        $tadabors = $tadabors->paginate(250);


        $reciters = $this->reciter->list(['id', 'name']);
        $rewayat = $this->rewaya->list(['id', 'name']);
        $soar = $this->sora->list(['id', 'name']);
        $languages = $this->language->all();
        try {
            $tadabor_languages = json_decode($this->setting->model->where('key','tadabor_languages')->first()->value);
        } catch (\Throwable $th) {
            $tadabor_languages = [];
        }
        

        return compact('tadabors', 'reciters', 'soar', 'rewayat', 'languages', 'tadabor_languages');
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TadaborRequest $request)
    {
        $input = $request->all();
        $tadabor = $this->tadabor->create($input);
        clearPostCache(['admin_home_stats']);
        return compact('tadabor');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeLanguages(Request $request)
    {
        $input = $request->all();


        $settings = [];
        //remove cache
        $languages = $this->language->all();
        foreach ($languages as $key => $language) {
            if (isset($input['languages'][$language->id]) && $input['languages'][$language->id]) {
                $settings[$language->id] = true;
            } else {
                $settings[$language->id] = false;
            }
            Cache::forget('show_tadabor_' . $language->locale);
        }
        //update settings 
        $json = json_encode($settings);

        $result = $this->setting->update(['tadabor_languages' => $json]);
        
        return compact('result');
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $tadabor = $this->tadabor->model->with(['reciter:id,name', 'sora:id,name', 'rewaya:id,name'])->findOrFail($id);

        $image = $tadabor->images()->first();
        if ($image) {
            $tadabor->old_image = ['file_name' => $image->id, 'file_path' => $image->getImage('tadabors')];
        }
        $tadabor->html_content = html_entity_decode($tadabor->text);
        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $name = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'tadabor-name')->where('item',  $id)->first();
            if ($name) {
                $arr['name'] = $name->text;
            } else {
                $arr['name'] = '';
            }
            $translations[$language->locale] = $arr;
        }

        $reciters = $this->reciter->list(['id', 'name']);
        $rewayat = $this->rewaya->list(['id', 'name']);
        $soar = $this->sora->list(['id', 'name']);


        return compact('tadabor', 'translations', 'reciters', 'soar', 'rewayat');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TadaborRequest $request, $id)
    {
        $tadabor = $this->tadabor->model->findOrFail($id);
        $input = $request->all();
        $result = $this->tadabor->update($id, $input);
        return compact('tadabor');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->tadabor->destroy($id, request('forced'));
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
        $result = $this->tadabor->model->withTrashed()->find($id)->restore();
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
        $tadabor = $this->tadabor->changeStatus($id, $status);
        $status = $tadabor->status;
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
            $name = DB::table('translator_translations')->where('locale', $key)->where('group', 'tadabor-name')->where('item',  $id)->first();
            if ($name) {
                DB::table('translator_translations')->where('id', $name->id)->update(array('text' => $translation['name']));
            } elseif ($translation['name']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'tadabor-name', 'item' =>  $id, 'text' => $translation['name']]);
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
                        $result = $this->tadabor->destroy($id, request('forced'));
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
                        $result = $this->tadabor->model->withTrashed()->find($id)->restore();
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
                        $tadabor = $this->tadabor->changeStatus($id, 1);
                        $status = $tadabor->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $tadabor = $this->tadabor->changeStatus($id, 0);
                        $status = $tadabor->status;
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
