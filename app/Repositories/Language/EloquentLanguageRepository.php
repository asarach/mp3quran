<?php

namespace App\Repositories\Language;

use App\Repositories\EloquentRepository;
use Waavi\Translation\Models\Translation;
use Waavi\Translation\Models\Language;

class EloquentLanguageRepository extends EloquentRepository implements LanguageRepository
{

    /**
     * The eloquent model instance.
     *
     * @var \App\Models\Incident
     */
    public $model;

    /**
     * Create a new eloquent incident repository instance.
     *
     * @param \App\Models\Incident $model
     */
    public function __construct(Language $model, Translation $translation)
    {
        $this->model = $model;
        $this->translation = $translation;
    }

    /**
     * Create a new model.
     * @param array $data
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function create(array $data)
    {

        $item = new $this->model;

        $item->name = $data['name'];
        $item->locale = $data['locale'];
        $item->script = $data['script'];
        $item->native = $data['native'];
        $item->regional = $data['regional'];
        $item->direction = $data['direction'];
        $item->display = $data['display'];
        $item->name_english  = $data['name_english'];
        $item->status  = $data['status'];

        $save = $item->save();

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
        $item->name = $data['name'];
        $item->locale = $data['locale'];
        $item->script = $data['script'];
        $item->native = $data['native'];
        $item->regional = $data['regional'];
        $item->direction = $data['direction'];
        $item->display = $data['display'];
        $item->name_english  = $data['name_english'];
        $item->status  = $data['status'];
        $item->save();

        return $item;
    }

    /**
     * Delete a model by id.
     *
     * @param int   $id
     *
     * @return booleen
     */
    public function destroy($id)
    {
        $item = $this->model->findOrFail($id);
        $this->translation->where('locale', $item->locale)->delete();
        return $item->forceDelete();
    }

    /**
     * Delete a model by id.
     *
     * @param int   $id
     *
     * @return booleen
     */
    public function getSelectedLanguge($locale)
    {
        $item = $this->model->where('locale', $locale)->first();
        $language = ['value' => $item->locale, 'text' => $item->name];
        return $language;
    }
}
