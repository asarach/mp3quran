<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TadaborRequest extends FormRequest
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
          'audio_url' => 'nullable|string|max:255',
          'video_url' => 'nullable|string|max:255',
          'image_url' => 'nullable|string|max:255',
        ];

        // Handle updates
      case 'put':
      case 'PUT':
        return [
          'audio_url' => 'nullable|string|max:255',
          'video_url' => 'nullable|string|max:255',
          'image_url' => 'nullable|string|max:255',
        ];
    }
  }
}
