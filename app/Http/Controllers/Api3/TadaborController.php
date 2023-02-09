<?php

namespace App\Http\Controllers\Api3;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Http\Controllers\Api3\ApiController;
use App\Models\tadabor;
use App\Models\Tsora;


class TadaborController extends ApiController
{
    /**
     * API 2 controller.
     *
     * @return void
     */
    public function __construct()
    {
    }
    // public function tadabor(Request $request)
    // {

    //     $this->setParams($request);
    //     Cache::forget('api_v3_tadabor_' . $request->input('language'));
    //     $tadabor = Cache::rememberForever('api_v3_tadabor_' . $request->input('language'), function () {
    //         return $this->gettadabor();
    //     });

    //     return compact('tadabor');
    // }
    public function tadabor(Request $request)
    {
        $this->setParams($request);

        $name = 'api_v3_tadabor_' . $request->input('language') . '_tadabor_id_' . $request->input('tadabor_id');
        Cache::forget($name);
        $tadabor = Cache::rememberForever($name, function () {
            return $this->gettadabor();
        });

        return compact('tadabor');
    }

    // public function gettadabor()
    // {
    //     $tadabor = tadabor::where('status', 1);
    //     if ($this->language !== null) {
    //         $tadabor = $tadabor->join('translator_translations', 'tadabors.id', '=', 'translator_translations.item')
    //             ->where('translator_translations.locale', $this->language_code)
    //             ->where('translator_translations.group', 'tadabor-name')
    //             ->select('tadabors.id', 'translator_translations.text as name');
    //     } else {
    //         $tadabor = $tadabor->select('tadabors.id', 'tadabors.name');
    //     }
    //     $tadabor = $tadabor->get()->toArray();
    //     $result = [];
    //     foreach ($tadabor as  $tadabor) {
    //         $tadabor['url'] =  config('app.url') . '/api/v3/tadabor?tadabor=' . $tadabor['id'] . '&language=' . $this->language_code;
    //         $result[] = $tadabor;
    //     }

    //     return $result;
    // }
    public function gettadabor()
    {
        $tsoras = Tsora::where('status', 1);
        if ($this->tadabor !== null) {
            $tsoras = $tsoras->where('tadabor_id', $this->tadabor);
        }
        if ($this->sura !== null) {
            $result = [$this->sura => $tsoras->where('sura_id', $this->sura)->get()->sortBy('order')->values()->toArray()];
        } else {
            $result = [];
            $suras_ids = range(1, 114);
            $tsoras = $tsoras->get();

            foreach ($suras_ids as $sura_id) {
                $result[$sura_id] = $tsoras->where('sura_id', $sura_id)->sortBy('order')->values()->toArray();
            }
            $result['others'] = $tsoras->whereNotIN('sura_id', $suras_ids)->sortBy('order')->values()->toArray();
        }

        return ['name' => $tsoras->first()->gettadaborLocaleName(), 'soar' => $result];
    }
}
