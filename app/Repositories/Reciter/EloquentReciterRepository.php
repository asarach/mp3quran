<?php

namespace Mp3quran\Repositories\Reciter;

use Mp3quran\Repositories\EloquentRepository;
use Mp3quran\Reciter;
use Mp3quran\Services\Search;

class EloquentReciterRepository extends EloquentRepository implements ReciterRepository
{
    public $model;

    public function __construct(Search $search, Reciter $model)
    {
        $this->model = $model;
        $this->search = $search;
    }

    public function create(array $data)
    {
        $item = new $this->model;

        $item->name = $data['name'];
        $item->status = $data['status'];
        $item->keywords = $data['keywords'];
        $item->description = $data['description'];

        $item->save();

        return $item;
    }

    public function update($id, array $data)
    {
        $item = $this->model->findOrFail($id);

        $item->name = $data['name'];
        $item->status = $data['status'];
        $item->keywords = $data['keywords'];
        $item->description = $data['description'];

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
