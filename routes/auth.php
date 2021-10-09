<?php

/*
  |--------------------------------------------------------------------------
  | Web Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register web routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | contains the "web" middleware group. Now create something great!
  |
 */
 Route::get('login/{provider}', ['uses' =>  'Auth\RegisterController@redirectToProvider','as' => 'social.login' ] );
 Route::get('login/{provider}/callback', 'Auth\RegisterController@handleProviderCallback');
 Auth::routes(['verify' => true]);
