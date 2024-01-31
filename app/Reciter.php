<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Heroicpixels\Filterable\FilterableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Kyslik\ColumnSortable\Sortable;
use Lang;
use LaravelLocalization;

class Reciter extends Model
{
    use FilterableTrait, Searchable,  SoftDeletes, Sortable;

    protected $fillable = ['name', 'status'];

    public $sortable = ['id', 'name'];

    protected $dates = ['deleted_at'];

    public function searchableAs()
    {
        return 'reciters_index';
    }

    public function toArray()
    {
        if (strpos(url()->current(), 'admin') !== false) {
            $array = parent::ToArray();
            $array['rewayat_names'] = $this->getRewayatNames();
        } else {
            $array = [
                'id' => $this->id,
                'slug' => $this->getSlug(),
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
            $array['name_' . $key ] = Lang::get('reciter.name-' . $this->id, [], $key);
        }

        return $array;
    }
   
    /**
    * Get the language of the annonce.
    */
    public function reads()
    {
        return $this->hasMany('App\Read');
    }


    public function getSlug()
    {
        $read = $this->reads()->first();
        if ($read) {
            return $read->slug;
        } else {
            return '';
        }
        
    }
    public function getLocaleName()
    {
        $name = trans('reciter-name.' . $this->id);
        if (strpos($name, 'reciter-name.') !== false) {
            return $this->name;
        }
        return $name;
    }
    public function getRewayatNames()
    {
        $rewayat = [];

        foreach ($this->reads as $read) {
            if ($read->rewaya) {
                $rewayat[] = $read->rewaya->getLocaleName();
            }
        }

        return $rewayat;
    }
}
