<?php

namespace App\Models\Imo;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $table = 'imo_items';
    protected $primaryKey = 'item_id';

    protected $fillable = [
        'album_id',
        'item_index',
        'item_title',
        'item_lang',
        'item_desc',
        'item_duration',
        'item_time',
        'item_url',
    ];
}
