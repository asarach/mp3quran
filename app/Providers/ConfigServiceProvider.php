<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Locale;
use Waavi\Translation\Models\Language;

class ConfigServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $locales = [];

        try {
            $languages = Language::all();

            foreach ($languages as $lang) {
                $locales[$lang->locale] = [
                    'name' => $lang->name,
                    'script' => $lang->script,
                    'regional' => $lang->regional,
                    'native' => $lang->native
                ];
            }
        } catch (\Exception $e) {
            $locales = [];
        }
        if (empty($locales)) {
            $locales['ar'] = [
                'name' => 'English',
                'regional' => 'en_GB',
                'script' => 'Latn',
                'native' => 'English'
            ];
        }
        // dd($locales);

        config([
            'laravellocalization.supportedLocales' => $locales,
            'laravellocalization.useAcceptLanguageHeader' => false,
            'hideDefaultLocaleInURL' => true
        ]);
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
