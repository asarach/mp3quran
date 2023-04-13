<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Heroicpixels\Filterable\FilterableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use CyrildeWit\EloquentViewable\Contracts\Viewable as ViewableContract;
use CyrildeWit\EloquentViewable\InteractsWithViews;
use Kyslik\ColumnSortable\Sortable;
use Laravel\Scout\Searchable;
use Lang;
use Cviebrock\EloquentSluggable\Sluggable;
use LaravelLocalization;

class TwentyRead extends Model
{
    use FilterableTrait, Searchable, SoftDeletes, Sortable, Sluggable;

    protected $fillable = ['server', 'torrent', 'itunes', 'status', 'featured'];

    public $sortable = ['id'];

    protected $dates = ['deleted_at'];

    public function searchableAs()
    {
        return 'twenty_reads_index';
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
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
                'slug' => $this->slug,
                'soar_count' => $this->countSoars(),
                'title' => $this->getLocaleTitle(),
                'url' => $this->url,
                'rewaya_name' => $this->getRewaya(),
                'reciter_name' => $this->getReciter(),
            ];
        }

        return $array;
    }

    /**
     * Get the language of the annonce.
     */
    public function reciter()
    {
        return $this->belongsTo('App\Reciter');
    }

     /**
     * Get the language of the annonce.
     */
    public function twenty_rewaya()
    {
        return $this->belongsTo('App\Models\TwentyRewaya');
    }

    /**
     * Get the language of the annonce.
     */
    public function server()
    {
        return $this->belongsTo('App\Server');
    }

    /**
     * Get the language of the annonce.
     */
    public function mushaf()
    {
        return $this->belongsTo('App\Mushaf');
    }

    /**
     * Get the language of the annonce.
     */
    public function soar()
    {
        return $this->belongsToMany('App\Sora', 'sura_twenty_read', 'twenty_read_id', 'sura_id')->withPivot('duration', 'filename', 'report');
    }

    public function getRewaya()
    {
        if ($this->rewaya) {
            return $this->rewaya->getLocaleName();
        }
        return '';
    }

    public function getReciter()
    {
        if ($this->reciter) {
            return $this->reciter->getLocaleName();
        }
        return '';
    }

    public function getLocaleTitle()
    {
        // $title = trans('twenty-read-title.' . $this->id);
        // if (strpos($title, 'twenty-twenty_read-title.') !== false or $title == '') {
        //     try {
        //         $title = trans('seo.reciter-title', ['reciter' => $this->reciter->getLocaleName(), 'rewaya' => $this->rewaya->getLocaleName()]);
        //     } catch (\Throwable $th) {
        //         $title = $this->title;
        //     }
        //     if (strpos($title, 'reciter-name.') !== false) {
        //         return $this->title;
        //     }
        // }
        return $this->title;
    }

    public function countSoars()
    {
        $count = $this->soar->count();
        if ($count == 114) {
            return trans('text.all-quran');
        } else {
            return trans('text.soar-count', ['count' => $count]);
        }
    }

}
