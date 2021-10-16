<?php

namespace Mp3quran;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Heroicpixels\Filterable\FilterableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use CyrildeWit\EloquentViewable\Contracts\Viewable as ViewableContract;
use CyrildeWit\EloquentViewable\InteractsWithViews;
use Kyslik\ColumnSortable\Sortable;
use Cviebrock\EloquentSluggable\Sluggable;
use Lang;
use LaravelLocalization;

class Video extends Model implements ViewableContract
{
    use FilterableTrait, Searchable, InteractsWithViews, SoftDeletes, Sortable, Sluggable;

    protected $fillable = ['title', 'url', 'status', 'featured'];

    protected $removeViewsOnDelete = true;

    public $sortable = ['id', 'title', 'created_at'];

    protected $dates = ['deleted_at'];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function searchableAs()
    {
        return 'videos_index';
    }

    public function toArray()
    {
        if (strpos(url()->current(), 'admin') !== false) {
            $array = parent::ToArray();
        } else {
            $array = [
                'id' => $this->id,
                'slug' => $this->slug,
                'title' => $this->getLocaleTitle(),
                'reciter_name' => $this->geReciterName(),
                'vgroup_name' => $this->gevgroupName(),
                'image' => $this->getImage(),
            ];
        }

        return $array;
    }

    public function toSearchableArray()
    {
        $array = [];
        $array['id'] = $this->id;
        $array['title'] = $this->title;
        $langs = LaravelLocalization::getSupportedLocales();
        foreach ($langs as $key => $lang) {
            $array['title_' . $key] = Lang::get('video.title-' . $this->id, [], $key);
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
    public function reciter()
    {
        return $this->belongsTo('Mp3quran\Reciter');
    }

    public function vgroup()
    {
        return $this->belongsTo('Mp3quran\Vgroup');
    }


    public function getLocaleTitle()
    {
        $title = trans('video-title.' . $this->id);
        if (strpos($title, 'video-title.') !== false) {
            return $this->title;
        }
        return $title;
    }

    public function geReciterName()
    {
        if ($this->reciter) {
            return trans('reciter-name.' . $this->reciter->id);
        } else {
            return '';
        }
    }

    public function geVgroupName()
    {
        if ($this->vgroup) {
            return trans('vgroup-name.' . $this->vgroup->id);
        } else {
            return '';
        }
    }


    public function getImage()
    {
        $images = $this->images()->first();
        if ($images) {
            return $images->getImage('videos');
        }
        try {
            $id = getYoutubeId($this->url);
            return 'https://img.youtube.com/vi/' . $id . '/hqdefault.jpg';
        } catch (\Throwable $th) {
            return asset('img/hqdefault.jpg');
        }
    }
}
