<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Heroicpixels\Filterable\FilterableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;
use Kyslik\ColumnSortable\Sortable;
use Cviebrock\EloquentSluggable\Sluggable;

class Sora extends Model
{
    use FilterableTrait, Searchable, SoftDeletes, Sortable, Sluggable;

    protected $fillable = ['name', 'start_page', 'end_page', 'type', 'status'];

    public $sortable = ['id', 'name', 'ayat_count'];

    protected $table = 'soar';

    protected $dates = ['deleted_at'];

    public $timestamps = false;

    public function toArray()
    {
        if (strpos(url()->current(), 'admin') !== false) {
            $array = parent::ToArray();
        } else {
            $array = [
                'id' => $this->id,
                'slug' => $this->slug,
                'name' => $this->getLocaleName(),
                'start_page' => $this->start_page,
                'end_page' => $this->end_page,
            ];
        }

        return $array;
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function searchableAs()
    {
        return 'soar_index';
    }

    public function toSearchableArray()
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
        ];
    }

    public function getName()
    {
        return $this->name;
    }

    public function getLocaleName()
    {
        $name = trans('sora-name.' . $this->id);
        if (strpos($name, 'sora-name.') !== false) {
            return $this->name;
        }
        return $name;
    }

    public function getNum()
    {
        if ($this->num < 10) {
            return '00' . $this->num;
        } elseif ($this->num < 100) {
            return '0' . $this->num;
        }

        return $this->num;
    }
}
