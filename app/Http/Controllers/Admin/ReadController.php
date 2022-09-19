<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ReadRequest;
use App\Repositories\Read\ReadRepository;
use App\Repositories\Mushaf\MushafRepository;
use App\Repositories\Rewaya\RewayaRepository;
use App\Repositories\Server\ServerRepository;
use App\Repositories\Sora\SoraRepository;
use App\Repositories\Reciter\ReciterRepository;
use Illuminate\Http\Request;
use App\Read;
use DB;
use App\Services\Search;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Lang;

class ReadController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Search $search, ReadRepository $read, ReciterRepository $reciter, SoraRepository $sora, ServerRepository $server, RewayaRepository $rewaya, MushafRepository $mushaf)
    {
        $this->read = $read;
        $this->reciter = $reciter;
        $this->sora = $sora;
        $this->rewaya = $rewaya;
        $this->server = $server;
        $this->search = $search;
        $this->mushaf = $mushaf;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $columns = ['statu' => 'reads.status', 'rewaya' => 'reads.rewaya_id', 'mushaf' => 'reads.mushaf_id', 'reciter' => 'reads.reciter_id'];
        $trashed = request('trashed');
        $q = request('q');
        $reads = $this->read->model
            ->with(['reciter:id,name', 'rewaya:id,name', 'mushaf:id,name'])
            ->sortable(['id' => 'desc'])
            ->filterColumns($columns);
        if ($trashed) {
            $reads = $reads->onlyTrashed();
        }
        if ($q) {
            $ids = $this->search->search($q, 'reads_index');
            $reads = $reads->whereIn('id', $ids);
        }
        $reads = $reads->paginate(250);

        $reciters = $this->reciter->list(['id', 'name']);
        $rewayat = $this->rewaya->list(['id', 'name']);
        $servers = $this->server->list(['id', 'name']);
        $mushafs = $this->mushaf->list(['id', 'name']);

        return compact('reads', 'reciters', 'rewayat', 'mushafs', 'servers');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $reciters = $this->reciter->list(['id', 'name']);
        $rewayat = $this->rewaya->list(['id', 'name']);
        $mushafs = $this->mushaf->list(['id', 'name']);
        $servers = $this->server->list(['id', 'name']);
        $soar = $this->sora->list(['id', 'name']);

        $old_soar = [];
        $report_soar = [];

        return compact('reciters', 'report_soar', 'old_soar', 'rewayat', 'mushafs', 'soar', 'servers');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ReadRequest $request)
    {
        $input = $request->all();
        //$input['slug'] = SlugService::createSlug(Read::class, 'slug', $input['title']);

        $soar = [];
        foreach ($input['soar'] as $key =>  $sora) {
            if ($sora) {
                $soar[] = $key;
            }
        }
        $input['soar'] = $soar;

        $read = $this->read->create($input);
        clearPostCache(['admin_home_stats']);

        return compact('read');
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $read = $this->read->model->with(['soar:id,name', 'reciter:id,name', 'rewaya:id,name', 'mushaf:id,name', 'server:id,name'])->findOrFail($id);

        $reciters = $this->reciter->list(['id', 'name']);
        $rewayat = $this->rewaya->list(['id', 'name']);
        $servers = $this->server->list(['id', 'name']);
        $mushafs = $this->mushaf->list(['id', 'name']);
        $soar = $this->sora->list(['id', 'name']);

        $old_soar = [];
        $report_soar = [];
        foreach ($read->soar as  $sora) {
            $old_soar[$sora->id] = true;
            $report_soar[$sora->id] = $sora->pivot->report;
        }
        $read->old_soar = $old_soar;

        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $title = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'read-title')->where('item', $id)->first();
            if ($title) {
                $arr['title'] = $title->text;
            } else {
                $arr['title'] = '';
            }
            $description = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'read-description')->where('item',  $id)->first();
            if ($description) {
                $arr['description'] = $description->text;
            } else {
                $arr['description'] = '';
            }

            $translations[$language->locale] = $arr;
        }

        return compact('read', 'report_soar','reciters', 'rewayat', 'mushafs', 'soar', 'servers', 'translations');
    }

    public function report($id, $change, $sora)
    {
        if ($change == 'disable') {
            $report = '-1';
        } else {
            $report = '0';
        }
        try {
            DB::table('sura_read')->where('read_id', $id)->where('sura_id', $sora)->update(['report' => $report]);
            return ['success' => true];
        } catch (\Throwable $th) {
            return ['success' => false];
        }
        return ['success' => false];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ReadRequest $request, $id)
    {
        $read = $this->read->model->findOrFail($id);
        $input = $request->all();
        if ($input['slug'] !== $read->slug) {
            if (is_null($input['slug'])) {
                $input['slug'] = SlugService::createSlug(Read::class, 'slug', $input['title']);
            } else {
                $input['slug'] = SlugService::createSlug(Read::class, 'slug', $input['slug']);
            }
        }
        $soar = [];
        foreach ($input['soar'] as $key =>  $sora) {
            if ($sora) {
                $soar[] = $key;
            }
        }

        $input['soar'] = $soar;

        $result = $this->read->update($id, $input);
        return compact('read');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->read->destroy($id, request('forced'));
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
        $result = $this->read->model->withTrashed()->find($id)->restore();
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
        $read = $this->read->changeStatus($id, $status);
        $status = $read->status;
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
            $title = DB::table('translator_translations')->where('locale', $key)->where('group', 'read-title')->where('item',  $id)->first();
            if ($title) {
                DB::table('translator_translations')->where('id', $title->id)->update(array('text' => $translation['title']));
            } elseif ($translation['title']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'read-title', 'item' =>  $id, 'text' => $translation['title']]);
            }

            $description = DB::table('translator_translations')->where('locale', $key)->where('group', 'read-description')->where('item',  $id)->first();
            if ($description) {
                DB::table('translator_translations')->where('id', $description->id)->update(array('text' => $translation['description']));
            } elseif ($translation['description']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'read-description', 'item' =>  $id, 'text' => $translation['description']]);
            }

        }
        $result = true;
        flushTrans();
        return compact('result');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function generateTranslations(Request $request)
    {
        $reciter_id = $request->reciter_id;
        $rewaya_id = $request->rewaya_id;

        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $reciter_name = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'reciter-name')->where('item', $reciter_id)->first();
            $rewaya_name = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'rewaya-name')->where('item', $rewaya_id)->first();
            if ($reciter_name and $rewaya_name) {
                $arr['title'] = Lang::get('seo.read-title', ['reciter_name' => $reciter_name->text, 'rewaya_name' => $rewaya_name->text], $language->locale);
                $arr['description'] = Lang::get('seo.read-description', ['reciter_name' => $reciter_name->text, 'rewaya_name' => $rewaya_name->text], $language->locale);
            } else {
                $arr['title'] = '';
                $arr['description'] = '';
            }

            $translations[$language->locale] = $arr;
        }

        return compact('translations');
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
                        $result = $this->read->destroy($id, request('forced'));
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
                        $result = $this->read->model->withTrashed()->find($id)->restore();
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
                        $read = $this->read->changeStatus($id, 1);
                        $status = $read->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $read = $this->read->changeStatus($id, 0);
                        $status = $read->status;
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
