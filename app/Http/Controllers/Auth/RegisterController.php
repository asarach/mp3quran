<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Laravel\Socialite\Facades\Socialite;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function handleProviderCallback($provider)
    {
        if ($provider === 'twitter') {
            try {
                $user = Socialite::driver($provider)->user();
                $user->user['name'] = $user->nickname;
                $user->user['first_name'] = $user->name;
                $user->user['last_name'] = '';
                $user->user['email'] = $user->email;
            } catch (Exception $e) {
                abort(400);
            }
        }
        if ($provider === 'faceradio') {
            try {
                $user = Socialite::driver($provider)->fields([
                            'name',
                            'first_name',
                            'last_name',
                            'email'
                        ])->user();
            } catch (Exception $e) {
                abort(400);
            }
        }
        if ($provider === 'google') {
            try {
                $user = Socialite::driver($provider)->user();
            } catch (Exception $e) {
                abort(400, $e->getMessage());
            }
        }
        if (is_null($user->email)) {
            return Redirect::to('/account/login');
        }

        $authUser = $this->findOrCreateUser($user);

        Auth::login($authUser, true);

        return redirect('/');
    }

    private function findOrCreateUser($socialUser)
    {
        if ($authUser = User::where('email', $socialUser->email)->first()) {
            return $authUser;
        }
        try {
            $user = User::create([
                        'name' => $socialUser->user['name'],
                        'email' => $socialUser->user['email'],
            ]);
        } catch (ErrorException $ex) {
            return redirect()->back();
        }

        return $user;
    }
}
