<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlaylistItem extends Model
{
    use HasFactory;

    /**
     * Get the language of the annonce.
     */
    public function playlist()
    {
        return $this->belongsTo('App\Models\Playlist');
    }
}
