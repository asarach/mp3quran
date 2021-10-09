<?php

namespace Mp3quran\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Carbon\Carbon;

class FixeReads extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:reads';

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
        $reads = DB::connection('old_database')->table('quran__readers')->get();
        $languages = DB::table('translator_languages')->get();
        $bar = $this->output->createProgressBar(count($reads));
        

        foreach ($reads as $read) {
            if ($read->enable == 'yes') {
                $status = 1;
            } else {
                $status = 0;
            }
            if ($read->featured == 'yes') {
                $featured = 1;
            } else {
                $featured = 0;
            }
            if ($read->most_listened == 'yes') {
                $promoted = 1;
            } else {
                $promoted = 0;
            }
            $reciter = DB::table('reciters')->where('name', $read->readerNameAr)->first();

            $rew =  json_decode($read->classificationID, true);
            if (isset($rew[1]) and   $rew[1]) {
                $rewaya_id = DB::table('rewayat')->where('id', $rew[1])->first()->id;
            } else {
                $rewaya_id = null;
            }
            
            if (isset($rew[2]) and  $rew[2]) {
                $mushaf_id = DB::table('mushafs')->where('id', $rew[2])->first()->id;
            } else {
                $mushaf_id = null;
            }
                        
            $id = DB::table('reads')->insertGetId([
              'url' => '',
              'slug' => $read->alias,
                'torrent' => $read->fullQuranURL,
                'itunes' => $read->iTunesURL,
                'video' => $read->videoURL,
                'title' => $read->readerNameAr,
                'description' => $read->meta_descriptionAr,
                'keywords' => $read->meta_keysAr,
                'reciter_id' => $reciter->id,
                'rewaya_id' => $rewaya_id,
                'mushaf_id' => $mushaf_id,
                'server_id' => $read->serverID,
                'created_at' => Carbon::now()->toDateTimeString() ,
                'updated_at' => Carbon::now()->toDateTimeString() ,
                'status' => $status ,
                'featured' => $featured ,
                'promoted' => $promoted ,
              ]);

            $readersurah = DB::connection('old_database')->table('quran__readersurah')->where('readerID', $read->readerID)->whereIn('classificationID', [$rewaya_id, $mushaf_id])->get();

            foreach ($readersurah as $item) {
                DB::table('sura_read')->insert([
                      'duration' => $item->duration,
                      'filename' => $item->filename,
                      'sura_id' => $item->surahID,
                      'read_id' => $id
                  ]);
            }

            
              
            foreach ($languages as $language) {
                $lang = DB::connection('old_database')->table('quran__languages')->where('languageCode', $language->locale)->first()->languageID;
                $name = DB::connection('old_database')->table('quran__translations')->where('languageID', $lang)->where('ressourceID', $read->ressourceNameID)->first();
                if ($name) {
                    DB::table('translator_translations')->insert([
                        'locale' => $language->locale,
                        'group' => 'read-name',
                        'item' =>  $id,
                        'text' => $name->val
                    ]);
                }
                $description = DB::connection('old_database')->table('quran__translations')->where('languageID', $lang)->where('ressourceID', $read->ressourceMetaDescriptionID)->first();
                if ($description) {
                    DB::table('translator_translations')->insert([
                        'locale' => $language->locale,
                        'group' => 'read-description',
                        'item' =>  $id,
                        'text' => $description->val
                    ]);
                }
                $keys = DB::connection('old_database')->table('quran__translations')->where('languageID', $lang)->where('ressourceID', $read->ressourceMetaKeysID)->first();
                if ($keys) {
                    DB::table('translator_translations')->insert([
                        'locale' => $language->locale,
                        'group' => 'read-keywords',
                        'item' =>  $id,
                        'text' => $keys->val
                    ]);
                }
            }
            
            $bar->advance();
        }
        $bar->finish();
    }
}
