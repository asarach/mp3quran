<?php

namespace App\Http\Controllers\Api3;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Http\Controllers\Api3\ApiController;
use App\Models\Tafsir;
use App\Models\Tsora;


class TafsirController extends ApiController
{
    /**
     * API 2 controller.
     *
     * @return void
     */
    public function __construct()
    {
    }
    public function tafasir(Request $request)
    {

        $this->setParams($request);
        Cache::forget('api_v3_tafasir_' . $request->input('language'));
        $tafasir = Cache::rememberForever('api_v3_tafasir_' . $request->input('language'), function () {
            return $this->getTafasir();
        });

        return compact('tafasir');
    }
    public function tafsir(Request $request)
    {
        $this->setParams($request);
        $name = 'api_v3_tafsir_' . $request->input('language') . '_tafsir_id_' . $request->input('tafsir_id');
        Cache::forget($name);
        $tafasir = Cache::rememberForever($name, function () {
            return $this->getTafsir();
        });

        return compact('tafasir');
    }

    public function getTafasir()
    {
        $tafasir = Tafsir::where('status', 1);
        if ($this->language !== null) {
            $tafasir = $tafasir->join('translator_translations', 'tafsirs.id', '=', 'translator_translations.item')
                ->where('translator_translations.locale', $this->language_code)
                ->where('translator_translations.group', 'tafsir-name')
                ->select('tafsirs.id', 'translator_translations.text as name');
        } else {
            $tafasir = $tafasir->select('tafsirs.id', 'tafsirs.name');
        }
        $tafasir = $tafasir->get()->toArray();
        $result = [];
        foreach ($tafasir as  $tafsir) {
            $tafsir['url'] =  config('app.url') . '/api/v3/tafsir?tafsir='.$tafsir['id'].'&language=' . $this->language_code;
            $result[] = $tafsir;
        }

        return $result;
    }
    public function getTafsir()
    {
        $tsoras = Tsora::where('status', 1);
        if ($this->tafsir !== null) {
            $tsoras = $tsoras->where('tafsir_id', $this->tafsir);
        }
        if ($this->sura !== null) {
            $tsoras = $tsoras->where('sura_id', $this->sura);
        }
        $tsoras = $tsoras->get();
        return $tsoras->sortBy('name')->values()->toArray();
    }
}
