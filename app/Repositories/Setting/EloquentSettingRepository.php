<?php

namespace App\Repositories\Setting;

use App\Repositories\EloquentRepository;
use App\Setting;

class EloquentSettingRepository extends EloquentRepository implements SettingRepository
{
    public $model;

    public function __construct(Setting $model)
    {
        $this->model = $model;
    }

    public function create(array $data)
    {
        $item = new $this->model;

        $item->key = $data['key'];
        $item->value = $data['value'];

        $result = $item->save();

        return $result;
    }

    public function update(array $datas)
    {
        foreach ($datas as $key => $val) {
            $item = $this->model->where('key', $key)->first();
            if (!empty($item)) {
                $save = $item->update(['value' => $val]);
            } else {
                $item = new $this->model;
                $item->key = $key;
                $item->value = $val;
                $item->save();
            }
        }
        return true;
    }

    public function destroy($id)
    {
        $item = $this->model->findOrFail($id);
        return $item->delete();
    }
}
