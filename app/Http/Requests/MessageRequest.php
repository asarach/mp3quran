<?php

namespace Mp3quran\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MessageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->getMethod()) {
                // handle creates
            case 'post':
            case 'POST':

                return [
                    'name' => 'required',
                    'body' => 'required',
                    'subject' => 'required',
                    'email' => 'required|email',
                    'mp3quran_hony'   => 'honeypot',
                    'my_time'   => 'required|honeytime:5'
                    //recaptchaFieldName() => recaptchaRuleName()
                ];

                // Handle updates
            case 'put':
            case 'PUT':
                return [
                    'name' => 'required',
                    'body' => 'required',
                    'subject' => 'required',
                    'email' => 'required|email',
                ];
        }
    }
}
