<?php

namespace App\Repositories\Page;

use App\Repositories\EloquentRepository;
use App\Page;

class EloquentPageRepository extends EloquentRepository implements PageRepository {

    public $model;

    public function __construct(Page $model) {
        $this->model = $model;
    }

    public function create(array $data) {
        $item = new $this->model;

        $item->name = $data['name'];
        $item->title = $data['title'];
        $item->slug = $data['slug'];
        $item->content = $data['content'];
        $item->description = $data['description'];
        $item->status = $data['status'];

        $item->save();

        return $item;
    }

    public function update($id, array $data) {
        $item = $this->model->findOrFail($id);

        $item->name = $data['name'];
        $item->title = $data['title'];
        $item->slug = $data['slug'];
        $item->content = $data['content'];
        $item->description = $data['description'];
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
