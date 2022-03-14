<?php
/* Index  */
Route::get('/', ['as' => 'index', 'uses' => 'HomeController@index']);
Route::get('/generate-sitemap', array('as' => 'generate.sitemap', 'uses' => 'HomeController@sitemap'));

/* Ads  */
Route::get('/ads', array('as' => 'ad.index', 'uses' => 'AdController@index'));
Route::post('/ad', array('as' => 'ad.store', 'uses' => 'AdController@store'));
Route::get('/ad/edit/{id}', array('as' => 'ad.edit', 'uses' => 'AdController@edit'));
Route::post('/ad/translations/{id}', array('as' => 'ad.store', 'uses' => 'AdController@translations'));
Route::put('/ad/{id}', array('as' => 'ad.update', 'uses' => 'AdController@update'));
Route::delete('/ad/{id}', array('as' => 'ad.destroy', 'uses' => 'AdController@destroy'));
Route::get('/ad/restore/{id}', array('as' => 'ad.restore', 'uses' => 'AdController@restore'));
Route::get('/ad/{id}/status/{status}', array('as' => 'ad.status', 'uses' => 'AdController@changeStatus'));
Route::post('/ad/actions', array('as' => 'ad.actions', 'uses' => 'AdController@actions'));

/* Apps  */
Route::get('/apps', array('as' => 'app.index', 'uses' => 'AppController@index'));
Route::post('/app', array('as' => 'app.store', 'uses' => 'AppController@store'));
Route::post('/app/translations/{id}', array('as' => 'app.store', 'uses' => 'AppController@translations'));
Route::get('/app/edit/{id}', array('as' => 'app.edit', 'uses' => 'AppController@edit'));
Route::put('/app/{id}', array('as' => 'app.update', 'uses' => 'AppController@update'));
Route::delete('/app/{id}', array('as' => 'app.destroy', 'uses' => 'AppController@destroy'));
Route::get('/app/restore/{id}', array('as' => 'app.restore', 'uses' => 'AppController@restore'));
Route::get('/app/{id}/status/{status}', array('as' => 'app.status', 'uses' => 'AppController@changeStatus'));
Route::post('/app/actions', array('as' => 'app.actions', 'uses' => 'AppController@actions'));

/* Reports  */
Route::get('/reports', array('as' => 'report.index', 'uses' => 'ReportController@index'));
Route::delete('/report/{id}', array('as' => 'report.destroy', 'uses' => 'ReportController@destroy'));
Route::post('/report/actions', array('as' => 'report.actions', 'uses' => 'ReportController@actions'));


/*  Newsletter         */
Route::get("/newsletters",                       array("as"   => "newsletter.index",                 "uses" => "NewsletterController@index"));
Route::get("/newsletter/create",                 array("as"   => "newsletter.create",                "uses" => "NewsletterController@create"));
Route::post("/newsletter",                       array("as"   => "newsletter.store",                 "uses" => "NewsletterController@store"));
Route::post("/newsletter/translations/{id}",     array("as"   => "newsletter.store",                 "uses" => "NewsletterController@translations"));
Route::get("/newsletter/edit/{id}",              array("as"   => "newsletter.edit",                  "uses" => "NewsletterController@edit"));
Route::put("/newsletter/{id}",                   array("as"   => "newsletter.update",                "uses" => "NewsletterController@update"));
Route::delete("/newsletter/{id}",                array("as"   => "newsletter.destroy",               "uses" => "NewsletterController@destroy"));
Route::get("/newsletter/restore/{id}",           array("as"   => "newsletter.restore",               "uses" => "NewsletterController@restore"));
Route::get("/newsletter/{id}/status/{status}",   array("as"   => "newsletter.status",                "uses" => "NewsletterController@changeStatus"));
Route::post("/newsletter/actions",               array("as"   => "newsletter.actions",               "uses" => "NewsletterController@actions"));

