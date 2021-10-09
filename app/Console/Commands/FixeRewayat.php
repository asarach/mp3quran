<?php

namespace Mp3quran\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Mp3quran\Rewaya;
use Cviebrock\EloquentSluggable\Services\SlugService;


class FixeRewayat extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:rewayat';

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
      
        $rewayas = DB::connection('old_database')->table('quran__classification')->where('categoryID', 1)->get();
        $languages = DB::table('translator_languages')->get();

        foreach ($rewayas as $rewaya) {
            if ($rewaya->enable == 'yes') {
                $status = 1;
            } else {
                $status = 0;
            }
            
            $id = DB::table('rewayat')->insertGetId([
              'id' => $rewaya->classificationID, 
              'name' => $rewaya->classificationNameAr,
              'folder' => $rewaya->folderName,
              'slug' => SlugService::createSlug(Rewaya::class, 'slug', $rewaya->classificationNameAr),
              'description' => '',
              'keywords' => '',
              'status' => $status ,
              ]);
              
              foreach ($languages as $language) {
                $lang = DB::connection('old_database')->table('quran__languages')->where('languageCode', $language->locale)->first()->languageID;
                $name = DB::connection('old_database')->table('quran__translations')->where('languageID', $lang)->where('ressourceID', $rewaya->ressourceNameID)->first();
                if ($name) {
                    DB::table('translator_translations')->insert([
                        'locale' => $language->locale, 
                        'group' => 'rewaya-name', 
                        'item' =>  $id, 
                        'text' => $name->val 
                    ]);
                }
                
              }
              
              $this->info("rewaya Added");
        }
        
    }
}
