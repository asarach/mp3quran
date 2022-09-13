<?php

namespace App\Http\Controllers\Api3;

use App\Sora;

use App\Rewaya;

use App\Reciter;
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
        $language = Cache::rememberForever('api_v3_languages', function () {
            return $this->getLanguages();
        });

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
}
