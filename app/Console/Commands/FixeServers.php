<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;


class FixeServers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:servers';

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
      
        $servers = DB::connection('old_database')->table('quran__servers')->get();
        foreach ($servers as $server) {

            if ($server->enable == 'yes') {
                $status = 1;
            } else {
                $status = 0;
            }

            DB::table('servers')->insert([
              'id' => $server->serverID, 
              'name' => $server->serverName, 
              'url' => $server->serverURL, 
              'ftp' => $server->ftp, 
              'status' => $status , 
              ]);
              $this->info("server Added");
        }
        
    }
}
