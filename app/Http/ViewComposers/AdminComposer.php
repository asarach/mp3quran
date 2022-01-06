<?php

namespace App\Http\ViewComposers;

use Auth;
use Cache;
use App\Tv;
use App\App;
use App\Read;
use App\Radio;
use App\Video;
use App\Mushaf;
use App\Rewaya;
use App\Reciter;
use App\Tadabor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\View\View;

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
        $counts['reports'] = DB::table('report_sora')->count();

        $view->with(compact('user', 'counts'));
    }
}
