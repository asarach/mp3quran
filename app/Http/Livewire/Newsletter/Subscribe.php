<?php

namespace App\Http\Livewire\Newsletter;

use Livewire\Component;
use App\Repositories\Newsletter\NewsletterRepository;
use Newsletter;

class Subscribe extends Component
{

    public $email;
    public $name = 'none';
    public $newsletter = 'main';
    public $show = '';

    protected $rules = [
        'email' => 'required|email',
    ];

    public function render()
    {
        $subscribed = session('newsletters_subscribed');
        if (strlen($this->email) > 0) {
            $this->show = 'show';
        }
        return view('livewire.newsletter.subscribe', compact('subscribed'));
    }

    public function subscribe(NewsletterRepository $newsletterRepo)
    {

        $this->validate();

        $channel = config('newsletter.channel');
        if ($channel == 'local') {
            $data = [
                'email' => $this->email,
                'name' => $this->name,
                'newsletter' => $this->newsletter,
            ];
            $newsletterRepo->subscribe($data);
        } else {
            Newsletter::subscribe($this->email);
        }

        session(['newsletters_subscribed' => true]);
    }
}
