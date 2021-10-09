<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. mushaf
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::post('/medias/upload', array('as' => 'medias.upload', 'uses' => 'MediaController@upload'));

/* index  */
Route::get('/index.html', function(){ 
    return Redirect::to('/', 301); 
});
Route::get('/mobile', function(){ 
    return Redirect::to('/', 301); 
});
Route::get('/mobile/index.html', function(){ 
    return Redirect::to('/', 301); 
});
Route::get('/', array('as' => 'index', 'uses' => 'HomeController@index'));
Route::get('/mpa_closed/{adId}', array('as' => 'ads.closed', 'uses' => 'HomeController@adsClosed'));

/* language */
Route::get('/language/{locale}', array('as' => 'language.select', 'uses' => 'HomeController@language'));


/* Newsletter  */
Route::get("/newsletter", array("as" => "newsletter.show", "uses" => "NewsletterController@show"));
Route::post("/newsletter/subscribe", array("as" => "newsletter.subscribe", "uses" => "NewsletterController@subscribe"));
Route::get("/newsletter/unsubscribe", array("as" => "newsletter.unsubscribe", "uses" => "NewsletterController@unsubscribe"));



/* mushaf */
Route::get('/mushaf.html', function(){ 
    return Redirect::to('/mushaf', 301); 
});
Route::get('/mobile/mushaf.html', function(){ 
    return Redirect::to('/mushaf', 301); 
});
Route::get('/mushaf', array('as' => 'mushaf', 'uses' => 'MushafController@mushaf'));
Route::get('/mushaf/playsora', array('as' => 'playsora', 'uses' => 'MushafController@playsora'));

/* tadabor */
Route::get('/tadabor', array('as' => 'tadabor.index', 'uses' => 'TadaborController@index'));
Route::get('/tadabor/{id}', array('as' => 'tadabor.show', 'uses' => 'TadaborController@show'));

/* alkahf-surah */
Route::get('/alkahf-surah.html', function(){ 
    return Redirect::to('/alkahf-surah', 301); 
});;
Route::get('/mobile/alkahf-surah.html', function(){ 
    return Redirect::to('/alkahf-surah', 301); 
});;
Route::get('/alkahf-surah', array('as' => 'alkahf', 'uses' => 'MushafController@alkahf'));

/* quran-download */
Route::get('/quran-download.html', function(){ 
    return Redirect::to('/quran-download', 301); 
});
Route::get('/mobile/quran-download.html', function(){ 
    return Redirect::to('/quran-download', 301); 
});
Route::get('/quran-download', array('as' => 'download', 'uses' => 'MushafController@download'));


/* search  */
Route::get('/search.html', function(){ 
    return Redirect::to('/search', 301); 
});
Route::get('/mobile/search.html', function(){ 
    return Redirect::to('/search', 301); 
});
Route::get('/search', array('as' => 'search.get', 'uses' => 'SearchController@show'));


/* radios  */
Route::get('/radio.html', function(){ 
    return Redirect::to('/radios', 301); 
});
Route::get('/mobile/radio-mobile.html', function(){ 
    return Redirect::to('/radios', 301); 
});
Route::get('/radios', array('as' => 'radio.index', 'uses' => 'RadioController@index'));


/* live  */
Route::get('/live.html', function(){ 
    return Redirect::to('/live', 301); 
});
Route::get('/mobile/makkah_tv_live_mobile.html', function(){ 
    return Redirect::to('/live', 301); 
});
Route::get('/live', array('as' => 'tv.index', 'uses' => 'TvController@index'));

/* videos  */
Route::get('/videos.html', function(){ 
    return Redirect::to('/videos', 301); 
});
Route::get('/mobile/videos.html', function(){ 
    return Redirect::to('/videos', 301); 
});
Route::get('/video/{slug}.html', function($slug){ 
    return Redirect::to('/video/' . $slug, 301); 
});
Route::get('/mobile/video/{slug}.html', function($slug){ 
    return Redirect::to('/video/' . $slug, 301); 
});
Route::get('/videos', array('as' => 'video.index', 'uses' => 'VideoController@index'));
Route::get('/videosmore', array('as' => 'video.index.more', 'uses' => 'VideoController@index'));
Route::get('/video/playlist/{id}', array('as' => 'video.playlist', 'uses' => 'VideoController@playlist'));
Route::post('/video/download/{id}/generate', array('as' => 'video.download', 'uses' => 'VideoController@generate'));
Route::get('/video/download/{id}/progress', array('as' => 'video.download', 'uses' => 'VideoController@progress'));
Route::get('/video/download/{id}', array('as' => 'video.download', 'uses' => 'VideoController@download'));
Route::get('/video/{slug}', array('as' => 'video.show', 'uses' => 'VideoController@show'));


