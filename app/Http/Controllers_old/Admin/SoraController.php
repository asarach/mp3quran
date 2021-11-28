<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Sora\SoraRepository;
use App\Http\Requests\SoraRequest;
use Cviebrock\EloquentSluggable\Services\SlugService;
use App\Sora;
class SoraController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(SoraRepository $sora)
    {
        $this->sora = $sora;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $columns = ['statu' => 'soar.status'];

        $trashed = request('trashed');
        $soar = $this->sora->model->sortable(['id' => 'asc'])->filterColumns($columns);
        if ($trashed) {
            $soar = $soar->onlyTrashed();
        }
        $soar = $soar->paginate(24);

        return compact('soar');
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SoraRequest $request)
    {
        $input = $request->all();
        $input['slug'] = SlugService::createSlug(Sora::class, 'slug', $input['name']);

        $sora = $this->sora->create($input);
        clearPostCache(['admin_home_stats']);
        return compact('sora');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Sora  $sora
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $sora = $this->sora->model->findOrFail($id);
        return compact('sora');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Sora  $sora
     * @return \Illuminate\Http\Response
     */
    public function update(SoraRequest $request, $id)
    {
        $sora = $this->sora->model->findOrFail($id);

        $input = $request->all();
        if ($input['slug'] !== $sora->slug) {
            if (is_null($input['slug'])) {
                $input['slug'] = SlugService::createSlug(Sora::class, 'slug', $input['name']);
            } else {
                $input['slug'] = SlugService::createSlug(Sora::class, 'slug', $input['slug']);
            }
        }
        $sora = $this->sora->update($id, $input);
        return compact('sora');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Sora  $sora
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->sora->destroy($id, request('forced'));
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
        $result = $this->sora->model->withTrashed()->find($id)->restore();
        clearPostCache(['admin_home_stats']);
        return compact('result');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function changeStatus($id, $status)
    {
        $sora = $this->sora->changeStatus($id, $status);
        $status = $sora->status;
        return compact('status');
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
                        $result = $this->sora->destroy($id, request('forced'));
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
                        $result = $this->sora->model->withTrashed()->find($id)->restore();
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
                        $sora = $this->sora->changeStatus($id, 1);
                        $status = $sora->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $sora = $this->sora->changeStatus($id, 0);
                        $status = $sora->status;
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
