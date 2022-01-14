<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TafsirRequest;
use App\Repositories\Tafsir\TafsirRepository;
use App\Repositories\Rewaya\RewayaRepository;
use App\Tafsir;
use Illuminate\Http\Request;
use DB;
use App\Services\Search;

class TafsirController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Search $search, TafsirRepository $tafsir,  RewayaRepository $rewaya)
    {
        $this->tafsir = $tafsir;
        $this->rewaya = $rewaya;
        $this->search = $search;
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
        $q= request('q');
        $tafsirs = $this->tafsir->model
        ->sortable(['id' => 'desc'])->filterColumns($columns);
        if ($trashed) {
            $tafsirs = $tafsirs->onlyTrashed();
        }
        if ($q) {
            $ids = $this->search->search($q, 'tafsirs_index');
            $tafsirs = $tafsirs->whereIn('id', $ids);
        }
        $tafsirs = $tafsirs->paginate(250);

        return compact('tafsirs');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TafsirRequest $request)
    {
        $input = $request->all();
        $tafsir = $this->tafsir->create($input);
        clearPostCache(['admin_home_stats']);
        return compact('tafsir');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $tafsir = $this->tafsir->model->findOrFail($id);



        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $name = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'tafsir-name')->where('item', $id)->first();
            if ($name) {
                $arr['name'] = $name->text;
            } else {
                $arr['name'] = '';
            }
            $description = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'tafsir-description')->where('item', $id)->first();
            if ($description) {
                $arr['description'] = $description->text;
            } else {
                $arr['description'] = '';
            }

            $translations[$language->locale] = $arr;
        }

        return compact('tafsir', 'translations');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TafsirRequest $request, $id)
    {
        $tafsir = $this->tafsir->model->findOrFail($id);
        $input = $request->all();

        $result = $this->tafsir->update($id, $input);
        return compact('tafsir');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->tafsir->destroy($id, request('forced'));
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
        $result = $this->tafsir->model->withTrashed()->find($id)->restore();
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
        $tafsir = $this->tafsir->changeStatus($id, $status);
        $status = $tafsir->status;
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
            $name = DB::table('translator_translations')->where('locale', $key)->where('group', 'tafsir-name')->where('item',  $id)->first();
            if ($name) {
                DB::table('translator_translations')->where('id', $name->id)->update(array('text' => $translation['name']));
            } elseif ($translation['name']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'tafsir-name', 'item' =>  $id, 'text' => $translation['name']]);
            }
            $description = DB::table('translator_translations')->where('locale', $key)->where('group', 'tafsir-description')->where('item',  $id)->first();
            if ($description) {
                DB::table('translator_translations')->where('id', $description->id)->update(array('text' => $translation['description']));
            } elseif ($translation['description']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'tafsir-description', 'item' =>  $id, 'text' => $translation['description']]);
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
                        $result = $this->tafsir->destroy($id, request('forced'));
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
                        $result = $this->tafsir->model->withTrashed()->find($id)->restore();
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
                        $tafsir = $this->tafsir->changeStatus($id, 1);
                        $status = $tafsir->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $tafsir = $this->tafsir->changeStatus($id, 0);
                        $status = $tafsir->status;
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
