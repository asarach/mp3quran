<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LinkRequest extends FormRequest
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
          'new_url' => 'required|string|max:255',
          'old_url' => 'required|string|max:255',
        ];

        // Handle updates
      case 'put':
      case 'PUT':
        return [
          'new_url' => 'required|string|max:255',
          'old_url' => 'required|string|max:255',
        ];
    }
  }
}
