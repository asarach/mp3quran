<?php

namespace App\Repositories\Link;

interface LinkRepository {

    /**
     * Create a new model.
     *
     * @param int   $userId
     * @param array $data
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function create(array $data);

    /**
     * Update a model.
     *
     * @param int   $userId
     * @param array $data
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function update($id, array $data);


        /**
         * destroy a model.
         *
         * @param int   $userId
         *
         * @return \Illuminate\Database\Eloquent\Model
         */
         public function destroy($id);
}
