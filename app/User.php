<?php

namespace App;

use App\Models\Tbookmark;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Heroicpixels\Filterable\FilterableTrait;
use Illuminate\Database\Eloquent\Relations\HasMany;
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
    /**
     * Get all of the tbookmarks for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function tbookmarks()
    {
        return $this->hasMany(Tbookmark::class);
    }
}
