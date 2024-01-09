<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Heroicpixels\Filterable\FilterableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Kyslik\ColumnSortable\Sortable;
use Cviebrock\EloquentSluggable\Sluggable;

class Mushaf extends Model
{
    use FilterableTrait, SoftDeletes, Sortable, Sluggable;

    protected $fillable = ['name'];

    public $sortable = ['id', 'name'];

    protected $dates = ['deleted_at'];

    //public  $timestamps  = false;

    protected $table = 'mushafs';

    public function sluggable():array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function getLocaleName()
    {
        $name = trans('mushaf-name.' . $this->id);
        if (strpos($name, 'mushaf-name.') !== false) {
            return $this->name;
        }
        return $name;
    }
}
