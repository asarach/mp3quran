<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Carbon\Carbon;

class FixeRadios extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:radios';

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
        $radios = DB::table('radios')->get();

        foreach ($radios as $radio) {
            $slug = str_replace('radio-', '', $radio->slug);
            $slug = str_replace('-', '_', $slug);
            
            $read = DB::table('reads')->where('slug', $slug)->first();
            if ($read) {
                DB::table('radios')->where('id', $radio->id)->update([
                    'read_id' => $read->id,
                    ]);
                  $this->info("radio Added");
            }else{
                DB::table('radios')->where('id', $radio->id)->update([
                    'read_id' => null,
                    ]);
                  $this->info("radio Added");
            }
           
        }
    }
}
