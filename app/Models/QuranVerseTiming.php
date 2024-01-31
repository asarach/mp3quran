<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuranVerseTiming extends Model
{
    protected $table = 'reads_timing';
    protected $guarded = ['id'];

    public function moshaf()
    {
        return $this->belongsTo(Mushaf::class, "read_id", "id");
    }

    public function track()
    {
        return $this->hasOne(SurahRead::class, "read_id", "read_id");
    }
}
