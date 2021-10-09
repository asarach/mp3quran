<?php

namespace Mp3quran\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Carbon\Carbon;


class FixeApps extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:apps';

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
      
        $apps = DB::connection('old_database')->table('quran__apps')->get();
        $languages = DB::table('translator_languages')->get();

        foreach ($apps as $app) {
            $id = DB::table('apps')->insertGetId([
              'id' => $app->id, 
              'title' => $app->titleAr, 
              'url' => $app->URL, 
              'type' => $app->category,
              'status' => 1 ,
              'created_at' => Carbon::now()->toDateTimeString() ,
              'updated_at' => Carbon::now()->toDateTimeString() ,
              ]);
              foreach ($languages as $language) {
                $lang = DB::connection('old_database')->table('quran__languages')->where('languageCode', $language->locale)->first()->languageID;
                $title = DB::connection('old_database')->table('quran__translations')->where('languageID', $lang)->where('ressourceID', $app->ressourceTitleID)->first();
                if ($title) {
                    DB::table('translator_translations')->insert([
                        'locale' => $language->locale, 
                        'group' => 'app-title', 
                        'item' =>  $id, 
                        'text' => $title->val 
                    ]);
                }
                
              }
              $this->info("server Added");
        }
        
    }
}
