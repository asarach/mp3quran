<?php

namespace Mp3quran\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Carbon\Carbon;
use Mp3quran\Read;

class FixeReadsUrl extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:readurl';

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
        $reads = Read::get();

        foreach ($reads as $read) {
            try {
                $url = $read->reciter->reads->where('featured', 1)->first()->slug;
            } catch (\Throwable $th) {
                $url = $read->slug;
            }
            if (!$read->featured) {
                $url .=   '/' . $read->rewaya->folder ;
            }
            $read->url = $url;
            $read->save();

           
            $this->info("url Added");
        }
    }
}
