<?php

namespace App\Repositories\Read;

use App\Repositories\EloquentRepository;
use App\Read;
use App\Sora;
use Auth;
use App\Services\Search;

class EloquentReadRepository extends EloquentRepository implements ReadRepository
{
    public $model;

    public function __construct(Search $search, Read $model, Sora $sora)
    {
        $this->model = $model;
        $this->search = $search;
        $this->sora = $sora;
    }

    public function create(array $data)
    {
        $item = new $this->model;

        $item->slug = $data['slug'];
        $item->url = $data['url'];
        $item->torrent = $data['torrent'];
        $item->itunes = $data['itunes'];
        $item->video = $data['video'];
        $item->title = $data['title'];
        $item->description = $data['description'];
        $item->status = $data['status'];
        $item->featured = $data['featured'];
        $item->promoted = $data['promoted'];

        if (!empty($data['reciter']) and isset($data['reciter']['id'])) {
            $item->reciter()->associate($data['reciter']['id']);
        }
        if (!empty($data['rewaya']) and isset($data['rewaya']['id'])) {
            $item->rewaya()->associate($data['rewaya']['id']);
        }
        if (!empty($data['special_rewaya']) and isset($data['special_rewaya']['id'])) {
            $item->special_rewaya()->associate($data['special_rewaya']['id']);
        }
        if (!empty($data['mushaf']) and isset($data['mushaf']['id'])) {
            $item->mushaf()->associate($data['mushaf']['id']);
        }
        if (!empty($data['server']) and isset($data['server']['id'])) {
            $item->server()->associate($data['server']['id']);
        }

        $result = $item->save();
        $item->soar()->sync($data['soar']);


        return $result;
    }

