<?php

namespace App\Console\Commands;

use DB;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class ApiDocsRender extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'apidocs:render';

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
        $api = json_decode(file_get_contents(storage_path() . "/api3-doc/default.json"), true);
        $html = view('vendor.api', compact('api'))->render();
        Storage::disk('api3-doc')->put("/default.html", $html);
    }
}
