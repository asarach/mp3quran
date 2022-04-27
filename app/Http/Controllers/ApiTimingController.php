<?php

namespace App\Http\Controllers;

use DB;
use App\Read;
use App\Sora;
use App\Rewaya;
use App\Reciter;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
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
        $name = 'ayat_timing_soar_read_' . $read . '_sura_' . $sura;
        Cache::forget($name);
        $data = Cache::rememberForever($name, function () use ($read,  $sura) {
            $data = DB::table('reads_timing')
                ->leftJoin('quran_pages', function ($join) {
                    $join->on('reads_timing.ayah', '=', 'quran_pages.ayah');
                    $join->on('reads_timing.sura_id', '=', 'quran_pages.sura_id');
                })
                ->where('reads_timing.read_id', $read)
                ->where('reads_timing.sura_id', $sura)
                ->select('reads_timing.ayah', 'quran_pages.polygon', 'reads_timing.start_time', 'reads_timing.end_time', 'quran_pages.x', 'quran_pages.y', DB::raw('CONCAT("https://www.mp3quran.net/api/quran_pages_svg/", quran_pages.page,".svg") as page'))
                ->get();
            return $data;
        });
        return $data;
    }
    public function reads(Request $request)
    {
        $name = 'ayat_timing_reads';
        Cache::forget($name);
        $reads = Cache::rememberForever($name, function () {

            $reads_ids = DB::table('reads_timing')
                ->groupBy('read_id')
                ->get()
                ->pluck('read_id');

            $reads = Read::whereIn('id', $reads_ids)->get();

            $items = [];
            foreach ($reads as  $read) {
                $items[] = [
                    'id' => $read->id,
                    'name' => $read->getReciter(),
                    'rewaya' => $read->getRewaya(),
                    'folder_url' => $read->server->url . '/' . $read->url . '/',
                    'soar_count' => $read->soar->count(),
                    'soar_link' => request()->getSchemeAndHttpHost()  . '/api/ayat_timing/soar?read=' . $read->id,
                ];
            }
            return $items;
        });
        return $reads;
    }
    public function soar(Request $request)
    {
        $read = $request->read;
        $name = 'ayat_timing_soar_read_' . $read;
        Cache::forget($name);
        $soar = Cache::rememberForever($name, function () use ($read) {
            $soar_ids = DB::table('reads_timing')
                ->where('read_id', $read)
                ->get()
                ->pluck('sura_id');

            $soar = Sora::whereIn('id', $soar_ids)->get();
            $items = [];
            foreach ($soar as $key => $sorah) {
                $items[] = [
                    'id' => $sorah->id,
                    'name' => $sorah->getLocaleName(),
                    'timing_link' => request()->getSchemeAndHttpHost()  . '/api/ayat_timing?surah=' . $sorah->id . '&read=' . $read,
                ];
            }
            return $items;
        });
        return $soar;
    }
}
