<?php

namespace App\Http\ViewComposers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Cache;
use Auth;
use App\Read;
use App\App;
use App\Radio;
use App\Reciter;
use App\Tv;
use App\Video;
use App\Mushaf;
use App\Rewaya;
use App\Tadabor;

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
