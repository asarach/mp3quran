<?php

namespace Mp3quran;

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
            $image = $this->images()->first();
            $array = [
                'id' => $this->id,
                'url' =>json_decode($this->url)[0],
                'type' => $this->type,
                'image' => $image->getImage('apps', 'lg'),
                'title' => $this->getLocaleTitle(),
            ];
        }

        return $array;
    }

    /**
     * The users that maked to the album.
     */
    public function images()
    {
        return $this->morphToMany('Mp3quran\Media', 'mediable', 'mediable');
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
