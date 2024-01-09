<?php

namespace App\Http\Controllers\Api3;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Http\Controllers\Api3\ApiController;
use App\Tadabor;


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

    public function tadabor(Request $request)
    {
        $this->setParams($request);

     /*   $name = 'api_v3_tadabor_' . $request->input('language') . '_sura_id_' . $request->input('sura');
        Cache::forget($name);
        $tadabor = Cache::rememberForever($name, function () {
            return $this->getTadabor();
        });*/

        $tadabor = $this->getTadabor();

        return compact('tadabor');
    }


    public function getTadabor()
    {
        $tsoras = Tadabor::where('status', 1);

        if (request()->last_update) {
            $date = Carbon::parse(request()->last_update)->format('Y-m-d');

            $tsoras->whereDate('updated_at', '>=', $date);
        }

        if ($this->sura !== null) {
            $result = [$this->sura => $tsoras->where('sura_id', $this->sura)->get()->sortBy('order')->values()->toArray()];
        } else {
            $result = [];
            $suras_ids = range(1, 114);
            $tsoras = $tsoras->get();

            foreach ($suras_ids as $sura_id) {
                $tadabors = $tsoras->where('sura_id', $sura_id)->sortBy('order')->values()->toArray();
                if (count($tadabors) > 0) {
                    $result[$sura_id] = $tadabors;
                }
            }
        }

        return $result;

        // return ['name' => $tsoras->first()->gettadaborLocaleName(), 'soar' => $result];
    }
}
