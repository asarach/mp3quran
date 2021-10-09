<?php

namespace Mp3quran\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class SendNewsletterEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $details;
    public $timeout = 7200; // 2 hours

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($details)
    {
        $this->details = $details;
    }
    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $input['subject'] = $this->details['subject'];
        $input['content'] = $this->details['content'];

        foreach ($this->details['subscribers'] as  $subscriber) {
            $input['email'] = $subscriber['email'];
            $input['name'] = $subscriber['name'];
            if (config('mail.default') == 'mail') {
                mail(
                    $input['email'],
                    $input['subject'],
                    $input['content']
                );
            } else {
                Mail::send([], [], function ($message) use ($input) {
                    $message->to($input['email'], $input['name'])
                        ->subject($input['subject'])
                        ->setBody($input['content'], 'text/html');
                });
            }
        }
    }
}

