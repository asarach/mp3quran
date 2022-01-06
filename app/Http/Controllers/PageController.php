<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Page\PageRepository;
use App\Repositories\Sora\SoraRepository;
use App\Http\Requests\MessageRequest;
use App\Repositories\Message\MessageRepository;
use App\Repositories\Read\ReadRepository;
use App\Repositories\Radio\RadioRepository;
use App\Repositories\Mushaf\MushafRepository;
use App\Repositories\Reciter\ReciterRepository;
use App\Repositories\Video\VideoRepository;
use App\Repositories\Rewaya\RewayaRepository;
use LaravelLocalization;
use App\Mail\ContactMail;
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
    public function sitemap()
    {
       

        return view('layouts.app', $params);
    }
    public function storeMessage(MessageRequest $request)
    {
        $input = $request->all();
        // dd($input);
        // $message = $this->contact->create($input);
        // Mail::to('asaraach@gmail.com')->send(new ContactMail($input));
        // dd('asa');
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

        return redirect()->back();
    }
}
