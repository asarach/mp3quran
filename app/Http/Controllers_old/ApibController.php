<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use Cache;
use Carbon\Carbon;
use App\Rewaya;
use App\Reciter;
use App\Sora;
use App\Mushaf;
use App\Vgroup;
use App\Read;
use App\Radio;
use App\Tv;
use App\Video;
use Waavi\Translation\Models\Language;


class ApibController extends Controller
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

        Cache::flush();
        $this->setParams($request);

        $language = Cache::rememberForever('languages', function () {
            return $this->getLanguages();
        });
        $reciters = Cache::rememberForever('reciters_' . $request->input('language'), function () {
            return $this->getReciters();
        });
        $rewayat = Cache::rememberForever('rewayat_' . $request->input('language'), function () {
            return $this->getRewayat();
        });
        $Suras_Name = Cache::rememberForever('soar_' . $request->input('language'), function () {
            return $this->getSoar();
        });

        return compact('language', 'reciters', 'rewayat', 'Suras_Name');
    }

    /**
     * Reads
     *
     * Get a list of all avalibale reads ordered by reciters name
     *
     * @group API 2
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
        Cache::flush();

        $this->setParams($request);

        $name = 'reads_language_' . $request->input('language') . '_last_updated_date_' . $request->input('last_updated_date') . '_reciter_' . $request->input('reciter') . '_rewaya_' . $request->input('rewaya') . '_sura_' . $request->input('sura');

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
     * @group API 2
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
        Cache::flush();

        $this->setParams($request);

        $name = 'recent_reads_language_' . $request->input('language') . '_last_updated_date_' . $request->input('last_updated_date') . '_reciter_' . $request->input('reciter') . '_rewaya_' . $request->input('rewaya') . '_sura_' . $request->input('sura');
        //dd("qsq");
        //Cache::forget($name);
        $reads = Cache::rememberForever($name, function () {
            return $this->getReads('updated_at', 'desc');
        });

        return compact('reads');
    }

    /**
     * Radios
     *
     * Get a list of all avalibale radios ordered by added date
     *
     * @group API 2
     *
     * @bodyParam  language string The language of texts in radios arrays. If is not set the default language of texts is arabic. exemple: 'ar', 'en', 'fr'...
     * @bodyParam  reciter integer The id of the reciter you want to get its radios. If is not set it will return all reciters radios.
     * @bodyParam  last_updated_date string The date of radio last update. It allows to limit the radios returned to a given date.
     *
     * @return json
     */
    public function radios(Request $request)
    {
        Cache::flush();

        $this->setParams($request);

        $name = 'radios_language_' . $request->input('language') . '_last_updated_date_' . $request->input('last_updated_date') . '_reciter_' . $request->input('reciter') . '_rewaya_' . $request->input('rewaya') . '_sura_' . $request->input('sura');
        $reads = Cache::rememberForever($name, function () {
            return $this->getRadios();
        });

        return compact('reads');
    }

    /**
     * Tvs
     *
     * Get a list of all avalibale tvs ordered by added date
     *
     * @group API 2
     *
     * @bodyParam  language string The language of texts in tvs arrays. If is not set the default language of texts is arabic. exemple: 'ar', 'en', 'fr'...
     * @bodyParam  last_updated_date string The date of tv  last update. It allows to limit the tvs returned to a given date.
     *
     * @return json
     */
    public function tvs(Request $request)
    {
        Cache::flush();

        $this->setParams($request);

        $name = 'tvs_language_' . $request->input('language') . '_last_updated_date_' . $request->input('last_updated_date') . '_reciter_' . $request->input('reciter') . '_rewaya_' . $request->input('rewaya') . '_sura_' . $request->input('sura');
        $reads = Cache::rememberForever($name, function () {
            return $this->getTvs();
        });

        return compact('reads');
    }

    /**
     * Read
     *
     * Get data of specifec read
     *
     * @group API 2
     *
     * @queryParam  id required The Id of read to get.
     * @bodyParam  language string The language of the read texts. If is not set the default language of texts is arabic. exemple: 'ar', 'en', 'fr'...
     *
     * @return json
     */
    public function read($id, Request $request)
    {
        Cache::flush();

        $this->setParams($request);
        $name = 'read_' . $id . $request->input('language');
        $read = Cache::rememberForever($name, function () use ($id) {
            return $this->getRead($id);
        });

        return compact('read');
    }

    /**
     * Languages
     *
     * Get a list of all avalibale languages
     *
     * @group API 2
     *
     *
     * @return json
     */
    public function languages(Request $request)
    {
        Cache::flush();

        $this->setParams($request);

        $language = Cache::rememberForever('languages', function () {
            return $this->getLanguages();
        });

        return compact('language');
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

    /**
     * Rewayat
     *
     * Get a list of all avalibale rewayat ordered by added date
     *
     * @group API 2
     *
     * @bodyParam  language string The language of texts in rewayat arrays. If is not set the default language of texts is arabic. exemple: 'ar', 'en', 'fr'...
     *
     * @return json
     */
    public function rewayat(Request $request)
    {
        Cache::flush();

        $this->setParams($request);

        $rewayat = Cache::rememberForever('rewayat_' . $request->input('language'), function () {
            return $this->getRewayat();
        });

        return compact('rewayat');
    }

    /**
     * Moshaf
     *
     * Get a list of all avalibale moshaf ordered by added date
     *
     * @group API 2
     *
     * @bodyParam  language string The language of texts in moshafs arrays. If is not set the default language of texts is arabic. exemple: 'ar', 'en', 'fr'...
     *
     * @return json
     */
    public function moshaf(Request $request)
    {
        Cache::flush();

        $this->setParams($request);

        $Moshafs_Name = Cache::rememberForever('moshaf_' . $request->input('language'), function () {
            return $this->getMoshaf();
        });

        return compact('Moshafs_Name');
    }

    /**
     * Soar
     *
     * Get a list of all avalibale soar ordered by added date
     *
     * @group API 2
     *
     * @bodyParam language string The language of texts in soar arrays. If is not set the default language of texts is arabic. exemple: 'ar', 'en', 'fr'...
     *
     * @return json
     */
    public function soar(Request $request)
    {
        Cache::flush();

        $this->setParams($request);
        $Suras_Name = Cache::rememberForever('soar_' . $request->input('language'), function () {
            return $this->getSoar();
        });

        return compact('Suras_Name');
    }

    public function getRewayat()
    {
        $rewayat = Rewaya::where('status', 1);
        if ($this->language !== null) {
            $rewayat = $rewayat->join('rewaya_translations', 'rewayat.id', '=', 'rewaya_translations.rewaya_id')
                ->where('language_id', $this->language->id)
                ->select('rewayat.id', 'rewaya_translations.name as name');
                
        }else{
            $rewayat = $rewayat->select('rewayat.id', 'rewayat.name');
        }
        
        return $rewayat->get();
    }

    public function getMoshaf()
    {
        $rewayat = Rewaya::where('status', 1);
        if ($this->language !== null) {
            $rewayat = $rewayat->join('rewaya_translations', 'rewayat.id', '=', 'rewaya_translations.rewaya_id')
                ->where('language_id', $this->language->id)
                ->select('rewayat.id', 'rewaya_translations.name as name');
        }
        $rewayat = $rewayat->orderBy('id')->get();

        $mushaf = Mushaf::where('status', 1);
        if ($this->language !== null) {
            $mushaf = $mushaf->join('mushaf_translations', 'mushafs.id', '=', 'mushaf_translations.mushaf_id')
                ->where('language_id', $this->language->id)
                ->select('mushafs.id', 'mushaf_translations.name as name');
        }
        $mushafs = $mushaf->orderBy('id')->get();

        $results = [];

        foreach ($rewayat as $rewaya) {
            foreach ($mushafs as $mushaf) {
                $soars = Read::where('status', 1)->where('rewaya_id', $rewaya->id)->where('mushaf_id', $mushaf->id)->get();
                if ($soars->isNotEmpty()) {
                    $item = [];
                    $item['id'] = intval($rewaya->id . $mushaf->id);
                    $item['moshaf_type'] = $rewaya->id;
                    $item['moshaf_id'] = $mushaf->id;
                    $item['name'] = $rewaya->name . ' - ' . $mushaf->name;
                    $results[] = $item;
                }
            }
        }


        return $results;
    }

    public function getSoar()
    {
        $soar = Sora::where('status', 1);
        if ($this->language !== null) {
            $soar = $soar->join('sura_translations', 'soar.id', '=', 'sura_translations.sura_id')
                ->where('language_id', $this->language->id)
                ->select('soar.id', 'sura_translations.name as name', 'soar.start_page', 'soar.end_page', 'soar.type');
        }
        return $soar->orderBy('id')->get();
    }

    public function getReciters()
    {
        $reciters = Reciter::where('status', 1);
        if ($this->language !== null) {
            $reciters = $reciters->join('reciter_translations', 'reciters.id', '=', 'reciter_translations.reciter_id')
                ->where('language_id', $this->language->id)
                ->select('reciters.id', 'reciter_translations.name as name');
        }
        return $reciters->get();
    }

    public function getReads($order = 'name', $sort = 'asc')
    {

        $reciters = Reciter::where('status', 1);
        if ($this->reciter !== null) {
            $reciters = $reciters->where('id', $this->reciter->id);
        }


        if ($this->language !== null) {
            $reciters = $reciters->join('reciter_translations', 'reciters.id', '=', 'reciter_translations.reciter_id')
                ->where('language_id', $this->language->id)
                ->select('reciters.id', 'reciters.updated_at', 'reciter_translations.name as name');
        }

        if ($this->last_updated_date !== null) {
            $date = Carbon::parse($this->last_updated_date)->toDateTimeString();

            $reciters = $reciters->where('updated_at', '>=', $date);
        }

        $reciters = $reciters->orderBy($order, $sort)->get();

        $results = [];
        if ($this->sura == null) {
            foreach ($reciters as $reciter) {

                $reads = Read::where('status', 1)
                    ->leftJoin('rewayat', 'rewayat.id', '=', 'reads.rewaya_id')
                    ->leftJoin('mushafs', 'mushafs.id', '=', 'reads.mushaf_id')
                    ->where('reads.reciter_id', $reciter->id);

                if ($this->rewaya !== null) {
                    $reads = $reads->where('reads.rewaya_id', $this->rewaya->id);
                }

                if ($this->sura !== null) {
                    $reads = $reads
                        ->join('sura_read', 'reads.id', '=', 'sura_read.read_id')
                        ->where('sura_read.sura_id', $this->sura->id);
                }

                if ($this->language !== null) {
                    $reads = $reads->join('mushaf_translations', 'reads.mushaf_id', '=', 'mushaf_translations.mushaf_id')
                        ->join('rewaya_translations', 'reads.rewaya_id', '=', 'rewaya_translations.rewaya_id')
                        ->where('mushaf_translations.language_id', $this->language->id)
                        ->where('rewaya_translations.language_id', $this->language->id)
                        ->select('reads.*', 'mushafs.id as mushaf_id', 'mushaf_translations.name as mushaf_name', 'mushaf.name as mushaf_server', 'rewaya_translations.name as rewaya_name');
                } else {
                    $reads = $reads->select('reads.*', 'mushafs.id as mushaf_id', 'mushafs.name as mushaf_name', 'rewayat.name as rewaya_name');
                }

                $reads = $reads->orderBy('id', 'desc')->get();

                //dd($reads);

                $moshafs = [];
                foreach ($reads as $read) {

                    $moshaf = [];
                    $soar = Read::where('status', 1)
                        ->table('sura_read')
                        ->where('read_id', $read->id)
                        ->orderBy('sura_id', 'ASC')
                        ->pluck('sura_id')
                        ->toArray();
                    $moshaf['id'] = $read->id;
                    $moshaf['moshaf_type'] = intval($read->rewaya_id . $read->mushaf_id);
                    $moshaf['name'] = $read->rewaya_name . ' - ' . $read->mushaf_name;
                    $moshaf['Server'] = $read->server_id;
                    $moshaf['sample'] = '$read->sample';
                    $moshaf['count'] = count($soar);
                    $moshaf['suras'] = implode(",", $soar);
                    if (!empty($soar)) {
                        $moshafs[] = $moshaf;
                    }
                }


                $result['id'] = $reciter->id;
                $result['name'] = $reciter->name;
                $result['Server'] = '';
                $result['letter'] = mb_substr($reciter->name, 0, 1, "UTF-8");

                if ($order == 'updated_at') {
                    $result['recent_date'] = $reciter->updated_at;
                }
                $result['moshaf'] = $moshafs;


                if (!empty($moshafs)) {

                    $results[] = $result;
                }
            }
        }


        return $results;
    }

    public function getRadios($order = 'id', $sort = 'asc')
    {
        $radios = Radio::where('status', 1)
            ->join('reciters', 'reciters.id', '=', 'radios.reciter_id');
        if ($this->reciter !== null) {
            $radios = $radios->where('reciter_id', $this->reciter->id);
        }
        if ($this->last_updated_date !== null) {
            $date = Carbon::parse($this->last_updated_date)->toDateTimeString();
            $radios = $radios->where('radios.updated_at', '>=', $date);
        }

        if ($this->language !== null) {
            $radios = $radios->join('reciter_translations', 'reciters.id', '=', 'reciter_translations.reciter_id')
                ->where('language_id', $this->language->id)
                ->select('radios.id as id', 'radios.url as URL', 'reciter_translations.name as name');
        } else {
            $radios = $radios->select('radios.id as id', 'radios.url as URL', 'reciters.name as name');
        }



        $radios = $radios->orderBy($order, $sort)->get();


        return $radios;
    }

    public function getTvs($order = 'id', $sort = 'asc')
    {
        $tvs = Tv::where('status', 1);

        if ($this->last_updated_date !== null) {
            $date = Carbon::parse($this->last_updated_date)->toDateTimeString();
            $tvs = $tvs->where('updated_at', '>=', $date);
        }

        if ($this->language !== null) {
            $tvs = $tvs->join('tv_translations', 'tvs.id', '=', 'tv_translations.tv_id')
                ->where('language_id', $this->language->id)
                ->select('tvs.id as id', 'tvs.url as URL', 'tv_translations.name as name');
        } else {
            $tvs = $tvs->select('tvs.id as id', 'tvs.url as URL', 'tvs.name as name');
        }

        $tvs = $tvs->orderBy($order, $sort)->get();


        return $tvs;
    }

    public function videoTypes(Request $request)
    {

        $this->setParams($request);

        $videos_group = Vgroup::where('status', 1);

        if ($this->language !== null) {
            $videos_group = $videos_group->join('translator_translations', "vgroups.id" , '=', 'translator_translations.item')
                ->where('locale', $this->language->locale)
                ->where('group', 'vgroup-name')
                ->select( 'vgroups.id as id', 'translator_translations.text as video_type');
        } else {
            $videos_group = $videos_group->select('id', 'name as video_type');
        }
        
        $videos_group = $videos_group->get();

        return  ['Videos_Type' => $videos_group];
    }

    public function videos(Request $request)
    {

        $this->setParams($request);

        $videos = Video::where('status', 1)
                        ->join('translator_translations', "videos.reciter_id" , '=', 'translator_translations.item')
                        ->where('group', 'reciter-name');

        if ($this->language !== null) {
            $videos = $videos->where('locale', $this->language->locale);
        }else{
            $videos = $videos->where('locale','ar');
        }

        $videos = $videos->select( 'videos.*', 'translator_translations.text as reciter_name')->get()->groupBy('reciter_id');
        $id = 1;
        $results = [];
        foreach ($videos as $key => $item) {
            $item_videos = [];
            foreach ($item as  $it) {
                $item_videos[] = [
                    'id' => $it->id,
                    'video_type' => $it->vgroup_id,
                    'video_url' => $it->url,
                    'video_thumb_url' => $it->getImage(),
                ];
            }
            $results[] = [
                'id' => $it->reciter_id,
                'reciter_name' => $it->reciter_name,
                'videos' => $item_videos

            ];
        };
        return  ['Videos' => $results];
    }
    public function getRead($id)
    {
        $read = Read::where('status', 1)
            ->where('reads.id', $id)
            ->join('reciters', 'reciters.id', '=', 'reads.reciter_id')
            ->join('rewayat', 'rewayat.id', '=', 'reads.rewaya_id');

        if ($this->language !== null) {
            $read = $read->join('reciter_translations', 'reads.reciter_id', '=', 'reciter_translations.reciter_id')
                ->join('rewaya_translations', 'reads.rewaya_id', '=', 'rewaya_translations.rewaya_id')
                ->where('reciter_translations.language_id', $this->language->id)
                ->where('rewaya_translations.language_id', $this->language->id)
                ->select('reads.*', 'reciter_translations.name as reciter_name', 'rewaya_translations.name as rewaya_name');
        } else {
            $read = $read->select('reads.*', 'reciters.name as reciter_name', 'rewayat.name as rewaya_name');
        }
        $read = $read->first();
        if ($read) {
            $read->soar = sura_read::where('status', 1)
                ->where('read_id', $read->id)
                ->orderBy('sura_id', 'ASC')
                ->pluck('sura_id');
        }


        return $read;
    }

    public function getLanguages()
    {
        $languages = Language::get();
        $langs = [];
        foreach ($languages as $language) {
            $item = [];
            $item['id'] = (string) $language->id;
            $item['language'] = '_' . $language->name_english;
            $item['reciter_name'] = 'http://api.mp3quran.net/api_2/reads?language=' . $language->locale;
            $item['sura_name'] = 'http://api.mp3quran.net/api_2/soar?language=' . $language->locale;
            $item['moshaf_name'] = 'http://api.mp3quran.net/api_2/moshaf?language=' . $language->locale;
            $langs[] = $item;
        }

        return $langs;
    }

    public function setParams($request)
    {
        if ($request->input('language')) {
            $this->language = Language::where('locale', $request->input('language'))->first();
        }

        if ($request->input('reciter')) {
            $this->reciter = Reciter::where('status', 1)->where('id', $request->input('reciter'))->first();
        }
        if ($request->input('rewaya')) {
            $this->rewaya = Rewaya::where('status', 1)->where('id', $request->input('rewaya'))->first();
        }
        if ($request->input('sura')) {
            $this->sura = Sora::where('status', 1)->where('id', $request->input('sura'))->first();
        }
        if ($request->input('last_updated_date')) {
            $this->last_updated_date = $request->input('last_updated_date');
        }
    }
}
