<?php

namespace Mp3quran\Repositories\Tv;

use Mp3quran\Repositories\EloquentRepository;
use Mp3quran\Tv;
use Mp3quran\Services\Search;

class EloquentTvRepository extends EloquentRepository implements TvRepository
{
    public $model;

    public function __construct(Search $search, Tv $model)
    {
        $this->model = $model;
        $this->search = $search;
    }

    public function create(array $data)
    {
        $item = new $this->model;

        $item->name = $data['name'];
        $item->url = $data['url'];
        $item->slug = $data['slug'];
        $item->status = $data['status'];

        $result = $item->save();
        if (!empty($data['image'])) {
            $item->images()->attach($data['image']);
        }

        return $result;
    }

    public function update($id, array $data)
    {
        $item = $this->model->findOrFail($id);
        $item->name = $data['name'];
        $item->url = $data['url'];
        $item->slug = $data['slug'];
        $item->status = $data['status'];


        $result = $item->save();

        if (!empty($data['image'])) {
            $item->images()->detach();
            $item->images()->attach($data['image']);
        }

        return $result;
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
}
