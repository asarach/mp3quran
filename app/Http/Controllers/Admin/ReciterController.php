<?php

namespace Mp3quran\Http\Controllers\Admin;

use Mp3quran\Http\Controllers\Controller;
use Mp3quran\Http\Requests\ReciterRequest;
use Mp3quran\Repositories\Reciter\ReciterRepository;
use Mp3quran\Repositories\Rewaya\RewayaRepository;
use Mp3quran\Reciter;
use Illuminate\Http\Request;
use DB;
use Mp3quran\Services\Search;

class ReciterController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Search $search, ReciterRepository $reciter,  RewayaRepository $rewaya)
    {
        $this->reciter = $reciter;
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
        $reciters = $this->reciter->model
        ->sortable(['id' => 'desc'])->filterColumns($columns);
        if ($trashed) {
            $reciters = $reciters->onlyTrashed();
        }
        if ($q) {
            $ids = $this->search->search($q, 'reciters_index');
            $reciters = $reciters->whereIn('id', $ids);
        }
        $reciters = $reciters->paginate(250);
    
        return compact('reciters');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ReciterRequest $request)
    {
        $input = $request->all();
        $reciter = $this->reciter->create($input);
        clearPostCache(['admin_home_stats']);
        return compact('reciter');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $reciter = $this->reciter->model->findOrFail($id);



        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $name = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'reciter-name')->where('item', $id)->first();
            if ($name) {
                $arr['name'] = $name->text;
            } else {
                $arr['name'] = '';
            }
            $description = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'reciter-description')->where('item', $id)->first();
            if ($description) {
                $arr['description'] = $description->text;
            } else {
                $arr['description'] = '';
            }

            $keywords = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'reciter-keywords')->where('item',  $id)->first();
            if ($keywords) {
                $arr['keywords'] = $keywords->text;
            } else {
                $arr['keywords'] = '';
            }
            $translations[$language->locale] = $arr;
        }

        return compact('reciter', 'translations');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ReciterRequest $request, $id)
    {
        $reciter = $this->reciter->model->findOrFail($id);
        $input = $request->all();

        $result = $this->reciter->update($id, $input);
        return compact('reciter');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->reciter->destroy($id, request('forced'));
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
        $result = $this->reciter->model->withTrashed()->find($id)->restore();
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
        $reciter = $this->reciter->changeStatus($id, $status);
        $status = $reciter->status;
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
            $name = DB::table('translator_translations')->where('locale', $key)->where('group', 'reciter-name')->where('item',  $id)->first();
            if ($name) {
                DB::table('translator_translations')->where('id', $name->id)->update(array('text' => $translation['name']));
            } elseif ($translation['name']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'reciter-name', 'item' =>  $id, 'text' => $translation['name']]);
            }
            $description = DB::table('translator_translations')->where('locale', $key)->where('group', 'reciter-description')->where('item',  $id)->first();
            if ($description) {
                DB::table('translator_translations')->where('id', $description->id)->update(array('text' => $translation['description']));
            } elseif ($translation['description']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'reciter-description', 'item' =>  $id, 'text' => $translation['description']]);
            }

            $keywords = DB::table('translator_translations')->where('locale', $key)->where('group', 'reciter-keywords')->where('item',  $id)->first();
            if ($keywords) {
                DB::table('translator_translations')->where('id', $keywords->id)->update(array('text' => $translation['keywords']));
            } elseif ($translation['keywords']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'reciter-keywords', 'item' =>  $id, 'text' => $translation['keywords']]);
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
                        $result = $this->reciter->destroy($id, request('forced'));
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
                        $result = $this->reciter->model->withTrashed()->find($id)->restore();
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
                        $reciter = $this->reciter->changeStatus($id, 1);
                        $status = $reciter->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $reciter = $this->reciter->changeStatus($id, 0);
                        $status = $reciter->status;
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
