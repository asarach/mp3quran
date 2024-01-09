<?php

namespace App\Http\Controllers\Api3;

use Carbon\Carbon;
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
       /* Cache::forget('api_v3_tafasir_' . $request->input('language'));
        $tafasir = Cache::rememberForever('api_v3_tafasir_' . $request->input('language'), function () {
            return $this->getTafasir();
        });*/

        $tafasir = $this->getTafasir();

        return compact('tafasir');
    }
    public function tafsir(Request $request)
    {
        $this->setParams($request);

        /*$name = 'api_v3_tafsir_' . $request->input('language') . '_tafsir_id_' . $request->input('tafsir_id');
        Cache::forget($name);
        $tafasir = Cache::rememberForever($name, function () {
            return $this->getTafsir();
        });*/

        $tafasir = $this->getTafsir();

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

        if (request()->last_update) {
            $date = Carbon::parse(request()->last_update)->format('Y-m-d');

            $tafasir->whereDate('tafsirs.updated_at', '>=', $date);
        }

        $tafasir = $tafasir->get()->toArray();
        $result = [];
        foreach ($tafasir as  $tafsir) {
            $tafsir['url'] =  config('app.url') . '/api/v3/tafsir?tafsir=' . $tafsir['id'] . '&language=' . $this->language_code;
            $result[] = $tafsir;
        }

        return $result;
    }
    public function getTafsir()
    {
        $tsoras = Tsora::where('status', 1);

        if (request()->last_update) {
            $date = Carbon::parse(request()->last_update)->format('Y-m-d');

            $tsoras->whereDate('updated_at', '>=', $date);
        }

        if ($this->tafsir !== null) {
            $tsoras = $tsoras->where('tafsir_id', $this->tafsir);
        }
        if ($this->sura !== null) {
            $result = [$this->sura => $tsoras->where('sura_id', $this->sura)->get()->sortBy('order')->values()->toArray()];
        } else {
            $result = [];
            $suras_ids = range(1, 114);
            $result = $tsoras->orderBY('sura_id', 'asc')->orderBY('order', 'asc')->get();
            // dd( $tsoras->toArray());
            // foreach ($suras_ids as $sura_id) {
            //     foreach ($tsoras->where('sura_id', $sura_id)->sortBy('order')->values() as $key => $value) {
            //         $result[] =  $value;
            //     }
              
            // }
            // $result[] = $tsoras->whereNotIN('sura_id', $suras_ids)->sortBy('order')->values()->toArray();
        }

        return ['name' => $tsoras->first()?->getTafsirLocaleName(), 'soar' => $result];
    }
}
