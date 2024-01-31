<?php

namespace App\Models\Imo;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;

    protected $table = 'imo_albums';
    protected $primaryKey = 'album_id';
    protected $fillable = [
        'album_id', 'album_cover', 'album_title', 'album_desc', 'album_lang', 'album_type', 
        'album_label', 'album_nature', 'album_duration', 'album_score', 'album_time', 
        'author_name', 'author_avatar', 'author_desc', 'album_level', 'item_type'
    ];

}
