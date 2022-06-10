<?php

namespace App\Models;

use Laravel\Scout\Searchable;
use Kyslik\ColumnSortable\Sortable;
use Illuminate\Support\Facades\Lang;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Heroicpixels\Filterable\FilterableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use CyrildeWit\EloquentViewable\InteractsWithViews;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use CyrildeWit\EloquentViewable\Contracts\Viewable as ViewableContract;

class Playlist extends Model
{
    use FilterableTrait, Searchable, Sortable;

    protected $fillable = ['name', 'status'];

    public $sortable = ['id', 'name'];

    public function searchableAs()
    {
        return 'playlists_index';
    }

    public function toSearchableArray()
    {
        $array = [];
        $array['id'] = $this->id;
        $array['name'] = $this->name;
        return $array;
    }

    /**
     * Get the language of the annonce.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Get the language of the annonce.
     */
    public function items()
    {
        return $this->hasMany('App\Models\PlaylistItem');
    }

}
