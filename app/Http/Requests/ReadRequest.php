<?php

namespace Mp3quran\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReadRequest extends FormRequest
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
          'title' => 'required|string|max:255',
          'reciter' => 'required',
          'rewaya' => 'required',
        ];

        // Handle updates
      case 'put':
      case 'PUT':
        return [
          'title' => 'required|string|max:255',
          'reciter' => 'required',
          'rewaya' => 'required',
        ];
    }
  }
}
