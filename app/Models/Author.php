<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $table = 'reciters';

    protected $guarded = ['id'];

    public function qurans()
    {
        return $this->hasMany(Mushaf::class, 'reciter_id', 'id');
    }

    public function quran()
    {
        return $this->hasOne(Mushaf::class, 'reciter_id', 'id');
    }

    public function translations()
    {
        return $this->hasMany(AuthorTranslation::class,'reciter_id','id');
    }
}
