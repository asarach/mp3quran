<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Carbon\Carbon;


class FixeTv extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:tvs';

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
      
        $tvs = DB::connection('database_1')->table('tvs')->get();

        foreach ($tvs as $tv) {
            DB::table('tvs')->insertGetId([
                'id' => $tv->id, 
                'name' => $tv->name,
                'slug' => $tv->slug,
                'description' => '',
                'url' => $tv->url,
                'status' =>  $tv->status ,
                'created_at' => Carbon::now()->toDateTimeString() ,
                'updated_at' => Carbon::now()->toDateTimeString() ,
                ]);
              
              $this->info("tv Added");
        }

        $tans = DB::connection('database_1')->table('translator_translations')->where('group', 'tv-name')->get();


                
        foreach ($tans as $tan) {
            DB::table('translator_translations')->insert([
                'locale' => $tan->locale, 
                'group' => $tan->group, 
                'item' =>  $tan->item, 
                'text' => $tan->text
            ]);
            
          }

          
        
    }
}
