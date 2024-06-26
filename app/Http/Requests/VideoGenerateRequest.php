<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VideoGenerateRequest extends FormRequest
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
        return [
            'place' => 'required|string|max:2',
            'video' => 'required|url|max:255',
            'image' => 'required|string|max:255',
        ];
    }
}
