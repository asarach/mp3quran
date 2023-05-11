<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SpecialRewayaRequest;
use App\Repositories\SpecialRewaya\SpecialRewayaRepository;
use Illuminate\Http\Request;
use DB;
use Cviebrock\EloquentSluggable\Services\SlugService;
use App\Models\SpecialRewaya;

class SpecialRewayaController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(SpecialRewayaRepository $special_rewaya)
    {
        $this->special_rewaya = $special_rewaya;
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
        $special_rewayat = $this->special_rewaya->model->sortable(['id' => 'asc'])->filterColumns($columns);
        if ($trashed) {
            $special_rewayat = $special_rewayat->onlyTrashed();
        }
        $special_rewayat = $special_rewayat->paginate(24);

        return compact('special_rewayat');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SpecialRewayaRequest $request)
    {
        $input = $request->all();
        $input['slug'] = SlugService::createSlug(SpecialRewaya::class, 'slug', $input['name']);
        $special_rewaya = $this->special_rewaya->create($input);
        clearPostCache(['admin_home_stats']);
        return compact('special_rewaya');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $special_rewaya = $this->special_rewaya->model->findOrFail($id);

        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $name = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'special_rewaya-name')->where('item', $id)->first();
            if ($name) {
                $arr['name'] = $name->text;
            } else {
                $arr['name'] = '';
            }

            $translations[$language->locale] = $arr;
        }

        return compact('special_rewaya', 'translations');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SpecialRewayaRequest $request, $id)
    {
        $special_rewaya = $this->special_rewaya->model->findOrFail($id);

        $input = $request->all();
        if ($input['slug'] !== $special_rewaya->slug) {
            if (is_null($input['slug'])) {
                $input['slug'] = SlugService::createSlug(SpecialRewaya::class, 'slug', $input['name']);
            } else {
                $input['slug'] = SlugService::createSlug(SpecialRewaya::class, 'slug', $input['slug']);
            }
        }
        $special_rewaya = $this->special_rewaya->update($id, $input);
        clearPostCache(['admin_home_stats']);
        return compact('special_rewaya');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->special_rewaya->destroy($id, request('forced'));
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
        $result = $this->special_rewaya->model->withTrashed()->find($id)->restore();
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
        $special_rewaya = $this->special_rewaya->changeStatus($id, $status);
        $status = $special_rewaya->status;
        clearPostCache(['admin_home_stats']);
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
            $name = DB::table('translator_translations')->where('locale', $key)->where('group', 'special_rewaya-name')->where('item', $id)->first();
            if ($name) {
                DB::table('translator_translations')->where('id', $name->id)->update(array('text' => $translation['name']));
            } elseif ($translation['name']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'special_rewaya-name', 'item' =>  $id, 'text' => $translation['name']]);
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
                        $result = $this->special_rewaya->destroy($id, request('forced'));
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'restor':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $result = $this->special_rewaya->model->withTrashed()->find($id)->restore();
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'activate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $special_rewaya = $this->special_rewaya->changeStatus($id, 1);
                        $status = $special_rewaya->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $special_rewaya = $this->special_rewaya->changeStatus($id, 0);
                        $status = $special_rewaya->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            default:
                break;
        }
        clearPostCache(['admin_home_stats']);

        return compact('results');
    }
}
