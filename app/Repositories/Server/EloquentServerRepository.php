<?php

namespace App\Repositories\Server;

use App\Repositories\EloquentRepository;
use App\Server;

class EloquentServerRepository extends EloquentRepository implements ServerRepository
{
    public $model;

    public function __construct(Server $model)
    {
        $this->model = $model;
    }

    public function create(array $data)
    {
        $item = new $this->model;

        $item->name = $data['name'];
        $item->url = $data['url'];
        $item->ftp = $data['ftp'];
        $item->status = $data['status'];

        $item->save();

        return $item;
    }

    public function update($id, array $data)
    {
        $item = $this->model->findOrFail($id);

        $item->name = $data['name'];
        $item->url = $data['url'];
        $item->ftp = $data['ftp'];
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