Route::get("/nl_messages",                       array("as"   => "nl_message.index",                 "uses" => "NewsletterController@index"));
Route::get("/nl_message/create",                 array("as"   => "nl_message.create",                "uses" => "NewsletterController@create"));
Route::get("/nl_message/{id}",                   array("as"   => "nl_message.show",                "uses" => "NewsletterController@show"));
Route::post("/nl_message",                       array("as"   => "nl_message.store",                 "uses" => "NewsletterController@store"));
Route::post("/nl_message/translations/{id}",     array("as"   => "nl_message.store",                 "uses" => "NewsletterController@translations"));
Route::get("/nl_message/edit/{id}",              array("as"   => "nl_message.edit",                  "uses" => "NewsletterController@edit"));
Route::post("/nl_message/send",              array("as"   => "nl_message.send",                  "uses" => "NewsletterController@send"));
Route::put("/nl_message/{id}",                   array("as"   => "nl_message.update",                "uses" => "NewsletterController@update"));
Route::delete("/nl_message/{id}",                array("as"   => "nl_message.destroy",               "uses" => "NewsletterController@destroy"));
Route::get("/nl_message/restore/{id}",           array("as"   => "nl_message.restore",               "uses" => "NewsletterController@restore"));
Route::get("/nl_message/{id}/status/{status}",   array("as"   => "nl_message.status",                "uses" => "NewsletterController@changeStatus"));
Route::post("/nl_message/actions",               array("as"   => "nl_message.actions",               "uses" => "NewsletterController@actions"));

Route::get("/nl_subscribers",                       array("as"   => "nl_subscriber.index",                 "uses" => "NewsletterController@index"));
Route::get("/nl_subscriber/create",                 array("as"   => "nl_subscriber.create",                "uses" => "NewsletterController@create"));
Route::post("/nl_subscriber",                       array("as"   => "nl_subscriber.store",                 "uses" => "NewsletterController@store"));
Route::post("/nl_subscriber/translations/{id}",     array("as"   => "nl_subscriber.store",                 "uses" => "NewsletterController@translations"));
Route::get("/nl_subscriber/edit/{id}",              array("as"   => "nl_subscriber.edit",                  "uses" => "NewsletterController@edit"));
Route::put("/nl_subscriber/{id}",                   array("as"   => "nl_subscriber.update",                "uses" => "NewsletterController@update"));
Route::delete("/nl_subscriber/{id}",                array("as"   => "nl_subscriber.destroy",               "uses" => "NewsletterController@destroy"));
Route::get("/nl_subscriber/restore/{id}",           array("as"   => "nl_subscriber.restore",               "uses" => "NewsletterController@restore"));
Route::get("/nl_subscriber/{id}/status/{status}",   array("as"   => "nl_subscriber.status",                "uses" => "NewsletterController@changeStatus"));
Route::post("/nl_subscriber/actions",               array("as"   => "nl_subscriber.actions",               "uses" => "NewsletterController@actions"));

Route::get("/nl_templates",                       array("as"   => "nl_template.index",                 "uses" => "NewsletterController@index"));
Route::get("/nl_template/create",                 array("as"   => "nl_template.create",                "uses" => "NewsletterController@create"));
Route::post("/nl_template",                       array("as"   => "nl_template.store",                 "uses" => "NewsletterController@store"));
Route::post("/nl_template/translations/{id}",     array("as"   => "nl_template.store",                 "uses" => "NewsletterController@translations"));
Route::get("/nl_template/edit/{id}",              array("as"   => "nl_template.edit",                  "uses" => "NewsletterController@edit"));
Route::put("/nl_template/{id}",                   array("as"   => "nl_template.update",                "uses" => "NewsletterController@update"));
Route::delete("/nl_template/{id}",                array("as"   => "nl_template.destroy",               "uses" => "NewsletterController@destroy"));
Route::get("/nl_template/restore/{id}",           array("as"   => "nl_template.restore",               "uses" => "NewsletterController@restore"));
Route::get("/nl_template/{id}/status/{status}",   array("as"   => "nl_template.status",                "uses" => "NewsletterController@changeStatus"));
Route::post("/nl_template/actions",               array("as"   => "nl_template.actions",               "uses" => "NewsletterController@actions"));



/* Country  */
// Route::get('/countries', array('as' => 'country.index', 'uses' => 'CountryController@index'));
// Route::post('/country', array('as' => 'country.store', 'uses' => 'CountryController@store'));
// Route::post('/country/translations/{id}', array('as' => 'country.store', 'uses' => 'CountryController@translations'));
// Route::get('/country/edit/{id}', array('as' => 'country.edit', 'uses' => 'CountryController@edit'));
// Route::put('/country/{id}', array('as' => 'country.update', 'uses' => 'CountryController@update'));
// Route::delete('/country/{id}', array('as' => 'country.destroy', 'uses' => 'CountryController@destroy'));
// Route::get('/country/restore/{id}', array('as' => 'country.restore', 'uses' => 'CountryController@restore'));
// Route::get('/country/{id}/status/{status}', array('as' => 'country.status', 'uses' => 'CountryController@changeStatus'));
// Route::post('/country/actions', array('as' => 'country.actions', 'uses' => 'CountryController@actions'));

