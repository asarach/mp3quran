<?php

use App\Ad;
use Carbon\Carbon;
use App\Menu;
use App\Media;
use App\Setting;
use Jenssegers\Agent\Agent;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Waavi\Translation\Models\Language;
use Illuminate\Support\Facades\Request;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Storage;

function downloadUrl($file)
{
    return str_replace('mp3quran.net/', 'mp3quran.net/download/',  $file);
}

function getAssetTimestamp()
{
    $setting = env('APP_ASSET_TIMESTAMP', false);
    $current_time = Carbon::now()->timestamp;

    if ($setting) {
        $html = '?' . $current_time;
    } else {
        $html = '';
    }
    return $html;
}

function transLocale($group, $item, $local)
{
    $trans = DB::table('translator_translations')
        ->where('group', $group)
        ->where('item', $item)
        ->where('locale', $local)
        ->first();

    if (is_null($trans)) {
        return $item;
    }
    return $trans->text;
}

function style_version()
{
    $version = request()->cookie('style_version');
    if (is_null($version)) {
        $agent = new Agent();
        if ($agent->isMobile()) {
            $version = 'm';
        } else {
            $version = 'r';
        }
    }
    return $version;
}
function get_params($data)
{
    $settings = Cache::rememberForever('settings', function () {
        $settings = [];
        $settings['name'] =  settings('app_name');
        $settings['home_about'] =  settings('home_about');
        $settings['main_radio'] =  settings('main_radio');
        $settings['facebook'] =  settings('facebook');
        $settings['twitter'] =  settings('twitter');
        $settings['instagram'] =  settings('instagram');
        $settings['youtube'] =  settings('youtube');
        $settings['soundcloud'] =  settings('soundcloud');
        $settings['env'] =  env('APP_ENV', 'local');
        return $settings;
    });
    //$settings['main_radio'] =  'https://rfcmedia.streamguys1.com/MusicPulse.mp3';

    $settings['csrfToken'] =  csrf_token();



    $agent = new Agent();
    if ($agent->isMobile() or $agent->isPhone() or $agent->device() == 'iPhone') {
        $settings['style_version'] =  'm';
    } else {
        $settings['style_version'] =  'r';
    }

    $data['settings'] = $settings;

    $data['languages']  = Cache::rememberForever('languages', function () {
        return LaravelLocalization::getSupportedLocales();
    });

    $locale = App::getLocale();
    // dd($locale);
    $data['subscribed'] =  session('newsletters_subscribed');
    $data['all_ads']  = Cache::remember('all_ads_' . $locale, 86400, function () use ($locale) {

        $current_time = Carbon::now();
        $ads = Ad::where('end_date', '>', $current_time)
            ->where('start_date', '<', $current_time)
            ->where('status', 1)
            ->where('locale', $locale)
            ->orderBy('order_num', 'ASC')
            ->get();
        $result = [];
        foreach ($ads as $ad) {
            if ($ad->place) {
                $result['place_' . $ad->place][] = $ad->toArray();
            }
        }
        return $result;
    });

    $data['current_language']  = LaravelLocalization::getCurrentLocale();

    $data['trans']  = Cache::rememberForever('trans_' . $data['current_language'], function () {
        return ['text' => Lang::get('text')];
    });
    $data['main_menu']  = getMainMenu($data['current_language'],  $settings['style_version']);

    try {
        $ssr =  ssr('js/app-server.js')
            ->context($data)
            ->fallback('<div id="app"></div>')
            ->render();
    } catch (\Throwable $th) {
        if (Auth::check() && Auth::user()->email == 'asaraach@gmail.com') {
            dd($th);
        } else {
            $ssr =  '<div id="app"></div>';
        }
    }

    // $ssr =  '<div id="app"></div>';

    return  compact('ssr', 'data');
}

