<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppRequest;
use App\Repositories\App\AppRepository;
use Illuminate\Http\Request;
use DB;

class AppController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(AppRepository $app)
    {
        $this->app = $app;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $columns = ['statu' => 'status', 'type' => 'type'];
        $trashed = request('trashed');

        $apps = $this->app->model
            ->sortable(['order_num' => 'asc'])
            ->filterColumns($columns);
        if ($trashed) {
            $apps = $apps->onlyTrashed();
        }
        $apps = $apps->paginate(24);

        return compact('apps');
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AppRequest $request)
    {
        $input = $request->all();
        $app = $this->app->create($input);
        return compact('app');
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $app = $this->app->model->findOrFail($id);

        $image = $app->images()->first();
        if ($image) {
            $app->old_image = ['file_name' => $image->id, 'file_path' => $image->getImage('apps')];
        }

        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $title = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'app-title')->where('item', $id)->first();
            $description  = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'app-description')->where('item', $id)->first();
            if ($title) {
                $arr['title'] = $title->text;
            } else {
                $arr['title'] = '';
            }
            if ($description ) {
                $arr['description'] = $description->text;
            } else {
                $arr['description'] = '';
            }

            $translations[$language->locale] = $arr;
        }        

        return compact('app', 'translations');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AppRequest $request, $id)
    {
        $input = $request->all();
        $app = $this->app->update($id, $input);
        return compact('app');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->app->destroy($id, request('forced'));
        return compact('result');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restore($id)
    {
        $result = $this->app->model->withTrashed()->find($id)->restore();
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
        $app = $this->app->changeStatus($id, $status);
        $status = $app->status;
        return compact('status');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function translations(Request $request, $id)
    {
        $input = $request->all();
        foreach ($input as $key => $translation) {
            $title = DB::table('translator_translations')->where('locale', $key)->where('group', 'app-title')->where('item',  $id)->first();
            if ($title) {
                DB::table('translator_translations')->where('id', $title->id)->update(array('text' => $translation['title']));
            } elseif ($translation['title']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'app-title', 'item' =>  $id, 'text' => $translation['title']]);
            }
            $description = DB::table('translator_translations')->where('locale', $key)->where('group', 'app-description')->where('item',  $id)->first();
            if ($description) {
                DB::table('translator_translations')->where('id', $description->id)->update(array('text' => $translation['description']));
            } elseif ($translation['description']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'app-description', 'item' =>  $id, 'text' => $translation['description']]);
            }
        }
        $result = true;
        flushTrans();
        return compact('result');
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
                        $result = $this->app->destroy($id, request('forced'));
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'restor':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $result = $this->app->model->withTrashed()->find($id)->restore();
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'activate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $app = $this->app->changeStatus($id, 1);
                        $status = $app->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $app = $this->app->changeStatus($id, 0);
                        $status = $app->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            default:
                break;
        }

        return compact('results');
    }
}