/*  Language */
Route::get('/languages', array('as' => 'language.index', 'uses' => 'LanguageController@index'));
Route::post('/language', array('as' => 'language.store', 'uses' => 'LanguageController@store'));
Route::get('/language/edit/{id}', array('as' => 'language.edit', 'uses' => 'LanguageController@edit'));
Route::put('/language/{id}', array('as' => 'language.update', 'uses' => 'LanguageController@update'));
Route::delete('/language/{id}', array('as' => 'language.destroy', 'uses' => 'LanguageController@destroy'));
Route::post('/language/actions', array('as' => 'language.actions', 'uses' => 'LanguageController@actions'));
Route::get('/language/{id}/status/{status}', array('as' => 'language.status', 'uses' => 'LanguageController@changeStatus'));

/* Link  */
Route::get('/links', array('as' => 'link.index', 'uses' => 'LinkController@index'));
Route::post('/link', array('as' => 'link.store', 'uses' => 'LinkController@store'));
Route::get('/link/edit/{id}', array('as' => 'link.edit', 'uses' => 'LinkController@edit'));
Route::put('/link/{id}', array('as' => 'link.update', 'uses' => 'LinkController@update'));
Route::delete('/link/{id}', array('as' => 'link.destroy', 'uses' => 'LinkController@destroy'));
Route::get('/link/{id}/status/{status}', array('as' => 'link.status', 'uses' => 'LinkController@changeStatus'));
Route::post('/link/actions', array('as' => 'link.actions', 'uses' => 'LinkController@actions'));

/* Media  */
Route::post('/medias/upload', array('as' => 'medias.upload', 'uses' => 'MediaController@upload'));
Route::post('/file/upload', array('as' => 'file.upload', 'uses' => 'MediaController@uploadFile'));
Route::post('/images/ckupload', array('as' => 'read.ckupload', 'uses' => 'MediaController@ckuploadImages'));
Route::post('/medias/actions', array('as' => 'medias.actions', 'uses' => 'MediaController@actions'));

/* Message  */
Route::get('/messages', array('as' => 'message.index', 'uses' => 'MessageController@index'));
Route::get('/message/{id}', array('as' => 'message.show', 'uses' => 'MessageController@show'));
Route::delete('/message/{id}', array('as' => 'message.destroy', 'uses' => 'MessageController@destroy'));
Route::get('/message/{id}/viewed/{viewed}', array('as' => 'message.viewed', 'uses' => 'MessageController@changeViewed'));
Route::post('/message/actions', array('as' => 'message.actions', 'uses' => 'MessageController@actions'));

/* Mushaf  */
Route::get('/mushafs', array('as' => 'mushaf.index', 'uses' => 'MushafController@index'));
Route::post('/mushaf', array('as' => 'mushaf.store', 'uses' => 'MushafController@store'));
Route::post('/mushaf/translations/{id}', array('as' => 'mushaf.store', 'uses' => 'MushafController@translations'));
Route::get('/mushaf/edit/{id}', array('as' => 'mushaf.edit', 'uses' => 'MushafController@edit'));
Route::put('/mushaf/{id}', array('as' => 'mushaf.update', 'uses' => 'MushafController@update'));
Route::delete('/mushaf/{id}', array('as' => 'mushaf.destroy', 'uses' => 'MushafController@destroy'));
Route::get('/mushaf/restore/{id}', array('as' => 'mushaf.restore', 'uses' => 'MushafController@restore'));
Route::get('/mushaf/{id}/status/{status}', array('as' => 'mushaf.status', 'uses' => 'MushafController@changeStatus'));
Route::post('/mushaf/actions', array('as' => 'mushaf.actions', 'uses' => 'MushafController@actions'));

