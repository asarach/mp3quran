<?php

namespace Mp3quran\Http\Controllers;

use Illuminate\Http\Request;
use Mp3quran\Repositories\Page\PageRepository;
use Mp3quran\Repositories\Sora\SoraRepository;
use Mp3quran\Http\Requests\MessageRequest;
use Mp3quran\Repositories\Message\MessageRepository;
use Mp3quran\Repositories\Read\ReadRepository;
use Mp3quran\Repositories\Radio\RadioRepository;
use Mp3quran\Repositories\Mushaf\MushafRepository;
use Mp3quran\Repositories\Reciter\ReciterRepository;
use Mp3quran\Repositories\Video\VideoRepository;
use Mp3quran\Repositories\Rewaya\RewayaRepository;
use LaravelLocalization;
use Mp3quran\Mail\ContactMail;
use Mail;
use Honeypot;

class PageController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(SoraRepository $sora,  PageRepository $page, MessageRepository $contact, VideoRepository $video, ReciterRepository $reciter, RadioRepository $radio, ReadRepository $read)
    {
        $this->page = $page;
        $this->contact = $contact;
        $this->radio = $radio;
        $this->reciter = $reciter;
        $this->video = $video;
        $this->read = $read;
        $this->sora = $sora;
    }


    public function show($name)
    {
        $page = $this->page->model->where('name', $name)->where('status', 1)->firstOrFail();
        $page->content = $page->getLocaleContent();
        $page->title = $page->getLocaleTitle();
        $page_title = trans('text.page') . ' | MP3 Quran';


        $params = get_params(compact('page'));
        return view('layouts.app', $params);
    }
    public function favorites()
    {
        $page_content = '';
        $page_title = trans('text.favorites') . ' | MP3 Quran';


        $page = 'page';
        if (request()->ajax()) {
            return compact('page', 'page_content', 'page_title');
        }
        $params = get_params(compact('page', 'page_content', 'page_title'));
        $params['metas'] = getMetas([
            'seo_title' => $page_title,
            'seo_description' => trans('text.favorites-description'),
            'seo_keywords' => trans('text.favorites-keywords')
        ]);
        return view('layouts.app', $params);
    }
    public function postFavorites(Request $request)
    {
        $input = $request->all();
        $results = [];
        if (isset($input['reads'])) {
            $results['reads'] = $this->paginate($this->read->getFavs($input['reads']), $perPage = 25, $page = null, $options = []);
        }
        if (isset($input['radios'])) {
            $results['radios'] = $this->paginate($this->radio->getFavs($input['radios']), $perPage = 25, $page = null, $options = []);
        }
        if (isset($input['videos'])) {
            $results['videos'] = $this->paginate($this->video->getFavs($input['videos']), $perPage = 25, $page = null, $options = []);
        }
        if (isset($input['soar'])) {
            $results['soar'] = $this->paginate($this->read->getFavsSoar($input['soar']), $perPage = 25, $page = null, $options = []);
        }
        return $results;
    }
    public function about()
    {
        $page_content = $this->page->model->where('name', 'about')->where('status', 1)->firstOrFail();

        $page_content->content = $page_content->getLocaleContent();
        $page_content->title = $page_content->getLocaleTitle();
        $page_title = $page_content->getLocaleTitle();

        $page = 'page';
        if (request()->ajax()) {
            return compact('page', 'page_content', 'page_title');
        }
        $params = get_params(compact('page', 'page_content', 'page_title'));
        $params['metas'] = getMetas([
            'seo_title' => $page_content->getLocaleTitle(),
            'seo_description' => $page_content->getLocaleDescription(),
            'seo_keywords' => $page_content->getLocaleKeywords()
        ]);
        return view('layouts.app', $params);
    }

    public function sitemap()
    {
        $page_content = [];
        $page_content[] = ['text' => trans('text.home'), 'url' => route('index'), 'sublinks' => []];
        $page_content[] = ['text' => trans('text.about'), 'url' => route('page.about'), 'sublinks' => []];
        $page_content[] = ['text' => trans('text.apps'), 'url' => route('page.apps'), 'sublinks' => []];
        $page_content[] = ['text' => trans('text.api'), 'url' => route('page.api'), 'sublinks' => []];
        $page_content[] = ['text' => trans('text.contact'), 'url' => route('page.contact'), 'sublinks' => []];
        $page_content[] = ['text' => trans('text.live-tvs'), 'url' => route('tv.index'), 'sublinks' => []];
        $page_content[] = ['text' => trans('text.quran'), 'url' => route('mushaf'), 'sublinks' => []];
        $page_content[] = ['text' => trans('text.surah-al-kahfi'), 'url' => route('alkahf'), 'sublinks' => []];

        $page_content[] = ['text' => trans('text.radios'), 'url' => route('radio.index'), 'sublinks' => []];

        $re_sublinks = [];
        $reciters = $this->reciter->model->where('status', 1)->get();
        foreach ($reciters as $reciter) {
            $re_sublinks[] = ['text' => $reciter->getLocaleName(), 'url' => route('reciter.show', ['slug' => $reciter->slug])];
        }
        $page_content[] = ['text' => trans('text.reciters'), 'url' => route('reciter.index'), 'sublinks' => $re_sublinks];


        $vi_sublinks = [];
        $videos = $this->video->model->where('status', 1)->get();
        foreach ($videos as $video) {
            $vi_sublinks[] = ['text' => $video->getLocaleTitle(), 'url' => route('video.show', ['slug' => $video->slug])];
        }
        $page_content[] = ['text' => trans('text.videos'), 'url' => route('video.index'), 'sublinks' => $vi_sublinks];

        $page_title = trans('text.sitemap') . ' | MP3 Quran';


        $page = 'page';
        if (request()->ajax()) {
            return compact('page', 'page_content', 'page_title');
        }

        $params = get_params(compact('page', 'page_content', 'page_title'));
        $params['metas'] = getMetas([
            'seo_title' => $page_title,
            'seo_description' => trans('text.sitemap-description'),
            'seo_keywords' => trans('text.sitemap-keywords')
        ]);

        return view('layouts.app', $params);
    }
    public function api()
    {
        $page_content = [];
        $page_content['api1'] = json_decode(file_get_contents(storage_path() . "/api1.json"), true);

        $page_content['api2'] = json_decode(file_get_contents(storage_path() . "/api2.json"), true);

        $seo_page = $this->page->model->where('name', 'API')->where('status', 1)->firstOrFail();

        $page_title = $seo_page->getLocaleTitle();

        $page = 'page';
        if (request()->ajax()) {
            return compact('page', 'page_content', 'page_title');
        }
        $params = get_params(compact('page', 'page_content', 'page_title'));
        $params['metas'] = getMetas([
            'seo_title' => $seo_page->getLocaleTitle(),
            'seo_description' => $seo_page->getLocaleDescription(),
            'seo_keywords' => $seo_page->getLocaleKeywords()
        ]);

        return view('layouts.app', $params);
    }
    public function privacy()
    {
        $page_content = $this->page->model->where('name', 'privacy')->where('status', 1)->firstOrFail();
    
        $page_content->content = $page_content->getLocaleContent();
        $page_content->title = $page_content->getLocaleTitle();
        $page_title = $page_content->getLocaleTitle();

        $page = 'page';
        if (request()->ajax()) {
            return compact('page', 'page_content', 'page_title');
        }
        $params = get_params(compact('page', 'page_content', 'page_title'));
        $params['metas'] = getMetas([
            'seo_title' => $page_content->getLocaleTitle(),
            'seo_description' => $page_content->getLocaleDescription(),
            'seo_keywords' => $page_content->getLocaleKeywords()
        ]);
        return view('layouts.app', $params);
    }
    public function agreement()
    {
        $page = $this->page->model->where('name', 'agreement')->where('status', 1)->firstOrFail();
        $page->content = $page->getLocaleContent();
        $page->title = $page->getLocaleTitle();

        $params = get_params(compact('page'));
        return view('layouts.app', $params);
    }
    public function contact()
    {
        $page_content = $this->page->model->where('name', 'contact')->where('status', 1)->firstOrFail();
        $page_content->content = $page_content->getLocaleContent();
        $page_content->title = $page_content->getLocaleTitle();

        $page_title = $page_content->getLocaleTitle();

        $honeypot = [
            'name' => 'mp3quran_hony',
            'time' => Honeypot::getEncryptedTime(),
        ];

        $page = 'page';
        if (request()->ajax()) {
            return compact('page', 'page_content', 'page_title', 'honeypot');
        }
        $params = get_params(compact('page', 'page_content', 'page_title', 'honeypot'));
        $params['metas'] = getMetas([
            'seo_title' => $page_content->getLocaleTitle(),
            'seo_description' => $page_content->getLocaleDescription(),
            'seo_keywords' => $page_content->getLocaleKeywords()
        ]);

        return view('layouts.app', $params);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeMessage(MessageRequest $request)
    {
        $input = $request->all();

        // $message = $this->contact->create($input);

        try {
            //Try Sendgrid
            Mail::to(env('MAIL_TO_ADDRESS', 'mp3quran.net@gmail.com'))->send(new ContactMail($input));
        } catch (\Throwable $th) {
            //Use mail
            $to = env('MAIL_TO_ADDRESS', 'mp3quran.net@gmail.com');
            $subject = 'mp3quran contact us : ' . $input['subject'];
            $txt = $input['body'];
            $headers = "From: ".$input['email'];
    
            mail($to, $subject, $txt, $headers);
        }

        return ['result' => true];
    }
}
