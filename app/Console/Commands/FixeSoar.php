<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;


class FixeSoar extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:soar';

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
      
        $soras = DB::connection('old_database')->table('quran__surah')->get();
        $languages = DB::table('translator_languages')->get();

        foreach ($soras as $sora) {
            $old = DB::connection('database_1')->table('soar')->where('id', $sora->surahID)->first(); 
            /*
            if ($sora->enable == 'yes') {
                $status = 1;
            } else {
                $status = 0;
            }
            if ($old->type == 0) {
                $makkia = 1;
            } else {
                $makkia = 0;
            }
            */
           
            $id = DB::table('soar')->insertGetId([
              'id' => $sora->surahID, 
              'name' => $sora->surahNameAr,
              'slug' => $sora->aliasSurah,
              'start_page' =>  $old->start_page,
              'end_page' => $old->end_page,
              'ayat_count' => $sora->numberAyat,
              'num' => $sora->surahNum,
              'makkia' => $old->makkia,
              'status' => $old->status ,
              ]);
              foreach ($languages as $language) {
                $lang = DB::connection('old_database')->table('quran__languages')->where('languageCode', $language->locale)->first()->languageID;
                $name = DB::connection('old_database')->table('quran__translations')->where('languageID', $lang)->where('ressourceID', $sora->ressourceNameID)->first();
                if ($name) {
                    DB::table('translator_translations')->insert([
                        'locale' => $language->locale, 
                        'group' => 'sora-name', 
                        'item' =>  $id, 
                        'text' => $name->val 
                    ]);
                }
                
              }
              $this->info("sora Added");
        }
        
    }
}
