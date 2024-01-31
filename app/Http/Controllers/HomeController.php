<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\Upload;
use function GuzzleHttp\json_decode;
use App\Repositories\Media\MediaRepository;
use Illuminate\Support\Facades\Config;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(MediaRepository $media, Upload $upload)
    {
        $this->upload = $upload;
        $this->media = $media;
    }
    public function asarachDebug()
    {
        $url = request()->getSchemeAndHttpHost();
        if ($_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https') {
            $url = str_replace('http', 'https',  $url);
        }
        dd($url);
        return $url;
    }
    public function language(Request $request)
    {
        $input = $request->all();
        $data = [];
        $data['file'] = $request->file('file');
        $data['file'] = $this->upload->image($data, $request->type);
        $data['type'] = $request->type;
        $media = $this->media->create($data);

        return response()->json(array('success' => true, 'image_id' => $media->id));
    }
    public function adsClosed($id)
    {
        $closed_ads = request()->cookie('closed_ads');
        if (is_null($closed_ads)) {
            $closed_ads = [];
        } else {
            $closed_ads = json_decode($closed_ads);
        }
        $closed_ads[] = $id;

        return response()->json(array('success' => true))->withCookie(cookie('closed_ads', json_encode($closed_ads), 45000));
    }
    public function mainRadio()
    {
        $item = [
            'id' => "100001-100001",
            'read_id' => "100001",
            'sora_id' => "100001",
            'num' => "000",
            'name' => trans("text.live-radio"),
            'reciter' => "mp3quran.net",
            'read_slug' => '',
            'type' => 'radio',
            'url' => "https://www.mp3quran.net/",
            'description' => trans("text.live-radio"),
            'share_url' => "https://www.mp3quran.net/",
            'share_description' => trans("text.live-radio"),
            'share_title' => trans("text.live-radio"),
            'file' => settings('main_radio'),
        ];


        return  $item;
    }
}
