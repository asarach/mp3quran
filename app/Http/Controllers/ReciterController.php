<?php

namespace App\Http\Controllers;

use App\Read;
use App\Reciter;
use Illuminate\Support\Facades\DB;

class ReciterController extends Controller
{
    public function reportSora($read_slug, $item)
    {
        try {
            $read = Read::where('slug', $read_slug)
                ->where('status', 1)
                ->firstOrFail();

            $sora = DB::table('sura_read')->where('read_id', $read->id)->where('sura_id', $item)->first();

            if ($sora && $sora->report != '-1') {
                DB::table('sura_read')->where('read_id', $read->id)->where('sura_id', $item)->update(['report' => $sora->report + 1]);
                return ['success' => true];
            }
        } catch (\Throwable $th) {
            return ['success' => false];
        }
        return ['success' => false];
    }
    public function list()
    {
        $reciters = Reciter::where('status', 1);

        $reciters = $reciters->get();

        return compact('reciters');
    }
}
