<?php

namespace Mp3quran\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdRequest extends FormRequest
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
          'name' => 'required|string|max:255',
          'url' => 'required',
          'order_num' => 'required',
          'start_date' => 'required',
          'end_date' => 'required',
        ];

        // Handle updates
      case 'put':
      case 'PUT':
        return [
          'name' => 'required|string|max:255',
          'url' => 'required',
          'order_num' => 'required',
          'start_date' => 'required',
          'end_date' => 'required',
        ];
    }
  }
}
