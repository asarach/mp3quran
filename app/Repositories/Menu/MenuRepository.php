<?php

namespace Mp3quran\Repositories\Menu;
    
interface MenuRepository
{

    /**
     * Create a model.
     *
     * @param array   $data
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function create($data);

    /**
     * Update a model.
     *
     * @param int   $menuId
     * @param array   $data
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function update($menuId, $data);

    /**
     * Destroy a model.
     *
     * @param int   $menuId
     * @param boolean   $forced
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function destroy($menuId, $forced = false);
}