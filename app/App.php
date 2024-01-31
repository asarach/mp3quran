<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Heroicpixels\Filterable\FilterableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Kyslik\ColumnSortable\Sortable;

class App extends Model
{
    use FilterableTrait, SoftDeletes, Sortable;

    protected $fillable = ['title', 'order_num', 'url', 'type', 'status'];

    public $sortable = ['title',  'id', 'order_num'];

    protected $dates = ['deleted_at'];

    public  $timestamps  = false;

    public function toArray()
    {
        if (strpos(url()->current(), 'admin') !== false) {
            $array = parent::ToArray();
        } else {

            $array = [
                'id' => $this->id,
                'url' => json_decode($this->url)[0],
                'type' => $this->type,
                'image' => '',
                'title' => $this->getLocaleTitle(),
            ];

            $image = $this->images()->first();
            if ($image) {
                $array['image'] = $image->getImage('apps', 'lg');
            }
        }

        return $array;
    }

    /**
     * The users that maked to the album.
     */
    public function images()
    {
        return $this->morphToMany('App\Media', 'mediable', 'mediable');
    }

    public function getImage()
    {
        $image = $this->images()->first();
        if ($image) {
            return $image->getImage('apps', 'lg');
        } else {
            return '';
        }
    }
    public function getLocaleTitle()
    {
        $title = trans('app-title.' . $this->id);
        if (strpos($title, 'app-title.') !== false) {
            return $this->title;
        }
        return $title;
    }
}
