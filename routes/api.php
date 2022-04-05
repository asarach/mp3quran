<?php

$router->get('/api/aya', array('as' => 'aya', 'uses' => 'ApiController@aya'));
$router->get('/api/ayat', array('as' => 'ayat', 'uses' => 'ApiController@ayat'));
$router->get('/api/surah', array('as' => 'surah', 'uses' => 'ApiController@surah'));
$router->get('/api/translations', array('as' => 'translations', 'uses' => 'ApiController@translations'));
$router->get('/api/reciters', array('as' => 'reciters', 'uses' => 'ApiController@reciters'));

$router->get('/api_2', array('as' => 'api_b.index', 'uses' => 'ApibController@index'));
$router->get('/api_2/soar', array('as' => 'api_b.soar', 'uses' => 'ApibController@soar'));
$router->get('/api_2/rewayat', array('as' => 'api_b.rewayat', 'uses' => 'ApibController@rewayat'));
$router->get('/api_2/moshaf', array('as' => 'api_b.moshaf', 'uses' => 'ApibController@moshaf'));
$router->get('/api_2/reciters', array('as' => 'api_b.reciters', 'uses' => 'ApibController@reciters'));
$router->get('/api_2/languages', array('as' => 'api_b.languages', 'uses' => 'ApibController@languages'));
$router->get('/api_2/reads', array('as' => 'api_b.reads', 'uses' => 'ApibController@reads'));
$router->get('/api_2/recent_reads', array('as' => 'api_b.reads', 'uses' => 'ApibController@recentReads'));
$router->get('/api_2/radios', array('as' => 'api_b.radios', 'uses' => 'ApibController@radios'));
$router->get('/api_2/read/{id}', array('as' => 'api_b.read', 'uses' => 'ApibController@read'));
$router->get('/api_2/tvs', array('as' => 'api_b.tvs', 'uses' => 'ApibController@tvs'));
$router->get('/api_2/video_types', array('as' => 'api_b.video_types', 'uses' => 'ApibController@videoTypes'));
$router->get('/api_2/videos', array('as' => 'api_b.videos', 'uses' => 'ApibController@videos'));

$router->get('/api/ayat_timing', array('as' => 'api_b.videos', 'uses' => 'ApiTimingController@index'));
$router->get('/api/ayat_timing/reads', array('as' => 'api_b.videos', 'uses' => 'ApiTimingController@reads'));
$router->get('/api/ayat_timing/soar', array('as' => 'api_b.videos', 'uses' => 'ApiTimingController@soar'));