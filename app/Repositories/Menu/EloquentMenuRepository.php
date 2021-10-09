<?php

namespace  Mp3quran\Repositories\Menu;

use Mp3quran\Repositories\EloquentRepository;
use Mp3quran\Menu;

class EloquentMenuRepository extends EloquentRepository implements MenuRepository
{
    public $model;
    
    
    /**
     * Create a new Repository instance.
     *
     * @return void
     */
    public function __construct(Menu $menu)
    {
        $this->model = $menu;
        
    }
    /**
     * Create a model.
     *
     * @param array   $data
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function create($data)
    {
        $item = new $this->model;

        $item->title = $data["title"];
        $item->slug = $data["slug"];
        $item->icon = $data["icon"];
        $item->order_num = $data['order_num'];
        $item->place = $data['place'];
        $item->languages = $data["languages"];
        $item->status = $data["status"];
        
        
        $result = $item->save();
        
        if ($result) {
            return $item;
        } else {
            return $result;
        }
    }
    
    /**
     * Update a model.
     *
     * @param int   $menuId
     * @param array   $data
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function update($menuId, $data)
    {
        $item = $this->model->findOrFail($menuId);

        $item->title = $data["title"];
        $item->slug = $data["slug"];
        $item->icon = $data["icon"];
        $item->order_num = $data['order_num'];
        $item->place = $data['place'];
        $item->languages = $data["languages"];
        $item->status = $data["status"];
        
        
        $result = $item->save();

        
        if ($result) {
            return $item;
        } else {
            return $result;
        }
    }
    
    /**
     * Destroy a model.
     *
     * @param int   $menuId
     * @param boolean   $forced
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function destroy($menuId, $forced = false)
    {
        $item = $this->model->withTrashed()->findOrFail($menuId);
        if ($forced) {
            return $item->forceDelete();
        } else {
            return $item->delete();
        }
    }
    
    
}