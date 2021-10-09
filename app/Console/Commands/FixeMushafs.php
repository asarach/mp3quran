<?php

namespace Mp3quran\Console\Commands;

use Illuminate\Console\Command;
use DB;

use Cviebrock\EloquentSluggable\Services\SlugService;
use Mp3quran\Mushaf;

class FixeMushafs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:mushafs';

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
      
        $mushafs = DB::connection('old_database')->table('quran__classification')->where('categoryID', 2)->get();
        $languages = DB::table('translator_languages')->get();

        foreach ($mushafs as $mushaf) {
            $id = DB::table('mushafs')->insertGetId([
              'id' => $mushaf->classificationID, 
              'name' => $mushaf->classificationNameAr,
              'folder' => $mushaf->folderName,
              'slug' => SlugService::createSlug(Mushaf::class, 'slug', $mushaf->classificationNameAr),
              'status' => 1 ,
              ]);
              
              foreach ($languages as $language) {
                $lang = DB::connection('old_database')->table('quran__languages')->where('languageCode', $language->locale)->first()->languageID;
                $name = DB::connection('old_database')->table('quran__translations')->where('languageID', $lang)->where('ressourceID', $mushaf->ressourceNameID)->first();
                if ($name) {
                    DB::table('translator_translations')->insert([
                        'locale' => $language->locale, 
                        'group' => 'mushaf-name', 
                        'item' =>  $id, 
                        'text' => $name->val 
                    ]);
                }
                
              }
              
              $this->info("mushaf Added");
        }
        
    }
}
