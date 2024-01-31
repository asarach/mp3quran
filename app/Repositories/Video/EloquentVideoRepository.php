<?php

namespace App\Repositories\Video;

use App\Repositories\EloquentRepository;
use App\Video;
use App\Services\Search;

class EloquentVideoRepository extends EloquentRepository implements VideoRepository
{
    public $model;

    public function __construct(Search $search, Video $model)
    {
        $this->model = $model;
        $this->search = $search;
    }

    public function create(array $data)
    {
        $item = new $this->model;

        $item->title = $data['title'];
        $item->slug = $data['slug'];
        $item->url = $data['url'];
        $item->type = $data['type'];
        $item->youtube_id = $data['youtube_id'];
        $item->featured = $data['featured'];
        $item->status = $data['status'];
        $item->description = $data['description'];
        $item->uploaded = $data['uploaded'];

        if (!empty($data['reciter']) and isset($data['reciter']['id'])) {
            $item->reciter()->associate($data['reciter']['id']);
        }
        if (!empty($data['vgroup']) and isset($data['vgroup']['id'])) {
            $item->vgroup()->associate($data['vgroup']['id']);
        }

        $result = $item->save();
        if (!empty($data['image'])) {
            $item->images()->attach($data['image']);
        }

        return $result;
    }

    public function update($id, array $data)
    {
        $item = $this->model->findOrFail($id);

        $item->title = $data['title'];
        $item->slug = $data['slug'];
        $item->url = $data['url'];
        $item->featured = $data['featured'];
        $item->status = $data['status'];
        $item->description = $data['description'];

        if (!empty($data['reciter']) and isset($data['reciter']['id'])) {
            $item->reciter()->associate($data['reciter']['id']);
        } else {
            $item->reciter()->dissociate();
        }
        if (!empty($data['vgroup']) and isset($data['vgroup']['id'])) {
            $item->vgroup()->associate($data['vgroup']['id']);
        } else {
            $item->vgroup()->dissociate();
        }

        $item->save();

        if (!empty($data['image'])) {
            $item->images()->detach();
            $item->images()->attach($data['image']);
        }

        return $item;
    }

    public function destroy($id, $forced)
    {
        $item = $this->model->withTrashed()->findOrFail($id);
        if ($forced) {
            return $item->forceDelete();
        } else {
            return $item->delete();
        }
    }
    public function getFavs($keys)
    {
        return $radio = $this->model->whereIn('id', $keys)->where('status', 1)->get()->toArray();
    }
}
