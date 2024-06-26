<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Heroicpixels\Filterable\FilterableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use CyrildeWit\EloquentViewable\Contracts\Viewable as ViewableContract;
use CyrildeWit\EloquentViewable\InteractsWithViews;
use Cviebrock\EloquentSluggable\Sluggable;
use Kyslik\ColumnSortable\Sortable;
use Lang;
use LaravelLocalization;

class Tv extends Model implements ViewableContract
{
    use FilterableTrait, Searchable, InteractsWithViews, SoftDeletes, Sortable, Sluggable;

    protected $fillable = ['name', 'slug', 'url', 'status'];

    protected $removeViewsOnDelete = true;

    public $sortable = ['id', 'name'];

    protected $dates = ['deleted_at'];

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
        return 'tvs_index';
    }

    public function toArray()
    {
        if (strpos(url()->current(), 'admin') !== false) {
            $array = parent::ToArray();
        } else {
            $array = [
                'id' => $this->id,
                'url' => $this->url,
                'slug' => $this->slug,
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
            $array['name_' . $key ] = Lang::get('tv.name-' . $this->id, [], $key);
        }

        return $array;
    }

    /**
     * The users that maked to the mushaf.
     */
    public function images()
    {
        return $this->morphToMany('App\Media', 'mediable', 'mediable');
    }

    public function getLocaleName()
    {
        $name = trans('tv-name.' . $this->id);
        if (strpos($name, 'tv-name.') !== false) {
            return $this->name;
        }
        return $name;
    }
}
