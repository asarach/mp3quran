<?php

namespace Mp3quran\Http\Controllers\Admin;

use Mp3quran\Http\Controllers\Controller;
use Mp3quran\Http\Requests\RewayaRequest;
use Mp3quran\Repositories\Rewaya\RewayaRepository;
use Illuminate\Http\Request;
use DB;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Mp3quran\Rewaya;

class RewayaController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(RewayaRepository $rewaya)
    {
        $this->rewaya = $rewaya;
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
        $rewayat = $this->rewaya->model->sortable(['id' => 'asc'])->filterColumns($columns);
        if ($trashed) {
            $rewayat = $rewayat->onlyTrashed();
        }
        $rewayat = $rewayat->paginate(24);

        return compact('rewayat');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RewayaRequest $request)
    {
        $input = $request->all();
        $input['slug'] = SlugService::createSlug(Rewaya::class, 'slug', $input['name']);
        $rewaya = $this->rewaya->create($input);
        clearPostCache(['admin_home_stats']);
        return compact('rewaya');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $rewaya = $this->rewaya->model->findOrFail($id);

        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $name = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'rewaya-name')->where('item', $id)->first();
            if ($name) {
                $arr['name'] = $name->text;
            } else {
                $arr['name'] = '';
            }

            $translations[$language->locale] = $arr;
        }

        return compact('rewaya', 'translations');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(RewayaRequest $request, $id)
    {
        $rewaya = $this->rewaya->model->findOrFail($id);

        $input = $request->all();
        if ($input['slug'] !== $rewaya->slug) {
            if (is_null($input['slug'])) {
                $input['slug'] = SlugService::createSlug(Rewaya::class, 'slug', $input['name']);
            } else {
                $input['slug'] = SlugService::createSlug(Rewaya::class, 'slug', $input['slug']);
            }
        }
        $rewaya = $this->rewaya->update($id, $input);
        clearPostCache(['admin_home_stats']);
        return compact('rewaya');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->rewaya->destroy($id, request('forced'));
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
        $result = $this->rewaya->model->withTrashed()->find($id)->restore();
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
        $rewaya = $this->rewaya->changeStatus($id, $status);
        $status = $rewaya->status;
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
            $name = DB::table('translator_translations')->where('locale', $key)->where('group', 'rewaya-name')->where('item', $id)->first();
            if ($name) {
                DB::table('translator_translations')->where('id', $name->id)->update(array('text' => $translation['name']));
            } elseif ($translation['name']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'rewaya-name', 'item' =>  $id, 'text' => $translation['name']]);
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
                        $result = $this->rewaya->destroy($id, request('forced'));
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'restor':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $result = $this->rewaya->model->withTrashed()->find($id)->restore();
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'activate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $rewaya = $this->rewaya->changeStatus($id, 1);
                        $status = $rewaya->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $rewaya = $this->rewaya->changeStatus($id, 0);
                        $status = $rewaya->status;
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
