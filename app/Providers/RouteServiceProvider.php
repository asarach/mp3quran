<?php

namespace Mp3quran\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use LaravelLocalization;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'Mp3quran\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapAdminAjaxRoutes();

        $this->mapAdminRoutes();

        $this->mapAuthRoutes();

        $this->mapApiRoutes();

        $this->mapWebAjaxRoutes();

        $this->mapWebRoutes();
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapAdminAjaxRoutes()
    {
        Route::prefix(LaravelLocalization::setLocale() .'/admin/ajax')
            ->name('admin::')
            ->middleware('web', 'admin', 'admin.vue', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath')
            ->namespace($this->namespace . '\Admin')
            ->group(base_path('routes/admin.php'));
    }
    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapAdminRoutes()
    {
        Route::prefix(LaravelLocalization::setLocale() .'/admin')
            ->name('admin::')
            ->middleware('web', 'admin', 'admin.vue', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath')
            ->namespace($this->namespace . '\Admin')
            ->group(base_path('routes/admin.php'));
    }
    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::prefix(LaravelLocalization::setLocale())
            ->middleware('web', 'front', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath')
            ->namespace($this->namespace)
            ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::middleware('web', 'front' )
            ->namespace($this->namespace)
            ->group(base_path('routes/api.php'));
    }


    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapAuthRoutes()
    {
        Route::prefix(LaravelLocalization::setLocale())
            ->middleware('web', 'front', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath')
            ->namespace($this->namespace)
            ->group(base_path('routes/auth.php'));
    }

    /**
     * Define the "ajax" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapWebAjaxRoutes()
    {
        Route::prefix(LaravelLocalization::setLocale() .'/ajax')
            ->name('ajax::')
            ->middleware('web', 'front', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath')
            ->namespace($this->namespace)
            ->group(base_path('routes/web.php'));
    }
}
