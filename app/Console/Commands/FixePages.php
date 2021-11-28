<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;


class FixePages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:pages';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
      
        $pages = DB::connection('old_database')->table('quran__pages')->get();
        $languages = DB::table('translator_languages')->get();

        foreach ($pages as $page) {
            $id = DB::table('pages')->insertGetId([
              'id' => $page->pageID, 
              'name' => $page->alias, 
              'slug' => $page->alias, 
              'title' => $page->pageTitleAr, 
              'content' => $page->pageDescriptionAr , 
              'description' => $page->meta_descriptionAr,
              'keywords' => $page->meta_keysAr ,
              'status' => 1 ,
              ]);
              foreach ($languages as $language) {
                $lang = DB::connection('old_database')->table('quran__languages')->where('languageCode', $language->locale)->first()->languageID;
                $title = DB::connection('old_database')->table('quran__translations')->where('languageID', $lang)->where('ressourceID', $page->ressourceTitleID)->first();
                if ($title) {
                    DB::table('translator_translations')->insert([
                        'locale' => $language->locale, 
                        'group' => 'page-title', 
                        'item' =>  $id, 
                        'text' => $title->val 
                    ]);
                }
                $description = DB::connection('old_database')->table('quran__translations')->where('languageID', $lang)->where('ressourceID', $page->ressourceDescriptionID)->first();
                if ($description) {
                    DB::table('translator_translations')->insert([
                        'locale' => $language->locale, 
                        'group' => 'page-description', 
                        'item' => $id, 
                        'text' => $description->val
                    ]);
                }
                $metaKeys = DB::connection('old_database')->table('quran__translations')->where('languageID', $lang)->where('ressourceID', $page->ressourceMetaKeysID)->first();
                if ($description) {
                    DB::table('translator_translations')->insert([
                        'locale' => $language->locale, 
                        'group' => 'page-meta-keys', 
                        'item' => $id, 
                        'text' => $metaKeys->val
                    ]);
                }
                $metaDescription = DB::connection('old_database')->table('quran__translations')->where('languageID', $lang)->where('ressourceID', $page->ressourceMetaDescriptionID)->first();
                if ($description) {
                    DB::table('translator_translations')->insert([
                        'locale' => $language->locale, 
                        'group' => 'page-meta-description', 
                        'item' =>  $id, 
                        'text' => $metaDescription->val
                    ]);
                }

                
                
                
              }
              $this->info("server Added");
        }
        
    }
}
