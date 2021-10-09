<?php

namespace Mp3quran\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewsletterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return TRUE;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $url = \Request::url();

        if (strpos($url, 'newsletter') !== false) {
            return [
                "name" => "required|string|max:255",
                "description" => "required",
            ];
        }
        if (strpos($url, 'nl_message') !== false) {
            return [
                "subject" => "required|string|max:255",
                "template" => "required",
                "leftcol" => "required",
            ];
        }
        if (strpos($url, 'nl_subscriber') !== false) {
            return [
                "name" => "required|string|max:255",
                "email" => "required|email",
            ];
        }
        if (strpos($url, 'nl_template') !== false) {
            return [
                "name" => "required|string|max:255",
                "columns" => "required",
                "body" => "required",
            ];
        }
    }
}

