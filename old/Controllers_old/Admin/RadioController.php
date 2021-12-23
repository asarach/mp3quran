<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\RadioRequest;
use App\Repositories\Radio\RadioRepository;
use App\Repositories\Read\ReadRepository;
use App\Repositories\Rewaya\RewayaRepository;
use Cviebrock\EloquentSluggable\Services\SlugService;
use App\Radio;
use Illuminate\Http\Request;
use DB;
use App\Services\Search;


class RadioController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Search $search, RadioRepository $radio, ReadRepository $read,  RewayaRepository $rewaya)
    {
        $this->radio = $radio;
        $this->read = $read;
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
        $columns = ['statu' => 'status', 'rewaya' => 'radios.rewaya_id'];
        $trashed = request('trashed');
        $q= request('q');
        $radios = $this->radio->model
            ->with(['read.reciter:id,name', 'rewaya:id,name'])
            ->sortable(['id' => 'desc'])
            ->filterColumns($columns);
        if ($trashed) {
            $radios = $radios->onlyTrashed();
        }
        if ($q) {
            $ids = $this->search->search($q, 'radios_index');
            $radios = $radios->whereIn('id', $ids);
        }
        $radios = $radios->paginate(250);
        

        $reads = $this->read->list(['id', 'title']);
        $rewayat = $this->rewaya->list(['id', 'name']);

        return compact('radios', 'reads', 'rewayat');
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RadioRequest $request)
    {
        $input = $request->all();
        $input['slug'] = SlugService::createSlug(Radio::class, 'slug', $input['name']);
        $radio = $this->radio->create($input);
        clearPostCache(['admin_home_stats']);
        return compact('radio');
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $radio = $this->radio->model->with(['read:id,title', 'rewaya:id,name'])->findOrFail($id);

        $image = $radio->images()->first();
        if ($image) {
            $radio->old_image = ['file_name' => $image->id, 'file_path' => $image->getImage('radios')];
        }

        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $name = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'radio-name')->where('item',  $id)->first();
            if ($name) {
                $arr['name'] = $name->text;
            } else {
                $arr['name'] = '';
            }
            $translations[$language->locale] = $arr;
        }

        $reads = $this->read->list(['id', 'title']);
        $rewayat = $this->rewaya->list(['id', 'name']);


        return compact('radio', 'translations', 'reads', 'rewayat');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(RadioRequest $request, $id)
    {
        $radio = $this->radio->model->findOrFail($id);
        $input = $request->all();
        if ($input['slug'] !== $radio->slug) {
            if (is_null($input['slug'])) {
                $input['slug'] = SlugService::createSlug(Radio::class, 'slug', $input['name']);
            } else {
                $input['slug'] = SlugService::createSlug(Radio::class, 'slug', $input['slug']);
            }
        }

        $result = $this->radio->update($id, $input);
        return compact('radio');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->radio->destroy($id, request('forced'));
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
        $result = $this->radio->model->withTrashed()->find($id)->restore();
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
        $radio = $this->radio->changeStatus($id, $status);
        $status = $radio->status;
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
            $name = DB::table('translator_translations')->where('locale', $key)->where('group', 'radio-name')->where('item',  $id)->first();
            if ($name) {
                DB::table('translator_translations')->where('id', $name->id)->update(array('text' => $translation['name']));
            } elseif ($translation['name']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'radio-name', 'item' =>  $id, 'text' => $translation['name']]);
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
                        $result = $this->radio->destroy($id, request('forced'));
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
                        $result = $this->radio->model->withTrashed()->find($id)->restore();
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
                        $radio = $this->radio->changeStatus($id, 1);
                        $status = $radio->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $radio = $this->radio->changeStatus($id, 0);
                        $status = $radio->status;
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
