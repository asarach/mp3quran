<?php

use Illuminate\Support\Facades\Route;

/* index  */
Route::get('/', ['as' => 'index', 'uses' => Index::class]);

/* Newsletter  */
Route::get('/newsletter', ['as' => 'newsletter.show', 'uses' => Newsletter\Show::class]);

/* mushaf */
Route::get('/mushaf', ['as' => 'mushaf', 'uses' => Mushaf\Mushaf::class]);

/* tadabor */
Route::get('/tadabor', ['as' => 'tadabor.index', 'uses' => Tadabor\Index::class]);
Route::get('/tadabor/{slug}', ['as' => 'tadabor.show', 'uses' => Tadabor\Show::class]);

/* alkahf-surah */
Route::get('/alkahf-surah', ['as' => 'alkahf', 'uses' => Mushaf\Alkahf::class]);

/* quran-download */
Route::get('/quran-download', ['as' => 'download', 'uses' => Mushaf\Download::class]);

/* search  */
Route::get('/search', ['as' => 'search.get', 'uses' => Search\Show::class]);

/* radios  */
Route::get('/radios', ['as' => 'radio.index', 'uses' => Radio\Index::class]);

/* live  */
Route::get('/live', ['as' => 'tv.index', 'uses' => Tv\Index::class]);
Route::get('/live/{tvid}', ['as' => 'tv.show', 'uses' => Tv\Show::class]);

/* videos  */
Route::get('/videos', ['as' => 'video.index', 'uses' => Video\Index::class]);
Route::get('/video/playlist/{playlist_id}', ['as' => 'video.playlist', 'uses' => Video\Playlist::class]);
Route::get('/video/download/{download_id}', ['as' => 'video.download', 'uses' => Video\Download::class]);
Route::get('/video/{slug}', ['as' => 'video.show', 'uses' => Video\Show::class]);

/* tafsirs  */
Route::get('/tafsirs', ['as' => 'tafsir.index', 'uses' => Tafsir\Index::class]);
Route::get('/tafsir/{tafsir_id}', ['as' => 'tafsir.show', 'uses' => Tafsir\Show::class]);

/* favorites  */
Route::get('/favorites', ['as' => 'page.favorites', 'uses' => Page\Favorites::class]);

/* favorites  */
Route::get('/playlists', ['as' => 'page.playlists', 'uses' => Page\Playlists::class]);

/* about */
Route::get('/about', ['as' => 'page.about', 'uses' => Page\About::class]);
Route::get('/privacy', ['as' => 'page.privacy', 'uses' => Page\Privacy::class]);
Route::get('/sitemap', ['as' => 'page.sitemap', 'uses' => Page\Sitemap::class]);

/* apps */
Route::get('/apps', ['as' => 'apps.index', 'uses' => App\Index::class]);
Route::get('/app/{slug}', ['as' => 'apps.show', 'uses' => App\Show::class]);

/* Uploader */
Route::get('/uploader', ['as' => 'uploader', 'uses' => Uploader\Show::class]);

/* API */
Route::get('/api', ['as' => 'page.api', 'uses' => Page\Api::class]);
Route::get('/api3', ['as' => 'page.api3', 'uses' => Page\ApiOld::class]);

/* contact */
Route::get('/contact-us', ['as' => 'page.contact', 'uses' => Page\Contact::class]);

/* reciters  */
Route::get('/reciters', ['as' => 'reciter.index', 'uses' => Reciter\Index::class]);
Route::get('/{slug}', ['as' => 'reciter.show', 'uses' => Reciter\Show::class]);
Route::get('/{slug}/downloads', ['as' => 'reciter.download', 'uses' => Reciter\Download::class]);
Route::get('/{slug}/{sora_id}', ['as' => 'reciter.sora', 'uses' => Reciter\Sora::class]);
Route::get('/{slug}/{sora_id}/{verse}', ['as' => 'reciter.ayah', 'uses' => Reciter\Verse::class]);
