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
Route::get('/get_audio_details/{id}', array('as' => 'soar.details', 'uses' => 'SoraController@audioDetails'));
/* lists  */
// dd('asa');
Route::get('/main-radio', array('as' => 'soar.item', 'uses' => 'HomeController@mainRadio'));

// favorites;
Route::get('/favorites', array('as' => 'favorites.index', 'uses' => 'FavoriteController@getFavorites'));
Route::post('/favorites', array('as' => 'favorites.post', 'uses' => 'FavoriteController@postFavorites'));

Route::get('/playlist/{id}', array('as' => 'playlist.show', 'uses' => 'PlaylistController@show'));
Route::delete('/playlist/{id}', array('as' => 'playlist.show', 'uses' => 'PlaylistController@destroy'));
Route::post('/playlist', array('as' => 'playlist.store', 'uses' => 'PlaylistController@store'));
Route::get('/alkahf-surah', array('as' => 'mushaf.alkahf', 'uses' => 'MushafController@alkahf'));
Route::get('/mushaf', array('as' => 'mushaf.alkahf', 'uses' => 'MushafController@mushaf'));
Route::get('/reciters/list', array('as' => 'reciter.list', 'uses' => 'ReciterController@list'));
Route::get('/reads/list', array('as' => 'reads.list', 'uses' => 'ReadController@list'));
Route::get('/soar/list', array('as' => 'soar.list', 'uses' => 'SoraController@list'));
Route::get('/soar/item', array('as' => 'soar.item', 'uses' => 'SoraController@item'));
Route::get('/tadabor/item', array('as' => 'tadabor.item', 'uses' => 'TadaborController@item'));
Route::get('/tsora/item', array('as' => 'tsora.item', 'uses' => 'TsoraController@item'));
Route::get('/tsora/bookmark', array('as' => 'tsora.bookmark', 'uses' => 'TsoraController@bookmark'));
Route::get('/radio/item', array('as' => 'radio.item', 'uses' => 'RadioController@item'));
Route::post('/video/download/{id}/generate', array('as' => 'video.download', 'uses' => 'VideoController@generate'));
Route::get('/video/download/{id}/progress', array('as' => 'video.download', 'uses' => 'VideoController@progress'));
Route::post('/{slug}/{sora}/report', array('as' => 'reciter.report', 'uses' => 'ReciterController@reportSora'));
