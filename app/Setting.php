<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = array('key', 'value');

    public  $timestamps  = false;
}
