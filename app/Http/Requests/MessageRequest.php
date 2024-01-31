<?php

namespace App\Http\Requests;

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
