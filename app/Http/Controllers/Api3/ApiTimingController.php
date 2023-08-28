<?php

namespace App\Http\Controllers\Api3;

use DB;
use App\Read;
use App\Sora;
use App\Rewaya;
use App\Reciter;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Waavi\Translation\Models\Language;


class ApiTimingController extends ApiController
{
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
        $this->setParams($request);
        $name = 'ayat_timing_v3_soar_read_' . $this->read . '_sura_' . $this->sura;
        Cache::forget($name);
        $data = Cache::rememberForever($name, function () {
            return $this->getTimings();
        });
        return $data;
    }

    public function reads(Request $request)
    {
        $this->setParams($request);
        $name = 'ayat_timing_v3_reads';
        Cache::forget($name);
        $reads = Cache::rememberForever($name, function () {
            return $this->getTimingReads();
        });
        return $reads;
    }

    public function soar(Request $request)
    {
        $this->setParams($request);
        $name = 'ayat_timing_v3_soar_read_' . $this->read;
        Cache::forget($name);

        $soar = Cache::rememberForever($name, function ()  {
            return $this->getTimingSoar();            
        });
        return $soar;
    }


    public function getTimings()
    {
        $data = DB::table('reads_timing')
            ->leftJoin('quran_pages', function ($join) {
                $join->on('reads_timing.ayah', '=', 'quran_pages.ayah');
                $join->on('reads_timing.sura_id', '=', 'quran_pages.sura_id');
            })
            ->where('reads_timing.read_id', $this->read)
            ->where('reads_timing.sura_id', $this->sura)
            ->select('reads_timing.ayah', 'quran_pages.polygon', 'reads_timing.start_time', 'reads_timing.end_time', 'quran_pages.x', 'quran_pages.y', DB::raw('CONCAT("https://www.mp3quran.net/api/quran_pages_svg/", quran_pages.page,".svg") as page'))
            ->get();

        return $data;
    }

    public function getTimingReads()
    {
        $reads_ids = DB::table('reads_timing')
            ->groupBy('read_id')
            ->get()
            ->pluck('read_id');

        $reads = Read::whereIn('id', $reads_ids)->whereNull('special_rewaya_id')->get();

        $items = [];
        foreach ($reads as  $read) {
            $items[] = [
                'id' => $read->id,
                'name' => $read->getReciter(),
                'rewaya' => $read->getRewaya(),
                'folder_url' => $read->server->url . '/' . $read->url . '/',
                'soar_count' => $read->soar->count(),
                'soar_link' => 'https://www.mp3quran.net/api/v3/ayat_timing/soar?read=' . $read->id,
            ];
        }
        return $items;
    }
    public function getTimingSoar()
    {
        $soar_ids = DB::table('reads_timing')
                ->where('read_id', $this->read)
                ->get()
                ->pluck('sura_id');

                $soar = Sora::whereIn('id', $soar_ids)->get();
            $items = [];
            foreach ($soar as $key => $sorah) {
                $items[] = [
                    'id' => $sorah->id,
                    'name' => $sorah->getLocaleName(),
                    'timing_link' => 'https://www.mp3quran.net/api/v3/ayat_timing?surah=' . $sorah->id . '&read=' . $this->read,
                ];
            }
            return $items;
    }
}
