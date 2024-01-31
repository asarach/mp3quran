<?php

namespace App\Repositories\App;

use App\Repositories\EloquentRepository;
use App\App;
use App\Sora;

class EloquentAppRepository extends EloquentRepository implements AppRepository
{
    public $model;

    public function __construct(App $model, Sora $sora)
    {
        $this->model = $model;
        $this->sora = $sora;
    }

    public function create(array $data)
    {
        $item = new $this->model;

        $item->title = $data['title'];
        $item->order_num = $data['order_num'];
        $item->android = $data['android'];
        $item->apple = $data['apple'];
        $item->huawei = $data['huawei'];
        $item->share_link = $data['share_link'];
        $item->url = $data['url'];
        $item->type = $data['type'];
        $item->status = $data['status'];

        $result = $item->save();
        if (!empty($data['image'])) {
            $item->images()->attach($data['image']);
        }

        return $result;
    }

    public function update($id, array $data)
    {
        $item = $this->model->findOrFail($id);

        $item->title = $data['title'];
        $item->order_num = $data['order_num'];
        $item->android = $data['android'];
        $item->apple = $data['apple'];
        $item->huawei = $data['huawei'];
        $item->share_link = $data['share_link'];
        $item->url = $data['url'];
        $item->type = $data['type'];
        $item->status = $data['status'];

        $item->save();

        if (!empty($data['image'])) {
            $item->images()->detach();
            $item->images()->attach($data['image']);
        }

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
