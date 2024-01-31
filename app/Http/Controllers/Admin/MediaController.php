<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Upload;
use App\Repositories\Media\MediaRepository;
use Storage;
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

      $folders = config('drads.upload_folders');
      if ($request->folder) {
        $medias = $this->media->model->where('folder',$request->folder)->paginate(24);
      } else {
        $medias = [];
      }

      return compact('folders', 'medias');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Media  $media
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $media = $this->media->model->findOrFail($id);
      $input = $request->all();
      $media = $this->media->update($id, $input);

      return compact('media');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Media  $media
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

      $file = $this->media->model->findOrFail($id);
      if ($file->sora) {
        $file->sora->icon_id = NULL;
        $file->sora->save();
      }
      $file->annonces()->detach();
      $cleared_size = 0;
      $cleared_count = 0;

      $sub_folders = config('drads.upload_folders')[$file->folder];
      foreach ($sub_folders as $sub_folder) {
        $sub_folder = $sub_folder['folder'];
        $exists = Storage::disk('uploads')->exists($sub_folder . $file->file_name);
        if ($exists) {
          $cleared_size += Storage::disk('uploads')->size($sub_folder . $file->file_name);
          $cleared_count++;
          Storage::disk('uploads')->delete($sub_folder . $file->file_name);

        }
      }
        $file->delete();

      return compact('cleared_size', 'cleared_count');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Media  $media
     * @return \Illuminate\Http\Response
     */
    public function clearFolder($folder)
    {
      $cleared_size = 0;
      $cleared_count = 0;
      $sub_folders = config('drads.upload_folders')[$folder];

      foreach ($sub_folders as $sub_folder) {
        $sub_folder = $sub_folder['folder'];
        $files = Storage::disk('uploads')->files($sub_folder);
        foreach ($files as $file) {
          $exist = $this->media->model->where('file_name', str_replace($sub_folder, '', $file))->first();
          if (!$exist) {
            $cleared_size += Storage::disk('uploads')->size($file);
            $cleared_count++;
            Storage::disk('uploads')->delete($file);
          }
        }
      }
      $cleared_size = formatBytes($cleared_size);

      return compact('cleared_size', 'cleared_count');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Media  $media
     * @return \Illuminate\Http\Response
     */
    public function clearMedias($folder)
    {
      $files = $this->media->model->where('folder', $folder)->doesnthave('annonces')->doesnthave('sora')->get();
      $files2 = $this->media->model->where('folder', null)->get();
      $files  = $files->merge($files2);

      $cleared_size = 0;
      $cleared_count = 0;
      $sub_folders = config('drads.upload_folders')[$folder];
      foreach ($files as $file) {
        foreach ($sub_folders as $sub_folder) {
          $sub_folder = $sub_folder['folder'];
          $exists = Storage::disk('uploads')->exists($sub_folder . $file->file_name);
          if ($exists) {
            $cleared_size += Storage::disk('uploads')->size($sub_folder . $file->file_name);
            $cleared_count++;
            Storage::disk('uploads')->delete($sub_folder . $file->file_name);

          }
        }
          $file->delete();
      }
      $cleared_size = formatBytes($cleared_size);

      return compact('cleared_size', 'cleared_count');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function upload(Request $request) {
		    $input = $request->all();
        $data = [];
        $data['file'] = $request->file('file');
        $data['file'] = $this->upload->image($data, $request->type);
        $data['type'] = $request->type;
        $media = $this->media->create($data);

        return response()->json(array('success' => true, 'image_id' => $media->id));
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function uploadFile(Request $request) {
		    $input = $request->all();
        $data['file'] = $request->file('file');
        $file = $this->upload->file($data, $request->type);

        return response()->json(array('success' => true, 'file_id' => $file));
    }

    public function ckuploadImages(Request $request)
    {
        $CKEditor = $request->input('CKEditor');
        $funcNum  = $request->input('CKEditorFuncNum');
        $type  = $request->type;
        $message  = $url = '';


        if ($request->hasFile('upload')) {
            $file = $request->file('upload');
            if ($file->isValid()) {
                switch ($type) {
                    case 'image':
                    $data['file'] = $file;
                    $data['filename'] = $file->getClientOriginalName();
                    $name = $this->upload->image($data, 'wysiwyg');
                    $url = '/uploads/wysiwyg/lg/' . $name;
                        break;
                }
            } else {
                $message = 'An error occurred while uploading the file.';
            }
        } else {
            $message = 'No file uploaded.';
        }
        return ['uploaded' => 1, 'fileName' => $funcNum, 'url' => $url];
    }
}
