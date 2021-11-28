<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Read\ReadRepository;
use LaravelLocalization;
use CyrildeWit\EloquentViewable\Support\Period;
use Carbon\Carbon;

class ReadController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(ReadRepository $read)
    {
        $this->read = $read;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Read  $read
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reads = $this->read->model
            ->where('status', 1)
            ->with('images:uri')
            ->sortable(['created_at' => 'desc'])
            ->paginate(24);

        createNavigationArray($reads);

        $promotes = $this->read->model
            ->where('status', 1)
            ->where('promote', 1)
            ->with('images:uri')
            ->inRandomOrder()
            ->paginate(10);

        $stickies = $this->read->model
            ->where('status', 1)
            ->where('sticky', 1)
            ->with('images:uri')
            ->inRandomOrder()
            ->paginate(10);

            $page_title = trans('text.reads') . ' | MP3 Quran';


        $path = request()->path();

        $data = compact('reads', 'stickies', 'path', 'promotes', 'page_title');

        if (request()->ajax()) {
            return $data;
        }

        $params = get_params($data);
        $params['metas'] = getMetas([
            'seo_title' => $page_title,
            'seo_description' => trans('text.reads-description'),
            'seo_keywords' => trans('text.reads-keywords')
            ]);
            

        return view('layouts.app', $params);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Read  $read
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        $sora = request('s');
        $reads = $this->read->model->where('status', 1);
        if ($sora) {
            $reads = $reads
            ->leftJoin('sura_read', 'reads.id', '=', 'sura_read.read_id')
            ->where('sura_read.sura_id', $sora);
        }

        $reads = $reads->get();

        return compact('reads');
    }
}
