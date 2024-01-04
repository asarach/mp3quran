<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Imo\AlbumController;
use App\Http\Controllers\Imo\ItemController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Album routes
Route::get('albums', [AlbumController::class, 'index'])->middleware('client:radio');
Route::get('album/{id}', [AlbumController::class, 'show'])->middleware('client:radio');
Route::post('album/add', [AlbumController::class, 'store'])->middleware('client:radio');
Route::post('album/update', [AlbumController::class, 'update'])->middleware('client:radio');
Route::delete('album/{id}', [AlbumController::class, 'destroy'])->middleware('client:radio');

// Album Item routes
Route::get('items', [ItemController::class, 'index'])->middleware('client:radio');
Route::get('item/{id}', [ItemController::class, 'show'])->middleware('client:radio');
Route::post('item/add', [ItemController::class, 'store'])->middleware('client:radio');
Route::post('item/update', [ItemController::class, 'update'])->middleware('client:radio');
Route::delete('item/{id}', [ItemController::class, 'destroy'])->middleware('client:radio');