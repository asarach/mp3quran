<?php

namespace Mp3quran\Providers;

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
        View::composer(['layouts.admin'], 'Mp3quran\Http\ViewComposers\AdminComposer');
        View::composer(['layouts.app'], 'Mp3quran\Http\ViewComposers\AppComposer');
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
