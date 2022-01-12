<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.contact')
                    ->from(env('MAIL_FROM_ADDRESS', 'mp3quran.net@gmail.com'),env('MAIL_FROM_NAME', 'Mp3quran'))
                    ->replyTo($this->data['email'], $this->data['name'])
                    ->subject('Mp3quran Contact : ' . $this->data['subject'])
                    ->with($this->data);
    }
}
