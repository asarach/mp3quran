<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Debugbar;

class EnableDebugbarForLoggedInUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (auth()->check() && auth()->user()->email == 'asaraach@gmail.com') {
            Debugbar::enable();
        } else {
            Debugbar::disable();
        }
    
        return $next($request);
    }
}
