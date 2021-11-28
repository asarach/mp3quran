<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use \View;

class ComposerServiceProvider extends ServiceProvider
{

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer(['layouts.admin'], 'App\Http\ViewComposers\AdminComposer');
        View::composer(['layouts.app'], 'App\Http\ViewComposers\AppComposer');
        View::composer(['components.desktop-sidebar'], 'App\Http\ViewComposers\MenuComposer');
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
