<?php

namespace App\Repositories\Tsora;

use App\Repositories\EloquentRepository;
use App\Models\Tsora;
use App\Services\Search;

class EloquentTsoraRepository extends EloquentRepository implements TsoraRepository
{
    public $model;

    public function __construct(Search $search, Tsora $model)
    {
        $this->model = $model;
        $this->search = $search;
    }

    public function create(array $data)
    {
        $item = new $this->model;

        $item->name = $data['name'];
        $item->status = $data['status'];
        $item->url = $data['url'];

        if (!empty($data['tafsir']) and isset($data['tafsir'])) {
            $item->tafsir()->associate($data['tafsir']);
        }

        $item->save();

        return $item;
    }

    public function update($id, array $data)
    {
        $item = $this->model->findOrFail($id);

        $item->name = $data['name'];
        $item->status = $data['status'];
        $item->url = $data['url'];

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
