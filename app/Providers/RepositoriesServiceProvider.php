<?php

namespace Mp3quran\Providers;

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
                        "Mp3quran\Repositories\Newsletter\NewsletterRepository",
                        "Mp3quran\Repositories\Newsletter\EloquentNewsletterRepository"
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Sora\SoraRepository',
                        'Mp3quran\Repositories\Sora\EloquentSoraRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Language\LanguageRepository',
                        'Mp3quran\Repositories\Language\EloquentLanguageRepository'
                );

                $this->app->singleton(
                        "Mp3quran\Repositories\Menu\MenuRepository",
                        "Mp3quran\Repositories\Menu\EloquentMenuRepository"
                );

                $this->app->singleton(
                        'Mp3quran\Repositories\Message\MessageRepository',
                        'Mp3quran\Repositories\Message\EloquentMessageRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Page\PageRepository',
                        'Mp3quran\Repositories\Page\EloquentPageRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Media\MediaRepository',
                        'Mp3quran\Repositories\Media\EloquentMediaRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\App\AppRepository',
                        'Mp3quran\Repositories\App\EloquentAppRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Read\ReadRepository',
                        'Mp3quran\Repositories\Read\EloquentReadRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Radio\RadioRepository',
                        'Mp3quran\Repositories\Radio\EloquentRadioRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Tadabor\TadaborRepository',
                        'Mp3quran\Repositories\Tadabor\EloquentTadaborRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Reciter\ReciterRepository',
                        'Mp3quran\Repositories\Reciter\EloquentReciterRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Ad\AdRepository',
                        'Mp3quran\Repositories\Ad\EloquentAdRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Link\LinkRepository',
                        'Mp3quran\Repositories\Link\EloquentLinkRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Video\VideoRepository',
                        'Mp3quran\Repositories\Video\EloquentVideoRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Tv\TvRepository',
                        'Mp3quran\Repositories\Tv\EloquentTvRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Server\ServerRepository',
                        'Mp3quran\Repositories\Server\EloquentServerRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Mushaf\MushafRepository',
                        'Mp3quran\Repositories\Mushaf\EloquentMushafRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Vgroup\VgroupRepository',
                        'Mp3quran\Repositories\Vgroup\EloquentVgroupRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Rewaya\RewayaRepository',
                        'Mp3quran\Repositories\Rewaya\EloquentRewayaRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Setting\SettingRepository',
                        'Mp3quran\Repositories\Setting\EloquentSettingRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\User\UserRepository',
                        'Mp3quran\Repositories\User\EloquentUserRepository'
                );
                $this->app->singleton(
                        'Mp3quran\Repositories\Translation\TranslationRepository',
                        'Mp3quran\Repositories\Translation\EloquentTranslationRepository'
                );
        }
}
