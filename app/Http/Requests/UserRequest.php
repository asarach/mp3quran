<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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

        switch ($this->get('method')) {
                // handle creates
            case 'general':
                return [
                    'name' => 'required|string|max:255',
                    'email' => 'required|string|email|max:255|unique:users,email,' . $this->get('id'),

                ];

            case 'admin':
                return [
                    'name' => 'required|string|max:255',
                    'email' => 'required|string|email|max:255|unique:users,email,' . $this->get('id'),
                    'password' => 'string|min:6|confirmed',
                ];

            case 'avatar':
                return [
                    'avatar' => 'required|string|max:255',
                ];

            case 'password':
                return [
                    'old_password' => 'required|string|min:6',
                    'password' => 'required|string|min:6|confirmed',
                ];
        }
    }
}
