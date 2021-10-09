<?php

namespace Mp3quran\Http\Controllers\Admin;

use Newsletter;
use Mp3quran\Models\NlMessage;
use Mp3quran\Models\NlTemplate;
use Mp3quran\Models\Newsletter  as NlNewsletter;
use Mp3quran\Models\NlSubscriber;
use Illuminate\Http\Request;
use Mp3quran\Http\Controllers\Controller;
use Mp3quran\Http\Requests\NewsletterRequest;
use Mp3quran\Repositories\Newsletter\NewsletterRepository;
use Mp3quran\Jobs\SendNewsletterEmail;

class NewsletterController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(NewsletterRepository $newsletterRepo, NlMessage $message, NlNewsletter $newsletter, NlSubscriber $subscriber, NlTemplate $template)
    {
        $this->newsletterRepo = $newsletterRepo;
        $this->message = $message;
        $this->newsletter = $newsletter;
        $this->subscriber = $subscriber;
        $this->template = $template;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = $this->getCurrentModel();
        $trashed = request("trashed");

        switch ($model) {
            case 'newsletter':
                $newsletters = $this->newsletter;
                if ($trashed) {
                    $newsletters = $newsletters->onlyTrashed();
                }
                $newsletters = $newsletters->paginate(24);
                return compact("newsletters");
                break;
            case 'message':
                $messages = $this->message;
                if ($trashed) {
                    $messages = $messages->onlyTrashed();
                }
                $messages = $messages->with("template")->orderBy('id', 'desc')->paginate(24);
                $newsletters = $this->newsletter->get();
                return compact("messages","newsletters");
                break;
            case 'subscriber':
                $subscribers = $this->subscriber;
                if ($trashed) {
                    $subscribers = $subscribers->onlyTrashed();
                }
                $subscribers = $subscribers->paginate(24);
                return compact("subscribers");
                break;
            case 'template':
                $templates = $this->template;
                if ($trashed) {
                    $templates = $templates->onlyTrashed();
                }
                $templates = $templates->paginate(24);
                return compact("templates");
                break;
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $model = $this->getCurrentModel();

        switch ($model) {
            case 'newsletter':
                return [];
                break;
            case 'message':
                $templates = $this->template->get();
                return compact("templates");
                break;
            case 'subscriber':
                $newsletters = $this->newsletter->get();
                return compact("newsletters");
                break;
            case 'template':
                return [];
                break;
        }
        return [];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewsletterRequest $request)
    {
        $model = $this->getCurrentModel();

        $input = $request->all();

        switch ($model) {
            case 'newsletter':
                $newsletter = $this->newsletterRepo->create($input, 'newsletter');
                return compact("newsletter");
                break;
            case 'message':
                $newsletter = $this->newsletterRepo->create($input, 'message');
                return compact("newsletter");
                break;
            case 'subscriber':
                $newsletter = $this->newsletterRepo->create($input, 'subscriber');
                return compact("newsletter");
                break;
            case 'template':
                $newsletter = $this->newsletterRepo->create($input, 'template');
                return compact("newsletter");
                break;
        }


        // $input["slug"] = SlugService::createSlug(Newsletter::class, "slug", $input["name"]);


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $message = $this->message->with("template")->findOrFail($id);
        $message->content = $message->renderContent();
        $templates = $this->template->get();
        return compact("message", "templates");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function send(Request $request)
    {
        $input = $request->all();
        $message = $this->message->with("template")->findOrFail($input['id']);

        $details = [
    		'subject' => $message->subject,
    		'content' => $message->renderContent()
    	];
        
        $newsletters_ids = [];
        foreach ($input['newsletters'] as $key => $newsletter) {
            $newsletters_ids[] = $newsletter['id'];
        }
        $details['subscribers'] = $this->subscriber->whereHas('newsletters', function($q) use($newsletters_ids) {
            $q->whereIn('newsletters.id', $newsletters_ids);
        })->select('email','name')->get()->toArray();

        $job = (new SendNewsletterEmail($details))
            	->delay(now()->addSeconds(2)); 
        
        dispatch($job);
        
        return ['result' => true];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $model = $this->getCurrentModel();

        switch ($model) {
            case 'newsletter':
                $newsletter = $this->newsletter->findOrFail($id);
                return compact("newsletter");
                break;
            case 'message':
                $message = $this->message->with("template")->findOrFail($id);
                $templates = $this->template->get();
                return compact("message", "templates");
                break;
            case 'subscriber':
                $subscriber = $this->subscriber->with("newsletters")->findOrFail($id);
                $newsletters = $this->newsletter->get();
                return compact("subscriber", "newsletters");
                break;
            case 'template':
                $template = $this->template->findOrFail($id);
                return compact("template");
                break;
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(NewsletterRequest $request, $id)
    {
        $model = $this->getCurrentModel();
        $input = $request->all();

        switch ($model) {
            case 'newsletter':
                $newsletter = $this->newsletterRepo->update($id, $input, 'newsletter');
                return compact("newsletter");
                break;
            case 'message':
                $message = $this->newsletterRepo->update($id, $input, 'message');
                return compact("message");
                break;
            case 'subscriber':
                $subscriber = $this->newsletterRepo->update($id, $input, 'subscriber');
                return compact("subscriber");
                break;
            case 'template':
                $template = $this->newsletterRepo->update($id, $input, 'template');
                return compact("template");
                break;
        }
        // $newsletter = $this->newsletter->model->findOrFail($id);

        // if ($input["slug"] !== $newsletter->slug) {
        //     if (is_null($input["slug"])) {
        //         $input["slug"] = SlugService::createSlug(Newsletter::class, "slug", $input["name"]);
        //     } else {
        //         $input["slug"] = SlugService::createSlug(Newsletter::class, "slug", $input["slug"]);
        //     }
        // }



    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $model = $this->getCurrentModel();
        $result = $this->newsletterRepo->destroy($id, request("forced"), $model);
        return compact("result");
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restore($id)
    {
        $model = $this->getCurrentModel();

        switch ($model) {
            case 'newsletter':
                $item = $this->newsletter;
                break;
            case 'message':
                $item = $this->message;
                break;
            case 'subscriber':
                $item = $this->subscriber;
                break;
            case 'template':
                $item = $this->template;
                break;
        }

        $result = $item->withTrashed()->find($id)->restore();
        return compact("result");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function changeStatus($id, $status)
    {
        $model = $this->getCurrentModel();

        switch ($model) {
            case 'newsletter':
                $item = $this->newsletter;
                break;
            case 'message':
                $item = $this->message;
                break;
            case 'subscriber':
                $item = $this->subscriber;
                break;
            case 'template':
                $item = $this->template;
                break;
        }

        $item = $item->findOrFail($id);
        $item->status = $status;
        $item->save();

        $status = $item->status;
        return compact("status");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function actions(Request $request)
    {
        $model = $this->getCurrentModel();

        switch ($model) {
            case 'newsletter':
                $item = $this->newsletter;
                break;
            case 'message':
                $item = $this->message;
                break;
            case 'subscriber':
                $item = $this->subscriber;
                break;
            case 'template':
                $item = $this->template;
                break;
        }

        $input = $request->all();
        $results = [];
        switch ($input["action"]) {
            case "delete":
                foreach ($input["items"] as $id => $val) {
                    if ($val) {
                        $result = $this->newsletterRepo->destroy($id, request("forced"), $model);
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case "restor":
                foreach ($input["items"] as $id => $val) {
                    if ($val) {
                        $result = $item->withTrashed()->find($id)->restore();
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case "activate":
                foreach ($input["items"] as $id => $val) {
                    if ($val) {
                        $item = $item->findOrFail($id);
                        $item->status = 1;
                        $item->save();

                        $status = $item->status;

                        $results[] = ["id" => $id, "status" => $status];
                    }
                }
                break;
            case "deactivate":
                foreach ($input["items"] as $id => $val) {
                    if ($val) {
                        $item = $item->findOrFail($id);
                        $item->status = 0;
                        $item->save();

                        $status = $item->status;

                        $results[] = ["id" => $id, "status" => $status];
                    }
                }
                break;
            default:
                break;
        }

        return compact("results");
    }

    public function getCurrentModel()
    {
        $url = \Request::url();
        if (strpos($url, 'newsletter') !== false) {
            return 'newsletter';
        }
        if (strpos($url, 'nl_message') !== false) {
            return 'message';
        }
        if (strpos($url, 'nl_subscriber') !== false) {
            return 'subscriber';
        }
        if (strpos($url, 'nl_template') !== false) {
            return 'template';
        }
        return '';
    }
}

