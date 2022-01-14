<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Heroicpixels\Filterable\FilterableTrait;
use Kyslik\ColumnSortable\Sortable;
use Lang;
use LaravelLocalization;

class Tsora extends Model
{
    use FilterableTrait, Searchable, Sortable;

    protected $fillable = ['name', 'status'];

    public $sortable = ['id', 'name'];


    public function searchableAs()
    {
        return 'tsoras_index';
    }

    public function toArray()
    {
        if (strpos(url()->current(), 'admin') !== false) {
            $array = parent::ToArray();
        } else {
            $array = [
                'id' => $this->id,
                'tafsir_id' => $this->tafsir_id,
                'name' => $this->getLocaleName(),
                'tafsir_name' => $this->getTafsirLocaleName(),
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
            $array['name_' . $key ] = Lang::get('tsora.name-' . $this->id, [], $key);
        }

        return $array;
    }
   
    /**
    * Get the language of the annonce.
    */
    public function tafsir()
    {
        return $this->belongsTo('App\Models\Tafsir');
    }

    public function getLocaleName()
    {
        $name = trans('tsora-name.' . $this->id);
        if (strpos($name, 'tsora-name.') !== false) {
            return $this->name;
        }
        return $name;
    }

    public function getTafsirLocaleName()
    {
        $name = trans('tafsir-name.' . $this->tafsir_id);
        if (strpos($name, 'tafsir-name.') !== false) {
            return $this->tafsir->name;
        }
        return $name;
    }

}
