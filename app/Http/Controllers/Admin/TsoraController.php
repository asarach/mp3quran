<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TsoraRequest;
use App\Repositories\Tsora\TsoraRepository;
use App\Repositories\Rewaya\RewayaRepository;
use App\Tsora;
use Illuminate\Http\Request;
use DB;
use App\Services\Search;

class TsoraController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Search $search, TsoraRepository $tsora,  RewayaRepository $rewaya)
    {
        $this->tsora = $tsora;
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
        $tsoras = $this->tsora->model
        ->sortable(['id' => 'desc'])->filterColumns($columns);
        if ($trashed) {
            $tsoras = $tsoras->onlyTrashed();
        }
        if ($q) {
            $ids = $this->search->search($q, 'tsoras_index');
            $tsoras = $tsoras->whereIn('id', $ids);
        }
        $tsoras = $tsoras->paginate(250);

        return compact('tsoras');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TsoraRequest $request)
    {
        $input = $request->all();
        $tsora = $this->tsora->create($input);
        clearPostCache(['admin_home_stats']);
        return compact('tsora');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $tsora = $this->tsora->model->findOrFail($id);



        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $name = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'tsora-name')->where('item', $id)->first();
            if ($name) {
                $arr['name'] = $name->text;
            } else {
                $arr['name'] = '';
            }
            $description = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'tsora-description')->where('item', $id)->first();
            if ($description) {
                $arr['description'] = $description->text;
            } else {
                $arr['description'] = '';
            }

            $keywords = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'tsora-keywords')->where('item',  $id)->first();
            if ($keywords) {
                $arr['keywords'] = $keywords->text;
            } else {
                $arr['keywords'] = '';
            }
            $translations[$language->locale] = $arr;
        }

        return compact('tsora', 'translations');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TsoraRequest $request, $id)
    {
        $tsora = $this->tsora->model->findOrFail($id);
        $input = $request->all();

        $result = $this->tsora->update($id, $input);
        return compact('tsora');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->tsora->destroy($id, request('forced'));
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
        $result = $this->tsora->model->withTrashed()->find($id)->restore();
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
        $tsora = $this->tsora->changeStatus($id, $status);
        $status = $tsora->status;
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
            $name = DB::table('translator_translations')->where('locale', $key)->where('group', 'tsora-name')->where('item',  $id)->first();
            if ($name) {
                DB::table('translator_translations')->where('id', $name->id)->update(array('text' => $translation['name']));
            } elseif ($translation['name']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'tsora-name', 'item' =>  $id, 'text' => $translation['name']]);
            }
            $description = DB::table('translator_translations')->where('locale', $key)->where('group', 'tsora-description')->where('item',  $id)->first();
            if ($description) {
                DB::table('translator_translations')->where('id', $description->id)->update(array('text' => $translation['description']));
            } elseif ($translation['description']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'tsora-description', 'item' =>  $id, 'text' => $translation['description']]);
            }

            $keywords = DB::table('translator_translations')->where('locale', $key)->where('group', 'tsora-keywords')->where('item',  $id)->first();
            if ($keywords) {
                DB::table('translator_translations')->where('id', $keywords->id)->update(array('text' => $translation['keywords']));
            } elseif ($translation['keywords']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'tsora-keywords', 'item' =>  $id, 'text' => $translation['keywords']]);
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
                        $result = $this->tsora->destroy($id, request('forced'));
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
                        $result = $this->tsora->model->withTrashed()->find($id)->restore();
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
                        $tsora = $this->tsora->changeStatus($id, 1);
                        $status = $tsora->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $tsora = $this->tsora->changeStatus($id, 0);
                        $status = $tsora->status;
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