<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppRequest;
use App\Repositories\App\AppRepository;
use Illuminate\Http\Request;
use DB;

class ReportController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reports = DB::table('report_sora')
            ->join('reads', 'reads.id', '=', 'report_sora.read_id')
            ->join('soar', 'soar.id', '=', 'report_sora.sura_id')
            ->select('report_sora.id', 'report_sora.note', 'report_sora.read_id', 'report_sora.sura_id', 'reads.title', 'soar.name')
            ->orderBy('report_sora.id', 'desc')
            ->paginate(25);

        return compact('reports');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = DB::table('report_sora')->where('id', $id)->delete();
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
                        $result = DB::table('report_sora')->where('id', $id)->delete();
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'restor':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $result = $this->app->model->withTrashed()->find($id)->restore();
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'activate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $app = $this->app->changeStatus($id, 1);
                        $status = $app->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $app = $this->app->changeStatus($id, 0);
                        $status = $app->status;
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
