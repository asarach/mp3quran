<?php

namespace Mp3quran\Http\Controllers;

use Illuminate\Http\Request;
use Mp3quran\Repositories\Read\ReadRepository;
use Mp3quran\Repositories\Tv\TvRepository;
use Mp3quran\Repositories\Reciter\ReciterRepository;
use Mp3quran\Repositories\Video\VideoRepository;
use Mp3quran\Repositories\Radio\RadioRepository;

class SearchController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(VideoRepository $video, ReciterRepository $reciter, RadioRepository $radio, TvRepository $tv, ReadRepository $read)
    {
        $this->read = $read;
        $this->tv = $tv;
        $this->radio = $radio;
        $this->reciter = $reciter;
        $this->video = $video;
    }



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $input = $request->all();
        if (!isset($input['s'])) {
            $input['s'] = '';
        }
        $reads = $this->read->search($input, 'reads_index');
        $tvs = $this->tv->search($input, 'tvs_index');
        $radios = $this->radio->search($input, 'radios_index');
        $reciters = $this->reciter->search($input, 'reciters_index');
        $videos = $this->video->search($input, 'videos_index');
        $query = $input['s'];

        $path = request()->path();

        $page_title = trans('text.search-result-for', ['q'=> $input['s']]) . ' | MP3 Quran';

        $page = 'search';

        $data = compact('page', 'query', 'page_title', 'path', 'videos', 'reciters', 'radios', 'tvs', 'reads');

        if (request()->ajax()) {
            return $data;
        }

        $params = get_params($data);
        $params['metas'] = getMetas([
            'seo_title' => $page_title
            ]);

        return view('layouts.app', $params);
    }
}
