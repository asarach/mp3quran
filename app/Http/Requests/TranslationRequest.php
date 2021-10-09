<?php

namespace Mp3quran\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TranslationRequest extends FormRequest
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
                    'text' => 'required|string',
                    'item' => 'required|string|max:255',
                    'group' => 'required|string|max:255',
                    'locale' => 'required|string|max:2',
                ];

                // Handle updates
            case 'put':
            case 'PUT':
                return [
                    //
                ];
        }
    }
}