function getMainMenu($locale, $version)
{
    // Cache::forget('main_menu_' . $locale . '_' . $version);
    $menu = Cache::rememberForever('main_menu_' . $locale . '_' . $version, function () use ($locale, $version) {
        switch ($version) {
            case 'm':
                $place = 'mobile';
                break;
            default:
                $place = 'desktop';
                break;
        }
        $menus = Menu::where('status', 1)->where('place', $place)->orderBy('order_num', 'asc')->get();
        $locale_id = Language::where('locale', $locale)->first()->id;
        $result = [];
        foreach ($menus as $key => $menu) {
            $menu_languages = json_decode($menu->languages, true);
            if ($menu_languages[$locale_id]) {
                $result[] = [
                    'icon' => $menu->icon,
                    'title' => $menu->title,
                    'slug' => $menu->slug,
                ];
            }
        }
        return $result;
    });
    // dd($menu);

    return $menu;
}

/**
 * Bind data to the view.
 *
 * @param  View  $view
 * @return void
 */
function flushTrans()
{
    $files =   Storage::disk('public_html')->allFiles('js/trans');
    foreach ($files as $file) {
        Storage::disk('public_html')->delete($file);
    }
    Cache::forget('settings');
    $translations_version = Setting::where('key', 'translations_version')->first();
    $translations_version->value = $translations_version->value + 1;
    $translations_version->save();

    $translations_version_val = $translations_version->value;

    Waavi\Translation\Facades\TranslationCache::flushAll();

    $languages = Waavi\Translation\Models\Language::all();

    foreach ($languages as $language) {
        $admin_trans = [];
        foreach (Waavi\Translation\Models\Translation::where('locale', $language->locale)->where('group', 'admin')->get() as $translation) {
            $admin_trans[$translation->item] = $translation->text;
        }
        $admin = json_encode($admin_trans);

        $front_trans = [];
        foreach (Waavi\Translation\Models\Translation::where('locale', $language->locale)->where('group', 'front')->get() as $translation) {
            $front_trans[$translation->item] = $translation->text;
        }
        $front = json_encode($front_trans);

        $text_trans = [];
        foreach (Waavi\Translation\Models\Translation::where('locale', $language->locale)->where('group', 'text')->get() as $translation) {
            $text_trans[$translation->item] = $translation->text;
        }
        $text = json_encode($text_trans);

        Storage::disk('public_html')->put('js/trans/admin_' . $language->locale . '.2.' . $translations_version_val . '.js', 'window.trans = {"admin" : ' . $admin . ',"front" : ' . $front . ',  "text" : ' . $text . '}');
        Storage::disk('public_html')->put('js/trans/text_' . $language->locale . '.2.' . $translations_version_val . '.js', 'window.trans = {"text" : ' . $text . '}');
    }
}

function createNavigationArray($annonces)
{
    $old = session('annonces_navigation');
    $page = request()->page;
    if (!is_null($old) and !is_null($page) and intval($page) > 1) {
        $result = $annonces->pluck('slug')->toArray();
        if (isset($result[0]) and !in_array($result[0], $old)) {
            $slugs = array_merge($old, $result);
        } else {
            $slugs = $old;
        }
    } else {
        $slugs = $annonces->pluck('slug')->toArray();
    }
    session(['annonces_navigation' => $slugs]);
    //dd($slugs);
}

function getMetas($data)
{
    $metas = [];

    if (isset($data['name'])) {
        $metas['name'] =  $data['name'];
    } else {
        $metas['name'] =  settings('name');
    }

    if (isset($data['seo_title'])) {
        $metas['seo_title'] =  $data['seo_title'];
    } else {
        $metas['seo_title'] = trans('text.main-title') . ' | MP3 Quran';
    }

    if (isset($data['seo_description'])) {
        $metas['seo_description'] =  $data['seo_description'];
    } else {
        $metas['seo_description'] =  trans('text.main-description');
    }

    if (isset($data['image'])) {
        $metas['image'] =  $data['image'];
    } else {
        $metas['image'] =  '';
    }

    if (isset($data['url'])) {
        $metas['url'] =  $data['url'];
    } else {
        $metas['url'] =  request()->url();
    }

    return $metas;
}
function setActive(string $path, string $class_name = "is-active")
{
    return url()->full() === $path ? $class_name : "";
}

function isActiveClass($a, $b, $c)
{
    if ($a == $b) {
        return $c;
    }
}
function LocaleDirection()
{
    if (LaravelLocalization::getCurrentLocale() == 'eng') {
        return 'ltr';
    } else {
        return LaravelLocalization::getCurrentLocaleDirection();
    }
}

