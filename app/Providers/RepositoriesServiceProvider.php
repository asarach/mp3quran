<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoriesServiceProvider extends ServiceProvider
{
        /**
         * Bootstrap any application services.
         *
         * @return void
         */
        public function boot()
        {
                //
        }

        /**
         * Register any application services.
         *
         * @return void
         */
        public function register()
        {
                $this->app->singleton(
                        "App\Repositories\Newsletter\NewsletterRepository",
                        "App\Repositories\Newsletter\EloquentNewsletterRepository"
                );
                $this->app->singleton(
                        'App\Repositories\Sora\SoraRepository',
                        'App\Repositories\Sora\EloquentSoraRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Language\LanguageRepository',
                        'App\Repositories\Language\EloquentLanguageRepository'
                );

                $this->app->singleton(
                        "App\Repositories\Menu\MenuRepository",
                        "App\Repositories\Menu\EloquentMenuRepository"
                );

                $this->app->singleton(
                        'App\Repositories\Message\MessageRepository',
                        'App\Repositories\Message\EloquentMessageRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Page\PageRepository',
                        'App\Repositories\Page\EloquentPageRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Media\MediaRepository',
                        'App\Repositories\Media\EloquentMediaRepository'
                );
                $this->app->singleton(
                        'App\Repositories\App\AppRepository',
                        'App\Repositories\App\EloquentAppRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Read\ReadRepository',
                        'App\Repositories\Read\EloquentReadRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Radio\RadioRepository',
                        'App\Repositories\Radio\EloquentRadioRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Tadabor\TadaborRepository',
                        'App\Repositories\Tadabor\EloquentTadaborRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Reciter\ReciterRepository',
                        'App\Repositories\Reciter\EloquentReciterRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Tafsir\TafsirRepository',
                        'App\Repositories\Tafsir\EloquentTafsirRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Tsora\TsoraRepository',
                        'App\Repositories\Tsora\EloquentTsoraRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Ad\AdRepository',
                        'App\Repositories\Ad\EloquentAdRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Link\LinkRepository',
                        'App\Repositories\Link\EloquentLinkRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Video\VideoRepository',
                        'App\Repositories\Video\EloquentVideoRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Tv\TvRepository',
                        'App\Repositories\Tv\EloquentTvRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Server\ServerRepository',
                        'App\Repositories\Server\EloquentServerRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Mushaf\MushafRepository',
                        'App\Repositories\Mushaf\EloquentMushafRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Vgroup\VgroupRepository',
                        'App\Repositories\Vgroup\EloquentVgroupRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Rewaya\RewayaRepository',
                        'App\Repositories\Rewaya\EloquentRewayaRepository'
                );
                $this->app->singleton(
                        'App\Repositories\SpecialRewaya\SpecialRewayaRepository',
                        'App\Repositories\SpecialRewaya\EloquentSpecialRewayaRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Setting\SettingRepository',
                        'App\Repositories\Setting\EloquentSettingRepository'
                );
                $this->app->singleton(
                        'App\Repositories\User\UserRepository',
                        'App\Repositories\User\EloquentUserRepository'
                );
                $this->app->singleton(
                        'App\Repositories\Translation\TranslationRepository',
                        'App\Repositories\Translation\EloquentTranslationRepository'
                );
        }
}
