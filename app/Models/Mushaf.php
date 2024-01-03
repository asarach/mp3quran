<?php

namespace App\Models;

use App\Models\Author;
use App\Models\Quran;
use Illuminate\Database\Eloquent\Model;

class Mushaf extends Model
{
    protected $table = 'mushafs';
    protected $guarded = ['id'];

    public function qurans()
    {
        return $this->hasMany(Quran::class, 'mushaf_id', 'id');
    }

    public function authors()
    {
        return $this->belongsToMany(Author::class, 'reads', 'mushaf_id', 'reciter_id')->withTimestamps();
    }
}
