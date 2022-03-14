<?php

namespace App;

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

class Read extends Model
{
    use FilterableTrait, Searchable, SoftDeletes, Sortable, Sluggable;

    protected $fillable = ['server', 'torrent', 'itunes', 'status', 'featured'];

    public $sortable = ['id'];

    protected $dates = ['deleted_at'];

    public function searchableAs()
    {
        return 'reads_index';
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

    public function toSearchableArray()
    {
        $array = [];
        $array['id'] = $this->id;
        $array['name'] = make_query($this->getReciter());
        $langs = LaravelLocalization::getSupportedLocales();
        foreach ($langs as $key => $lang) {
            $array['name_' . $key] = make_query(Lang::get('reciter.name-' . $this->reciter_id, [], $key));
        }

        return $array;
    }

    /**
     * Get the phone record associated with the user.
     */

    public function radio()
    {
        return $this->hasOne('App\Radio');
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
    public function rewaya()
    {
        return $this->belongsTo('App\Rewaya');
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
        return $this->belongsToMany('App\Sora', 'sura_read', 'read_id', 'sura_id')->withPivot('duration', 'filename', 'report');
    }

    public function getLocaleTitle()
    {
        $title = trans('read-title.' . $this->id);
        if (strpos($title, 'read-title.') !== false or $title == '') {
            try {
                $title = trans('reciter-name.' . $this->reciter->id);
            } catch (\Throwable $th) {
                $title = '';
            }
            if (strpos($title, 'reciter-name.') !== false) {
                return $this->title;
            }
        }
        return $title;
    }

    public function getLocaleDescription()
    {
        $description = trans('read-description.' . $this->id);
        if (strpos($description, 'read-description.') !== false) {
            return $this->description;
        }
        return $description;
    }

    public function getLocaleShareDescription($sora = null)
    {
        if ($sora) {
            return trans('text.share-description-sora', ['reciter' => $this->getReciter(), 'sora' => $sora]);
        } else {
            return trans('text.share-description-read', ['reciter' => $this->getReciter()]);
        }
    }

    public function getLocaleShareTitle($sora = null)
    {
        if ($sora) {
            return trans('text.share-title-sora', ['reciter' => $this->getReciter(), 'sora' => $sora]);
        } else {
            return trans('text.share-title-read', ['reciter' => $this->getReciter()]);
        }
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

    public function getMushaf()
    {
        if ($this->mushaf) {
            return $this->mushaf->getLocaleName();
        }
        return '';
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

    public function getAudioUrl($sora)
    {
        $url = $this->server->url . '/' . $this->url . '/';

        if ($sora < 10) {
            $url .= '00' . $sora . '.mp3';
        } elseif ($sora < 100) {
            $url .= '0' . $sora . '.mp3';
        } else {
            $url .= $sora . '.mp3';
        }
        return $url;
    }

    public function getSeoTitle($rewaya = null, $reciter)
    {
        if ($rewaya->id == 1) {
            return trans('seo.reciter-title-hafs', ['reciter' => $reciter]);
        } else if ($rewaya->id == 4) {
            return trans('seo.reciter-title-lmaalm', ['reciter' => $reciter]);
        } else if ($rewaya->id == 6) {
            return trans('seo.reciter-title-lmgod', ['reciter' => $reciter]);
        } else {
            return trans('seo.reciter-title', ['reciter' => $reciter, 'rewaya' => $rewaya->getLocaleName()]);
        }
    }
    public function getDescriptionTitle($rewaya = null, $reciter)
    {
        if ($rewaya->id == 1) {
            return trans('seo.reciter-description-hafs', ['reciter' => $reciter]);
        } else if ($rewaya->id == 4) {
            return trans('seo.reciter-description-lmaalm', ['reciter' => $reciter]);
        } else if ($rewaya->id == 6) {
            return trans('seo.reciter-description-lmgod', ['reciter' => $reciter]);
        } else {
            return trans('seo.reciter-description', ['reciter' => $reciter, 'rewaya' => $rewaya->getLocaleName()]);
        }
    }

    public function getDownloadSeoTitle($rewaya = null, $reciter)
    {
        if ($rewaya->id == 1) {
            return trans('seo.reciter-download-title-hafs', ['reciter' => $reciter]);
        } else if ($rewaya->id == 4) {
            return trans('seo.reciter-download-title-lmaalm', ['reciter' => $reciter]);
        } else if ($rewaya->id == 6) {
            return trans('seo.reciter-download-title-lmgod', ['reciter' => $reciter]);
        } else {
            return trans('seo.reciter-download-title', ['reciter' => $reciter, 'rewaya' => $rewaya->getLocaleName()]);
        }
    }
    public function getDownloadDescriptionTitle($rewaya = null, $reciter)
    {
        if ($rewaya->id == 1) {
            return trans('seo.reciter-download-description-hafs', ['reciter' => $reciter]);
        } else if ($rewaya->id == 4) {
            return trans('seo.reciter-download-description-lmaalm', ['reciter' => $reciter]);
        } else if ($rewaya->id == 6) {
            return trans('seo.reciter-download-description-lmgod', ['reciter' => $reciter]);
        } else {
            return trans('seo.reciter-download-description', ['reciter' => $reciter, 'rewaya' => $rewaya->getLocaleName()]);
        }
    }

}
