<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests\MenuRequest;
use App\Http\Controllers\Controller;
use App\Repositories\Menu\MenuRepository;
use Waavi\Translation\Repositories\LanguageRepository;

use function GuzzleHttp\json_decode;

class MenuController extends Controller
{
    
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(LanguageRepository $language, MenuRepository $menu)
    {
        $this->menu = $menu;
        $this->language = $language;
    }

    /**
     * Display a listing of the menu.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $columns = ['statu' => 'menus.status'];
        $trashed = request('trashed');

        $menus = $this->menu->model
            ->sortable(['order_num' => 'asc'])
            ->filterColumns($columns);
        if ($trashed) {
            $menus = $menus->onlyTrashed();
        }
        $menus = $menus->paginate(24);

        $languages = $this->language->all();
        $places = ['desktop', 'mobile'];
        

        return compact('menus', 'languages', 'places');
    }

    /**
     * Show the form for creating a new menu.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $menus = $this->menu->list(['id', 'title']);
        return compact('menus');
    }

    /**
     * Store a newly created menu in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MenuRequest $request)
    {
        $input = $request->all();

        $settings = [];
        //remove cache
        $languages = $this->language->all();
        foreach ($languages as $key => $language) {
            if (isset($input['languages'][$language->id]) && $input['languages'][$language->id]) {
                $settings[$language->id] = true;
            } else {
                $settings[$language->id] = false;
            }
        }
        //update settings 
        $input['languages'] = json_encode($settings);

        $menu = $this->menu->create($input);

        return compact('menu');
    }

    /**
     * Show a specified menu.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $menu = $this->menu->model->findOrFail($id);
        return compact('menu');
    }

    /**
     * Show the form for editing the specified menu.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $menu = $this->menu->model->findOrFail($id);
        $menu['languages'] = json_decode($menu->languages, true);
        $languages = $this->language->all();
        $places = ['desktop', 'mobile'];
        
        return compact('menu', 'languages', 'places');
    }

    /**
     * Update the specified menu in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(MenuRequest $request, $id)
    {
        $menu = $this->menu->model->findOrFail($id);
        $input = $request->all();

        
        $settings = [];
        //remove cache
        $languages = $this->language->all();
        foreach ($languages as $key => $language) {
            if (isset($input['languages'][$language->id]) && $input['languages'][$language->id]) {
                $settings[$language->id] = true;
            } else {
                $settings[$language->id] = false;
            }
        }
        //update settings 
        $input['languages'] = json_encode($settings);

        $menu = $this->menu->update($id, $input);
        return compact('menu');
    }

    /**
     * Remove the specified menu from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->menu->destroy($id, request('forced'));
        return compact('result');
    }

    /**
     * Restore the specified menu to storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function restore($id)
    {
        $result = $this->menu->model->withTrashed()->find($id)->restore();
        return compact('result');
    }

    /**
     * Change status of the menu.
     *
     * @param  int $id
     * @param  int $status
     * @return \Illuminate\Http\Response
     */
    public function changeStatus($id, $status)
    {
        $menu = $this->menu->changeStatus($id, $status);
        $status = $menu->status;
        return compact('status');
    }

    /**
     * Change sticky of the menu.
     *
     * @param  int $id
     * @param  int $status
     * @return \Illuminate\Http\Response
     */
    public function changeSticky($id, $status)
    {
        $menu = $this->menu->changeSticky($id, $status);
        $sticky = $menu->sticky;
        return compact('sticky');
    }

    /**
     * Change promote of the menu.
     *
     * @param  int $id
     * @param  int $status
     * @return \Illuminate\Http\Response
     */
    public function changePromote($id, $status)
    {
        $menu = $this->menu->changePromote($id, $status);
        $promoted = $menu->promoted;
        return compact('promoted');
    }

    /**
     * duplicate the specified menu to storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function duplicate($id)
    {
        $menu = $this->menu->duplicate($id);
        return compact('menu');
    }

    /**
     * Restore the specified menu to storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function actions(Request $request)
    {
        $input = $request->all();
        $results = [];
        switch ($input['action']) {
            case 'restor':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $result = $this->menu->model->withTrashed()->find($id)->restore();
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;

            case 'delete':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $result = $this->menu->destroy($id, request('forced'));
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;

            case 'status-active':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $menu = $this->menu->changeStatus($id, 1);
                        $status = $menu->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'status-deactive':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $menu = $this->menu->changeStatus($id, 0);
                        $status = $menu->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'sticky-yes':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $menu = $this->menu->changeSticky($id, 1);
                        $sticky = $menu->sticky;
                        $results[] = ['id' => $id, 'sticky' => $sticky];
                    }
                }
                break;
            case 'sticky-no':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $menu = $this->menu->changeSticky($id, 0);
                        $sticky = $menu->sticky;
                        $results[] = ['id' => $id, 'sticky' => $sticky];
                    }
                }
                break;
            case 'promoted-yes':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $menu = $this->menu->changePromote($id, 1);
                        $promoted = $menu->promoted;
                        $results[] = ['id' => $id, 'promoted' => $promoted];
                    }
                }
                break;
            case 'promoted-no':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $menu = $this->menu->changePromote($id, 0);
                        $promoted = $menu->promoted;
                        $results[] = ['id' => $id, 'promoted' => $promoted];
                    }
                }
                break;
            default:
                break;
        }

        return compact('results');

    }
}