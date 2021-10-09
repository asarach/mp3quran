<?php

namespace Mp3quran\Http\ViewComposers;

use Mp3quran\Ad;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\App;

class AppComposer
{

    /**
     * The user repository implementation.
     *
     * @var UserRepository
     */
    protected $users;

    /**
     * Create a new profile composer.
     *
     * @param  UserRepository  $users
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $locale = App::getLocale();
        $now = Carbon::now();
        $closed_ads = request()->cookie('closed_ads');

        $popup  = Ad::where('place', 2)
            ->where('start_date', '<', $now)
            ->where('start_date', '<', $now)
            ->where('locale', $locale)
            ->where('status', 1);
        if ($closed_ads) {
            $popup = $popup->whereNotIn('id', json_decode($closed_ads));
        }
        $popup = $popup->orderBy('order_num', 'asc')
            ->first();

        $view->with(compact('popup'));
    }
}
