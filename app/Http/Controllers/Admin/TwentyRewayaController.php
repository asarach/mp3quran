<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TwentyRewayaRequest;
use App\Repositories\TwentyRewaya\TwentyRewayaRepository;
use Illuminate\Http\Request;
use DB;
use Cviebrock\EloquentSluggable\Services\SlugService;
use App\Models\TwentyRewaya;

class TwentyRewayaController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(TwentyRewayaRepository $twenty_rewaya)
    {
        $this->twenty_rewaya = $twenty_rewaya;
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
        $twenty_rewayat = $this->twenty_rewaya->model->sortable(['id' => 'asc'])->filterColumns($columns);
        if ($trashed) {
            $twenty_rewayat = $twenty_rewayat->onlyTrashed();
        }
        $twenty_rewayat = $twenty_rewayat->paginate(24);

        return compact('twenty_rewayat');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TwentyRewayaRequest $request)
    {
        $input = $request->all();
        $input['slug'] = SlugService::createSlug(TwentyRewaya::class, 'slug', $input['name']);
        $twenty_rewaya = $this->twenty_rewaya->create($input);
        clearPostCache(['admin_home_stats']);
        return compact('twenty_rewaya');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $twenty_rewaya = $this->twenty_rewaya->model->findOrFail($id);

        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $name = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'twenty_rewaya-name')->where('item', $id)->first();
            if ($name) {
                $arr['name'] = $name->text;
            } else {
                $arr['name'] = '';
            }

            $translations[$language->locale] = $arr;
        }

        return compact('twenty_rewaya', 'translations');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TwentyRewayaRequest $request, $id)
    {
        $twenty_rewaya = $this->twenty_rewaya->model->findOrFail($id);

        $input = $request->all();
        if ($input['slug'] !== $twenty_rewaya->slug) {
            if (is_null($input['slug'])) {
                $input['slug'] = SlugService::createSlug(TwentyRewaya::class, 'slug', $input['name']);
            } else {
                $input['slug'] = SlugService::createSlug(TwentyRewaya::class, 'slug', $input['slug']);
            }
        }
        $twenty_rewaya = $this->twenty_rewaya->update($id, $input);
        clearPostCache(['admin_home_stats']);
        return compact('twenty_rewaya');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->twenty_rewaya->destroy($id, request('forced'));
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
        $result = $this->twenty_rewaya->model->withTrashed()->find($id)->restore();
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
        $twenty_rewaya = $this->twenty_rewaya->changeStatus($id, $status);
        $status = $twenty_rewaya->status;
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
            $name = DB::table('translator_translations')->where('locale', $key)->where('group', 'twenty_rewaya-name')->where('item', $id)->first();
            if ($name) {
                DB::table('translator_translations')->where('id', $name->id)->update(array('text' => $translation['name']));
            } elseif ($translation['name']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'twenty_rewaya-name', 'item' =>  $id, 'text' => $translation['name']]);
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
                        $result = $this->twenty_rewaya->destroy($id, request('forced'));
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'restor':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $result = $this->twenty_rewaya->model->withTrashed()->find($id)->restore();
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'activate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $twenty_rewaya = $this->twenty_rewaya->changeStatus($id, 1);
                        $status = $twenty_rewaya->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $twenty_rewaya = $this->twenty_rewaya->changeStatus($id, 0);
                        $status = $twenty_rewaya->status;
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
