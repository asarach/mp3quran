<?php

namespace App\Http\Controllers\Api3;

use App\Tv;

use App\Sora;

use App\Rewaya;
use App\Reciter;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Waavi\Translation\Models\Language;


class MainController extends ApiController
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
        $this->setParams($request);
      /*  Cache::forget('api_v3_languages');
        $language = Cache::rememberForever('api_v3_languages', function () {
            return $this->getLanguages();
        });*/

        $language = $this->getLanguages();
        return compact('language');
    }

    /**
     * Suwar
     *
     * Get a list of all avalibale suwar ordered by added date
     *
     * @group API 2
     *
     * @bodyParam language string The language of texts in suwar arrays. If is not set the default language of texts is arabic. exemple: 'ar', 'en', 'fr'...
     *
     * @return json
     */
    public function suwar(Request $request)
    {
        $this->setParams($request);
        $suwar = Cache::rememberForever('api_v3_suwar_' . $request->input('language'), function () {
            return $this->getSuwar();
        });

        return compact('suwar');
    }

    /**
     * Riwayat
     *
     * Get a list of all avalibale riwayat ordered by added date
     *
     * @group API 2
     *
     * @bodyParam  language string The language of texts in riwayat arrays. If is not set the default language of texts is arabic. exemple: 'ar', 'en', 'fr'...
     *
     * @return json
     */
    public function riwayat(Request $request)
    {
        $this->setParams($request);
        $riwayat = Cache::rememberForever('api_v3_riwayat_' . $request->input('language'), function () {
            return $this->getRiwayat();
        });

        return compact('riwayat');
    }

    /**
     * Riwayat
     *
     * Get a list of all avalibale riwayat ordered by added date
     *
     * @group API 2
     *
     * @bodyParam  language string The language of texts in riwayat arrays. If is not set the default language of texts is arabic. exemple: 'ar', 'en', 'fr'...
     *
     * @return json
     */
    public function moshaf(Request $request)
    {
        return $this->getMoshaf();

        $this->setParams($request);
        $riwayat = Cache::rememberForever('api_v3_riwayat_' . $request->input('language'), function () {
            return $this->getMoshaf();
        });

        return compact('riwayat');
    }
    /**
     * liveTv
     *
     * Get a list of all avalibale riwayat ordered by added date
     *
     * @group API 2
     *
     * @bodyParam  language string The language of texts in riwayat arrays. If is not set the default language of texts is arabic. exemple: 'ar', 'en', 'fr'...
     *
     * @return json
     */
    public function liveTv(Request $request)
    {
        $this->setParams($request);
        /* $name = 'api_v3_live_tv_' . $request->input('language');
         // Cache::forget($name);
       /*$livetv = Cache::rememberForever($name, function () {
             $livetv = DB::table('tvs')->where('status', 1);

             if (request()->last_update) {
                 $date = Carbon::parse(request()->last_update)->format('Y-m-d');

                 $livetv->whereDate('tvs.updated_at', '>=', $date);
             }

             if ($this->language !== null) {
                 $livetv = $livetv->join('translator_translations', 'tvs.id', '=', 'translator_translations.item')
                     ->where('translator_translations.locale', $this->language_code)
                     ->where('translator_translations.group', 'tv-name')
                     ->select('tvs.id', 'translator_translations.text as name', 'tvs.url');
             } else {
                 $livetv = $livetv->select('tvs.id', 'tvs.name', 'tvs.url');
             }
             return $livetv->get();
         });*/

        $livetv = DB::table('tvs')->where('status', 1);

        if (request()->last_update) {
            $date = Carbon::parse(request()->last_update)->format('Y-m-d');

            $livetv->whereDate('tvs.updated_at', '>=', $date);
        }

        if ($this->language !== null) {
            $livetv = $livetv->join('translator_translations', 'tvs.id', '=', 'translator_translations.item')
                ->where('translator_translations.locale', $this->language_code)
                ->where('translator_translations.group', 'tv-name')
                ->select('tvs.id', 'translator_translations.text as name', 'tvs.url');
        } else {
            $livetv = $livetv->select('tvs.id', 'tvs.name', 'tvs.url');
        }

        $livetv = $livetv->get();

        return compact('livetv');
    }

    public function radios(Request $request)
    {
        $this->setParams($request);
       /* $name = 'api_v3_radios_' . '_last_updated_date_' . $this->last_updated_date . $request->input('language');
        // Cache::forget($name);
        $radios = Cache::rememberForever($name, function () {
            $radios = DB::table('radios')->where('status', 1);

            if (request()->last_update) {
                $date = Carbon::parse(request()->last_update)->format('Y-m-d');

                $radios->whereDate('radios.updated_at', '>=', $date);
            }

            if ($this->language !== null) {
                $radios = $radios->join('translator_translations', 'radios.id', '=', 'translator_translations.item')
                    ->where('translator_translations.locale', $this->language_code)
                    ->where('translator_translations.group', 'radio-name')
                    ->select('radios.id', 'translator_translations.text as name', 'radios.url', 'radios.created_at as recent_date');
            } else {
                $radios = $radios->select('radios.id', 'radios.name', 'radios.url');
            }

            if ($this->last_updated_date !== null) {
                $date = Carbon::parse($this->last_updated_date)->toDateTimeString();
                $radios = $radios->where('radios.updated_at', '>=', $date);
            }

            return $radios->get();
        });*/

        $radios = DB::table('radios')->where('status', 1);

        if (request()->last_update) {
            $date = Carbon::parse(request()->last_update)->format('Y-m-d');

            $radios->whereDate('radios.updated_at', '>=', $date);
        }

        if ($this->language !== null) {
            $radios = $radios->join('translator_translations', 'radios.id', '=', 'translator_translations.item')
                ->where('translator_translations.locale', $this->language_code)
                ->where('translator_translations.group', 'radio-name')
                ->select('radios.id', 'translator_translations.text as name', 'radios.url', 'radios.created_at as recent_date');
        } else {
            $radios = $radios->select('radios.id', 'radios.name', 'radios.url');
        }

        if ($this->last_updated_date !== null) {
            $date = Carbon::parse($this->last_updated_date)->toDateTimeString();
            $radios = $radios->where('radios.updated_at', '>=', $date);
        }

        $radios = $radios->get();

        return compact('radios');
    }
}