function clearPostCache(array $cahces)
{
    foreach ($cahces as $cache) {
        Cache::forget($cache);
    }
}

function get_view($view, $params)
{
    if (request()->is('api/*') or request()->is('api')) {
        return $params;
    } else {
        return view($view, $params);
    }
}

function getPageViews()
{
    return config('drtopic.page_views');
}

function getLinkableTypes()
{
    $array = [
        'App\Sora' => trans('text.sora'),
        'App\Page' => trans('text.page'),
        'Url' => trans('text.url'),
        'Divider' => trans('text.divider'),
    ];
    return $array;
}

function getActiveIcon($status)
{
    if ($status == 1) {
        return '<i class="fa fa-chevron-down text-success"></i>';
    } else {
        return '<i class="fa fa-ban text-danger"></i>';
    }
}

function RateStars($rate)
{
    for ($i = 0; $i < 5; $i++) {
        if ($rate > $i) {
            echo '<span class="fa fa-star checked"></span>';
        } else {
            echo '<span class="fa fa-star"></span>';
        }
    }
}

function getActiveBtn($status, $id)
{
    if ($status == 1) {
        $icon = ' fa-chevron-down ';
        $text_class = ' text-success ';
        $btn_class = ' btn_deactivate ';
    } else {
        $icon = ' fa-ban ';
        $text_class = ' text-danger ';
        $btn_class = ' btn_activate ';
    }
    $html = '<a href="#" class="' . $btn_class . '" data-id="' . $id . '"><i class="fa' . $icon . $text_class . '"></i></a>';

    return $html;
}

function getReviewBtn($status, $id)
{
    if ($status == 1) {
        $icon = ' fa-chevron-down ';
        $text_class = ' text-success ';
        $btn_class = ' btn_dereview ';
    } else {
        $icon = ' fa-ban ';
        $text_class = ' text-danger ';
        $btn_class = ' btn_review ';
    }
    $html = '<a href="#" class="' . $btn_class . '" data-id="' . $id . '"><i class="fa' . $icon . $text_class . '"></i></a>';

    return $html;
}

function getStickyBtn($status, $id)
{
    if ($status == 1) {
        $icon = ' fa-chevron-down ';
        $text_class = ' text-success ';
        $btn_class = ' btn_desticky ';
    } else {
        $icon = ' fa-ban ';
        $text_class = ' text-danger ';
        $btn_class = ' btn_sticky ';
    }
    $html = '<a href="#" class="' . $btn_class . '" data-id="' . $id . '"><i class="fa' . $icon . $text_class . '"></i></a>';

    return $html;
}

function getPromoteBtn($status, $id)
{
    if ($status == 1) {
        $icon = ' fa-chevron-down ';
        $text_class = ' text-success ';
        $btn_class = ' btn_depromote ';
    } else {
        $icon = ' fa-ban ';
        $text_class = ' text-danger ';
        $btn_class = ' btn_promote ';
    }
    $html = '<a href="#" class="' . $btn_class . '" data-id="' . $id . '"><i class="fa' . $icon . $text_class . '"></i></a>';

    return $html;
}

function getUserRoles()
{
    return config('drtopic.user_roles');
}

function getUrlBase()
{
    $path = parse_url(Config::get('app.url'));
    if (isset($path['path'])) {
        return $path['path'] . '/';
    } else {
        return '/';
    }
}

function getFrontUrlBase()
{
    $url = request()->getSchemeAndHttpHost();
    if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https') {
        $url = str_replace('http:', 'https:',  $url);
    }
    return $url;
}


function settings($key, $default = null)
{
    $result = Cache::rememberForever('settings', function () {
        $settings = Setting::all();
        $result = [];
        foreach ($settings as $setting) {
            $result[$setting->key] = $setting->value;
        }
        return $result;
    });
    if (isset($result[$key])) {
        return $result[$key];
    } elseif (!is_null($default)) {
        return $default;
    } else {
        return '';
    }
}

function UseVue()
{
    return true;
}

function make_slug($string, $separator = '-')
{
    $text = html_entity_decode($string, ENT_QUOTES, 'UTF-8');
    $text = preg_replace('~[^\\pL\d]+~u', $separator, $text);
    $text = trim($text, $separator);
    return $text;
}
function make_query($q)
{
    $q = str_replace('أ', 'ا', $q);
    $q = str_replace('إ', 'ا', $q);
    $q = str_replace('آ', 'ا', $q);
    //$q = str_replace('', '', $q);
    return $q;
}
function getYoutubeId($url)
{
    // dd($url);
    preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $url, $match);

    return $match[1];
}

