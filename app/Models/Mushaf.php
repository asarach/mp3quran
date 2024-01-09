<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mushaf extends Model
{
    protected $table = 'reads';
    protected $guarded = ['id'];

    public function authors()
    {
        return $this->belongsTo(Author::class, 'reciter_id', 'id');
    }
}