/* Vgroup  */
Route::get('/vgroups', array('as' => 'vgroup.index', 'uses' => 'VgroupController@index'));
Route::post('/vgroup', array('as' => 'vgroup.store', 'uses' => 'VgroupController@store'));
Route::post('/vgroup/translations/{id}', array('as' => 'vgroup.store', 'uses' => 'VgroupController@translations'));
Route::get('/vgroup/edit/{id}', array('as' => 'vgroup.edit', 'uses' => 'VgroupController@edit'));
Route::put('/vgroup/{id}', array('as' => 'vgroup.update', 'uses' => 'VgroupController@update'));
Route::delete('/vgroup/{id}', array('as' => 'vgroup.destroy', 'uses' => 'VgroupController@destroy'));
Route::get('/vgroup/restore/{id}', array('as' => 'vgroup.restore', 'uses' => 'VgroupController@restore'));
Route::get('/vgroup/{id}/status/{status}', array('as' => 'vgroup.status', 'uses' => 'VgroupController@changeStatus'));
Route::post('/vgroup/actions', array('as' => 'vgroup.actions', 'uses' => 'VgroupController@actions'));

/* Page  */
Route::get('/pages', array('as' => 'page.index', 'uses' => 'PageController@index'));
Route::get('/page/create', array('as' => 'page.create', 'uses' => 'PageController@create'));
Route::post('/page', array('as' => 'page.store', 'uses' => 'PageController@store'));
Route::post('/page/translations/{id}', array('as' => 'page.store', 'uses' => 'PageController@translations'));
Route::get('/page/edit/{id}', array('as' => 'page.edit', 'uses' => 'PageController@edit'));
Route::put('/page/{id}', array('as' => 'page.update', 'uses' => 'PageController@update'));
Route::delete('/page/{id}', array('as' => 'page.destroy', 'uses' => 'PageController@destroy'));
Route::get('/page/restore/{id}', array('as' => 'page.restore', 'uses' => 'PageController@restore'));
Route::get('/page/{id}/status/{status}', array('as' => 'page.status', 'uses' => 'PageController@changeStatus'));
Route::post('/page/actions', array('as' => 'page.actions', 'uses' => 'PageController@actions'));

/* Radio  */
Route::get('/radios', array('as' => 'radio.index', 'uses' => 'RadioController@index'));
Route::post('/radio', array('as' => 'radio.store', 'uses' => 'RadioController@store'));
Route::post('/radio/translations/{id}', array('as' => 'radio.store', 'uses' => 'RadioController@translations'));
Route::get('/radio/edit/{id}', array('as' => 'radio.edit', 'uses' => 'RadioController@edit'));
Route::put('/radio/{id}', array('as' => 'radio.update', 'uses' => 'RadioController@update'));
Route::delete('/radio/{id}', array('as' => 'radio.destroy', 'uses' => 'RadioController@destroy'));
Route::get('/radio/restore/{id}', array('as' => 'radio.restore', 'uses' => 'RadioController@restore'));
Route::get('/radio/{id}/status/{status}', array('as' => 'radio.status', 'uses' => 'RadioController@changeStatus'));
Route::post('/radio/actions', array('as' => 'radio.actions', 'uses' => 'RadioController@actions'));

/* Tadabor  */
Route::get('/tadabors', array('as' => 'tadabor.index', 'uses' => 'TadaborController@index'));
Route::post('/tadabor', array('as' => 'tadabor.store', 'uses' => 'TadaborController@store'));
Route::post('/tadabor/languages', array('as' => 'tadabor.store', 'uses' => 'TadaborController@storeLanguages'));
Route::post('/tadabor/translations/{id}', array('as' => 'tadabor.store', 'uses' => 'TadaborController@translations'));
Route::get('/tadabor/edit/{id}', array('as' => 'tadabor.edit', 'uses' => 'TadaborController@edit'));
Route::put('/tadabor/{id}', array('as' => 'tadabor.update', 'uses' => 'TadaborController@update'));
Route::delete('/tadabor/{id}', array('as' => 'tadabor.destroy', 'uses' => 'TadaborController@destroy'));
Route::get('/tadabor/restore/{id}', array('as' => 'tadabor.restore', 'uses' => 'TadaborController@restore'));
Route::get('/tadabor/{id}/status/{status}', array('as' => 'tadabor.status', 'uses' => 'TadaborController@changeStatus'));
Route::post('/tadabor/actions', array('as' => 'tadabor.actions', 'uses' => 'TadaborController@actions'));


