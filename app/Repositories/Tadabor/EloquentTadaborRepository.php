<?php

namespace App\Repositories\Tadabor;

use App\Repositories\EloquentRepository;
use App\Tadabor;
use App\Services\Search;

class EloquentTadaborRepository extends EloquentRepository implements TadaborRepository
{
    public $model;

    public function __construct(Search $search, Tadabor $model)
    {
        $this->model = $model;
        $this->search = $search;
    }

    public function create(array $data)
    {
        $item = new $this->model;

        $item->title = $data['title'];
        $item->audio_url = $data['audio_url'];
        $item->image_url = $data['image_url'];
        $item->text = e($data['text']);
        $item->status = $data['status'];

        if (!empty($data['sora']) and isset($data['sora']['id'])) {
            $item->sora()->associate($data['sora']['id']);
        }

        if (!empty($data['rewaya']) and isset($data['rewaya']['id'])) {
            $item->rewaya()->associate($data['rewaya']['id']);
        }

        if (!empty($data['reciter']) and isset($data['reciter']['id'])) {
            $item->reciter()->associate($data['reciter']['id']);
        }

        $result = $item->save();

        return $result;
    }

    public function update($id, array $data)
    {
        $item = $this->model->findOrFail($id);

        $item->title = $data['title'];
        $item->audio_url = $data['audio_url'];
        $item->image_url = $data['image_url'];
        $item->text = e($data['text']);
        $item->status = $data['status'];

        

        if (!empty($data['sora']) and isset($data['sora']['id'])) {
            $item->sora()->associate($data['sora']['id']);
        } else {
            $item->sora()->dissociate();
        }

        if (!empty($data['rewaya']) and isset($data['rewaya']['id'])) {
            $item->rewaya()->associate($data['rewaya']['id']);
        } else {
            $item->rewaya()->dissociate();
        }

        if (!empty($data['reciter']) and isset($data['reciter']['id'])) {
            $item->reciter()->associate($data['reciter']['id']);
        } else {
            $item->reciter()->dissociate();
        }

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


    public function getFavs($keys)
    {
        return $tadabor = $this->model->whereIn('id', $keys)->where('status', 1)->get()->toArray();
    }
}
