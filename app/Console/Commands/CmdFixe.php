<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Carbon\Carbon;

class CmdFixe extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:cmd';

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

        //checkUrls$this->fixRadios();
        $this->fixMediable();
        // $this->fixSoraRead();
        // $this->fixTadabor();
        // $this->fixDownloadTransltion();
        // $this->fixSoar();
    }

    public function fixMediable(){
        $items = DB::table('mediable')->get();
        foreach ($items as $item) {
            $type = str_replace("Mp3quran\\", "App\\", $item->mediable_type);

            DB::table('mediable')
            ->where('media_id',$item->media_id)
            ->where('mediable_id',$item->mediable_id)
            ->where('mediable_type',$item->mediable_type)
            ->update([
                'mediable_type' => $type,
            ]);
        }
    }
    public function fixSoraRead(){
        $items = DB::table('sura_read')->get();
        foreach ($items as $item) {
            DB::table('sura_read')->insert([
                'duration' => $item->duration,
                'filename' => $item->filename,
                'sura_id' => $item->sura_id,
                'read_id' => $item->read_id,
            ]);
        }
    }
    public function fixTadabor(){
        $items = DB::table('tadabors2')->get();
        foreach ($items as $item) {
            DB::table('tadabors')->insert([
                'audio_url' => $item->audio_url,
                'video_url' => $item->video_url,
                'image_url' => $item->image_url,
                'text' => $item->text,
                'text' => $item->text,
            ]);
        }
    }
    public function fixDownloadTransltion()
    {
        dd('downloads.Akram Alalaqmi');
        $files = DB::connection('torrent')->table('namemap')
            ->join('summary', 'namemap.info_hash', '=', 'summary.info_hash')
            ->leftJoin('comments', 'namemap.info_hash', '=', 'comments.info_hash')
            ->select('namemap.info_hash', 'namemap.filename', 'namemap.url', 'namemap.category', 'namemap.data', 'namemap.size', 'summary.seeds', 'summary.leechers', 'summary.finished', DB::raw("count(comments.id) as comments"))
            ->groupBy('namemap.info_hash')
            ->get()
            ->toArray();

        $languages = DB::table('translator_languages')->get();
        foreach ($files as $key => $file) {
            if (trans('downloads.' . $file->filename) == 'downloads.' . $file->filename) {
                foreach ($languages as $language) {
                    dd($file->filename);
                    DB::table('translator_translations')->insert([
                        'group' => 'downloads', 
                        'item' => $file->filename, 
                        'text' => $file->filename, 
                        'locale' => $language->locale]
                    );
                }
            }
        }

    }
    public function fixSoar()
    {
        $items = DB::table('sura_read')->get();
        foreach ($items as $item) {
            $exist = DB::table('sura_read')->where('sura_id', $item->sura_id)->where('read_id', $item->read_id)->get();
            if ($exist->count() > 1) {
                DB::table('sura_read')->orderBy('filename')->where('sura_id', $item->sura_id)->where('read_id', $item->read_id)->take($exist->count() - 1)->delete();
                dd($exist->count());
            }
        }
        //dd($items);

    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function fixRadios()
    {
        $items = [
            ['location' => 'https://Qurango.net/radio/ibrahim_alakdar', 'proxy_pass' => 'http://live.mp3quran.net:9946/;'],
            ['location' => 'https://Qurango.net/radio/shaik_abu_bakr_al_shatri', 'proxy_pass' => 'http://live.mp3quran.net:9966/;'],
            ['location' => 'https://Qurango.net/radio/ahmad_alajmy', 'proxy_pass' => 'http://live.mp3quran.net:8008/;'],
            ['location' => 'https://Qurango.net/radio/ahmad_alhawashi', 'proxy_pass' => 'http://live.mp3quran.net:9928/;'],
            ['location' => 'https://Qurango.net/radio/ahmad_saber', 'proxy_pass' => 'http://live.mp3quran.net:9922/;'],
            ['location' => 'https://Qurango.net/radio/ahmad_nauina', 'proxy_pass' => 'http://live.mp3quran.net:9904/;'],
            ['location' => 'https://Qurango.net/radio/akram_alalaqmi', 'proxy_pass' => 'http://live.mp3quran.net:9918/;'],
            ['location' => 'https://Qurango.net/radio/idrees_abkr', 'proxy_pass' => 'http://live.mp3quran.net:9968/;'],
            ['location' => 'https://Qurango.net/radio/alzain_mohammad_ahmad', 'proxy_pass' => 'http://live.mp3quran.net:9914/;'],
            ['location' => 'https://Qurango.net/radio/alqaria_yassen', 'proxy_pass' => 'http://live.mp3quran.net:9908/;'],
            ['location' => 'https://Qurango.net/radio/aloyoon_alkoshi', 'proxy_pass' => 'http://live.mp3quran.net:9912/;'],
            ['location' => 'https://Qurango.net/radio/tawfeeq_assayegh', 'proxy_pass' => 'http://live.mp3quran.net:9906/;'],
            ['location' => 'https://Qurango.net/radio/jamal_shaker_abdullah', 'proxy_pass' => 'http://live.mp3quran.net:9900/;'],
            ['location' => 'https://Qurango.net/radio/khalid_aljileel', 'proxy_pass' => 'http://live.mp3quran.net:9708/;'],
            ['location' => 'https://Qurango.net/radio/khaled_alqahtani', 'proxy_pass' => 'http://live.mp3quran.net:9970/;'],
            ['location' => 'https://Qurango.net/radio/khalid_abdulkafi', 'proxy_pass' => 'http://live.mp3quran.net:9894/;'],
            ['location' => 'https://Qurango.net/radio/khalifa_altunaiji', 'proxy_pass' => 'http://live.mp3quran.net:9892/;'],
            ['location' => 'https://Qurango.net/radio/saad_alghamdi', 'proxy_pass' => 'http://live.mp3quran.net:8004/;'],
            ['location' => 'https://Qurango.net/radio/saud_alshuraim', 'proxy_pass' => 'http://live.mp3quran.net:9986/;'],
            ['location' => 'https://Qurango.net/radio/sahl_yassin', 'proxy_pass' => 'http://live.mp3quran.net:9888/;'],
            ['location' => 'https://Qurango.net/radio/zaki_daghistani', 'proxy_pass' => 'http://live.mp3quran.net:9890/;'],
            ['location' => 'https://Qurango.net/radio/sayeed_ramadan', 'proxy_pass' => 'http://live.mp3quran.net:9886/;'],
            ['location' => 'https://Qurango.net/radio/shirazad_taher', 'proxy_pass' => 'http://live.mp3quran.net:9884/;'],
            ['location' => 'https://Qurango.net/radio/saber_abdulhakm', 'proxy_pass' => 'http://live.mp3quran.net:9952/;'],
            ['location' => 'https://Qurango.net/radio/salah_albudair', 'proxy_pass' => 'http://live.mp3quran.net:9882/;'],
            ['location' => 'https://Qurango.net/radio/salah_alhashim', 'proxy_pass' => 'http://live.mp3quran.net:9880/;'],
            ['location' => 'https://Qurango.net/radio/slaah_bukhatir', 'proxy_pass' => 'http://live.mp3quran.net:9878/;'],
            ['location' => 'https://Qurango.net/radio/adel_ryyan', 'proxy_pass' => 'http://live.mp3quran.net:9872/;'],
            ['location' => 'https://Qurango.net/radio/abdelbari_altoubayti', 'proxy_pass' => 'http://live.mp3quran.net:9870/;'],
            ['location' => 'https://Qurango.net/radio/abdulbari_mohammad', 'proxy_pass' => 'http://live.mp3quran.net:9868/;'],
            ['location' => 'https://Qurango.net/radio/abdulbasit_abdulsamad_mojawwad', 'proxy_pass' => 'http://live.mp3quran.net:9974/;'],
            ['location' => 'https://Qurango.net/radio/abdulbasit_abdulsamad_warsh', 'proxy_pass' => 'http://live.mp3quran.net:9956/;'],
            ['location' => 'https://Qurango.net/radio/abdulbasit_abdulsamad', 'proxy_pass' => 'http://live.mp3quran.net:9980/;'],
            ['location' => 'https://Qurango.net/radio/abdulrahman_alsudaes', 'proxy_pass' => 'http://live.mp3quran.net:9988/;'],
            ['location' => 'https://Qurango.net/radio/abdul_aziz_alahmad', 'proxy_pass' => 'http://live.mp3quran.net:9862/;'],
            ['location' => 'https://Qurango.net/radio/abdullah_almattrod', 'proxy_pass' => 'http://live.mp3quran.net:9858/;'],
            ['location' => 'https://Qurango.net/radio/abdullah_basfer', 'proxy_pass' => 'http://live.mp3quran.net:9954/;'],
            ['location' => 'https://Qurango.net/radio/abdullah_khayyat', 'proxy_pass' => 'http://live.mp3quran.net:9948/;'],
            ['location' => 'https://Qurango.net/radio/abdullah_aljohany', 'proxy_pass' => 'http://live.mp3quran.net:9944/;'],
            ['location' => 'https://Qurango.net/radio/abdulrasheed_soufi_assosi', 'proxy_pass' => 'http://live.mp3quran.net:9866/;'],
            ['location' => 'https://Qurango.net/radio/abdulrasheed_soufi_khalaf', 'proxy_pass' => 'http://live.mp3quran.net:9864/;'],
            ['location' => 'https://Qurango.net/radio/abdulmohsin_alharthy', 'proxy_pass' => 'http://live.mp3quran.net:9856/;'],
            ['location' => 'https://Qurango.net/radio/abdulmohsen_alqasim', 'proxy_pass' => 'http://live.mp3quran.net:9852/;'],
            ['location' => 'https://Qurango.net/radio/abdulmohsin_alobaikan', 'proxy_pass' => 'http://live.mp3quran.net:9854/;'],
            ['location' => 'https://Qurango.net/radio/abdulhadi_kanakeri', 'proxy_pass' => 'http://live.mp3quran.net:9850/;'],
            ['location' => 'https://Qurango.net/radio/abdulwadood_haneef', 'proxy_pass' => 'http://live.mp3quran.net:9848/;'],
            ['location' => 'https://Qurango.net/radio/ali_alhuthaifi', 'proxy_pass' => 'http://live.mp3quran.net:9844/;'],
            ['location' => 'https://Qurango.net/radio/ali_alhuthaifi_qalon', 'proxy_pass' => 'http://live.mp3quran.net:9846/;'],
            ['location' => 'https://Qurango.net/radio/ali_jaber', 'proxy_pass' => 'http://live.mp3quran.net:9964/;'],
            ['location' => 'https://Qurango.net/radio/ali_hajjaj_alsouasi', 'proxy_pass' => 'http://live.mp3quran.net:9842/;'],
            ['location' => 'https://Qurango.net/radio/emad_hafez', 'proxy_pass' => 'http://live.mp3quran.net:9840/;'],
            ['location' => 'https://Qurango.net/radio/omar_alqazabri', 'proxy_pass' => 'http://live.mp3quran.net:9838/;'],
            ['location' => 'https://Qurango.net/radio/fares_abbad', 'proxy_pass' => 'http://live.mp3quran.net:9972/;'],
            ['location' => 'https://Qurango.net/radio/nasser_alqatami', 'proxy_pass' => 'http://live.mp3quran.net:9994/;'],
            ['location' => 'https://Qurango.net/radio/nabil_al_rifay', 'proxy_pass' => 'http://live.mp3quran.net:9784/;'],
            ['location' => 'https://Qurango.net/radio/neamah_alhassan', 'proxy_pass' => 'http://live.mp3quran.net:9782/;'],
            ['location' => 'https://Qurango.net/radio/hani_arrifai', 'proxy_pass' => 'http://live.mp3quran.net:9780/;'],
            ['location' => 'https://Qurango.net/radio/waleed_alnaehi', 'proxy_pass' => 'http://live.mp3quran.net:9778/;'],
            ['location' => 'https://Qurango.net/radio/yasser_aldosari', 'proxy_pass' => 'http://live.mp3quran.net:9984/;'],
            ['location' => 'https://Qurango.net/radio/yasser_alqurashi', 'proxy_pass' => 'http://live.mp3quran.net:9776/;'],
            ['location' => 'https://Qurango.net/radio/yasser_almazroyee', 'proxy_pass' => 'http://live.mp3quran.net:9774/;'],
            ['location' => 'https://Qurango.net/radio/yahya_hawwa', 'proxy_pass' => 'http://live.mp3quran.net:9772/;'],
            ['location' => 'https://Qurango.net/radio/yousef_alshoaey', 'proxy_pass' => 'http://live.mp3quran.net:9770/;'],
            ['location' => 'https://Qurango.net/radio/maher_al_meaqli', 'proxy_pass' => 'http://live.mp3quran.net:8002/;'],
            ['location' => 'https://Qurango.net/radio/mohammad_altablaway', 'proxy_pass' => 'http://live.mp3quran.net:9834/;'],
            ['location' => 'https://Qurango.net/radio/mohammed_allohaidan', 'proxy_pass' => 'http://live.mp3quran.net:9832/;'],
            ['location' => 'https://Qurango.net/radio/mohammed_ayyub', 'proxy_pass' => 'http://live.mp3quran.net:9960/;'],
            ['location' => 'https://Qurango.net/radio/mohammad_saleh_alim_shah', 'proxy_pass' => 'http://live.mp3quran.net:9828/;'],
            ['location' => 'https://Qurango.net/radio/mohammed_jibreel', 'proxy_pass' => 'http://live.mp3quran.net:9962/;'],
            ['location' => 'https://Qurango.net/radio/mohammed_siddiq_alminshawi', 'proxy_pass' => 'http://live.mp3quran.net:9978/;'],
            ['location' => 'https://Qurango.net/radio/mohammed_siddiq_alminshawi_mojawwad', 'proxy_pass' => 'http://live.mp3quran.net:9826/;'],
            ['location' => 'https://Qurango.net/radio/mohammad_abdullkarem', 'proxy_pass' => 'http://live.mp3quran.net:9824/;'],
            ['location' => 'https://Qurango.net/radio/mohammad_alabdullah_albizi', 'proxy_pass' => 'http://live.mp3quran.net:9814/;'],
            ['location' => 'https://Qurango.net/radio/mohammad_alabdullah_aldorai', 'proxy_pass' => 'http://live.mp3quran.net:9816/;'],
            ['location' => 'https://Qurango.net/radio/mahmoud_khalil_alhussary', 'proxy_pass' => 'http://live.mp3quran.net:9958/;'],
            ['location' => 'https://Qurango.net/radio/mahmoud_khalil_alhussary_mojawwad', 'proxy_pass' => 'http://live.mp3quran.net:9806/;'],
            ['location' => 'https://Qurango.net/radio/mahmoud_khalil_alhussary_warsh', 'proxy_pass' => 'http://live.mp3quran.net:9804/;'],
            ['location' => 'https://Qurango.net/radio/mahmoud_ali__albanna', 'proxy_pass' => 'http://live.mp3quran.net:9808/;'],
            ['location' => 'https://Qurango.net/radio/mahmoud_ali__albanna_mojawwad', 'proxy_pass' => 'http://live.mp3quran.net:9810/;'],
            ['location' => 'https://Qurango.net/radio/mishary_alafasi', 'proxy_pass' => 'http://live.mp3quran.net:8010/;'],
            ['location' => 'https://Qurango.net/radio/mustafa_ismail', 'proxy_pass' => 'http://live.mp3quran.net:9800/;'],
            ['location' => 'https://Qurango.net/radio/mustafa_allahoni', 'proxy_pass' => 'http://live.mp3quran.net:9798/;'],
            ['location' => 'https://Qurango.net/radio/mustafa_raad_alazawy', 'proxy_pass' => 'http://live.mp3quran.net:9796/;'],
            ['location' => 'https://Qurango.net/radio/muftah_alsaltany_aldori_an_abi_amr ', 'proxy_pass' => 'http://live.mp3quran.net:9790/;'],
            ['location' => 'https://Qurango.net/radio/maher_shakhashero', 'proxy_pass' => 'http://live.mp3quran.net:9836/;'],
            ['location' => 'https://Qurango.net/radio/mahmood_alsheimy', 'proxy_pass' => 'http://live.mp3quran.net:9812/;'],
            ['location' => 'https://Qurango.net/radio/khalid_almohana', 'proxy_pass' => 'http://live.mp3quran.net:9896/;'],
            ['location' => 'https://Qurango.net/radio/adel_alkhalbany', 'proxy_pass' => 'http://live.mp3quran.net:9874/;'],
            ['location' => 'https://Qurango.net/radio/mousa_bilal', 'proxy_pass' => 'http://live.mp3quran.net:9786/;'],
            ['location' => 'https://Qurango.net/radio/hatem_fareed_alwaer', 'proxy_pass' => 'http://live.mp3quran.net:9898/;'],
            ['location' => 'https://Qurango.net/radio/mahmood_al_rifai', 'proxy_pass' => 'http://live.mp3quran.net:9818/;'],
            ['location' => 'https://Qurango.net/radio/ibrahim_aldosari', 'proxy_pass' => 'http://live.mp3quran.net:9902/;'],
            ['location' => 'https://Qurango.net/radio/muftah_alsaltany_aldorai', 'proxy_pass' => 'http://live.mp3quran.net:9788/;'],
            ['location' => 'https://Qurango.net/radio/jamaan_alosaimi', 'proxy_pass' => 'http://live.mp3quran.net:9950/;'],
            ['location' => 'https://Qurango.net/radio/muftah_alsaltany', 'proxy_pass' => 'http://live.mp3quran.net:9792/;'],
            ['location' => 'https://Qurango.net/radio/yousef_bin_noah_ahmad', 'proxy_pass' => 'http://live.mp3quran.net:9768/;'],
            ['location' => 'https://Qurango.net/radio/muftah_alsaltany_ibn_thakwan_an_ibn_amr ', 'proxy_pass' => 'http://live.mp3quran.net:9794/;'],
            ['location' => 'https://Qurango.net/radio/moeedh_alharthi', 'proxy_pass' => 'http://live.mp3quran.net:9802/;'],
            ['location' => 'https://Qurango.net/radio/mohammad_rashad_alshareef', 'proxy_pass' => 'http://live.mp3quran.net:9830/;'],
            ['location' => 'https://Qurango.net/radio/ahmad_khader_altarabulsi', 'proxy_pass' => 'http://live.mp3quran.net:9924/;'],
            ['location' => 'https://Qurango.net/radio/ahmed_altrabulsi', 'proxy_pass' => 'http://live.mp3quran.net:9926/;'],
            ['location' => 'https://Qurango.net/radio/abdullah_alkandari', 'proxy_pass' => 'http://live.mp3quran.net:9860/;'],
            ['location' => 'https://Qurango.net/radio/ahmed_amer', 'proxy_pass' => 'http://live.mp3quran.net:9920/;'],
            ['location' => 'https://Qurango.net/radio/mohammed_osman_khan', 'proxy_pass' => 'http://live.mp3quran.net:9820/;'],
            ['location' => 'https://Qurango.net/radio/addokali_mohammad_alalim', 'proxy_pass' => 'http://live.mp3quran.net:9916/;'],
            ['location' => 'https://Qurango.net/radio/mohammad_abdullkarem_alasbahani', 'proxy_pass' => 'http://live.mp3quran.net:9822/;'],
            ['location' => 'https://Qurango.net/radio/alfateh_alzubair', 'proxy_pass' => 'http://live.mp3quran.net:9910/;'],
            ['location' => 'https://Qurango.net/radio/tareq_abdulgani_daawob', 'proxy_pass' => 'http://live.mp3quran.net:9876/;'],
            ['location' => 'https://Qurango.net/radio/abdulrahman_almajed', 'proxy_pass' => 'http://live.mp3quran.net:9726/;'],
            ['location' => 'https://Qurango.net/radio/abdullah_alkhalaf', 'proxy_pass' => 'http://live.mp3quran.net:9704/;'],
            ['location' => 'https://Qurango.net/radio/nasser_alosfor', 'proxy_pass' => 'http://live.mp3quran.net:8020/;'],
            ['location' => 'https://Qurango.net/radio/nasser_almajed', 'proxy_pass' => 'http://live.mp3quran.net:9712/;'],
            ['location' => 'https://Qurango.net/radio/hitham_aljadani', 'proxy_pass' => 'http://live.mp3quran.net:9714/;'],
            ['location' => 'https://Qurango.net/radio/ahmad_shaheen', 'proxy_pass' => 'http://live.mp3quran.net:9710/;'],
            ['location' => 'https://Qurango.net/radio/tarateel', 'proxy_pass' => 'http://live.mp3quran.net:9702/;'],
            ['location' => 'https://Qurango.net/radio/saleh_alhabdan', 'proxy_pass' => 'http://live.mp3quran.net:8026/;'],
            ['location' => 'https://Qurango.net/radio/majed_alzamel', 'proxy_pass' => 'http://live.mp3quran.net:8022/;'],
            ['location' => 'https://Qurango.net/radio/ahmad_deban', 'proxy_pass' => 'http://live.mp3quran.net:8024/;'],
        ];



        foreach ($items as $item) {
            //dd($item);
            DB::table('radios')->where('url', $item['proxy_pass'])->update([
                'url' => $item['location'],
            ]);
            $this->info("radio Added");
        }
    }
}
