<?php

namespace Mp3quran;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    protected $table = 'medias';

    /**
     * Get the language of the read.
     */
    public function app()
    {
        return $this->morphedByMany('Mp3quran\App', 'mediable', 'mediable');
    }

    /**
     * The users that maked to the image.
     */
    public function getImage($type, $size = 'md')
    {
        if ($size) {
            $base = 'uploads/' . $type . '/' . $size . '/';
        } else {
            $base = 'uploads/' . $type  . '/';
        }
        if ($this->uri and filter_var($this->uri, FILTER_VALIDATE_URL)) {
            $image = $this->uri;           
        } elseif ($this->uri) {
            $image = asset($base . $this->uri);
        } else {
            $image = asset($base . 'default.jpg');
        }
        return $image;
    }
}
