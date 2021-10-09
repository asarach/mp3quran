<?php

namespace Mp3quran\Repositories\Media;

use Mp3quran\Repositories\EloquentRepository;
use Mp3quran\Media;
use File;

class EloquentMediaRepository extends EloquentRepository implements MediaRepository
{

    /**
     * The eloquent model instance.
     *
     * @var \Mp3quran\Models\Incident
     */
    protected $model;

    /**
     * Create a new eloquent incident repository instance.
     *
     * @param \Mp3quran\Models\Incident $model
     */
    public function __construct(Media $model)
    {
        $this->model = $model;
    }

    /**
     * Create a new model.
     *
     * @param int   $userId
     * @param array $data
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function create(array $data)
    {
        $item = new $this->model;

        $item->uri = $data['file'];
        if (isset($data['title'])) {
            $item->title = $data['title'];
        }
        $item->type = $data['type'];
        $item->status = 1;

        $item->save();

        return $item;
    }

    /**
     * Update a model by id.
     *
     * @param int   $id
     * @param array $data
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function update($id, array $data)
    {
        $item = $this->model->findOrFail($id);

        $item->uri = $data['file'];
        if (isset($data['title'])) {
            $item->title = $data['title'];
        }
        $item->type = $data['type'];
        $item->status = 1;

        $item->save();

        return $item;
    }

    public function destroy($id)
    {
        $item = $this->model->findOrFail($id);
        File::delete(public_path('uploads/slides/lg/' . $item->file));
        File::delete(public_path('uploads/slides/md/' . $item->file));
        File::delete(public_path('uploads/slides/sm/' . $item->file));
        File::delete(public_path('uploads/slides/xs/' . $item->file));

        return $item->delete();
    }
}
