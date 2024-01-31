<?php

namespace App\Repositories\Sora;

use App\Repositories\EloquentRepository;
use App\Sora;

class EloquentSoraRepository extends EloquentRepository implements SoraRepository
{
    public $model;

    public function __construct(Sora $model)
    {
        $this->model = $model;
    }

    public function create(array $data)
    {
        $item = new $this->model;

        $item->name = $data['name'];
        $item->slug = $data['slug'];
        $item->start_page = $data['start_page'];
        $item->end_page = $data['end_page'];
        $item->makkia = $data['makkia'];
        $item->status = $data['status'];
        $item->ayat_count = $data['ayat_count'];
        $item->num = $data['num'];

        $item->save();

        return $item;
    }

    public function update($id, array $data)
    {
        $item = $this->model->findOrFail($id);

        $item->name = $data['name'];
        $item->slug = $data['slug'];
        $item->start_page = $data['start_page'];
        $item->end_page = $data['end_page'];
        $item->makkia = $data['makkia'];
        $item->status = $data['status'];
        $item->ayat_count = $data['ayat_count'];
        $item->num = $data['num'];

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
