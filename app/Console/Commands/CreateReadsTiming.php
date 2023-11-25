<?php

namespace App\Console\Commands;

use DB;
use App\Read;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use getID3;


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
        // $this->ReadsTiming();
        $this->fixeReadsTiming();
        // $this->QuranPages();
        // $this->QuranPagesPages();
        // $this->QuranPagesPolygon();
    }
    public function fixeReadsTiming()
    {
        $reads_map = [
            // 's_bud' => [1], // DONE DELTED
            // 'sds' => [1], // DONE DELTED
            // 'ahmad_huth' => [1],  // DONE DELTED
            // 'qht' => [1],  // DONE DELTED
            // 'hthfi' => [1],// DONE DELTED
            // 'ahmd-dyb-n-4' => [1], //  DONE DELTED
            // 'ibrahim-dosri' => [1],//  DONE DELTED

            // 'hafz' => [1, 9], // DONE
            // 'mohna' => [1, 9], // DONE
            // 'shaheen' => [1, 9],// DONE
            // 'akdr' => [1, 9], // DONE
            // 'bsfr' => [1, 9],// DONE

            // 'husr' => [1], // to add TXT
        ];
        
        foreach ($reads_map as $read_key => $read_map) {
            $read = Read::where('slug', $read_key)->first();
            foreach ($read->soar as $sura) {

                $times  =  DB::table('reads_timing')->where('read_id', $read->id)->where('sura_id',  $sura->id)->get();
                $ayah = 0;
                foreach ($times as $time) {
                    $ayah = $time->ayah + 1;
                    if (in_array($time->sura_id, $read_map)) {
                        DB::table('reads_timing')
                        ->where('id', $time->id) // Assuming 'id' is the primary key of the 'quran_pages' table
                        ->update(['ayah' => $ayah]);
                    }
                }

                $remoteFileUrl =  $read->getAudioUrl($sura->id);

                $mp3FilePath = $this->downloadRemoteFile($remoteFileUrl, $read->id);

                // Initialize getID3
                $getID3 = new getID3;

                // Analyze the file
                $fileInfo = $getID3->analyze($mp3FilePath);

                $durationMilliseconds = round($fileInfo['playtime_seconds'] * 1000);
                $ayah = $time->ayah + 1;
                DB::table('reads_timing')->insert(
                    [
                        'read_id' => $read->id,
                        'sura_id' => $sura->id,
                        'ayah' => $ayah,
                        'start_time' => $time->end_time,
                        'end_time' => $durationMilliseconds,
                    ]
                );

            }
        }
    }
    // Function to download a remote file locally
    private function downloadRemoteFile($url, $read)
    {
        $localFilePath = storage_path('app/public/tmp/')  . $read  . '/';
        if (!file_exists($localFilePath)) {
            mkdir($localFilePath, 0755, true);
        }

        file_put_contents($localFilePath . basename($url), file_get_contents($url));

        return $localFilePath . basename($url);
    }
    public function ReadsTiming()
    {
        $directories = Storage::allDirectories('/reads_timing');
        foreach ($directories as $key => $directory) {
            if (strpos($directory, '_on') !== false) {

                $read_id = str_replace('reads_timing/', '', $directory);
                $read_id = str_replace('_on', '', $read_id);
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
                                        'read_id' => $read_id,
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
    public function QuranPagesPages()
    {
        $files = Storage::allFiles('/quran_pages_pages');
        foreach ($files as $file) {
            try {
                if (strpos($file, '.json') !== false) {

                    $page = str_replace('quran_pages_pages/', '', $file);
                    $page = str_replace('.json', '', $page);
                    $items = json_decode(file_get_contents(storage_path('app/' . $file)), true);

                    foreach ($items as $key => $item) {
                        DB::table('quran_pages')->where('sura_id', $item['surahNumber'])->where('ayah', $item['ayahNumber'])->update(
                            [
                                'page' =>   $page,
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
    public function QuranPagesPolygon()
    {
        $files = Storage::allFiles('/quran_pages_polygons');
        foreach ($files as $file) {
            try {
                if (strpos($file, '.json') !== false) {

                    $items = json_decode(file_get_contents(storage_path('app/' . $file)), true);
                    foreach ($items as $key => $item) {
                        DB::table('quran_pages')->where('sura_id', $item['surahNumber'])->where('ayah', $item['ayahNumber'])->update(
                            [
                                'polygon' =>   $item['polygon'],
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
