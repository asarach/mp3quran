<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Heroicpixels\Filterable\FilterableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Kyslik\ColumnSortable\Sortable;


class Menu extends Model 
{
    use FilterableTrait, SoftDeletes, Sortable;
    
    protected $fillable = [ "title", "slug", 'order_num', 'place', "icon", "languages", "status"];

    protected $dates = ["deleted_at"];

    public $sortable = ["id", "title", 'order_num'];

    public $timestamps = false;
    
    
    

    public function getLink()
    {
        return route("menu.show", $this->slug);
    }

}
