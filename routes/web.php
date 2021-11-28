<?php

use Illuminate\Support\Facades\Route;
use Spatie\Honeypot\ProtectAgainstSpam;


Route::post('/medias/upload', array('as' => 'medias.upload', 'uses' => 'MediaController@upload'));
Route::get('/mpa_closed/{adId}', array('as' => 'ads.closed', 'uses' => 'HomeController@adsClosed'));
Route::get('/language/{locale}', array('as' => 'language.select', 'uses' => 'HomeController@language'));
Route::get('/sitemap', array('as' => 'page.sitemap', 'uses' => 'PageController@sitemap'));
Route::get("/newsletter/unsubscribe", array("as" => "newsletter.unsubscribe", "uses" => "NewsletterController@unsubscribe"));
Route::post('/contact', array('as' => 'page.store.contact', 'uses' => 'PageController@storeMessage'))->middleware(ProtectAgainstSpam::class);
Route::post('/uploader', array('as' => 'uploader', 'uses' => 'UploaderController@upload'));
