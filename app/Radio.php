<?php

namespace Mp3quran;

use CyrildeWit\EloquentViewable\Support\Period;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Laravel\Scout\Searchable;
use Heroicpixels\Filterable\FilterableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use CyrildeWit\EloquentViewable\Contracts\Viewable as ViewableContract;
use Cviebrock\EloquentSluggable\Sluggable;
use Kyslik\ColumnSortable\Sortable;
use Lang;
use LaravelLocalization;

class Radio extends Model
{
    use FilterableTrait, Searchable, SoftDeletes, Sortable, Sluggable;

    protected $fillable = ['name', 'url', 'slug', 'status'];

    protected $removeViewsOnDelete = true;

    public $sortable = ['id', 'name'];

    protected $dates = ['deleted_at'];

    public function searchableAs()
    {
        return 'radios_index';
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
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
                'sort_name' => $this->getSortName(),
                'rewaya_name' => $this->getRewaya(),
                'mushaf_name' => $this->getMushaf(),
                'share_description' => $this->getLocaleShareDescription(),
                'share_title' => $this->getLocaleShareTitle(),
                'share_url' => route('radio.index')
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
            $array['name_' . $key] = Lang::get('radio.name-' . $this->id, [], $key);
        }

        return $array;
    }

    /**
     * The users that maked to the mushaf.
     */
    public function images()
    {
        return $this->morphToMany('Mp3quran\Media', 'mediable', 'mediable');
    }

    /**
     * Get the language of the annonce.
     */
    public function read()
    {
        return $this->belongsTo('Mp3quran\Read');
    }

    /**
     * Get the language of the annonce.
     */
    public function rewaya()
    {
        return $this->belongsTo('Mp3quran\Rewaya');
    }

    public function getLocaleName()
    {
        $name = trans('radio-name.' . $this->id);
        if (strpos($name, 'radio-name.') !== false or $name == '') {
            try {
                $name = trans('reciter-name.' . $this->read->reciter->id);
            } catch (\Throwable $th) {

                $name = 'reciter-name.asa';
            }
            if (strpos($name, 'reciter-name.') !== false) {
                return $this->name;
            }
        }
        return $name;
    }

    public function getSortName()
    {
        try {
            $name = trans('reciter-name.' . $this->read->reciter->id);
        } catch (\Throwable $th) {
            $name = $this->getLocaleName();
        }

        $name = str_replace('Radio', '', $name);
        $name = trim($name);

        return $name;
    }

    public function getLocaleDescription()
    {
        $description = trans('radio-description.' . $this->id);
        if (strpos($description, 'radio-description.') !== false) {
            return $this->description;
        }
        return $description;
    }

    public function getLocaleShareDescription()
    {
        return trans('text.share-description-radio', ['name' => $this->getLocaleName()]);
    }

    public function getLocaleShareTitle()
    {
        return trans('text.share-title-radio', ['name' => $this->getLocaleName()]);
    }


    public function getImage()
    {
        $images = $this->images()->first();
        if ($images) {
            return $images->getImage('images');
        }
        return 'https://picsum.photos/160';
    }

    public function getRewaya()
    {
        if ($this->rewaya) {
            return $this->rewaya->getLocaleName();
        }
        return '';
    }

    public function getMushaf()
    {
        if ($this->read and $this->read->mushaf) {
            return $this->read->mushaf->getLocaleName();
        }
        return '';
    }

    public function views(): MorphMany
    {
        // TODO: Implement views() method.
    }

    public function scopeOrderByViews(Builder $query, string $direction = 'desc', ?Period $period = null, ?string $collection = null, bool $unique = false, string $as = 'views_count'): Builder
    {
        // TODO: Implement scopeOrderByViews() method.
    }

    public function scopeOrderByUniqueViews(Builder $query, string $direction = 'desc', ?Period $period = null, ?string $collection = null, string $as = 'unique_views_count'): Builder
    {
        // TODO: Implement scopeOrderByUniqueViews() method.
    }
}
