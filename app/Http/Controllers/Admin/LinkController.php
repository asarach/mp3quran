<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\LinkRequest;
use App\Repositories\Link\LinkRepository;
use Illuminate\Http\Request;

class LinkController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(LinkRepository $link)
    {
        $this->link = $link;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $columns = ['statu' => 'status'];
        $links = $this->link->model
            ->sortable(['id' => 'desc'])
            ->filterColumns($columns)
            ->paginate(24);
        return compact('links');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LinkRequest $request)
    {
        $input = $request->all();
        $link = $this->link->create($input);
        return compact('link');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $link = $this->link->model->findOrFail($id);
        return compact('link');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(LinkRequest $request, $id)
    {
        $input = $request->all();
        $link = $this->link->update($id, $input);
        return compact('link');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->link->destroy($id);
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
        $link = $this->link->changeStatus($id, $status);
        $status = $link->status;
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
                        $result= $this->link->destroy($id, request('forced'));
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'activate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $link = $this->link->changeStatus($id, 1);
                        $status = $link->status;
                        $results[] = ['id'=> $id, 'status'=> $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $link = $this->link->changeStatus($id, 0);
                        $status = $link->status;
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
