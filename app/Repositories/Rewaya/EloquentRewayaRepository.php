<?php

namespace App\Repositories\Rewaya;

use App\Repositories\EloquentRepository;
use App\Rewaya;

class EloquentRewayaRepository extends EloquentRepository implements RewayaRepository
{
    public $model;

    public function __construct(Rewaya $model)
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
        $result = $item->save();
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
