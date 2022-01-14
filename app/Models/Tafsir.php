<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Heroicpixels\Filterable\FilterableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Kyslik\ColumnSortable\Sortable;
use Lang;
use LaravelLocalization;

class Tafsir extends Model
{
    use FilterableTrait, Searchable,  SoftDeletes, Sortable;

    protected $fillable = ['name', 'status'];

    public $sortable = ['id', 'name'];

    protected $dates = ['deleted_at'];

    public function searchableAs()
    {
        return 'tafsirs_index';
    }

    public function toArray()
    {
        if (strpos(url()->current(), 'admin') !== false) {
            $array = parent::ToArray();
        } else {
            $array = [
                'id' => $this->id,
                'name' => $this->getLocaleName(),
            ];
        }
        
        return $array;
    }

    public function toSearchableArray()
    {
        $array = [];
        $array['id'] = $this->id;
        $array['name'] = $this->name;
        $langs = LaravelLocalization::getSupportedLocales();
        foreach ($langs as $key => $lang) {
            $array['name_' . $key ] = Lang::get('tafsir.name-' . $this->id, [], $key);
        }

        return $array;
    }
   
    /**
    * Get the language of the annonce.
    */
    public function tsoar()
    {
        return $this->hasMany('App\Models\Tsora');
    }

    public function getLocaleName()
    {
        $name = trans('tafsir-name.' . $this->id);
        if (strpos($name, 'tafsir-name.') !== false) {
            return $this->name;
        }
        return $name;
    }

}
