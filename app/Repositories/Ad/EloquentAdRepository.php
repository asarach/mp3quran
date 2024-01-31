<?php
namespace App\Repositories\Ad;

use App\Repositories\EloquentRepository;
use App\Ad;

class EloquentAdRepository extends EloquentRepository implements AdRepository
{
    public $model;

    public function __construct(Ad $model)
    {
        $this->model = $model;
    }

    public function create(array $data)
    {
        $item = new $this->model;

        $item->name = $data['name'];
        $item->order_num = $data['order_num'];
        $item->url = $data['url'];
        $item->place = $data['place'];
        $item->start_date = $data['start_date'];
        $item->end_date = $data['end_date'];
        $item->status = $data['status'];
        $item->text = $data['text'];
        $item->locale = $data['locale'];

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
        $item->order_num = $data['order_num'];
        $item->url = $data['url'];
        $item->place = $data['place'];
        $item->start_date = $data['start_date'];
        $item->end_date = $data['end_date'];
        $item->status = $data['status'];
        $item->text = $data['text'];
        $item->locale = $data['locale'];

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
