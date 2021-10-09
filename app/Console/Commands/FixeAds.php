<?php

namespace Mp3quran\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Carbon\Carbon;


class FixeAds extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:ads';

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
      
        $ads = DB::connection('old_database')->table('quran__ads')->get();

        foreach ($ads as $ad) {
            $id = DB::table('ads')->insertGetId([
              'id' => $ad->adsID, 
              'name' => $ad->name, 
              'order_num' => $ad->order_num, 
              'url' => $ad->location, 
              'start_date' => $ad->start_date, 
              'end_date' => $ad->end_date, 
              'status' => 1 ,
              'created_at' => Carbon::now()->toDateTimeString() ,
              'updated_at' => Carbon::now()->toDateTimeString() ,
              ]);
              $this->info("ad Added");
        }
        
    }
}
