<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Heroicpixels\Filterable\FilterableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Kyslik\ColumnSortable\Sortable;
use Cviebrock\EloquentSluggable\Sluggable;

class SpecialRewaya extends Model
{
    use FilterableTrait, SoftDeletes, Sortable, Sluggable;

    protected $fillable = ['name', 'status'];

    public $sortable = ['id', 'name'];

    protected $dates = ['deleted_at'];

    public $timestamps = false;

    protected $table = 'special_rewayat';

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
