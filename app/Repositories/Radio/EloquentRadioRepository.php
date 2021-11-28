<?php

namespace App\Repositories\Radio;

use App\Repositories\EloquentRepository;
use App\Radio;
use App\Services\Search;

class EloquentRadioRepository extends EloquentRepository implements RadioRepository
{
    public $model;

    public function __construct(Search $search, Radio $model)
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

        if (!empty($data['read']) and isset($data['read']['id'])) {
            $item->read()->associate($data['read']['id']);
        }

        if (!empty($data['rewaya']) and isset($data['rewaya']['id'])) {
            $item->rewaya()->associate($data['rewaya']['id']);
        }

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

        

        if (!empty($data['read']) and isset($data['read']['id'])) {
            $item->read()->associate($data['read']['id']);
        } else {
            $item->read()->dissociate();
        }

        if (!empty($data['rewaya']) and isset($data['rewaya']['id'])) {
            $item->rewaya()->associate($data['rewaya']['id']);
        } else {
            $item->rewaya()->dissociate();
        }

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


    public function getFavs($keys)
    {
        return $radio = $this->model->whereIn('id', $keys)->where('status', 1)->get()->toArray();
    }
}
