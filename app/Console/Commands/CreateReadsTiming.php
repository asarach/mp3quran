<?php

namespace App\Console\Commands;

use DB;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;


class CreateReadsTiming extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reads:timing';

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
        $this->ReadsTiming();
        $this->QuranPages();
    }
    public function ReadsTiming()
    {
        $directories = Storage::allDirectories('/reads_timing');
        foreach ($directories as $key => $directory) {
            if (strpos($directory, '_on') !== false) {
                $files = Storage::allFiles($directory);
                foreach ($files as $key => $file) {
                    if (strpos($file, '.txt') !== false) {
                        $sura = str_replace('.txt', '', basename($file));
                        $text_file = fopen(storage_path('app/' . $file), "r");
                        $ayah = 0;
                        $i = 0;
                        $reuslts = [];
                        $start_time = '0';
                        $end_time = '0';
                        while (!feof($text_file)) {
                            $end_time =  fgets($text_file);
                            $end_time = trim(preg_replace('/\s\s+/', '', $end_time));
                            if ($end_time) {
                                DB::table('reads_timing')->insert(
                                    [
                                        'read_id' => '49',
                                        'sura_id' => $sura,
                                        'ayah' => $ayah,
                                        'start_time' => $start_time,
                                        'end_time' => $end_time,
                                    ]
                                );

                                $start_time =  $end_time;
                                $ayah++;
                            }
                        }
                        fclose($text_file);
                    }
                }
            }
        }
    }
    public function QuranPages()
    {
        $files = Storage::allFiles('/quran_pages');
        foreach ($files as $file) {
            try {
                if (strpos($file, '.json') !== false) {
                    $items = json_decode(file_get_contents(storage_path('app/' . $file)), true);
                    foreach ($items as $key => $item) {
                        DB::table('quran_pages')->insert(
                            [
                                'sura_id' =>  $item['surahNumber'],
                                'ayah' => $item['ayahNumber'],
                                'x' =>  $item['x'],
                                'y' =>  $item['y'],
                            ]
                        );
                    }
                }
            } catch (\Throwable $th) {
                //throw $th;
                $this->info($file);
            }
           
        }
    }
}