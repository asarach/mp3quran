<?php

namespace Mp3quran\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Carbon\Carbon;

use DB;
use LaravelLocalization;
use URL;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

        // database fix
        Schema::defaultStringLength(191);

        // time formte fix
        try {
            $lang = LaravelLocalization::getCurrentLocale();
            $regional = DB::table('translator_languages')->where('locale', $lang)->first()->regional;
        } catch (\Exception $e) {
            $regional = 'ar_AE';
        }
        setlocale(LC_ALL, $regional . '.utf8');

        if (!env('APP_DEBUGBAR')) {
            \Debugbar::disable();
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