/* favorites  */
Route::get('/favorites.html', function(){ 
    return Redirect::to('/favorites', 301); 
});
Route::get('/mobile/favorites.html', function(){ 
    return Redirect::to('/favorites', 301); 
});
Route::get('/favorites', array('as' => 'page.favorites', 'uses' => 'PageController@favorites'));
Route::post('/favorites', array('as' => 'page.favorites.post', 'uses' => 'PageController@postFavorites'));

/* about */
Route::get('/about.html', function(){ 
    return Redirect::to('/about', 301); 
});
Route::get('/mobile/about.html', function(){ 
    return Redirect::to('/about', 301); 
});
Route::get('/about', array('as' => 'page.about', 'uses' => 'PageController@about'));
Route::get('/privacy', array('as' => 'page.privacy', 'uses' => 'PageController@privacy'));


/* apps */
Route::get('/apps.html', function(){ 
    return Redirect::to('/apps', 301); 
});
Route::get('/mobile/apps.html', function(){ 
    return Redirect::to('/apps', 301); 
});
Route::get('/apps', array('as' => 'page.apps', 'uses' => 'AppController@index'));

/* Uploader */
Route::get('/uploader', array('as' => 'uploader', 'uses' => 'UploaderController@show'));
Route::post('/uploader', array('as' => 'uploader', 'uses' => 'UploaderController@upload'));


/* API */
Route::get('/API.html', function(){ 
    return Redirect::to('/api', 301); 
});
Route::get('/mobile/API.html', function(){ 
    return Redirect::to('/api', 301); 
});
Route::get('/api', array('as' => 'page.api', 'uses' => 'PageController@api'));

/* sitemap */
Route::get('/sitemap.html', function(){ 
    return Redirect::to('/sitemap', 301); 
});
Route::get('/mobile/sitemap.html', function(){ 
    return Redirect::to('/sitemap', 301); 
});
Route::get('/sitemap', array('as' => 'page.sitemap', 'uses' => 'PageController@sitemap'));

/* contact */
Route::get('/contact-us.html', function(){ 
    return Redirect::to('/contact-us', 301); 
});
Route::get('/mobile/contact-us.html', function(){ 
    return Redirect::to('/contact-us', 301); 
});
Route::get('/contact-us', array('as' => 'page.contact', 'uses' => 'PageController@contact'));
Route::post('/contact', array('as' => 'page.store.contact', 'uses' => 'PageController@storeMessage'));

/* lists  */
Route::get('/reciters/list', array('as' => 'reciter.list', 'uses' => 'ReciterController@list'));
Route::get('/reads/list', array('as' => 'reads.list', 'uses' => 'ReadController@list'));
Route::get('/soar/list', array('as' => 'soar.list', 'uses' => 'SoraController@list'));
Route::get('/soar/item', array('as' => 'soar.item', 'uses' => 'SoraController@item'));

/* reciters  */
Route::get('/reciters.html', function(){ 
    return Redirect::to('/reciters', 301); 
});
Route::get('/mobile/reciters.html', function(){ 
    return Redirect::to('/reciters', 301); 
});
Route::get('/{slug}_{name}.html', function($slug){ 
    return Redirect::to('/' .$slug, 301); 
});

Route::get('/{slug}.html', function($slug){ 
    return Redirect::to('/' .$slug, 301); 
});
Route::get('/mobile/{lang}/{slug}_{name}.html', function($slug){ 
    return Redirect::to('/' .$slug, 301); 
});

Route::get('/reciters', array('as' => 'reciter.index', 'uses' => 'ReciterController@index'));
Route::get('/{slug}', array('as' => 'reciter.show', 'uses' => 'ReciterController@show'));
Route::get('/{slug}/{sora}', array('as' => 'reciter.sora', 'uses' => 'ReciterController@sora'));
Route::get('/{slug}/{sora}/report', array('as' => 'reciter.report', 'uses' => 'ReciterController@reportSora'));


/* read */
Route::get('/read/{id}/download/{item}.html', function($id, $item){ 
    return Redirect::to('/read/'.$id.'/download/' . $item, 301); 
});
Route::get('/mobile/read/{id}/download/{item}.html', function($id, $item){ 
    return Redirect::to('/read/'.$id.'/download/' . $item, 301); 
});

Route::get('/read/{id}/download/{item}', array('as' => 'read.index', 'uses' => 'ReadController@download'));

