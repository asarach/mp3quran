<?php

namespace Mp3quran;

use Illuminate\Database\Eloquent\Model;
use Heroicpixels\Filterable\FilterableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Kyslik\ColumnSortable\Sortable;

class Ad extends Model
{
    use FilterableTrait, SoftDeletes, Sortable;

    protected $fillable = ['name', 'order_num', 'url', 'start_date', 'end_date', 'status'];

    public $sortable = ['id', 'name', 'order_num'];

    protected $dates = ['deleted_at'];

    // public  $timestamps  = false;

    public function toArray()
    {
        if (strpos(url()->current(), 'admin') !== false) {
            $array = parent::ToArray();
        } else {

            $array = [
                'id' => $this->id,
                'url' => $this->url,
                'text' => $this->text,
                'name' => $this->name,
            ];
            $image = $this->images()->first();
            if ($image) {
                $array['image'] = $image->getImage('mpa', 'lg');
            } else {
                $array['image'] = '';
            }
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

    public function getImage($size = 'lg')
    {
        $image = $this->images()->first();
        if ($image) {
            return $image->getImage('mpa', $size);
        } else {
            return '';
        }
    }
}
