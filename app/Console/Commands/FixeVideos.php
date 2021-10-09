<?php

namespace Mp3quran\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Mp3quran\Video;

class FixeVideos extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:videos';

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
      
        $videos = DB::connection('old_database')->table('quran__readervideo')->get();
        $languages = DB::table('translator_languages')->get();

        foreach ($videos as $video) {

            if ($video->enable == 'yes') {
                $status = 1;
            } else {
                $status = 0;
            }

            if ($video->featured == 'yes') {
                $featured = 1;
            } else {
                $featured = 0;
            }

            $id = DB::table('videos')->insertGetId([
              'id' => $video->videoID, 
              'title' => $video->videoTitleAr,
              'slug' => SlugService::createSlug(Video::class, 'slug', $video->videoTitleAr),
              'url' => $video->videoURL,
              'description' => '',
              'keywords' => '',
              'reciter_id' => $video->readerID,
              'created_at' => $video->add_date,
              'updated_at' => $video->add_date,
              'featured' => $featured,
              'status' => $status ,
              ]);
              foreach ($languages as $language) {
                $lang = DB::connection('old_database')->table('quran__languages')->where('languageCode', $language->locale)->first()->languageID;
                $title = DB::connection('old_database')->table('quran__translations')->where('languageID', $lang)->where('ressourceID', $video->ressourceTitleID)->first();
                if ($title) {
                    DB::table('translator_translations')->insert([
                        'locale' => $language->locale, 
                        'group' => 'video-title', 
                        'item' =>  $id, 
                        'text' => $title->val 
                    ]);
                }
                
              }
              $this->info("video Added");
        }
        
    }
}
