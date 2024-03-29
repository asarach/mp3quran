<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Setting\SettingRepository;
use Cache;

class SettingController extends Controller
{
    public function __construct(SettingRepository $setting)
    {
        $this->setting = $setting;
        $this->middleware('admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = $this->setting->model->get();
        $settings = [];
        foreach ($items as $item) {
            $settings[$item->key] = $item->value;
        }
        return compact('settings');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $input = $request->all();

        $result = $this->setting->update($input);

        $items = $this->setting->model->get();
        $settings = [];

        foreach ($items as $item) {
            $settings[$item->key] = $item->value;
        }
        Cache::forget('settings');

        return compact('settings');
    }
}
