<?php

namespace App\Models;

use App\ModelsV2\Quran;
use Illuminate\Database\Eloquent\Model;

class QuranSound extends Model
{
    protected $table = 'quran_sounds';
    protected $guarded = ['id'];
    protected $appends = ["url"];

    public function quran() {
        return $this->belongsTo(Quran::class);
    }

    public function getUrlAttribute()
    {
        return $this->server
            ? sprintf('%squran/%s/%s/%s', env($this->server), $this->quran->mushaf_id, $this->quran->sura_id, $this->file)
            : sprintf('%squran/%s/%s/%s', env('AUDIO_FILES_PATH'), $this->quran->mushaf_id, $this->quran->sura_id, $this->file);
    }
}
