<?php

namespace App;

use Laravel\Scout\Searchable;
use Kyslik\ColumnSortable\Sortable;
use Illuminate\Support\Facades\Lang;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Heroicpixels\Filterable\FilterableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;


class Vgroup extends Model
{
    use FilterableTrait, Searchable, SoftDeletes, Sortable, Sluggable;

    protected $fillable = ['name'];

    public $sortable = ['id', 'name'];

    protected $dates = ['deleted_at'];

    public  $timestamps  = false;

    protected $table = 'vgroups';

    public function sluggable():array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function searchableAs()
    {
        return 'vgroups_index';
    }

    
    public function toSearchableArray()
    {
        $array = [];
        $array['id'] = $this->id;
        $array['name'] = $this->name;
        $langs = LaravelLocalization::getSupportedLocales();
        foreach ($langs as $key => $lang) {
            $array['name_' . $key ] = Lang::get('vgroup-name.' . $this->id, [], $key);
        }

        return $array;
    }

    public function getLocaleName()
    {
        $name = trans('vgroup-name.' . $this->id);
        if (strpos($name, 'vgroup-name.') !== false) {
            return $this->name;
        }
        return $name;
    }
}
