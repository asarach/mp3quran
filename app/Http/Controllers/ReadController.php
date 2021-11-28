<?php

namespace App\Http\Controllers;

use App\Read;

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
        $reads = Read::where('status', 1);
        if ($sora) {
            $reads = $reads
            ->leftJoin('sura_read', 'reads.id', '=', 'sura_read.read_id')
            ->where('sura_read.sura_id', $sora);
        }

        $reads = $reads->get();

        return compact('reads');
    }
}
