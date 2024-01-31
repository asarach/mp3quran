<?php

namespace App\Repositories\Newsletter;

use App\Models\NlMessage;
use App\Models\NlTemplate;
use App\Models\Newsletter;
use App\Models\NlSubscriber;
use Waavi\Translation\Models\Language;
use App\Repositories\EloquentRepository;

class EloquentNewsletterRepository extends EloquentRepository implements NewsletterRepository
{

    public $model;

    public function __construct(NlMessage $message, Newsletter $newsletter, NlSubscriber $subscriber, NlTemplate $template, Language $language)
    {
        $this->message = $message;
        $this->newsletter = $newsletter;
        $this->subscriber = $subscriber;
        $this->template = $template;

        $this->language = $language;
    }

    public function create(array $data, $type)
    {
        switch ($type) {
            case 'newsletter':
                $item = new $this->newsletter;
                $item->name = $data["name"];
                $item->description = $data["description"];
                $item->status = $data["status"];
                break;
            case 'message':
                $item = new $this->message;
                $item->subject = $data["subject"];
                $item->leftcol = $data["leftcol"];
                $item->rightcol = $data["rightcol"];

                if (!empty($data["template"]) and isset($data["template"]["id"])) {
                    $item->template()->associate($data["template"]["id"]);
                }

                break;
            case 'subscriber':
                $item = new $this->subscriber;
                $item->name = $data["name"];
                $item->email = $data["email"];

                break;
            case 'template':
                $item = new $this->template;
                $item->name = $data["name"];
                $item->columns = $data["columns"];
                $item->body = $data["body"];

                break;
        }

        $item->save();
        if ($type == 'subscriber') {
            foreach ($data["newsletters"] as $newsletters) {
                $item->newsletters()->attach($newsletters["id"]);
            }
        }

        return $item;
    }

    public function update($id, array $data, $type)
    {
        switch ($type) {
            case 'newsletter':
                $item = $this->newsletter->findOrFail($id);
                $item->name = $data["name"];
                $item->description = $data["description"];
                $item->status = $data["status"];

                break;
            case 'message':
                $item = $this->message->findOrFail($id);
                $item->subject = $data["subject"];
                $item->leftcol = $data["leftcol"];
                $item->rightcol = $data["rightcol"];

                if (!empty($data["template"]) and isset($data["template"]["id"])) {
                    $item->template()->associate($data["template"]["id"]);
                } else {
                    $item->template()->dissociate();
                }

                break;
            case 'subscriber':
                $item = $this->subscriber->findOrFail($id);
                $item->name = $data["name"];
                $item->email = $data["email"];

                break;
            case 'template':
                $item = $this->template->findOrFail($id);
                $item->name = $data["name"];
                $item->columns = $data["columns"];
                $item->body = $data["body"];

                break;
        }

        $item->save();
        if ($type == 'subscriber') {
            $item->newsletters()->detach();
            foreach ($data["newsletters"] as $newsletters) {
                $item->newsletters()->attach($newsletters["id"]);
            }
        }
        return $item;
    }


    public function destroy($id, $forced, $type)
    {
        switch ($type) {
            case 'newsletter':
                $item = $this->newsletter->withTrashed()->findOrFail($id);
                break;
            case 'message':
                $item = $this->message->withTrashed()->findOrFail($id);
                break;
            case 'subscriber':
                $item = $this->subscriber->withTrashed()->findOrFail($id);
                break;
            case 'template':
                $item = $this->template->withTrashed()->findOrFail($id);
                break;
        }
        if ($forced) {
            return $item->forceDelete();
        } else {
            return $item->delete();
        }
    }
    public  function subscribe($data)
    {
        $newsletter =  $this->newsletter->where('name', $data['newsletter'])->firstOrFail();
       
        $item = $this->subscriber->where('email', $data['email'])->first();
        if (!$item) {
            $item = new $this->subscriber;
            $item->name = $data["name"];
            $item->email = $data["email"];
            $item->save();
        }
        $newsletterExist = $item->newsletters->where('name', $data['newsletter'])->first();
        
        if (!$newsletterExist) {
            $item->newsletters()->attach($newsletter->id);
        }        
        return true;
    }
    public  function unsubscribe($data)
    {
        $newsletter =  $this->newsletter->where('name', $data['newsletter'])->firstOrFail();
        $item = $this->subscriber->where('email', $data['email'])->firstOrFail();
        $item->newsletters()->detach($newsletter->id);
        return true;
    }
}

