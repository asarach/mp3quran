<?php

namespace Mp3quran\Http\Controllers\Admin;

use Mp3quran\Http\Controllers\Controller;
use Mp3quran\Read;
use Mp3quran\Video;
use Mp3quran\Reciter;
use Mp3quran\Mushaf;
use Mp3quran\Tv;
use Mp3quran\Radio;
use Cache;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stats = Cache::remember('admin_home_stats', 86400 * 300, function () {
            $stats = [];
            $stats['radios'] = Radio::count();
            $stats['tvs'] = Tv::count();
            $stats['videos'] = Video::count();
            $stats['reads'] = Read::count();
            $stats['reciters'] = Reciter::count();
            return $stats;
        });

        return compact('stats');
    }
}
