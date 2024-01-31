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
            $item = $radio->getRadioItem();
        } catch (\Throwable $th) {
            $item = [];
            \Log::notice('Error Playing Radio  with Id: ' . $input['id']);
        }
        return  $item;
    }
}