/*Menu*/
Route::get("/menus", array("as" => "menu.index", "uses" => "MenuController@index"));
Route::get("/menu/create", array("as" => "menu.create", "uses" => "MenuController@create"));
Route::post("/menu", array("as" => "menu.store", "uses" => "MenuController@store"));
Route::get("/menu/{id}", array("as" => "menu.show", "uses" => "MenuController@show"));
Route::get("/menu/edit/{id}", array("as" => "menu.edit", "uses" => "MenuController@edit"));
Route::put("/menu/{id}", array("as" => "menu.update", "uses" => "MenuController@update"));
Route::delete("/menu/{id}", array("as" => "menu.destroy", "uses" => "MenuController@destroy"));
Route::get("/menu/restore/{id}", array("as" => "menu.restore", "uses" => "MenuController@restore"));
Route::get("/menu/{id}/status/{status}", array("as" => "menu.status", "uses" => "MenuController@changeStatus"));
Route::get("/menu/{id}/promoted/{promoted}", array("as" => "menu.promoted", "uses" => "MenuController@changePromote"));
Route::get("/menu/{id}/sticky/{sticky}", array("as" => "menu.sticky", "uses" => "MenuController@changeSticky"));
Route::get("/menu/duplicate/{id}", array("as" => "menu.duplicate", "uses" => "MenuController@duplicate"));
Route::post("/menu/actions", array("as" => "menu.actions", "uses" => "MenuController@actions"));

/* Read  */
Route::get('/reads', array('as' => 'read.index', 'uses' => 'ReadController@index'));
Route::get('/read/create', array('as' => 'read.create', 'uses' => 'ReadController@create'));
Route::post('/read', array('as' => 'read.store', 'uses' => 'ReadController@store'));
Route::get('/read/translations/generate', array('as' => 'read.translations.generate', 'uses' => 'ReadController@generateTranslations'));
Route::post('/read/translations/{id}', array('as' => 'read.translations', 'uses' => 'ReadController@translations'));
Route::get('/read/edit/{id}', array('as' => 'read.edit', 'uses' => 'ReadController@edit'));
Route::get('/read/{id}/report/{change}/{sora}', array('as' => 'read.report', 'uses' => 'ReadController@report'));
Route::put('/read/{id}', array('as' => 'read.update', 'uses' => 'ReadController@update'));
Route::delete('/read/{id}', array('as' => 'read.destroy', 'uses' => 'ReadController@destroy'));
Route::get('/read/restore/{id}', array('as' => 'read.restore', 'uses' => 'ReadController@restore'));
Route::get('/read/{id}/status/{status}', array('as' => 'read.status', 'uses' => 'ReadController@changeStatus'));
Route::post('/read/actions', array('as' => 'read.actions', 'uses' => 'ReadController@actions'));

/* Reciter  */
Route::get('/reciters', array('as' => 'reciter.index', 'uses' => 'ReciterController@index'));
Route::post('/reciter', array('as' => 'reciter.store', 'uses' => 'ReciterController@store'));
Route::post('/reciter/translations/{id}', array('as' => 'reciter.store', 'uses' => 'ReciterController@translations'));
Route::get('/reciter/edit/{id}', array('as' => 'reciter.edit', 'uses' => 'ReciterController@edit'));
Route::put('/reciter/{id}', array('as' => 'reciter.update', 'uses' => 'ReciterController@update'));
Route::delete('/reciter/{id}', array('as' => 'reciter.destroy', 'uses' => 'ReciterController@destroy'));
Route::get('/reciter/restore/{id}', array('as' => 'reciter.restore', 'uses' => 'ReciterController@restore'));
Route::get('/reciter/{id}/status/{status}', array('as' => 'reciter.status', 'uses' => 'ReciterController@changeStatus'));
Route::post('/reciter/actions', array('as' => 'reciter.actions', 'uses' => 'ReciterController@actions'));

