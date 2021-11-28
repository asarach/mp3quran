<?php

namespace  App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MenuRequest extends FormRequest
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
      case "post":
      case "POST":
        return [
          "title" => "required|string|max:190",
          "icon" => "required|string|max:190",
          "languages" => "required",
          'order_num' => 'required',
          'place' => 'required',
          "status" => "boolean"
        ];
      case "put":
      case "PUT":
        return [
          "title" => "required|string|max:190",
          "slug" => "required|string|max:190",
          "icon" => "required|string|max:190",
          "languages" => "required",
          'place' => 'required',
          "status" => "boolean"
        ];
    }
  }
}