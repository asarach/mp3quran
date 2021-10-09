<?php

namespace Mp3quran\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Mp3quran\Http\Requests\UploaderRequest;


class UploaderController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function show()
    {

        $uploads = [];
        $page_title = 'File Uploader';
        $page = 'uploader';

        if (request()->ajax()) {
            return compact('page', 'uploads','page_title');
        }
        $params = get_params(compact('page','uploads', 'page_title'));
        $params['metas'] = getMetas([
            'seo_title' => 'File Uploader',
            'seo_description' => 'File Uploader',
            'seo_keywords' => 'File Uploader'
        ]);

        return view('layouts.app', $params);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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
