<?php

namespace App\Console\Commands;

use DB;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;


class AddTextQuranPages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reads:add-pages';

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
        $soar = json_decode(file_get_contents('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/index.json'), true);
    
        foreach ($soar as $key => $sora) {
            $verses = json_decode(file_get_contents($sora['link']), true);
            $sura_id = $sora['id'];
            foreach ($verses['verses'] as $key => $verse) {
                $text = $verse['text'];
                // dd($verse);
                $verse_id = $verse['id'];
                DB::table('quran_pages')
                ->where('ayah', $verse_id)
                ->where('sura_id', $sura_id)
                ->update([
                    'text' => $text,
                ]);
            }
            // dd($verse);
        }
    }
}
