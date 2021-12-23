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

class Tadabor extends Model implements ViewableContract
{
    use FilterableTrait, Searchable, InteractsWithViews, SoftDeletes, Sortable;

    protected $fillable = ['title', 'url',  'status'];

    protected $removeViewsOnDelete = true;

    public $sortable = ['id', 'title'];

    protected $dates = ['deleted_at'];

    public function searchableAs()
    {
        return 'tadabors_index';
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
                'audio_url' => $this->audio_url,
                'image_url' => $this->image_url,
                'text' => html_entity_decode($this->text),
                'title' => $this->getLocaleTitle(),

                'sora_name' => $this->getSoraName(),
                'rewaya_name' => $this->getRewayaName(),
                'reciter_name' => $this->getReciterName(),

                'share_description' => $this->getLocaleShareDescription(),
                'share_title' => $this->getLocaleShareTitle(),
                'share_url' =>  route('tadabor.show', ['slug' => $this->id])
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
            $array['title_' . $key] = Lang::get('tadabor.title-' . $this->id, [], $key);
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
    public function sora()
    {
        return $this->belongsTo('App\Sora', 'sura_id');
    }

    /**
     * Get the language of the annonce.
     */
    public function rewaya()
    {
        return $this->belongsTo('App\Rewaya');
    }

    public function getLocaleTitle()
    {
        $title = trans('tadabor-title.' . $this->id);
        if (strpos($title, 'tadabor-title.') !== false or $title == '') {
            try {
                $title = trans('reciter-title.' . $this->read->reciter->id);
            } catch (\Throwable $th) {
                $title = 'reciter-title.asa';
            }
            if (strpos($title, 'reciter-title.') !== false) {
                return trans('tadabor-title.tadabor-item');
            }
        }
        return $title;
    }


    public function getSoraName()
    {
        if ($this->sora) {
            $name = trans('sora-name.' . $this->sura_id);
            if (strpos($name, 'sora-name.') !== false) {
                $name =  $this->sora->name;
            }
        } else {
            $name = '';
        }

        return $name;
    }

    public function getRewayaName()
    {
        if ($this->rewaya) {
            $name = trans('rewaya-name.' . $this->rewaya_id);
            if (strpos($name, 'rewaya-name.') !== false) {
                $name =  $this->rewaya->name;
            }
        } else {
            $name = '';
        }

        return $name;
    }

    public function getReciterName()
    {
        if ($this->reciter) {
            $name = trans('reciter-name.' . $this->reciter_id);
            if (strpos($name, 'reciter-name.') !== false) {
                $name =  $this->reciter->name;
            }
        } else {
            $name = '';
        }

        return $name;
    }

    public function getLocaleDescription()
    {
        $description = trans('tadabor-description.' . $this->id);
        if (strpos($description, 'tadabor-description.') !== false) {
            return $this->description;
        }
        return $description;
    }
    public function getLocaleShareDescription()
    {
        $text = html_entity_decode($this->text);
        $text = strip_tags($text);
        return $text;
    }

    public function getLocaleShareTitle()
    {
        return  trans('text.share-title-tadabor', ['name' =>  $this->getLocaleTitle()]);
    }


    public function getImage()
    {
        $images = $this->images()->first();
        if ($images) {
            return  $images->getImage('images');
        }
        return 'https://picsum.photos/160';
    }
    public function getRewaya()
    {
        if ($this->rewaya) {
            return  $this->rewaya->getLocaleTitle();
        }
        return '';
    }

    public function getNum()
    {
        if ($this->id < 10) {
            return '00' . $this->id;
        } elseif ($this->id < 100) {
            return '0' . $this->id;
        }

        return $this->id;
    }
}
