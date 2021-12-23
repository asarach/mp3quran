<?php

namespace App\Http\Controllers;

use App\Radio;

class RadioController extends Controller
{
    public function item()
    {
        $input = request()->all();
        if (!isset($input['id'])) {
            $input['id'] = '';
        }
        try {
            $radio = Radio::where('status', 1)->findOrFail($input['id']);

            $item = [
                'id' => "100002-" . $radio->id,
                'read_id' => $radio->id,
                'sora_id' => "100002",
                'read_slug' => '',
                'num' => "000",
                'name' => $radio->getLocaleName(),
                'reciter' => "",
                'type' => "radio",
                'url' => route('radio.index'),
                'description' => $radio->getLocaleShareDescription(),
                'share_url' => route('radio.index'),
                'share_title' => $radio->getLocaleName(),
                'share_description' => $radio->getLocaleShareDescription(),
                'file' => $radio->url,
            ];
        } catch (\Throwable $th) {
            $item = [];
            \Log::notice('Error Playing Radio  with Id: ' . $input['id']);
        }
        return  $item;
    }
}
