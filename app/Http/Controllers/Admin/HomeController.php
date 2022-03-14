<?php

namespace App\Http\Controllers\Admin;

use Cache;
use App\Tv;
use App\Read;
use App\Radio;
use App\Video;
use App\App;
use App\Mushaf;
use App\Reciter;
use Carbon\Carbon;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Http\Controllers\Controller;
use Waavi\Translation\Models\Language;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {


        $stats = Cache::remember('admin_home_stats', 86400 * 300, function () {
            $stats = [];
            $stats['radios'] = Radio::count();
            $stats['tvs'] = Tv::count();
            $stats['videos'] = Video::count();
            $stats['reads'] = Read::count();
            $stats['reciters'] = Reciter::count();
            return $stats;
        });

        return compact('stats');
    }

    public function sitemap()
    {

        try {
            $sitemapPath = public_path('/sitemap.xml');
            $sitemap = Sitemap::create();
            // add static pages  
            $sitemap = $this->addSitemapLink($sitemap, '/ar/' , 0.9);
            $sitemap = $this->addSitemapLink($sitemap, '/ar/about' , 0.9);
            $sitemap = $this->addSitemapLink($sitemap, '/ar/api' , 0.9);
            $sitemap = $this->addSitemapLink($sitemap, '/ar/contact-us' , 0.9);
            $sitemap = $this->addSitemapLink($sitemap, '/ar/live' , 0.9);
            $sitemap = $this->addSitemapLink($sitemap, '/ar/mushaf' , 0.9);
            $sitemap = $this->addSitemapLink($sitemap, '/ar/alkahf-surah' , 0.9);
            $sitemap = $this->addSitemapLink($sitemap, '/ar/radios' , 0.9);

            // add reads 
            $sitemap = $this->addSitemapLink($sitemap, '/ar/reciters' , 0.9);
            $reads = Read::where('status', 1)->get();
            foreach ($reads as $read) {
                $sitemap = $this->addSitemapLink($sitemap, '/ar/' . $read->slug, 0.9);
            }
            // add videos 
            $sitemap = $this->addSitemapLink($sitemap, '/ar/videos' , 0.9);
            $videos = Video::where('status', 1)->get();
            foreach ($videos as $video) {
                $sitemap = $this->addSitemapLink($sitemap, '/ar/video/' . $video->slug, 0.9);
            }
            // add ِapps 
            $sitemap = $this->addSitemapLink($sitemap, '/ar/apps' , 0.9);
            $apps = App::where('status', 1)->get();
            foreach ($apps as $app) {
                $sitemap = $this->addSitemapLink($sitemap, '/ar/app/' . $app->slug, 0.9);
            }

            $sitemap->writeToFile($sitemapPath);
            return true;
        } catch (\Throwable $th) {
            // dd($th);
            abort(500);
        }
    }
    public function addSitemapLink($sitemap, $url, $prerioty)
    {
        $urlObj = Url::create($url)
            ->setLastModificationDate(Carbon::today())
            ->setPriority($prerioty)
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_YEARLY);

        $languages = Language::all();
        foreach ($languages as $lang) {
            $urlObj = $urlObj->addAlternate(str_replace('ar', $lang->locale, $url), $lang->regional);
        }

        $sitemap->add($urlObj);
        return $sitemap;
    }
}
