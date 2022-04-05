<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use Cache;
use Carbon\Carbon;
use App\Rewaya;
use App\Reciter;
use App\Sora;
use App\Read;
use Waavi\Translation\Models\Language;


class ApiTimingController extends Controller
{

    private $language = null;
    private $reciter = null;
    private $rewaya = null;
    private $sura = null;
    private $last_updated_date = null;

    /**
     * API 2 controller.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Index
     *
     * Get a list of all avalibale language, reciters, rewayat and soar
     *
     * @group API 2
     *
     * @bodyParam  language string The language of texts in reciters, rewayat and soar arrays.If is not set the default language of texts is arabic. exemple: 'ar', 'en', 'fr'...
     *
     * @return json
     */
    public function index(Request $request)
    {
        $sura = $request->surah;
        $read = $request->read;
        $data = DB::table('reads_timing')
            ->leftJoin('quran_pages', function ($join) {
                $join->on('reads_timing.ayah', '=', 'quran_pages.ayah');
                $join->on('reads_timing.sura_id', '=', 'quran_pages.sura_id');
            })
            ->where('reads_timing.read_id', $read)
            ->where('reads_timing.sura_id', $sura)
            ->select('reads_timing.ayah', 'reads_timing.start_time', 'reads_timing.end_time', 'quran_pages.x', 'quran_pages.y')
            ->get();

        return $data;
    }
    public function reads(Request $request)
    {
        $reads_ids = DB::table('reads_timing')
            ->groupBy('read_id')
            ->get()
            ->pluck('read_id');

        $reads = Read::whereIn('id', $reads_ids)->get();

        return $reads;
    }
    public function soar(Request $request)
    {

        $read = $request->read;
        $soar_ids = DB::table('reads_timing')
            ->where('read_id', $read)
            ->get()
            ->pluck('sura_id');

        $reads = Sora::whereIn('id', $soar_ids)->get();

        return $reads;
    }
}
