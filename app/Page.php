<?php

namespace Mp3quran;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;

class Page extends Model
{
    use SoftDeletes, Sluggable;

    protected $dates = ['deleted_at'];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
    public function getLocaleTitle()
    {
        $title = trans('page-title.' . $this->id);
        if (strpos($title, 'page-title.') !== false) {
            return $this->title;
        }
        return $title;
    }
    public function getLocaleContent()
    {
        $content = trans('page-content.' . $this->id);
        if (strpos($content, 'page-content.') !== false) {
            return $this->content;
        }
        return $content;
    }
    public function getLocaleDescription()
    {
        $description = trans('page-description.' . $this->id);
        if (strpos($description, 'page-description.') !== false) {
            return $this->description;
        }
        return $description;
    }
    public function getLocaleKeywords()
    {
        $keywords = trans('page-keywords.' . $this->id);
        if (strpos($keywords, 'page-keywords.') !== false) {
            return $this->keywords;
        }
        return $keywords;
    }
}
