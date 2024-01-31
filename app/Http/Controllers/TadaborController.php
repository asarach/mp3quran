<?php

namespace App\Http\Controllers;

use App\Tadabor;

class TadaborController extends Controller
{

    public function item()
    {
        $tadabor =  Tadabor::find(request('id'));

        $item = $tadabor->getTadaborItem();
        

        return  $item;
    }
}
