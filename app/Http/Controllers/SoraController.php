<?php

namespace App\Http\Controllers;

use App\Read;
use App\Sora;

class SoraController extends Controller
{

    /**
     * Display the specified resource.
     *
     * @param  \App\Read  $read
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        $read = request('r');
        $soar = Sora::where('status', 1);
        if ($read) {
            $soar = $soar
                ->leftJoin('sura_read', 'soar.id', '=', 'sura_read.sura_id')
                ->where('sura_read.read_id', $read);
        }

        $soar = $soar->orderBy('num', 'asc')->get();

        return compact('soar');
    }


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function item()
    {
        $input = request()->all();
        if (!isset($input['s'])) {
            $input['s'] = '';
        }
        if (!isset($input['r'])) {
            $input['r'] = '';
        }
        if (isset($input['id'])) {
            $input = explode('-', $input['id']);
            $input['s'] = ltrim($input['0'], '0');
            $input['r'] = $input['1'];
        }
        if (isset($input['id'])) {
            $input = explode('-', $input['id']);
            $input['s'] = ltrim($input['0'], '0');
            $input['r'] = $input['1'];
        }
        try {
            $sora = Sora::where('id', $input['s'])
                ->first();

            $read = Read::where('id', $input['r'])
                ->first();


            $item = [
                'id' => $sora->getNum() . '-' . $read->id,
                'read_id' => $read->id,
                'sora_id' => $sora->id,
                'num' => $sora->getNum(),
                'name' => $sora->getLocaleName(),
                'reciter' => $read->reciter->getLocaleName(),
                'read_slug' => $read->slug,
                'type' => 'sora',
                'share_url' => route('reciter.show', ['slug' => $read->slug]),
                'share_description' => $read->getLocaleShareDescription($sora->getLocaleName()),
                'share_title' => $read->getLocaleShareTitle($sora->getLocaleName()),
                'file' => $read->getAudioUrl($sora->id),
            ];
        } catch (\Throwable $th) {
            $item = [];
            \Log::notice('Error sora Item with read: ' . $input['r'] . ' and sora : ' . $input['s']);
        }




        return  $item;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function audioDetails($id)
    {
        $input = explode('-', $id);
        $input['0'] = ltrim($input['0'], '0');

        try {
            $sora = Sora::where('id', $input['0'])
                ->first();

            $read = Read::where('id', $input['1'])
                ->first();


            $item = [
                'id' => $sora->getNum() . '-' . $read->id,
                'read_id' => $read->id,
                'sora_id' => $sora->id,
                'num' => $sora->getNum(),
                'name' => $sora->getLocaleName(),
                'reciter' => $read->reciter->getLocaleName(),
                'read_slug' => $read->slug,
                'type' => 'sora',
                'share_url' => route('reciter.show', ['slug' => $read->slug]),
                'share_description' => $read->getLocaleShareDescription($sora->getLocaleName()),
                'share_title' => $read->getLocaleShareTitle($sora->getLocaleName()),
                'file' => $read->getAudioUrl($sora->id),
            ];
        } catch (\Throwable $th) {
            $item = [];
            \Log::notice('Error sora Item with read: ' . $input['r'] . ' and sora : ' . $input['s']);
        }




        return  $item;
    }
}