/* Tafsir  */
Route::get('/tafsirs', array('as' => 'tafsir.index', 'uses' => 'TafsirController@index'));
Route::post('/tafsir', array('as' => 'tafsir.store', 'uses' => 'TafsirController@store'));
Route::post('/tafsir/translations/{id}', array('as' => 'tafsir.store', 'uses' => 'TafsirController@translations'));
Route::get('/tafsir/edit/{id}', array('as' => 'tafsir.edit', 'uses' => 'TafsirController@edit'));
Route::put('/tafsir/{id}', array('as' => 'tafsir.update', 'uses' => 'TafsirController@update'));
Route::delete('/tafsir/{id}', array('as' => 'tafsir.destroy', 'uses' => 'TafsirController@destroy'));
Route::get('/tafsir/restore/{id}', array('as' => 'tafsir.restore', 'uses' => 'TafsirController@restore'));
Route::get('/tafsir/{id}/status/{status}', array('as' => 'tafsir.status', 'uses' => 'TafsirController@changeStatus'));
Route::post('/tafsir/actions', array('as' => 'tafsir.actions', 'uses' => 'TafsirController@actions'));

/* Tsora  */
Route::get('/tsoras/{tafsir}', array('as' => 'tsora.index', 'uses' => 'TsoraController@index'));
Route::post('/tsora', array('as' => 'tsora.store', 'uses' => 'TsoraController@store'));
Route::post('/tsora/translations/{id}', array('as' => 'tsora.store', 'uses' => 'TsoraController@translations'));
Route::get('/tsora/edit/{id}', array('as' => 'tsora.edit', 'uses' => 'TsoraController@edit'));
Route::put('/tsora/{id}', array('as' => 'tsora.update', 'uses' => 'TsoraController@update'));
Route::delete('/tsora/{id}', array('as' => 'tsora.destroy', 'uses' => 'TsoraController@destroy'));
Route::get('/tsora/restore/{id}', array('as' => 'tsora.restore', 'uses' => 'TsoraController@restore'));
Route::get('/tsora/{id}/status/{status}', array('as' => 'tsora.status', 'uses' => 'TsoraController@changeStatus'));
Route::post('/tsora/actions', array('as' => 'tsora.actions', 'uses' => 'TsoraController@actions'));

/* Rewaya  */
Route::get('/rewayat', array('as' => 'rewaya.index', 'uses' => 'RewayaController@index'));
Route::post('/rewaya', array('as' => 'rewaya.store', 'uses' => 'RewayaController@store'));
Route::post('/rewaya/translations/{id}', array('as' => 'rewaya.store', 'uses' => 'RewayaController@translations'));
Route::get('/rewaya/edit/{id}', array('as' => 'rewaya.edit', 'uses' => 'RewayaController@edit'));
Route::put('/rewaya/{id}', array('as' => 'rewaya.update', 'uses' => 'RewayaController@update'));
Route::delete('/rewaya/{id}', array('as' => 'rewaya.destroy', 'uses' => 'RewayaController@destroy'));
Route::get('/rewaya/restore/{id}', array('as' => 'rewaya.restore', 'uses' => 'RewayaController@restore'));
Route::get('/rewaya/{id}/status/{status}', array('as' => 'rewaya.status', 'uses' => 'RewayaController@changeStatus'));
Route::post('/rewaya/actions', array('as' => 'rewaya.actions', 'uses' => 'RewayaController@actions'));

/* Server  */
Route::get('/servers', array('as' => 'server.index', 'uses' => 'ServerController@index'));
Route::post('/server', array('as' => 'server.store', 'uses' => 'ServerController@store'));
Route::post('/server/test', array('as' => 'server.store', 'uses' => 'ServerController@test'));
Route::get('/server/edit/{id}', array('as' => 'server.edit', 'uses' => 'ServerController@edit'));
Route::put('/server/{id}', array('as' => 'server.update', 'uses' => 'ServerController@update'));
Route::delete('/server/{id}', array('as' => 'server.destroy', 'uses' => 'ServerController@destroy'));
Route::get('/server/restore/{id}', array('as' => 'server.restore', 'uses' => 'ServerController@restore'));
Route::get('/server/{id}/status/{status}', array('as' => 'server.status', 'uses' => 'ServerController@changeStatus'));
Route::post('/server/actions', array('as' => 'server.actions', 'uses' => 'ServerController@actions'));

/* Setting  */
Route::get('/settings', array('as' => 'setting.index', 'uses' => 'SettingController@index'));
Route::put('/settings', array('as' => 'setting.update', 'uses' => 'SettingController@update'));

