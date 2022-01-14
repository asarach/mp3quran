<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tbookmark extends Model
{
    use HasFactory;
    

    protected $table = 'tsora_bookmark';

    /**
     * Get the language of the annonce.
     */
    public function tsora()
    {
        return $this->belongsTo('App\Models\Tsora');
    }
    /**
     * Get the language of the annonce.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
