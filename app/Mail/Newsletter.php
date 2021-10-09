<?php

namespace Mp3quran\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Newsletter extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($text, $email)
    {
        $this->text = $text;
        $this->email = $email;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $unsubscribe_url = route('newsletter.unsubscribe') . '?email=' .  $this->email ;
        return $this->markdown('emails.newsletter')->with([
                        'text' => $this->text,
                        'unsubscribe_url' => $unsubscribe_url,
                    ]);
    }
}
