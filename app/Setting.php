<?php

namespace Mp3quran;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = array('key', 'value');

    public  $timestamps  = false;
}
