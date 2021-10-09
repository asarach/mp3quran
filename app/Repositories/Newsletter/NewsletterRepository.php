<?php

namespace Mp3quran\Repositories\Newsletter;

interface NewsletterRepository
{

    /**
     * Create a new model.
     *
     * @param int   $userId
     * @param array $data
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function create(array $data, $type);

    /**
     * Update a model.
     *
     * @param int   $userId
     * @param array $data
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function update($id, array $data, $type);


    /**
     * destroy a model.
     *
     * @param int   $userId
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function destroy($id, $forced, $type);
}

