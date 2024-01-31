<?php

namespace App\Http\Controllers;

use App\Read;
use App\Reciter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReciterController extends Controller
{
    public function reportSora($read_slug, $item, Request $request)
    {
        try {
            $read = Read::where('slug', $read_slug)
                ->where('status', 1)
                ->firstOrFail();
            
            DB::table('report_sora')->insert([
                'read_id'=> $read->id,
                'sura_id'=> $item,
                'note'=> e($request->note)
            ]);
            return ['success' => true];
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
