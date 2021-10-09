<?php

namespace Mp3quran\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LanguageRequest extends FormRequest
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
                    'name' => 'required|unique:translator_languages',
                    'locale' => 'required|unique:translator_languages,locale|max:8|min:2',
                ];

                // Handle updates
            case 'put':
            case 'PUT':
                return [
                    'name' => 'required|unique:translator_languages,name,' . $this->id,
                ];
        }
    }
}
