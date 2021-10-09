<?php

namespace Mp3quran\Http\Controllers;

use Carbon\Carbon;
use LaravelLocalization;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Mp3quran\Services\Search;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Mp3quran\Repositories\Page\PageRepository;
use CyrildeWit\EloquentViewable\Support\Period;
use Mp3quran\Http\Requests\VideoGenerateRequest;
use Mp3quran\Repositories\Video\VideoRepository;
use Mp3quran\Repositories\Vgroup\VgroupRepository;

class VideoController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(PageRepository $page,  Search $search, VideoRepository $video, VgroupRepository $vgroup)
    {
        $this->video = $video;
        $this->search = $search;
        $this->page = $page;
        $this->vgroup = $vgroup;
    }


    /**
     * Display the specified resource.
     *
     * @param  \Mp3quran\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query = request()->get('q');

        if ($query) {
            $qids = $this->search->search($query, 'vgroups_index');
        }

        $playlists = $this->vgroup->model
            ->where('status', 1);

        if ($query) {
            $playlists = $playlists->whereIn('id', $qids);
        }
        $playlists = $playlists->orderBy('id', 'desc')
            ->paginate(24);

        $path = request()->path();
        $seo_page = $this->page->model->where('name', 'video')->where('status', 1)->firstOrFail();

        $page_title = $seo_page->getLocaleTitle();

        $page = 'playlists';

        $data = compact('page', 'playlists', 'path', 'page_title');

        if (request()->ajax()) {
            return $data;
        }

        $params = get_params($data);
        $params['metas'] = getMetas([
            'seo_title' => $seo_page->getLocaleTitle(),
            'seo_description' => $seo_page->getLocaleDescription(),
            'seo_keywords' => $seo_page->getLocaleKeywords()
        ]);

        return view('layouts.app', $params);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Mp3quran\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function playlist($id)
    {
        $videos = $this->video->model
            ->where('status', 1)
            ->where('uploaded', 1)
            ->where('vgroup_id', $id)
            ->sortable(['created_at' => 'desc'])
            ->paginate(30);



        $path = request()->path();
        $seo_page = $this->page->model->where('name', 'video')->where('status', 1)->firstOrFail();

        $page_title = $seo_page->getLocaleTitle();

        $page = 'videos';

        $data = compact('page', 'videos', 'path', 'page_title');

        if (request()->ajax()) {
            return $data;
        }

        $params = get_params($data);
        $params['metas'] = getMetas([
            'seo_title' => $seo_page->getLocaleTitle(),
            'seo_description' => $seo_page->getLocaleDescription(),
            'seo_keywords' => $seo_page->getLocaleKeywords()
        ]);



        return view('layouts.app', $params);
    }
    /**
     * Display the specified resource.
     *
     * @param  \Mp3quran\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $full_video = $this->video->model
            ->where('slug', $slug)
            ->where('status', 1)
            ->firstOrFail();

        $video_reads = [];


        $video = [
            'id' => $full_video->id,
            'url' => upload_url($full_video->url),
            'type' => $full_video->type,
            'youtube_id' => $full_video->youtube_id,
            'title' => $full_video->getLocaleTitle(),
            'reciter_name' => $full_video->geReciterName(),
            'image' => upload_url($full_video->getImage()),
        ];

        // dd($video);

        $page_title = $video['title'] . ' | MP3 Quran';


        $page = 'video';

        $data = compact('page', 'video_reads', 'video', 'page_title');

        if (request()->ajax()) {
            return $data;
        }

        $params = get_params($data);
        $params['metas'] = getMetas([
            'seo_title' => $page_title,
            'seo_description' => trans('video.description-' . $full_video->id),
            'seo_keywords' => trans('video.keywords-' . $full_video->id)
        ]);

        return view('layouts.app', $params);
    }
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
    public function download($id)
    {

        $full_video = $this->video->model
            ->where('id', $id)
            ->where('status', 1)
            ->firstOrFail();

        $video_reads = [];


        $video = [
            'id' => $full_video->id,
            'url' => upload_url($full_video->url),
            'title' => $full_video->getLocaleTitle(),
            'image' => $full_video->getImage(),
        ];

        $page_title =  trans("text.download-video-with-logo") . ' | MP3 Quran';


        $page = 'video-download';

        $data = compact('page', 'video', 'page_title');

        if (request()->ajax()) {
            return $data;
        }

        $params = get_params($data);
        $params['metas'] = getMetas([
            'seo_title' => $page_title,
            'seo_description' => trans('video.description-' . $full_video->id),
            'seo_keywords' => trans('video.keywords-' . $full_video->id)
        ]);

        return view('layouts.app', $params);
    }
}
