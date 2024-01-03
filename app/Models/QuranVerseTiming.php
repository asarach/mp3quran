<?php

namespace App\Models;

use App\Models\Quran;
use Illuminate\Database\Eloquent\Model;

class QuranVerseTiming extends Model
{
    protected $table = 'reads_timing';
    protected $guarded = ['id'];
    public $timestamps = false;

    public function quran()
    {
        return $this->belongsTo(Quran::class, "read_id", "id");
    }
}
