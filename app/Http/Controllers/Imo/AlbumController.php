<?php

namespace App\Http\Controllers\Imo;

use App\Models\Imo\Album;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class AlbumController extends ImoController
{
    /**
     * Display a listing of the albums.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $albums = Album::all();

        return $this->formatResponse($albums);
    }


    /**
     * Display the specified album.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $album = Album::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return $this->formatResponse(null, 'please check your request path', 404);
        }
        return $this->formatResponse($album);
    }

    /**
     * Store a newly created album in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'album_list.*.album_cover' => 'required',
                'album_list.*.album_title' => 'required',
                'album_list.*.album_desc' => 'required',
                'album_list.*.album_lang' => 'required',
                'album_list.*.album_type' => 'required',
                'album_list.*.album_label' => 'required',
                'album_list.*.album_nature' => 'required',
                'album_list.*.album_duration' => 'required|integer',
                'album_list.*.album_score' => 'required|numeric',
                'album_list.*.album_time' => 'required|integer',
                'album_list.*.author_name' => 'required',
                'album_list.*.author_avatar' => 'required',
                'album_list.*.author_desc' => 'required',
                'album_list.*.album_level' => 'required',
                'album_list.*.item_type' => 'required'
            ]);
        } catch (ValidationException $e) {
            return $this->formatResponse($e->errors(), 'Validation error', 11200);
        }

        $albums = $request->get('album_list');
     
        foreach ($albums as $albumData) {
            Album::create($albumData);
        }

        return $this->formatResponse(null, 'success');
    }


    /**
     * Update the specified album in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        try {
            $request->validate([
                'album_list.*.album_id' => 'required',
                'album_list.*.album_cover' => 'required',
                'album_list.*.album_title' => 'required',
                'album_list.*.album_desc' => 'required',
                'album_list.*.album_lang' => 'required',
                'album_list.*.album_type' => 'required',
                'album_list.*.album_label' => 'required',
                'album_list.*.album_nature' => 'required',
                'album_list.*.album_duration' => 'required|integer',
                'album_list.*.album_score' => 'required|numeric',
                'album_list.*.album_time' => 'required|integer',
                'album_list.*.author_name' => 'required',
                'album_list.*.author_avatar' => 'required',
                'album_list.*.author_desc' => 'required',
                'album_list.*.album_level' => 'required',
                'album_list.*.item_type' => 'required'
            ]);
        } catch (ValidationException $e) {
            return $this->formatResponse($e->errors(), 'Validation error', 11300);
        }

        $albums = $request->get('album_list');
    
        foreach ($albums as $albumData) {
            $album = Album::findOrFail($albumData['album_id']);
            $album->update($albumData);
        }
    
        return $this->formatResponse(null, 'success');
    }

    /**
     * Remove the specified album from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Album::destroy($id);

        return $this->formatResponse(null, 'success', 204);
    }
}
