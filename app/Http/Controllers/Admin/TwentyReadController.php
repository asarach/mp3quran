<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TwentyReadRequest;
use App\Repositories\TwentyRead\TwentyReadRepository;
use App\Repositories\Mushaf\MushafRepository;
use App\Repositories\TwentyRewaya\TwentyRewayaRepository;
use App\Repositories\Server\ServerRepository;
use App\Repositories\Sora\SoraRepository;
use App\Repositories\Reciter\ReciterRepository;
use Illuminate\Http\Request;
use App\TwentyRead;
use DB;
use App\Services\Search;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Lang;

class TwentyReadController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Search $search, TwentyReadRepository $twenty_read, ReciterRepository $reciter, SoraRepository $sora, ServerRepository $server, TwentyRewayaRepository $twenty_rewaya, MushafRepository $mushaf)
    {
        $this->twenty_read = $twenty_read;
        $this->reciter = $reciter;
        $this->sora = $sora;
        $this->twenty_rewaya = $twenty_rewaya;
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
        $columns = ['statu' => 'twenty_reads.status', 'twenty_rewaya' => 'twenty_reads.twenty_rewaya_id', 'mushaf' => 'twenty_reads.mushaf_id', 'reciter' => 'twenty_reads.reciter_id'];
        $trashed = request('trashed');
        $q = request('q');
        $twenty_reads = $this->twenty_read->model
            ->with(['reciter:id,name', 'twenty_rewaya:id,name', 'mushaf:id,name'])
            ->sortable(['id' => 'desc'])
            ->filterColumns($columns);
        if ($trashed) {
            $twenty_reads = $twenty_reads->onlyTrashed();
        }
        if ($q) {
            $ids = $this->search->search($q, 'twenty_reads_index');
            $twenty_reads = $twenty_reads->whereIn('id', $ids);
        }
        $twenty_reads = $twenty_reads->paginate(250);

        $reciters = $this->reciter->list(['id', 'name']);
        $twenty_rewayat = $this->twenty_rewaya->list(['id', 'name']);
        $servers = $this->server->list(['id', 'name']);
        $mushafs = $this->mushaf->list(['id', 'name']);

        return compact('twenty_reads', 'reciters', 'twenty_rewayat', 'mushafs', 'servers');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $reciters = $this->reciter->list(['id', 'name']);
        $twenty_rewayat = $this->twenty_rewaya->list(['id', 'name']);
        $mushafs = $this->mushaf->list(['id', 'name']);
        $servers = $this->server->list(['id', 'name']);
        $soar = $this->sora->list(['id', 'name']);

        $old_soar = [];
        $report_soar = [];

        return compact('reciters', 'report_soar', 'old_soar', 'twenty_rewayat', 'mushafs', 'soar', 'servers');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TwentyReadRequest $request)
    {
        $input = $request->all();
        //$input['slug'] = SlugService::createSlug(TwentyRead::class, 'slug', $input['title']);

        $soar = [];
        foreach ($input['soar'] as $key =>  $sora) {
            if ($sora) {
                $soar[] = $key;
            }
        }
        $input['soar'] = $soar;

        $twenty_read = $this->twenty_read->create($input);
        clearPostCache(['admin_home_stats']);

        return compact('twenty_read');
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $twenty_read = $this->twenty_read->model->with(['soar:id,name', 'reciter:id,name', 'twenty_rewaya:id,name', 'mushaf:id,name', 'server:id,name'])->findOrFail($id);

        $reciters = $this->reciter->list(['id', 'name']);
        $twenty_rewayat = $this->twenty_rewaya->list(['id', 'name']);
        $servers = $this->server->list(['id', 'name']);
        $mushafs = $this->mushaf->list(['id', 'name']);
        $soar = $this->sora->list(['id', 'name']);

        $old_soar = [];
        $report_soar = [];
        foreach ($twenty_read->soar as  $sora) {
            $old_soar[$sora->id] = true;
            $report_soar[$sora->id] = $sora->pivot->report;
        }
        $twenty_read->old_soar = $old_soar;

        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $title = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'twenty_read-title')->where('item', $id)->first();
            if ($title) {
                $arr['title'] = $title->text;
            } else {
                $arr['title'] = '';
            }
            $description = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'twenty_read-description')->where('item',  $id)->first();
            if ($description) {
                $arr['description'] = $description->text;
            } else {
                $arr['description'] = '';
            }

            $translations[$language->locale] = $arr;
        }

        return compact('twenty_read', 'report_soar','reciters', 'twenty_rewayat', 'mushafs', 'soar', 'servers', 'translations');
    }

    public function report($id, $change, $sora)
    {
        if ($change == 'disable') {
            $report = '-1';
        } else {
            $report = '0';
        }
        try {
            DB::table('sura_twenty_read')->where('twenty_read_id', $id)->where('sura_id', $sora)->update(['report' => $report]);
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
    public function update(TwentyReadRequest $request, $id)
    {
        $twenty_read = $this->twenty_read->model->findOrFail($id);
        $input = $request->all();
        if ($input['slug'] !== $twenty_read->slug) {
            if (is_null($input['slug'])) {
                $input['slug'] = SlugService::createSlug(TwentyRead::class, 'slug', $input['title']);
            } else {
                $input['slug'] = SlugService::createSlug(TwentyRead::class, 'slug', $input['slug']);
            }
        }
        $soar = [];
        foreach ($input['soar'] as $key =>  $sora) {
            if ($sora) {
                $soar[] = $key;
            }
        }

        $input['soar'] = $soar;

        $result = $this->twenty_read->update($id, $input);
        return compact('twenty_read');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->twenty_read->destroy($id, request('forced'));
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
        $result = $this->twenty_read->model->withTrashed()->find($id)->restore();
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
        $twenty_read = $this->twenty_read->changeStatus($id, $status);
        $status = $twenty_read->status;
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
            $title = DB::table('translator_translations')->where('locale', $key)->where('group', 'twenty_read-title')->where('item',  $id)->first();
            if ($title) {
                DB::table('translator_translations')->where('id', $title->id)->update(array('text' => $translation['title']));
            } elseif ($translation['title']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'twenty_read-title', 'item' =>  $id, 'text' => $translation['title']]);
            }

            $description = DB::table('translator_translations')->where('locale', $key)->where('group', 'twenty_read-description')->where('item',  $id)->first();
            if ($description) {
                DB::table('translator_translations')->where('id', $description->id)->update(array('text' => $translation['description']));
            } elseif ($translation['description']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'twenty_read-description', 'item' =>  $id, 'text' => $translation['description']]);
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
        $twenty_rewaya_id = $request->twenty_rewaya_id;

        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $reciter_name = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'reciter-name')->where('item', $reciter_id)->first();
            $twenty_rewaya_name = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'twenty_rewaya-name')->where('item', $twenty_rewaya_id)->first();
            if ($reciter_name and $twenty_rewaya_name) {
                $arr['title'] = Lang::get('seo.twenty_read-title', ['reciter_name' => $reciter_name->text, 'twenty_rewaya_name' => $twenty_rewaya_name->text], $language->locale);
                $arr['description'] = Lang::get('seo.twenty_read-description', ['reciter_name' => $reciter_name->text, 'twenty_rewaya_name' => $twenty_rewaya_name->text], $language->locale);
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
                        $result = $this->twenty_read->destroy($id, request('forced'));
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
                        $result = $this->twenty_read->model->withTrashed()->find($id)->restore();
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
                        $twenty_read = $this->twenty_read->changeStatus($id, 1);
                        $status = $twenty_read->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $twenty_read = $this->twenty_read->changeStatus($id, 0);
                        $status = $twenty_read->status;
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
