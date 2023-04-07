<?php

namespace App\Repositories\TwentyRewaya;

use App\Repositories\EloquentRepository;
use App\Models\TwentyRewaya;

class EloquentTwentyRewayaRepository extends EloquentRepository implements TwentyRewayaRepository
{
    public $model;

    public function __construct(TwentyRewaya $model)
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
