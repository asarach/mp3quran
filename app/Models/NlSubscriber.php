<?php

namespace Mp3quran\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NlSubscriber extends Model
{
    use  SoftDeletes;

    protected $dates = ["deleted_at"];

    /**
     * The roles that belong to the NlSubscriber
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function newsletters()
    {
        return $this->belongsToMany("Mp3quran\Models\Newsletter", 'nl_subscriptions', 'subscriber_id', 'newsletter_id');
    }
}

