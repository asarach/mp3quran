<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Language\LanguageRepository;
use App\Http\Requests\LanguageRequest;

class LanguageController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(LanguageRepository $language)
    {
        $this->language = $language;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $avalaible_locales = config('laravellocalization.avalaibleLocales');
        $languages = $this->language->model->orderBy('id', 'asc')->paginate(25);
        return compact('languages', 'avalaible_locales');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LanguageRequest $request)
    {
        $input = $request->all();
        $language = $this->language->create($input);
        return compact('language');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Language  $language
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $language = $this->language->model->findOrFail($id);
        return compact('language');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(LanguageRequest $request, $id)
    {
        $input = $request->all();
        $language = $this->language->update($id, $input);
        return compact('language');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->language->destroy($id);
        return compact('result');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function changeStatus($id, $status)
    {
        $language = $this->language->changeStatus($id, $status);
        $status = $language->status;
        return compact('status');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function actions(Request $request)
    {
        $input = $request->all();
        $results = [];
        switch ($input['action']) {
            case 'delete':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $result= $this->language->destroy($id);
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'activate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $language = $this->language->changeStatus($id, 1);
                        $status = $language->status;
                        $results[] = ['id'=> $id, 'status'=> $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $language = $this->language->changeStatus($id, 0);
                        $status = $language->status;
                        $results[] = ['id'=> $id, 'status'=> $status];
                    }
                }
                break;
            default:
                break;
        }

        return compact('results');
    }
}
