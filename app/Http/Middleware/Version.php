<?php

namespace Mp3quran\Http\Middleware;
use Jenssegers\Agent\Agent;

use Closure;

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
        $version = request()->cookie('style_version');
        if(is_null($version)){
            $agent = new Agent();
            if($agent->isMobile()){
                $version = 'm';
            }else{
                $version = 'r';
            }
        }
        session(['style_version' => $version]);
        return $next($request);
    }
}
