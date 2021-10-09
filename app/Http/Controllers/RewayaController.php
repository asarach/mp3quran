<?php

namespace Mp3quran\Http\Controllers;

use Illuminate\Http\Request;
use Mp3quran\Repositories\Rewaya\RewayaRepository;
use LaravelLocalization;
use CyrildeWit\EloquentViewable\Support\Period;
use Carbon\Carbon;

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
     * Display the specified resource.
     *
     * @param  \Mp3quran\Rewaya  $rewaya
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $rewaya = $this->rewaya->model
            ->where('slug', $slug)
            ->where('status', 1)
            ->with('images:uri')
            ->firstOrFail();

        views($rewaya)->record();
        $rewaya->total_views = $rewaya->total_views + 1;
        $rewaya->day_views = views($rewaya)->period(Period::create(Carbon::today()))->count();
        $rewaya->last_viewed_at = Carbon::now();
        $rewaya->save();

        $reads = $this->rewaya->model
            ->where('status', 1)
            ->where('promote', 1)
            ->with('images:uri')
            ->inRandomOrder()
            ->paginate(9);

        $data = compact('rewaya', 'reads');

        if (request()->ajax()) {
            return $data;
        }

        $params = get_params($data);

        return view('layouts.app', $params);
    }
}
