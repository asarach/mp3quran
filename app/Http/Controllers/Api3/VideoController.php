<?php

namespace App\Http\Controllers\Api3;

use App\Video;
use App\Vgroup;
use App\Models\Tsora;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Http\Controllers\Api3\ApiController;


class VideoController extends ApiController
{
    /**
     * API 2 controller.
     *
     * @return void
     */
    public function __construct()
    {
    }
    public function types(Request $request)
    {
    
        $this->setParams($request);
        Cache::forget('api_v3_videos_types_' . $request->input('language'));
        $video_types = Cache::rememberForever('api_v3_videos_types_' . $request->input('language'), function () {
            return $this->getTypes();
        });

        return compact('video_types');
    }
    public function videos(Request $request)
    {
        $this->setParams($request);

      /*  $name = 'api_v3_videos_' . $request->input('language') . '_videos_id_' . $request->input('video_id');
        Cache::forget($name);
        $videos = Cache::rememberForever($name, function () {
            return $this->getVideos();
        });*/

        $videos = $this->getVideos();

        return compact('videos');
    }

    public function getTypes()
    {
        $videos_group = Vgroup::where('status', 1);

        if ($this->language !== null) {
            $videos_group = $videos_group->join('translator_translations', "vgroups.id", '=', 'translator_translations.item')
                ->where('locale', $this->language->locale)
                ->where('group', 'vgroup-name')
                ->select('vgroups.id as id', 'translator_translations.text as video_type');
        } else {
            $videos_group = $videos_group->select('id', 'name as video_type');
        }

        $videos_group = $videos_group->get();


        return $videos_group;
    }
    public function getVideos()
    {
        $videos = Video::where('status', 1)
            ->join('translator_translations', "videos.reciter_id", '=', 'translator_translations.item')
            ->where('group', 'reciter-name');

        if (request()->last_update) {
            $date = Carbon::parse(request()->last_update)->format('Y-m-d');

            $videos->whereDate('videos.updated_at', '>=', $date);
        }

        if ($this->language !== null) {
            $videos = $videos->where('locale', $this->language->locale);
        } else {
            $videos = $videos->where('locale', 'ar');
        }

        $videos = $videos->select('videos.*', 'translator_translations.text as reciter_name')->get()->groupBy('reciter_id');
        $id = 1;
        $results = [];
        foreach ($videos as $key => $item) {
            $item_videos = [];
            foreach ($item as  $it) {
                $item_videos[] = [
                    'id' => $it->id,
                    'video_type' => $it->vgroup_id,
                    'video_url' => $it->url,
                    'video_thumb_url' => $it->getImage(),
                ];
            }
            $results[] = [
                'id' => $it->reciter_id,
                'reciter_name' => $it->reciter_name,
                'videos' => $item_videos

            ];
        };

        return  $results;
    }
}
