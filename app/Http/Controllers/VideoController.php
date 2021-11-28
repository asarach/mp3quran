<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\VideoGenerateRequest;

class VideoController extends Controller
{

    public function progress()
    {

        if (env('APP_ENV') == 'production') {
            $ffmpeg_output = Storage::disk('local')->get('video_progress/vid_' . session('progress_key') . '.txt');

            if ($ffmpeg_output) {
                preg_match("/Duration: (.*?), start:/", $ffmpeg_output, $a_match);
                $duration_as_time = $a_match[1];
                $time_array = array_reverse(explode(":", $duration_as_time));
                $duration = floatval($time_array[0]);
                if (!empty($time_array[1])) $duration += intval($time_array[1]) * 60;
                if (!empty($time_array[2])) $duration += intval($time_array[2]) * 60 * 60;
                preg_match_all("/time=(.*?) bitrate/", $ffmpeg_output, $a_match);
                $raw_time = array_pop($a_match);
                if (is_array($raw_time)) {
                    $raw_time = array_pop($raw_time);
                }
                $time_array = array_reverse(explode(":", $raw_time));
                $encode_at_time = floatval($time_array[0]);
                if (!empty($time_array[1])) $encode_at_time += intval($time_array[1]) * 60;
                if (!empty($time_array[2])) $encode_at_time += intval($time_array[2]) * 60 * 60;

                $progress = floor(($encode_at_time / $duration) * 100);
            } else {
                $progress = 0;
            }
            if ($progress >= 100) {
                $progress =  100;
                Storage::disk('local')->delete('video_progress/vid_' . session('progress_key') . '.txt');
            }
        } else {
            $progress =  100;
        }


        return compact('progress');
    }
    public function generate(VideoGenerateRequest $request)
    {

        $progress_key = $this->setProgressKey();

        $place = $request->get('place');
        switch ($place) {
            case 'tr':
                $overlay = "overlay=(main_w-overlay_w-20):20";
                break;
            case 'tl':
                $overlay = "overlay=20:20";
                break;
            case 'tc':
                $overlay = "overlay=(main_w-overlay_w)/2:20";
                break;
            case 'br':
                $overlay = "overlay=(main_w-overlay_w-20):(main_h-overlay_h-20)";
                break;
            case 'bl':
                $overlay = "overlay=20:(main_h-overlay_h-20)";
                break;
            case 'bc':
                $overlay = "overlay=(main_w-overlay_w)/2:(main_h-overlay_h-20)";
                break;
        }
        // $overlay = "overlay=25:25";
        // $overlay = "overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2";

        $video = str_replace('http://mp3quran.net/', '/home/betamp3/public_html/public/', $request->get('video'));
        $image = public_path('uploads/video-logo/lg/') . $request->get('image');
        $track_file = storage_path('app/video_progress/vid_' . $progress_key . '.txt');
        $output = '/home/betamp3/public_html/public/uploads/generated_videos/vid_' . $progress_key . '.mp4';

        if (env('APP_ENV') == 'production') {
            $command = "/usr/local/bin/ffmpeg -i  \"$video\" -i \"$image\" -filter_complex \"$overlay\" \"$output\" -y 1> $track_file 2>&1";
            shell_exec($command);
            $generated_url = 'https://upload.mp3quran.org/generated_videos/vid_' . $progress_key . '.mp4';
        } else {
            $generated_url = 'https://upload.mp3quran.org/generated_videos/vid_WLgqVVG9yvLo.mp4';
        }

        $progressing = true;


        return compact('progressing', 'generated_url');
    }
    public function setProgressKey()
    {
        $progress_key = Str::random(12);

        if (Storage::disk('local')->exists('video_progress/vid_' . $progress_key . '.txt')) {
            return $this->setProgressKey();
        } else {
            session(['progress_key' => $progress_key]);
            return $progress_key;
        }
    }
}
