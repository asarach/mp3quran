<?php

namespace App\Http\Middleware;
use Closure;

use Jenssegers\Agent\Agent;
use Illuminate\Support\Facades\View;

class Version
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
        
        
        return $next($request);
    }
}
