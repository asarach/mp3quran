<?php

namespace App\Repositories\Link;

use App\Repositories\EloquentRepository;
use App\Link;

class EloquentLinkRepository extends EloquentRepository implements LinkRepository
{
    public $model;

    public function __construct(Link $model)
    {
        $this->model = $model;
    }

    public function create(array $data)
    {
        $item = new $this->model;

        $item->new_url = $data['new_url'];
        $item->old_url = $data['old_url'];
        $item->status = $data['status'];

        $result = $item->save();

        return $result;
    }

    public function update($id, array $data)
    {
        $item = $this->model->findOrFail($id);

        $item->new_url = $data['new_url'];
        $item->old_url = $data['old_url'];
        $item->status = $data['status'];

        $item->save();

        return $item;
    }

    public function destroy($id)
    {
        $item = $this->model->findOrFail($id);
        return $item->delete();
    }
}
