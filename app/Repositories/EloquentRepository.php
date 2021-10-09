<?php

/*
 * This file is part of Cachet.
 *
 * (c) Cachet HQ <support@cachethq.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Mp3quran\Repositories;

abstract class EloquentRepository {

    
    public function list($fields) {
        return  $this->model->select($fields)->get();
    }
    
    public function changeStatus($id, $satus) {
        
        $item = $this->model->findOrFail($id);
        $item->status = $satus;
        $result = $item->save();
        return $item;
    }

    public function changeViewed($id, $viewed) {
        $item = $this->model->findOrFail($id);
        $item->viewed = $viewed;
        $result = $item->save();
        return $item;
    }
  
    public function duplicate($id) {
        $item = $this->model->findOrFail($id);
        $new = $item->replicate();
        $new->save();
        return $new;
    }

    public function search($data, $index)
    {
      if (isset($data['s'])) {
          $ids = $this->search->search($data['s'], $index);
      } else {
          $ids = [];
      }
      $query = $data['s'];

      $items = $this->model->whereIn('id', $ids)
                              ->sortable(['date' => 'desc'])
                              ->paginate(25);

        return $items;
    }

}
