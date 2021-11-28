<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Str;
use App\Http\Requests\UploaderRequest;


class UploaderController extends Controller
{

    public function upload(UploaderRequest $request)
    {
        $input = $request->all();

        $name = $this->preparedName('/uploader/', $input);

        try {
            $input['file']->move('uploader/', $name);
        } catch (Exception $e) {
            $this->errors = 'There was a problem uploading your file.';
            return false;
        }

        return ['name' => $name];
    }

    public function preparedName($folder, $input)
    {
        if (isset($input['filename'])) {
            $extension = '.' . pathinfo($input['filename'], PATHINFO_EXTENSION);
            $file_name_slug = Str::slug(pathinfo($input['filename'], PATHINFO_FILENAME));
        } else {
            $file_name = $input['file']->getClientOriginalName();
            $file_name_slug = Str::slug(pathinfo($file_name, PATHINFO_FILENAME));
            $extension = '.' . $input['file']->getClientOriginalExtension();
        }
        $original_name = $file_name_slug;
        $i = 1;
        while (file_exists(public_path() . $folder .  $file_name_slug . $extension)) {
            $file_name_slug = (string) $original_name . '-' . $i;
            $i++;
        }

        $name =  $file_name_slug . $extension;

        return $name;
    }
}
