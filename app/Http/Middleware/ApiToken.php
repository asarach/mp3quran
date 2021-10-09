<?php

namespace Mp3quran\Http\Middleware;

use Closure;
use Auth;

class ApiToken
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
        $token = $request->header('Authorization');
        dd($token);
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
