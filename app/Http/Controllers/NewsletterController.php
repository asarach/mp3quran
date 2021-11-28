<?php

namespace App\Http\Controllers;

use Newsletter;
use Illuminate\Http\Request;
use App\Repositories\Newsletter\NewsletterRepository;

class NewsletterController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(NewsletterRepository $newsletterRepo)
    {
        $this->newsletterRepo = $newsletterRepo;
    }
    
    public function unsubscribe(Request $request)
    {
        $channel = config('newsletter.channel');
        $input = $request->all();
        if ($channel == 'local') {
            if (!isset($input['newsletter'])) {
                $input['newsletter'] = 'main';
            }
            $this->newsletterRepo->unsubscribe($input);
        }else{
            Newsletter::unsubscribe($input['email']);
        }

        return redirect('/');
    }
}
