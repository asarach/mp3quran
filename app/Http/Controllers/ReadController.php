<?php

namespace App\Http\Controllers;

use App\Read;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Illuminate\Support\Facades\Cache;

class ReadController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \App\Read  $read
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        $sora = request('s');
        $cache_name = 'reads_list_sora_' .  $sora  . '_long_' .  LaravelLocalization::getCurrentLocale();
        // Cache::forget($cache_name);
        $reads  =  Cache::rememberForever($cache_name, function () use ($sora) {
            $reads = Read::where('status', 1)->whereNull('special_rewaya_id');
            if ($sora) {
                $reads = $reads
                    ->leftJoin('sura_read', 'reads.id', '=', 'sura_read.read_id')
                    ->where('sura_read.sura_id', $sora);
            }

            return $reads->get()->toArray();
        });

        return compact('reads');
    }
}
