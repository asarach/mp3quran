<?php

namespace Mp3quran\Console\Commands;

use Illuminate\Console\Command;
use DB;


class FixeLinks extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:links';

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
      
        $links = DB::connection('old_database')->table('quran__redirects')->get();

        foreach ($links as $link) {
            $id = DB::table('links')->insertGetId([
              'id' => $link->id, 
              'new_url' => $link->new_url, 
              'old_url' => $link->old_url, 
              'status' => 1 ,
              ]);
              $this->info("link Added");
        }
        
    }
}
