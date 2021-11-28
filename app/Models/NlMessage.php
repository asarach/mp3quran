<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NlMessage extends Model
{
    use  SoftDeletes;

    protected $dates = ["deleted_at"];

    /**
     * Get the template of the  article.
     */
    public function  template()
    {
        return $this->belongsTo("App\Models\NlTemplate");
    }
    /**
     * Get the template of the  article.
     */
    public function  renderContent()
    {
        $content = '';
        
        if ($this->template && $this->template->columns == '1') {
            $template = $this->template->body;
            $content = str_replace('%content%', $this->leftcol, $template); 
        }
        if ($this->template && $this->template->columns == '2') {
            $template = $this->template->body;
            $content = str_replace('%leftcol%', $this->leftcol, $template); 
            $content = str_replace('%rightcol%', $this->rightcol, $content); 
        }
        
        return $content;
    }
}
