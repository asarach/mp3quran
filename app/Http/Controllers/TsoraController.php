<?php

namespace App\Http\Controllers;

use App\Models\Tsora;
use App\Models\Tbookmark;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TsoraController extends Controller
{
    public function item()
    {
        $input = request()->all();
        if (!isset($input['id'])) {
            $input['id'] = '';
        }

        try {
            $tsora = Tsora::where('status', 1)->findOrFail($input['id']);

            $item = [
                'id' => "20000" . $tsora->tafsir_id . "-" . $tsora->id,
                'read_id' => $tsora->id,
                'sora_id' => "100002",
                'read_slug' => '',
                'num' => "000",
                'name' => $tsora->getLocaleName(),
                'reciter' => "",
                'type' => "tsora",
                'url' => '',
                'description' => '',
                'share_url' => '',
                'share_title' => $tsora->getLocaleName(),
                'share_description' => '',
                'currentTime' => '0',
                'file' => $tsora->url,
            ];

            if (isset($input['time'])) {
                $item['currentTime'] = $input['time'];
            }
        } catch (\Throwable $th) {
            $item = [];
            \Log::notice('Error Playing Tsora  with Id: ' . $input['id']);
        }
        return  $item;
    }
    public function bookmark()
    {
        $input = request()->all();


        // try {
        $tbookmark = new Tbookmark;

        $tbookmark->time = $input['time'];
        $tbookmark->user()->associate(Auth::user()->id);
        $tbookmark->tsora()->associate($input['id']);

        $result = $tbookmark->save();


        // } catch (\Throwable $th) {
        //     $item = [];
        //     \Log::notice('Error Playing Tsora  with Id: ' . $input['id']);
        // }
        return  $result;
    }
}
