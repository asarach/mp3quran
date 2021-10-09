<?php

namespace Mp3quran\Http\ViewComposers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Cache;
use Auth;
use Mp3quran\Read;
use Mp3quran\App;
use Mp3quran\Radio;
use Mp3quran\Reciter;
use Mp3quran\Tv;
use Mp3quran\Video;
use Mp3quran\Mushaf;
use Mp3quran\Rewaya;
use Mp3quran\Tadabor;

class AdminComposer
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
        $user  = Auth::user();
        $counts = [];
        $counts['radios'] = Radio::count();
        $counts['tvs'] = Tv::count();
        $counts['videos'] = Video::count();
        $counts['reads'] = Read::count();
        $counts['reciters'] = Reciter::count();
        $counts['tadabors'] = Tadabor::count();

        $view->with(compact('user', 'counts'));
    }
}
