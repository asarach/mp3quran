<?php


namespace Mp3quran\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Newsletter extends Model
{
    use  SoftDeletes;

    protected $dates = ["deleted_at"];

    /**
     * The roles that belong to the NlSubscriber
     *g
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function subscribers()
    {
        return $this->belongsToMany("Mp3quran\Models\NlSubscriber", 'nl_subscriptions', 'newsletter_id', 'subscriber_id');
    }

}

