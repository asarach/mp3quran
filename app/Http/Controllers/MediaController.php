<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\Upload;
use App\Http\Controllers\Controller;
use App\Repositories\Media\MediaRepository;

class MediaController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(MediaRepository $media, Upload $upload)
    {
        $this->upload = $upload;
        $this->media = $media;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function upload(Request $request)
    {
        $input = $request->all();
        $data = [];
        $data['file'] = $request->file('file');

        $file = $this->upload->image($data, $request->type);

        return response()->json(array('success' => true, 'image_id' => $file));
    }
}
