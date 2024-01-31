<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class Admin
{

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!Auth::check()) {
            return redirect()->guest('/login');
        }

        if (Auth::user()->hasRole(['admin', 'super-admin'])) {
            return $next($request);
        } else {
            abort(403, 'Unauthorized action.');
        }
    }
}
