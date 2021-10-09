<?php

namespace Mp3quran\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Carbon\Carbon;


class FixeReciters extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:reciters';

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
      
        $reciters = DB::connection('old_database')->table('quran__readers')->get();
        $languages = DB::table('translator_languages')->get();

        
        foreach ($reciters as $reciter) {

            $exist = DB::table('reciters')->where('name', $reciter->readerNameAr)->first();
            if (!$exist) {
                # code...
            

            if ($reciter->enable == 'yes') {
                $status = 1;
            } else {
                $status = 0;
            }

            $id = DB::table('reciters')->insertGetId([
              'name' => $reciter->readerNameAr,
              'about' => '',
              'status' => $status ,
              'description' => $reciter->meta_descriptionAr,
              'keywords' => $reciter->meta_keysAr,
              
              'created_at' => Carbon::now()->toDateTimeString() ,
              'updated_at' => Carbon::now()->toDateTimeString() ,
              ]);
              foreach ($languages as $language) {
                $lang = DB::connection('old_database')->table('quran__languages')->where('languageCode', $language->locale)->first()->languageID;
                $name = DB::connection('old_database')->table('quran__translations')->where('languageID', $lang)->where('ressourceID', $reciter->ressourceNameID)->first();
                if ($name) {
                    DB::table('translator_translations')->insert([
                        'locale' => $language->locale, 
                        'group' => 'reciter-name', 
                        'item' => $id, 
                        'text' => $name->val 
                    ]);
                }

                $description = DB::connection('old_database')->table('quran__translations')->where('languageID', $lang)->where('ressourceID', $reciter->ressourceMetaDescriptionID)->first();
                if ($description) {
                    DB::table('translator_translations')->insert([
                        'locale' => $language->locale, 
                        'group' => 'reciter-description', 
                        'item' => $id, 
                        'text' => $description->val 
                    ]);
                }
                $keys = DB::connection('old_database')->table('quran__translations')->where('languageID', $lang)->where('ressourceID', $reciter->ressourceMetaKeysID)->first();
                if ($keys) {
                    DB::table('translator_translations')->insert([
                        'locale' => $language->locale, 
                        'group' => 'reciter-keywords', 
                        'item' =>  $id, 
                        'text' => $keys->val 
                    ]);
                }
                
              }
              $this->info("reciter Added");
            }
        }
        
    }
}
