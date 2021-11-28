<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Heroicpixels\Filterable\FilterableTrait;
use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, FilterableTrait;

    protected $fillable = ['name', 'email', 'password',];

    protected $hidden = ['password', 'remember_token',];

    /*** Other functions*/

    public function hasRole($roles)
    {
        if (in_array($this->role, $roles)) {
            return true;
        } else {
            return false;
        }
    }
    public function getAvatar()
    {
        if ($this->avatar) {
            return asset('/uploads/avatars/md/' . $this->avatar);
        } else {
            return 'https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg';
        }
    }
}
