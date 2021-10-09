<?php

namespace Mp3quran\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Mp3quran\Http\Controllers\Controller;
use Mp3quran\Http\Requests\UserRequest;
use Mp3quran\Repositories\User\UserRepository;
use Mp3quran\Services\Upload;

class UserController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Upload $upload, UserRepository $user)
    {
        $this->user = $user;
        $this->upload = $upload;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $users = $this->user->model->paginate(20);
        $roles = array_keys(config('mp3quran.user_roles'));
        return compact('users', 'roles');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = array_keys(config('mp3quran.user_roles'));
        return compact('roles');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = $this->user->model->findOrFail($id);
        
        return compact('user');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        $input = $request->all();
        $user = $this->user->create($input);
        return compact('user');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, $id)
    {
        $input = $request->all();
        if (isset($input['password'])) {
            $input['password'] = $input['password'];
            unset($input['password_confirmation']);
        } else {
            unset($input['password']);
            unset($input['password_confirmation']);
        }
        $user = $this->user->update($id, $input);
        return compact('user');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->user->destroy($id);
        return compact('result');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function changeRole($id, $role)
    {
        $user = $this->user->changeRole($id, $role);
        $role = $user->role;
        return compact('role');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function uploadAvatar(Request $request)
    {
        $input = $request->all();
        $data['file'] = $request->file('file');
        $file = $this->upload->image($data, 'avatars');
        return response()->json(array('success' => true, 'avatar' => $file));
    }
}
