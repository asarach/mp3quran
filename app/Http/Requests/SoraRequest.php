<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SoraRequest extends FormRequest
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
          'start_page' => 'required|integer',
          'end_page' => 'required|integer',
          'makkia' => 'required|integer',
          'status' => 'required|boolean',
        ];

        // Handle updates
      case 'put':
      case 'PUT':
        return [
          'name' => 'required',
          'start_page' => 'required|integer',
          'end_page' => 'required|integer',
          'makkia' => 'required|integer',
          'status' => 'required|boolean',
        ];
    }
  }
}