    public function update($id, array $data)
    {
        $item = $this->model->findOrFail($id);

        $item->slug = $data['slug'];
        $item->url = $data['url'];
        $item->torrent = $data['torrent'];
        $item->itunes = $data['itunes'];
        $item->video = $data['video'];
        $item->title = $data['title'];
        $item->description = $data['description'];
        $item->status = $data['status'];
        $item->featured = $data['featured'];
        $item->promoted = $data['promoted'];

        if (!empty($data['reciter']) and isset($data['reciter']['id'])) {
            $item->reciter()->associate($data['reciter']['id']);
        } else {
            $item->reciter()->dissociate();
        }

        if (!empty($data['rewaya']) and isset($data['rewaya']['id'])) {
            $item->rewaya()->associate($data['rewaya']['id']);
        } else {
            $item->rewaya()->dissociate();
        }
        if (!empty($data['special_rewaya']) and isset($data['special_rewaya']['id'])) {
            $item->special_rewaya()->associate($data['special_rewaya']['id']);
        } else {
            $item->special_rewaya()->dissociate();
        }
        if (!empty($data['server']) and isset($data['server']['id'])) {
            $item->server()->associate($data['server']['id']);
        } else {
            $item->server()->dissociate();
        }

        if (!empty($data['mushaf']) and isset($data['mushaf']['id'])) {
            $item->mushaf()->associate($data['mushaf']['id']);
        } else {
            $item->mushaf()->dissociate();
        }

        $result = $item->save();

        $item->soar()->sync($data['soar']);

        return $result;
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




    public function searchMushafs($data)
    {
        if (isset($data['q'])) {
            $ids = $this->search->search($data['q'], 'mushafs_index');
        } else {
            $ids = [];
        }
        $query = $data['q'];

        $mushafs = $this->model->whereIn('id', $ids)
            ->sortable(['date' => 'desc'])
            ->paginate(24);

        return $mushafs;
    }



    public function getRecommendations($nbr)
    {
        $recommendationsA = $this->model
            ->where('status', 1)
            ->whereNull('special_rewaya_id')
            ->inRandomOrder()
            ->take($nbr)
            ->get();

        $recommendations = [];
        foreach ($recommendationsA as $recommendationA) {
            $sora = $recommendationA
                ->soar()
                ->inRandomOrder()
                ->withPivot(['duration', 'filename'])
                ->first();

            if ($sora and $recommendationA->reciter) {
                $r_item = [];
                $r_item['id'] = $sora->getNum() . '-' . $recommendationA->id;
                $r_item['sora_id'] = $sora->id;
                $r_item['sora_num'] = $sora->getNum();
                $r_item['sora_name'] = $sora->getName();
                $r_item['sora_duration'] = $sora->pivot->duration;
                $r_item['sora_audio'] =  $recommendationA->getAudioUrl($sora->id);
                $r_item['read_id'] = $recommendationA->id;
                $r_item['reciter_name'] = $recommendationA->reciter->name;
                $r_item['read_slug'] = $recommendationA->slug;
                $r_item['rewaya_name'] = $recommendationA->rewaya->name;

                $recommendations[] = $r_item;
            }
        }


        return $recommendations;
    }

    public function getHomeSoar($user_preferences)
    {
        $recommendations = $this->getTimelineMushafs(6, $user_preferences)['mushafs'];

        $soar = $this->sora
            ->where('status', 1)
            ->sortable(['date' => 'desc']);

        if (!empty($user_preferences['favorite_soar'])) {
            $soar = $soar->whereIn('id', $user_preferences['favorite_soar']);
        }

        $soar = $soar->get();

        foreach ($soar as $sora) {
            $sora->mushafs = $this->homeSoraMushafs($sora, $user_preferences);
        }

        return compact('recommendations', 'soar');
    }

    public function homeSoraMushafs($sora, $user_preferences)
    {
        $mushafs = $sora->mushafs()->where('status', 1)->sortable(['date' => 'desc']);

        if (!empty($user_preferences['hidden_sources'])) {
            $mushafs = $mushafs->whereNotIn('source_id', $user_preferences['hidden_sources']);
        }

        return $mushafs->paginate(7);
    }

    public function getUserRadiomarks()
    {
        $user = Auth::user();

        if ($user) {
            $ids = json_decode($user->favorites);
        } else {
            $ids = json_decode($_COOKIE['favoriteMushafs']);
        }
        if (!is_array($ids)) {
            $ids = [];
        }

        $mushafs =  $this->model
            ->where('status', 1)
            ->whereNull('special_rewaya_id')
            ->whereIn('id', $ids)
            ->sortable(['date' => 'desc'])
            ->paginate(24);

        return $mushafs;
    }

    public function getFavs($keys)
    {
        return $this->model->whereNull('special_rewaya_id')->whereIn('id', $keys)->where('status', 1)->get()->toArray();
    }

    public function getFavsSoar($keys)
    {
        $faves = [];

        foreach ($keys as $key) {
            try {
                $ids = explode('-', $key);
                $read = $this->model->where('status', 1)->find(intval($ids[1]));
                $sora = $read->soar()->find(intval($ids[0]));

                $r_item = [];
                $r_item['id'] = $sora->getNum() . '-' . $read->id;
                $r_item['sora_id'] = $sora->id;
                $r_item['sora_num'] = $sora->getNum();
                $r_item['sora_name'] = $sora->getName();
                $r_item['sora_duration'] = $sora->pivot->duration;
                $r_item['sora_audio'] =  $read->getAudioUrl($sora->id);
                $r_item['read_id'] = $read->id;
                $r_item['read_slug'] =  $read->slug;
                $r_item['reciter_name'] = $read->getReciter();
                $r_item['show'] = 'show';
                $r_item['rewaya_name'] = $read->getRewaya();
                $r_item['share_url'] = route('reciter.show', ['slug' => $read->slug]);
                $r_item['share_description'] = $read->getLocaleShareDescription($r_item['sora_name']);
                $r_item['share_title'] = $read->getLocaleShareTitle($r_item['sora_name']);

                $faves[] = $r_item;
            } catch (\Throwable $th) {
            }
        }

        return $faves;
    }
}
