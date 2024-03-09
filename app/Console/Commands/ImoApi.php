<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Carbon\Carbon;
use App\Models\Imo\Album;
use App\Models\Imo\Item;
use App\Read;
use App\Sora;
use Illuminate\Support\Facades\Http;


class ImoApi extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'imo:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    protected $token = '';

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
        //   $this->getDuplicateIndex();
        $this->setToken();
        //   $this->addAlbum();
        $this->addItems();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function setToken()
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
        ])->post(env('IMO_CLIENT_DOMAIN2') . '/api/oauth/token', [
            'grant_type' => 'client_credentials',
            'client_id' => env('IMO_CLIENT_ID2'),
            'client_secret' =>  env('IMO_CLIENT_SECRET2'),
            'scope' => 'radio',
        ]);

        $this->token = $response->json()['data']['access_token'];
    }

    public function getDuplicateIndex()
    {
        $imo_items = Item::get();
        foreach ($imo_items as $imo_item) {
            $item = Item::where('item_index', $imo_item->item_index)->where('album_id', $imo_item->album_id)->where('item_lang', $imo_item->item_lang)->where('item_id', '!=', $imo_item->item_id)->first();
            if ($item) {
                $this->info("Duplicated Index : " . $imo_item->item_id);
            }
        }
    }

    public function addItems()
    {
        $imo_items = Item::where('item_id', '>', '3506')->where('item_lang', 'bn')->select([
            'item_id',
            'album_id',
            'item_index',
            'item_title',
            'item_lang',
            'item_desc',
            'item_duration',
            'item_time',
            'item_url',
        ])
            ->get()
            ->toArray();

        $progressBar = $this->output->createProgressBar(count($imo_items));

        foreach ($imo_items as $imo_item) {
            $read = Read::with(['soar', 'reciter', 'special_rewaya:id,name', 'rewaya:id,name', 'mushaf:id,name', 'server'])
            ->findOrFail($imo_item['album_id']);

            $sora = Sora::where('id', $imo_item['item_index'])->first();

            $imo_item['item_title'] = $sora->getLocaleName();
            $imo_item['item_lang'] = 'ar';
            $imo_item['item_desc'] =  $sora->getLocaleName() . " - " . $read->getLocaleTitle() . " - " . $read->getRewaya();


            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' .  $this->token,
            ])->post(env('IMO_CLIENT_DOMAIN2') . '/api/radio/item/add', [
                'item_list'    => [$imo_item]
            ]);


            if ($response['message'] != 'success') {
                $this->info("Error: " . $imo_item['item_id'] . " - " . $imo_item['item_lang']);
            }

            $progressBar->advance();
        }
        $progressBar->finish();
        $this->info("\nAll albums have been processed.");
    }


    public function addAlbum()
    {
        // get all columns from table eexcept created_at and updated_at
        $imo_albums = Album::where('album_lang', 'bn')->select([
            'album_id', 'album_cover', 'album_title', 'album_desc', 'album_lang', 'album_type',
            'album_label', 'album_nature', 'album_duration', 'album_score', 'album_time',
            'author_name', 'author_avatar', 'author_desc', 'album_level', 'item_type'
        ])
            ->get()
            ->toArray();

        foreach ($imo_albums as $key => $imo_album) {
            $read = Read::with(['soar', 'reciter', 'special_rewaya:id,name', 'rewaya:id,name', 'mushaf:id,name', 'server'])
                ->findOrFail($imo_album['album_id']);
            $imo_album['album_title'] =  $read->getLocaleTitle() . " - " . $read->getRewaya();
            $imo_album['$imo_item'] = $read->description;
            $imo_album['author_name'] =  $read->reciter->getLocaleName();
            $imo_album['album_lang'] = 'ar';
            $imo_album['album_cover'] = str_replace('.jpg', '-ar.jpg', $imo_album['album_cover']);

            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer ' . $this->token,
            ])->post(env('IMO_CLIENT_DOMAIN2') . '/api/radio/album/add', [
                'album_list'    => [$imo_album]
            ]);

            if ($response['message'] == 'success') {
                $this->info("Success: " . $imo_album['album_id'] . " - " . $imo_album['album_lang']);
            } else {
                $this->info("Error: " . $imo_album['album_id'] . " - " . $imo_album['album_lang']);
            }
        }
    }
}
