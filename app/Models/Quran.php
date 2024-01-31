<?php

namespace App\Models;

use App\Models\QuranSound;
use App\Models\QuranVerseTiming;
use Illuminate\Database\Eloquent\Model;

class Quran extends Model
{
    protected $table = 'reads';
    protected $guarded = ['id'];

    public function verses_timings()
    {
        return $this->hasMany(QuranVerseTiming::class, 'read_id', 'id');
    }

    public function verses_timing()
    {
        return $this->hasOne(QuranVerseTiming::class, 'read_id', 'id');
    }

    public function mushaf()
    {
        return $this->belongsTo(Mushaf::class,'mushaf_id','id');
    }
}
