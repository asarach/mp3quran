<?php

namespace App\Http\Controllers;

use App\Tadabor;

class TadaborController extends Controller
{

    public function item()
    {
        $tadabor =  Tadabor::find(request('id'));

        $item = [
            'id' =>  'tb' . $tadabor->id,
            'read_id' => 'read_id',
            'sora_id' => 'sora_id',
            'num' => $tadabor->getNum(),
            'name' => $tadabor->getLocaleTitle(),
            'rewaya' => $tadabor->getRewayaName(),

            'read_slug' => $tadabor->slug,
            'type' => 'item',
            'url' => 'url',
            'description' => $tadabor->getLocaleShareDescription(),
            'share_url' => route('tadabor.show', ['slug' => $tadabor->id]),
            'share_description' => $tadabor->getLocaleShareDescription(),
            'share_title' => $tadabor->getLocaleShareTitle(),
            'file' => $tadabor->audio_url,
        ];
        if ($tadabor->reciter) {
            $item['reciter'] = $tadabor->reciter->getLocaleName();
        } else {
            $item['reciter'] = '';
        }

        return  $item;
    }
}
