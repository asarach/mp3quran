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
    /**
     * Show the application dashboard.
     *
     */
    public function subscribe(Request $request)
    {
        $channel = config('newsletter.channel');
        $input = $request->all();
        if ($channel == 'local') {
            if (!isset($input['name'])) {
                $input['name'] = 'none';
            }
            if (!isset($input['newsletter'])) {
                $input['newsletter'] = 'main';
            }
            $this->newsletterRepo->subscribe($input);
        }else{
            Newsletter::subscribe($input['email']);
        }

        session(['newsletters_subscribed' => true]);

        return ['success' => true];
    }

    /**
     * Show the application dashboard.
     *
     */
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
    /**
     * Show the application dashboard.
     *
     */
    public function show(Request $request)
    {
        
        $page_title = trans("text.newsletter");

        $page = 'newsletter';
        if (request()->ajax()) {
            return compact('page',  'page_title');
        }
        
        $params = get_params(compact('page', 'page_title'));
       
        $params['metas'] = getMetas([
            'seo_title' => trans("text.newsletter"),
            'seo_description' => trans("text.newsletter"),
            'seo_keywords' => trans("text.newsletter")
        ]);
        // dd('asa');
        return view('layouts.app', $params);
    }
}
