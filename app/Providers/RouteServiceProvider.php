<?php

namespace App\Providers;

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
    protected $namespace = 'App\Http\Controllers';
    protected $namespaceLivewire = 'App\Http\Livewire';

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

        $this->mapImoRoutes();

        $this->mapAuthRoutes();

        $this->mapApiRoutes();

        // $this->mapRedirectRoutes();

        $this->mapAjaxRoutes();

        $this->mapWebRoutes();

        $this->mapLivewireRoutes();
    }

    protected function mapAdminAjaxRoutes()
    {
        Route::prefix(LaravelLocalization::setLocale() . '/admin/ajax')
            ->name('admin::')
            ->middleware('web', 'admin', 'admin.vue', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath')
            ->namespace($this->namespace . '\Admin')
            ->group(base_path('routes/admin.php'));
    }

    protected function mapAdminRoutes()
    {
        Route::prefix(LaravelLocalization::setLocale() . '/admin')
            ->name('admin::')
            ->middleware('web', 'admin', 'admin.vue', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath')
            ->namespace($this->namespace . '\Admin')
            ->group(base_path('routes/admin.php'));
    }


    protected function mapWebRoutes()
    {
        Route::prefix(LaravelLocalization::setLocale())
            ->middleware('web', 'front', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath')
            ->namespace($this->namespace)
            ->group(base_path('routes/web.php'));
    }


    protected function mapApiRoutes()
    {
        Route::middleware('web', 'front')
            ->namespace($this->namespace)
            ->group(base_path('routes/api.php'));
    }

    protected function mapImoRoutes()
    {
        Route::prefix('/api/radio')
            ->namespace($this->namespace)
            ->group(base_path('routes/imo.php'));
    }

    protected function mapAuthRoutes()
    {
        Route::prefix(LaravelLocalization::setLocale())
            ->middleware('web', 'front', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath')
            ->namespace($this->namespace)
            ->group(base_path('routes/auth.php'));
    }

    protected function mapAjaxRoutes()
    {
        Route::prefix(LaravelLocalization::setLocale() . '/ajax')
            ->name('ajax::')
            ->middleware('web', 'front', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath')
            ->namespace($this->namespace)
            ->group(base_path('routes/ajax.php'));
    }


    protected function mapRedirectRoutes()
    {
        Route::middleware('web', 'front', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath')
            ->prefix(LaravelLocalization::setLocale())
            ->namespace($this->namespaceLivewire)
            ->group(base_path('routes/redirect.php'));
    }

    protected function mapLivewireRoutes()
    {
        Route::middleware('web', 'front', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath')
            ->prefix(LaravelLocalization::setLocale())
            ->namespace($this->namespaceLivewire)
            ->group(base_path('routes/livewire.php'));
    }
}
