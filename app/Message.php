<?php

namespace Mp3quran;

use Illuminate\Database\Eloquent\Model;
use Heroicpixels\Filterable\FilterableTrait;
use Kyslik\ColumnSortable\Sortable;

class Message extends Model
{
    use FilterableTrait, Sortable;

    public $sortable = ['id'];
}
