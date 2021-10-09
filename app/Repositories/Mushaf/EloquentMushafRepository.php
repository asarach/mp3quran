<?php

namespace Mp3quran\Repositories\Mushaf;

use Mp3quran\Repositories\EloquentRepository;
use Mp3quran\Mushaf;

class EloquentMushafRepository extends EloquentRepository implements MushafRepository
{
    public $model;

    public function __construct(Mushaf $model)
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
