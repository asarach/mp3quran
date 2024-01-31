<?php

namespace App\Http\Controllers;

use Mail;
use App\Read;
use Honeypot;
use Carbon\Carbon;
use LaravelLocalization;
use App\Mail\ContactMail;
use Spatie\Sitemap\Sitemap;
use Illuminate\Http\Request;
use Spatie\Sitemap\Tags\Url;
use App\Http\Requests\MessageRequest;
use App\Repositories\Page\PageRepository;
use App\Repositories\Read\ReadRepository;
use App\Repositories\Sora\SoraRepository;
use App\Repositories\Radio\RadioRepository;
use App\Repositories\Video\VideoRepository;
use App\Repositories\Mushaf\MushafRepository;
use App\Repositories\Rewaya\RewayaRepository;
use App\Repositories\Message\MessageRepository;
use App\Repositories\Reciter\ReciterRepository;

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


    public function storeMessage(MessageRequest $request)
    {
        $input = $request->all();
        // $message = $this->contact->create($input);
        // Mail::to('asaraach@gmail.com')->send(new ContactMail($input));
        try {
            //Try Sendgrid
            Mail::to(env('MAIL_TO_ADDRESS', 'mp3quran.net@gmail.com'))->send(new ContactMail($input));
            $note = trans("text.contact-success-message"); // 'Your message has been sent successfully';
            $status = 'success';
        } catch (\Throwable $th) {
            $note  = trans("text.contact-error-message"); //'Error sending message, please try again later';
            $status = 'danger';

            //Use mail
            // $to = env('MAIL_TO_ADDRESS', 'mp3quran.net@gmail.com');
            // $subject = 'mp3quran contact us : ' . $input['subject'];
            // $message = $input['body'];
            // $headers = "From: ".$input['email'];
            // mail($to, $subject, $message, $headers);
        }

        return redirect()->back()->with([
            'message' => $note,
            'status' => $status,
        ]);
    }
}
