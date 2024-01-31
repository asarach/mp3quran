<?php

namespace App\Http\Livewire\Page;

use Livewire\Component;
use App\Page;

class Contact extends Component
{
    public $mp3quran_hony = '';
    public $my_time = '';
    public $name = '';
    public $email = '';
    public $subject = '';
    public $body = '';

    protected $rules = [
        'name' => 'required',
        'body' => 'required',
        'subject' => 'required',
        'email' => 'required|email'
    ];


    public function render()
    {
        $page = Page::where('name', 'contact')->where('status', 1)->firstOrFail();

        $page->title = $page->getLocaleTitle();
        $page->content = $page->getLocaleContent();
        $page->description = $page->getLocaleDescription();

        return view('livewire.page.contact', compact('page'));
    }

}