function formatBytes($bytes, $precision = 2)
{
    $units = array('B', 'KB', 'MB', 'GB', 'TB');

    $bytes = max($bytes, 0);
    $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
    $pow = min($pow, count($units) - 1);
    $bytes /= (1 << (10 * $pow));

    return round($bytes, $precision) . ' ' . $units[$pow];
}

/**
 * The users that maked to the radio.
 */
function formatDate($date)
{
    $dt = Carbon::parse($date);
    if ($dt) {
        $date = $dt->diffForHumans();               // 5 days ago
    } else {
        $date = '';
    }
    return $date;
}

/**
 * The users that maked to the radio.
 */
function formatDateB($date)
{
    $dt = Carbon::parse($date);
    if ($dt) {
        $date = $dt->formatLocalized('%d %B %Y - %H:%M');               // 5 days ago
    } else {
        $date = '';
    }
    return $date;
}

/**
 * The users that maked to the radio.
 */
function formatBody($body)
{
    $body = $body;
    $length = 2000;

    if (strlen($body) > $length) {

        // truncate body
        $bodyCut = substr($body, 0, $length);

        // make sure it ends in a word so assassinate doesn't become ass...
        $body = substr($bodyCut, 0, strrpos($bodyCut, ' ')) . ' ...';
    }
    return $body;
}

/**
 * The users that maked to the radio.
 */
function getExcerpt($body, $length = 1000)
{
    $body = strip_tags($body);
    //$body = nl2br($body);

    if (strlen($body) > $length) {

        // truncate body
        $bodyCut = substr($body, 0, $length);

        // make sure it ends in a word so assassinate doesn't become ass...
        $body = substr($bodyCut, 0, strrpos($bodyCut, ' ')) . ' ...';
    }
    $r = nl2br($body);
    $r = html_entity_decode($r);
    $r = preg_replace('/[\s]+/mu', ' ', $r);
    $r = preg_replace('/^(<br\s*\/?>)*|(<br\s*\/?>)*$/i', '', $r);


    //$r = preg_replace('/\s+/', ' ',$r);

    return $r;
}

function getThumbnail($images, $type, $size = 'md')
{
    if ($size) {
        $base = 'uploads/' . $type . '/' . $size . '/';
    } else {
        $base = 'uploads/' . $type . '/';
    }
    if (isset($images[0]) and $images[0]->uri and filter_var($images[0]->uri, FILTER_VALIDATE_URL)) {
        $image = $images[0]->uri;               // 5 days ago
    } elseif (isset($images[0]) and $images[0]->uri) {
        $image = asset($base . $images[0]->uri);
    } else {
        $image = asset($base . 'default.jpg');
    }

    return $image;
}
function getImage($image, $type, $size = 'md')
{
    if ($size) {
        $base = 'uploads/' . $type . '/' . $size . '/';
    } else {
        $base = 'uploads/' . $type . '/';
    }
    if (isset($image) and $image->uri and filter_var($image->uri, FILTER_VALIDATE_URL)) {
        $image = $image->uri;               // 5 days ago
    } elseif (isset($image) and $image->uri) {
        $image = asset($base . $image->uri);
    } else {
        $image = asset($base . 'default.jpg');
    }

    return $image;
}
function upload_url($url)
{
    return str_replace('mp3quran.net/uploads/', 'upload.mp3quran.org/', $url);
}
function get_old_image()
{
    $image_id = old('image');
    if ($image_id) {
        $image = Media::find($image_id);
        $image_path = getImage($image, 'questions', 0);
        $r = json_encode(['image_id' => $image_id, 'image_path' => $image_path]);
    } else {
        $r = 0;
    }
    return $r;
}
function is_home_class()
{
    $r = \Route::currentRouteName();
    if (in_array($r, ['index', 'page.about', 'page.biography', 'page.sitemap', 'page.contact', 'question.create'])) {
        return 'full-header';
    } else {
        return 'small-header';
    }
}
