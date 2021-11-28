<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PageRequest;
use App\Repositories\Page\PageRepository;
use App\Page;
use Illuminate\Http\Request;
use Cviebrock\EloquentSluggable\Services\SlugService;
use DB;

class PageController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(PageRepository $page)
    {
        $this->page = $page;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $trashed = request('trashed');
        $pages = $this->page->model;
        if ($trashed) {
            $pages = $pages->onlyTrashed();
        }
        $pages = $pages->paginate(24);
        return compact('pages');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $languages = [];
        return compact('languages');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PageRequest $request)
    {
        $input = $request->all();
        $input['slug'] = SlugService::createSlug(Page::class, 'slug', $input['name']);

        $page = $this->page->create($input);
        return compact('page');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $page = $this->page->model->findOrFail($id);
        $languages = DB::table('translator_languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $title = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'page-title')->where('item', $id)->first();
            if ($title) {
                $arr['title'] = $title->text;
            } else {
                $arr['title'] = '';
            }

            $description = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'page-description')->where('item', $id)->first();
            if ($description) {
                $arr['description'] = $description->text;
            } else {
                $arr['description'] = '';
            }

            $keywords = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'page-keywords')->where('item',  $id)->first();
            if ($keywords) {
                $arr['keywords'] = $keywords->text;
            } else {
                $arr['keywords'] = '';
            }

            $content = DB::table('translator_translations')->where('locale', $language->locale)->where('group', 'page-content')->where('item',  $id)->first();
            if ($content) {
                $arr['content'] = $content->text;
            } else {
                $arr['content'] = '';
            }

            $translations[$language->locale] = $arr;
        }

        return compact('page', 'translations');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PageRequest $request, $id)
    {
        $page = $this->page->model->findOrFail($id);
        $input = $request->all();
        if ($input['slug'] !== $page->slug) {
            if (is_null($input['slug'])) {
                $input['slug'] = SlugService::createSlug(Page::class, 'slug', $input['name']);
            } else {
                $input['slug'] = SlugService::createSlug(Page::class, 'slug', $input['slug']);
            }
        }

        $result = $this->page->update($id, $input);
        return compact('page');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->page->destroy($id, request('forced'));
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
        $result = $this->page->model->withTrashed()->find($id)->restore();
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
        $page = $this->page->changeStatus($id, $status);
        $status = $page->status;
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
            $title = DB::table('translator_translations')->where('locale', $key)->where('group', 'page-title')->where('item',  $id)->first();
            if ($title) {
                DB::table('translator_translations')->where('id', $title->id)->update(array('text' => $translation['title']));
            } elseif ($translation['title']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'page-title', 'item' =>  $id, 'text' => $translation['title']]);
            }

            $description = DB::table('translator_translations')->where('locale', $key)->where('group', 'page-description')->where('item',  $id)->first();
            if ($description) {
                DB::table('translator_translations')->where('id', $description->id)->update(array('text' => $translation['description']));
            } elseif ($translation['description']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'page-description', 'item' =>  $id, 'text' => $translation['description']]);
            }

            $keywords = DB::table('translator_translations')->where('locale', $key)->where('group', 'page-keywords')->where('item',  $id)->first();
            if ($keywords) {
                DB::table('translator_translations')->where('id', $keywords->id)->update(array('text' => $translation['keywords']));
            } elseif ($translation['keywords']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'page-keywords', 'item' =>   $id, 'text' => $translation['keywords']]);
            }

            $content = DB::table('translator_translations')->where('locale', $key)->where('group', 'page-content')->where('item',  $id)->first();
            if ($content) {
                DB::table('translator_translations')->where('id', $content->id)->update(array('text' => $translation['content']));
            } elseif ($translation['content']) {
                DB::table('translator_translations')->insert(['locale' => $key, 'group' => 'page-content', 'item' => $id, 'text' => $translation['content']]);
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
                        $result = $this->page->destroy($id, request('forced'));
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'restor':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $result = $this->page->model->withTrashed()->find($id)->restore();
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'activate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $page = $this->page->changeStatus($id, 1);
                        $status = $page->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $page = $this->page->changeStatus($id, 0);
                        $status = $page->status;
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
