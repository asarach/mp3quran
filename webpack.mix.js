const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/js/app.js', 'public/js/app2.0.js')
    .js('resources/js/player/player.js', 'public/js/player2.0.js')
    .sass('resources/sass/app.scss', 'public/css/app2.0.css')
    .sass('resources/sass/errors.scss', 'public/css/errors2.0.css')
    .version()
    .options({ processCssUrls: false });

mix.js('resources/js/admin/admin.js', "js/admin2.0.js")
    .sass('resources/sass/admin/admin.scss', "css/admin2.0.css")
    .version()
    .options({ processCssUrls: false });
