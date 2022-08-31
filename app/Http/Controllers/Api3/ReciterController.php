<?php

namespace App\Http\Controllers\Api3;

use Illuminate\Http\Request;
use Cache;
use DB;
use Carbon\Carbon;
use App\Rewaya;
use App\Reciter;
use App\Sora;
use App\Read;
use Waavi\Translation\Models\Language;


class ReciterController extends ApiController
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
     * Reads
     *
     * Get a list of all avalibale reads ordered by reciters name
     *
     * @group API 3
     *
     * @bodyParam  language string The language of texts in reads arrays. If is not set the default language of texts is arabic. exemple: 'ar', 'en', 'fr'...
     * @bodyParam  reciter integer The id of the reciter you want to get its reads. If is not set it will return all reciters reads.
     * @bodyParam  rewaya integer The id of the rewaya you want to get its reads. If is not set it will return all reciters reads.
     * @bodyParam  sura integer The id of the sura you want to get its reads. If is not set it will return all reciters reads.
     * @bodyParam  last_updated_date string The date of read last update. It allows to limit the reads returned to a given date.
     *
     * @return json
     */

    public function reads(Request $request)
    {
        $this->setParams($request);
        $name = 'reads_language_' . $this->language . '_last_updated_date_' . $this->last_updated_date . '_reciter_' . $this->reciter . '_rewaya_' . $this->rewaya . '_sura_' . $this->sura;
        Cache::forget($name);
        $reads = Cache::rememberForever($name, function () {
            return $this->getReads();
        });

        return compact('reads');
    }

    /**
     * Recent Reads
     *
     * Get a list of all avalibale reads ordered by added date
     *
     * @group API 3
     *
     * @bodyParam  language string The language of texts in reads arrays. If is not set the default language of texts is arabic. exemple: 'ar', 'en', 'fr'...
     * @bodyParam  reciter integer The id of the reciter you want to get its reads. If is not set it will return all reciters reads.
     * @bodyParam  rewaya integer The id of the rewaya you want to get its reads. If is not set it will return all reciters reads.
     * @bodyParam  sura integer The id of the sura you want to get its reads. If is not set it will return all reciters reads.
     * @bodyParam  last_updated_date string The date of read last update. It allows to limit the reads returned to a given date.
     *
     * @return json
     */
    public function recentReads(Request $request)
    {
        $this->setParams($request);
        $name = 'recent_reads_language_' . $this->language . '_last_updated_date_' . $this->last_updated_date . '_reciter_' . $this->reciter . '_rewaya_' . $this->rewaya . '_sura_' . $this->sura;
        //Cache::forget($name);
        $reads = Cache::rememberForever($name, function () {
            return $this->getReads('updated_at', 'desc');
        });

        return compact('reads');
    }


    /**
     * Reciters
     *
     * Get a list of all avalibale reciters ordered by added date
     *
     * @group API 2
     *
     * @bodyParam  language string The language of texts in reciters arrays. If is not set the default language of texts is arabic. exemple: 'ar', 'en', 'fr'...
     *
     * @return json
     */
    public function reciters(Request $request)
    {
        Cache::flush();

        $this->setParams($request);

        $reciters = Cache::rememberForever('reciters_' . $request->input('language'), function () {
            return $this->getReciters();
        });

        return compact('reciters');
    }



    public function getReads($order = 'name', $sort = 'asc')
    {

        $reciters = Reciter::where('status', 1);
        if ($this->reciter !== null) {
            $reciters = $reciters->where('id', $this->reciter);
        }

        // if ($this->language !== null) {
        //     $reciters = $reciters->join('reciter_translations', 'reciters.id', '=', 'reciter_translations.reciter_id')
        //         ->where('language_id', $this->language)
        //         ->select('reciters.id', 'reciters.updated_at', 'reciter_translations.name as name');
        // }

        if ($this->last_updated_date !== null) {
            $date = Carbon::parse($this->last_updated_date)->toDateTimeString();

            $reciters = $reciters->where('updated_at', '>=', $date);
        }

        $reciters = $reciters->orderBy($order, $sort)->get();

        $results = [];
        foreach ($reciters as $reciter) {

            $reads = Read::where('reads.status', 1)
                ->leftJoin('rewayat', 'rewayat.id', '=', 'reads.rewaya_id')
                ->leftJoin('mushafs', 'mushafs.id', '=', 'reads.mushaf_id')
                ->where('reads.reciter_id', $reciter->id);

            if ($this->rewaya !== null) {
                $reads = $reads->where('reads.rewaya_id', $this->rewaya);
            }

            if ($this->sura !== null) {
                $reads = $reads
                    ->join('sura_read', 'reads.id', '=', 'sura_read.read_id')
                    ->where('sura_read.sura_id', $this->sura);
            }

            // if ($this->language !== null) {
            //     $reads = $reads->join('mushaf_translations', 'reads.mushaf_id', '=', 'mushaf_translations.mushaf_id')
            //         ->join('rewaya_translations', 'reads.rewaya_id', '=', 'rewaya_translations.rewaya_id')
            //         ->where('mushaf_translations.language_id', $this->language)
            //         ->where('rewaya_translations.language_id', $this->language)
            //         ->select('reads.*', 'mushafs.id as mushaf_id', 'mushaf_translations.name as mushaf_name', 'mushaf.name as mushaf_server', 'rewaya_translations.name as rewaya_name');
            // } else {
            $reads = $reads->select('reads.*', 'mushafs.id as mushaf_id', 'mushafs.name as mushaf_name', 'rewayat.name as rewaya_name');
            // }

            $reads = $reads->orderBy('id', 'desc')->get();


            $moshafs = [];
            foreach ($reads as $read) {

                $moshaf = [];
                $soar = DB::table('sura_read')
                    ->where('read_id', $read->id)
                    ->orderBy('sura_id', 'ASC')
                    ->pluck('sura_id')
                    ->toArray();
                $moshaf['id'] = $read->id;
                $moshaf['moshaf_type'] = intval($read->rewaya_id . $read->mushaf_id);
                $moshaf['name'] =  transLocale('rewaya-name',  $read->rewaya_id, $this->language_code)  . ' - ' . transLocale('mushaf-name',  $read->mushaf_id, $this->language_code);
                $moshaf['Server'] = $read->server_id;
                $moshaf['sample'] = $read->sample;
                $moshaf['count'] = count($soar);
                $moshaf['suras'] = implode(",", $soar);
                if (!empty($soar)) {
                    $moshafs[] = $moshaf;
                }
            }


            $result['id'] = $reciter->id;
            $result['name'] =  transLocale('reciter-name',  $reciter->id, $this->language_code);
            $result['Server'] = '';
            $result['letter'] = mb_substr($result['name'], 0, 1, "UTF-8");

            if ($order == 'updated_at') {
                $result['recent_date'] = $reciter->updated_at;
            }
            $result['moshaf'] = $moshafs;


            if (!empty($moshafs)) {

                $results[] = $result;
            }
        }



        return $results;
    }

    public function getReciters($order = 'name', $sort = 'asc')
    {
        $reciters = Reciter::where('status', 1);
        if ($this->language !== null) {
            $reciters = $reciters->join('translator_translations', 'reciters.id', '=', 'translator_translations.item')
                ->where('translator_translations.locale', $this->language_code)
                ->where('translator_translations.group', 'reciter-name')
                ->select('reciters.id', 'translator_translations.text as name');
        }
        $reciters = $reciters->get();

        $results = [];
        foreach ($reciters as $reciter) {

            $reads = Read::where('reads.status', 1);
            if ($this->rewaya !== null) {
                $reads = $reads->where('reads.rewaya_id', $this->rewaya);
            }
            if ($this->sura !== null) {
                $reads = $reads
                    ->join('sura_read', 'reads.id', '=', 'sura_read.read_id')
                    ->where('sura_read.sura_id', $this->sura);
            }
            $reads = $reads->orderBy('id', 'desc')
                ->where('reads.reciter_id', $reciter->id)
                ->get();


            $items = [];
            foreach ($reads as $read) {

                $moshaf = [];
                $soar = DB::table('sura_read')
                    ->where('read_id', $read->id)
                    ->orderBy('sura_id', 'ASC')
                    ->pluck('sura_id')
                    ->toArray();

                $moshaf['id'] = $read->id;
                $moshaf['moshaf_type'] = intval($read->rewaya_id . $read->mushaf_id);
                $moshaf['name'] =  transLocale('rewaya-name',  $read->rewaya_id, $this->language_code)  . ' - ' . transLocale('mushaf-name',  $read->mushaf_id, $this->language_code);
                $moshaf['server'] = $read->server_id;
                $moshaf['suwar_count'] = count($soar);
                $moshaf['suwar'] = implode(",", $soar);
                if (!empty($soar)) {
                    $items[] = $moshaf;
                }
            }

            $result['id'] = $reciter->id;
            $result['name'] =  transLocale('reciter-name',  $reciter->id, $this->language_code);
            $result['letter'] = mb_substr($result['name'], 0, 1, "UTF-8");

            if ($order == 'updated_at') {
                $result['recent_date'] = $reciter->updated_at;
            }
            $result['reads'] = $items;


            if (!empty($items)) {

                $results[] = $result;
            }
        }



        return $results;
    }
}
