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
mix.js('resources/js/app_v3.js', 'public/js/app_v3.0.1.js')
    .sass('resources/sass/app.scss', 'public/css/app2.2.css')
    .sass('resources/sass/errors.scss', 'public/css/errors2.2.css')
    .version()
    .options({ processCssUrls: false });

mix.js('resources/admin/admin.js', "js/admin2.2.js")
    .sass('resources/sass/admin/admin.scss', "css/admin2.2.css")
    .version()
    .options({ processCssUrls: false });
