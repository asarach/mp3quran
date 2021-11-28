<?php
namespace App\Http\Middleware;
use Closure;

class AdminVue {

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next) {
        //return $next($request);
        if($request->ajax() or strpos(url()->current(), 'ajax') !== false){
            return $next($request);
        }else {
            return response(view('layouts.admin'));
        }
    }

}
