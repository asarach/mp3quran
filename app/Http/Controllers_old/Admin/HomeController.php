<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Read;
use App\Video;
use App\Reciter;
use App\Mushaf;
use App\Tv;
use App\Radio;
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
