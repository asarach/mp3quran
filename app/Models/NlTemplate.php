<?php

namespace Mp3quran\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NlTemplate extends Model
{
    use  SoftDeletes;

    protected $dates = ["deleted_at"];
}

