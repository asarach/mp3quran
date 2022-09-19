<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\VideoRequest;
use App\Repositories\Video\VideoRepository;
use App\Repositories\Mushaf\MushafRepository;
use App\Repositories\Rewaya\RewayaRepository;
use App\Repositories\Reciter\ReciterRepository;
use Illuminate\Http\Request;
use App\Repositories\Vgroup\VgroupRepository;
use DB;
use Illuminate\Validation\ValidationException;

use Cviebrock\EloquentSluggable\Services\SlugService;
use App\Video;


class VideoController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(VgroupRepository $vgroup, VideoRepository $video, ReciterRepository $reciter, RewayaRepository $rewaya, MushafRepository $mushaf)
    {
        $this->video = $video;
        $this->reciter = $reciter;
        $this->rewaya = $rewaya;
        $this->mushaf = $mushaf;
        $this->vgroup = $vgroup;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $columns = ['statu' => 'status', 'reciter' => 'reciter_id', 'vgroup' => 'vgroup_id'];
        $trashed = request('trashed');
        $reciters = $this->reciter->list(['id', 'name']);
        $vgroups = $this->vgroup->list(['id', 'name']);
        $videos = $this->video->model
            ->with('reciter:id,name')
            ->with('vgroup:id,name')
            ->sortable(['id' => 'desc'])
            ->filterColumns($columns);
        if ($trashed) {
            $videos = $videos->onlyTrashed();
        }
        $videos = $videos->paginate(24);

        return compact('videos', 'reciters','vgroups');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(VideoRequest $request)
    {
        $input = $request->all();
        $input['slug'] = SlugService::createSlug(Video::class, 'slug', $input['title']);
        if ($input['type'] == 1 || $input['type'] == 0) {
            try {
                $input['youtube_id'] = getYoutubeId($input['url']);
            } catch (\Throwable $th) {
                throw ValidationException::withMessages(['url' => trans('admin.invalid-youtube-url')]);
            }
            $input['uploaded'] = 0;
        }else{
            $input['youtube_id'] = null;
        }
        if ($input['type'] == 1) {
            $input['uploaded'] = 0;
        } else {
            $input['uploaded'] = 1;
        }
        
        $video = $this->video->create($input);
        clearPostCache(['admin_home_stats']);
        return compact('video');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $video = $this->video->model->with(['reciter:id,name', 'vgroup:id,name'])->findOrFail($id);

        $image = $video->images()->first();

        if ($image) {
            $video->old_image = ['file_name' => $image->id, 'file_path' => $image->getImage('videos')];
        }
        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $title = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'video-title')->where('item',  $id)->first();
            if ($title) {
                $arr['title'] = $title->text;
            } else {
                $arr['title'] = '';
            }

            $description = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'video-description')->where('item',  $id)->first();
            if ($description) {
                $arr['description'] = $description->text;
            } else {
                $arr['description'] = '';
            }

 

            $translations[$language->locale] = $arr;
        }

        $reciters = $this->reciter->list(['id', 'name']);
        $vgroups = $this->vgroup->list(['id', 'name']);

        return compact('video', 'translations', 'reciters','vgroups');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(VideoRequest $request, $id)
    {
        $video = $this->video->model->findOrFail($id);

        $input = $request->all();
        if ($input['slug'] !== $video->slug) {
            if (is_null($input['slug'])) {
                $input['slug'] = SlugService::createSlug(Video::class, 'slug', $input['title']);
            } else {
                $input['slug'] = SlugService::createSlug(Video::class, 'slug', $input['slug']);
            }
        }
        $video = $this->video->update($id, $input);
        return compact('video');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->video->destroy($id, request('forced'));
        clearPostCache(['admin_home_stats']);
        return compact('result');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restore($id)
    {
        $result = $this->video->model->withTrashed()->find($id)->restore();
        clearPostCache(['admin_home_stats']);
        return compact('result');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function changeStatus($id, $status)
    {
        $video = $this->video->changeStatus($id, $status);
        $status = $video->status;
        return compact('status');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function translations(Request $request, $id)
    {
        $input = $request->all();
        foreach ($input as $key => $translation) {
            $title = DB::table('translator_translations')->where('locale', $key)->where('group', 'video-title')->where('item',  $id)->first();
            if ($title) {
                DB::table('translator_translations')->where('id', $title->id)->update(array('text' => $translation['title']));
            } elseif ($translation['title']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'video-title', 'item' =>  $id, 'text' => $translation['title']]);
            }
            $description = DB::table('translator_translations')->where('locale', $key)->where('group', 'video-description')->where('item',  $id)->first();
            if ($description) {
                DB::table('translator_translations')->where('id', $description->id)->update(array('text' => $translation['description']));
            } elseif ($translation['description']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'video-description', 'item' => $id, 'text' => $translation['description']]);
            }

        }
        $result = true;
        flushTrans();
        return compact('result');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function actions(Request $request)
    {
        $input = $request->all();
        $results = [];
        switch ($input['action']) {
            case 'delete':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $result = $this->video->destroy($id, request('forced'));
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                clearPostCache(['admin_home_stats']);
                break;
            case 'restor':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $result = $this->video->model->withTrashed()->find($id)->restore();
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                clearPostCache(['admin_home_stats']);
                break;
            case 'activate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $video = $this->video->changeStatus($id, 1);
                        $status = $video->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $video = $this->video->changeStatus($id, 0);
                        $status = $video->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            default:
                break;
        }

        return compact('results');
    }
}
