<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;

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

/* mushaf */
Route::get('/mushaf.html', function(){ 
    return Redirect::to('/mushaf', 301); 
});
Route::get('/mobile/mushaf.html', function(){ 
    return Redirect::to('/mushaf', 301); 
});

/* alkahf-surah */
Route::get('/alkahf-surah.html', function(){ 
    return Redirect::to('/alkahf-surah', 301); 
});;
Route::get('/mobile/alkahf-surah.html', function(){ 
    return Redirect::to('/alkahf-surah', 301); 
});;

/* quran-download */
Route::get('/quran-download.html', function(){ 
    return Redirect::to('/quran-download', 301); 
});
Route::get('/mobile/quran-download.html', function(){ 
    return Redirect::to('/quran-download', 301); 
});

/* search  */
Route::get('/search.html', function(){ 
    return Redirect::to('/search', 301); 
});
Route::get('/mobile/search.html', function(){ 
    return Redirect::to('/search', 301); 
});

/* radios  */
Route::get('/radio.html', function(){ 
    return Redirect::to('/radios', 301); 
});
Route::get('/mobile/radio-mobile.html', function(){ 
    return Redirect::to('/radios', 301); 
});

/* live  */
Route::get('/live.html', function(){ 
    return Redirect::to('/live', 301); 
});
Route::get('/mobile/makkah_tv_live_mobile.html', function(){ 
    return Redirect::to('/live', 301); 
});

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

/* favorites  */
Route::get('/favorites.html', function(){ 
    return Redirect::to('/favorites', 301); 
});
Route::get('/mobile/favorites.html', function(){ 
    return Redirect::to('/favorites', 301); 
});

/* about */
Route::get('/about.html', function(){ 
    return Redirect::to('/about', 301); 
});
Route::get('/mobile/about.html', function(){ 
    return Redirect::to('/about', 301); 
});

/* apps */
Route::get('/apps.html', function(){ 
    return Redirect::to('/apps', 301); 
});
Route::get('/mobile/apps.html', function(){ 
    return Redirect::to('/apps', 301); 
});

/* API */
Route::get('/API.html', function(){ 
    return Redirect::to('/api', 301); 
});
Route::get('/mobile/API.html', function(){ 
    return Redirect::to('/api', 301); 
});

/* sitemap */
Route::get('/sitemap.html', function(){ 
    return Redirect::to('/sitemap', 301); 
});
Route::get('/mobile/sitemap.html', function(){ 
    return Redirect::to('/sitemap', 301); 
});

/* contact */
Route::get('/contact-us.html', function(){ 
    return Redirect::to('/contact-us', 301); 
});
Route::get('/mobile/contact-us.html', function(){ 
    return Redirect::to('/contact-us', 301); 
});

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

/* read */
Route::get('/read/{id}/download/{item}.html', function($id, $item){ 
    return Redirect::to('/read/'.$id.'/download/' . $item, 301); 
});
Route::get('/mobile/read/{id}/download/{item}.html', function($id, $item){ 
    return Redirect::to('/read/'.$id.'/download/' . $item, 301); 
});