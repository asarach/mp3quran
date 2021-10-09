<?php

namespace Mp3quran\Repositories\Vgroup;

use Mp3quran\Repositories\EloquentRepository;
use Mp3quran\Vgroup;

class EloquentVgroupRepository extends EloquentRepository implements VgroupRepository
{
    public $model;

    public function __construct(Vgroup $model)
    {
        $this->model = $model;
    }

    public function create(array $data)
    {
        $item = new $this->model;
        $item->name = $data['name'];
        $item->slug = $data['slug'];
        $item->status = $data['status'];
        $result = $item->save();
        return $result;
    }

    public function update($id, array $data)
    {
        $item = $this->model->findOrFail($id);
        $item->name = $data['name'];
        $item->slug = $data['slug'];
        $item->status = $data['status'];
        $item->save();
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
}
