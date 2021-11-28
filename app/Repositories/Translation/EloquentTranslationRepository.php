<?php

namespace App\Repositories\Translation;

use App\Repositories\EloquentRepository;
use Waavi\Translation\Models\Translation;
use Waavi\Translation\Models\Language;

class EloquentTranslationRepository extends EloquentRepository implements TranslationRepository
{

    /**
     * The eloquent model instance.
     *
     * @var \App\Models\Incident
     */
    protected $model;

    /**
     * Create a new eloquent incident repository instance.
     *
     * @param \App\Models\Incident $model
     */
    public function __construct(Translation $model, Language $language)
    {
        $this->model = $model;
        $this->language = $language;
    }

    /**
     * Create a new model.
     *
     * @param int   $userId
     * @param array $data
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getGroupsArray()
    {
        $groups = $this->model
            ->select('group')
            ->groupBy('group')
            ->get()
            ->pluck('group')
            ->toArray();
        return $groups;
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
        $languages = $this->language->all();

        foreach ($languages as $language) {
            $exists = $this->model->where('locale', $language->locale)->where('group', $data['group'])->where('item', $data['item'])->exists();
            if (!$exists) {
                $attributes = [
                    'locale' => $language->locale,
                    'group' => $data['group'],
                    'item' => $data['item'],
                    'text' => $data['text']
                ];
                $save = $this->model->create($attributes);
            } else {
                $save = false;
            }
        }
        return $save;
    }

    /**
     * Update a model by id.
     *
     * @param int   $id
     * @param array $data
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function update(array $data)
    {
        foreach ($data as $id => $val) {
            $item = $this->model->find($id);
            if ($item) {
                $save = $item->update([
                    'text' => $val
                ]);
            }
        }

        $result['success'] = $save;

        return $result;
    }
    /**
     * Update a model by id.
     *
     * @param int   $id
     * @param array $data
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function fixTranslations()
    {
        $languages = $this->language->whereNotIn('locale', [config('app.locale')])->get();
        $engs = $this->model->where('locale', config('app.locale'))->get();

        foreach ($languages as $language) {
            //delete translations in this locale that dont existe any more in english
            $translations = $this->model->where('locale', $language->locale)->get();
            foreach ($translations as $translation) {
                $exist = $this->model->where('locale', config('app.locale'))->where('group', $translation->group)->where('item', $translation->item)->first();
                if (is_null($exist)) {
                    $this->model->where('id', $translation->id)->delete();
                }
            }
            //create translations in this local that existe in english
            foreach ($engs as $eng) {
                $exist = $this->model->where('locale', $language->locale)->where('group', $eng->group)->where('item', $eng->item)->first();
                if ($exist == null) {
                    $attributes = [
                        'locale' => $language->locale,
                        'group' => $eng->group,
                        'item' => $eng->item,
                        'text' => $eng->text
                    ];
                    $save = $this->model->create($attributes);
                }
            }
        }
        return true;
    }
}
