<?php

namespace App\Repositories\User;

use App\Repositories\EloquentRepository;
use App\User;
use Hash;
use Illuminate\Pagination\LengthAwarePaginator;
use Auth;

class EloquentUserRepository extends EloquentRepository implements UserRepository
{
    public $model;

    public function __construct(User $model)
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

        $item->name = $data['name'];
        $item->email = $data['email'];
        $item->avatar = $data['avatar'];
        $item->role = 'user';
        $item->password = Hash::make($data['password']);

        $result = $item->save();

        return $result;
    }

    public function update($id, array $data)
    {
        $item = $this->model->findOrFail($id);

        $item->name = $data['name'];
        $item->email = $data['email'];
        if (isset($data['hidden_sources'])) {
            $item->hidden_sources()->sync($data['hidden_sources']);
        }
        if (isset($data['favorite_soar'])) {
            $item->favorite_soar()->sync($data['favorite_soar']);
        }

        return $item->save();
    }

    public function destroy($id)
    {
        $item = $this->model->findOrFail($id);

        return $item->delete();
    }

    /**
     * Update a model by id.
     *
     * @param int   $id
     * @param array $data
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function changeRole($id, $role)
    {
        $item = $this->model->findOrFail($id);
        $item->role = $role;
        $result = $item->save();
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
    public function uploadFavorites($id, $favorites)
    {
        $item = $this->model->findOrFail($id);
        $item->favorites = $favorites;
        $result = $item->save();
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
    public function changePassword($item, $password)
    {
        $item->password = Hash::make($password);
        $result = $item->save();
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
    public function changeAvatar($item, $avatar)
    {
        $item->avatar = $avatar;
        $result = $item->save();
        return $result;
    }

    public function getUserSearches()
    {
        $user = Auth::user();

        $searches = json_decode($user->searches);

        if (!is_array($searches)) {
            $searches = [];
        }

        $searches = $this->paginate(array_reverse($searches));
        return $searches;
    }
    public function moveUserSearches($up, $query)
    {
        $user = Auth::user();
        $searches = json_decode($user->searches);
        $key = array_search($query, $searches);

        if ($up == 'up' and isset($searches[$key - 1])) {
            $key2 = $key - 1;
            $a = $searches[$key];
            $b = $searches[$key2];
            if (isset($a) and isset($b)) {
                $searches[$key] = $b;
                $searches[$key2] = $a;
            }
        } elseif ($up == 'down' and isset($searches[$key + 1])) {
            $key2 = $key + 1;
            $a = $searches[$key];
            $b = $searches[$key2];

            if (isset($a) and isset($b)) {
                $searches[$key] = $b;
                $searches[$key2] = $a;
            }
        }
        $user->searches = json_encode(array_values($searches));
        $user->save();

        $searches = $this->paginate(array_reverse($searches));
        return $searches;
    }

    public function paginate($searches)
    {
        $currentPage = LengthAwarePaginator::resolveCurrentPage();
        $perPage = 30;

        $currentItems = array_slice($searches, $perPage * ($currentPage - 1), $perPage);

        $searches = new LengthAwarePaginator($currentItems, count($searches), $perPage, $currentPage);
        return $searches;
    }
}
