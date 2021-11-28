<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Heroicpixels\Filterable\FilterableTrait;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Kyslik\ColumnSortable\Sortable;

class Server extends Model
{
    use FilterableTrait, Searchable, SoftDeletes,Sortable;

    protected $fillable = ['name', 'url', 'ftp', 'status'];

    public $sortable = ['id', 'name'];

    protected $dates = ['deleted_at'];

    public  $timestamps  = false;

    protected $table = 'servers';
}
