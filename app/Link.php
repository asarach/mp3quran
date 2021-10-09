<?php

namespace Mp3quran;

use Illuminate\Database\Eloquent\Model;
use Kyslik\ColumnSortable\Sortable;
use Heroicpixels\Filterable\FilterableTrait;

class Link extends Model
{
    use  FilterableTrait, Sortable;

    protected $fillable = ['new_url', 'old_url', 'status'];

    public  $timestamps  = false;

    public $sortable = ['old_url', 'new_url',  'id'];
}
