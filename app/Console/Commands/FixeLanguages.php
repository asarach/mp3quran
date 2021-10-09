<?php

namespace Mp3quran\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Carbon\Carbon;


class FixeLanguages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:languages';

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
      
        $ads = DB::connection('old_database')->table('quran__languages')->get();
        $avalaible_locales = config('laravellocalization.avalaibleLocales');
        foreach ($ads as $ad) {
            foreach ($avalaible_locales as $avalaible_locale) {
                if ($ad->languageCode == $avalaible_locale['locale']) {
                   $locale = $avalaible_locale;
                }
            }
            $id = DB::table('translator_languages')->insertGetId([
              'id' => $ad->languageID, 
              'locale' => $ad->languageCode, 
              'name' => $ad->languageNameAr,
              'script' => $locale['script'], 
              'native' => $locale['native'], 
              'regional' => $locale['regional'], 
              'direction' => $ad->direction, 
              'name_english' => $locale['name'], 
              'status' => 1 ,
              'created_at' => Carbon::now()->toDateTimeString() ,
              'updated_at' => Carbon::now()->toDateTimeString() ,
              ]);
              $this->info("ad Added");
        }
        
    }
}