/* Sora  */
Route::get('/soar', array('as' => 'sora.index', 'uses' => 'SoraController@index'));
Route::post('/sora', array('as' => 'sora.store', 'uses' => 'SoraController@store'));
Route::get('/sora/edit/{id}', array('as' => 'sora.edit', 'uses' => 'SoraController@edit'));
Route::put('/sora/{id}', array('as' => 'sora.update', 'uses' => 'SoraController@update'));
Route::delete('/sora/{id}', array('as' => 'sora.destroy', 'uses' => 'SoraController@destroy'));
Route::get('/sora/{id}/status/{status}', array('as' => 'sora.status', 'uses' => 'SoraController@changeStatus'));
Route::get('/sora/restore/{id}', array('as' => 'sora.restore', 'uses' => 'SoraController@restore'));
Route::post('/sora/actions', array('as' => 'sora.actions', 'uses' => 'SoraController@actions'));

/* Translation  */
Route::get('/translations', array('as' => 'translation.index', 'uses' => 'TranslationController@index'));
Route::post('/translation', array('as' => 'translation.store', 'uses' => 'TranslationController@store'));
Route::put('/translations', array('as' => 'translation.update', 'uses' => 'TranslationController@update'));
Route::delete('/translation/{id}', array('as' => 'translation.destroy', 'uses' => 'TranslationController@destroy'));
Route::get('/translations/translator-fix', array('as' => 'translation.translator.fix', 'uses' => 'TranslationController@fixTranslations'));
Route::post('/translation/actions', array('as' => 'translation.actions', 'uses' => 'TranslationController@actions'));

/* Tv  */
Route::get('/tvs', array('as' => 'tv.index', 'uses' => 'TvController@index'));
Route::post('/tv', array('as' => 'tv.store', 'uses' => 'TvController@store'));
Route::post('/tv/translations/{id}', array('as' => 'tv.store', 'uses' => 'TvController@translations'));
Route::get('/tv/edit/{id}', array('as' => 'tv.edit', 'uses' => 'TvController@edit'));
Route::put('/tv/{id}', array('as' => 'tv.update', 'uses' => 'TvController@update'));
Route::delete('/tv/{id}', array('as' => 'tv.destroy', 'uses' => 'TvController@destroy'));
Route::get('/tv/restore/{id}', array('as' => 'tv.restore', 'uses' => 'TvController@restore'));
Route::get('/tv/{id}/status/{status}', array('as' => 'tv.status', 'uses' => 'TvController@changeStatus'));
Route::post('/tv/actions', array('as' => 'tv.actions', 'uses' => 'TvController@actions'));

/* User  */
Route::get('/users', array('as' => 'user.index', 'uses' => 'UserController@index'));
Route::get('/user/create', array('as' => 'user.create', 'uses' => 'UserController@create'));
Route::post('/user', array('as' => 'user.store', 'uses' => 'UserController@store'));
Route::get('/user/edit/{id}', array('as' => 'user.edit', 'uses' => 'UserController@edit'));
Route::put('/user/{id}', array('as' => 'user.update', 'uses' => 'UserController@update'));
Route::delete('/user/{id}', array('as' => 'user.destroy', 'uses' => 'UserController@destroy'));
Route::get('/user/{id}/role/{role}', array('as' => 'user.role', 'uses' => 'UserController@changeRole'));
Route::post('/user/upload-avatar', array('as' => 'user.uploadAvatar', 'uses' => 'UserController@uploadAvatar'));
Route::post('/user/actions', array('as' => 'user.actions', 'uses' => 'UserController@actions'));

/* Advice  */
Route::get('/videos', array('as' => 'video.index', 'uses' => 'VideoController@index'));
Route::post('/video', array('as' => 'video.store', 'uses' => 'VideoController@store'));
Route::post('/video/translations/{id}', array('as' => 'video.store', 'uses' => 'VideoController@translations'));
Route::get('/video/edit/{id}', array('as' => 'video.edit', 'uses' => 'VideoController@edit'));
Route::put('/video/{id}', array('as' => 'video.update', 'uses' => 'VideoController@update'));
Route::delete('/video/{id}', array('as' => 'video.destroy', 'uses' => 'VideoController@destroy'));
Route::get('/video/restore/{id}', array('as' => 'video.restore', 'uses' => 'VideoController@restore'));
Route::get('/video/{id}/status/{status}', array('as' => 'video.status', 'uses' => 'VideoController@changeStatus'));
Route::post('/video/actions', array('as' => 'video.actions', 'uses' => 'VideoController@actions'));
