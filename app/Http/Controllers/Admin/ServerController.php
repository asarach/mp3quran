<?php

namespace Mp3quran\Http\Controllers\Admin;

use Mp3quran\Http\Controllers\Controller;
use Mp3quran\Http\Requests\ServerRequest;
use Mp3quran\Repositories\Server\ServerRepository;
use Illuminate\Http\Request;

class ServerController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(ServerRepository $server)
    {
        $this->server = $server;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $columns = ['statu' => 'status'];
        $trashed = request('trashed');

        $servers = $this->server->model
            ->sortable(['id' => 'asc'])
            ->filterColumns($columns);
        if ($trashed) {
            $servers = $servers->onlyTrashed();
        }
        $servers = $servers->paginate(24);

        return compact('servers');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ServerRequest $request)
    {
        $input = $request->all();
        $ftp = [
            'FTP_type' => $input['FTP_type'],
            'FTP_host' => $input['FTP_host'],
            'FTP_port' => $input['FTP_port'],
            'FTP_username' => $input['FTP_username'],
            'FTP_password' => $input['FTP_password']
        ];
        $input['ftp'] = json_encode($ftp);

        $server = $this->server->create($input);
        clearPostCache(['admin_home_stats']);
        return compact('server');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $server = $this->server->model->findOrFail($id);
        $ftp = json_decode($server->ftp);

        $server->FTP_type = $ftp->FTP_type;
        $server->FTP_host = $ftp->FTP_host;
        $server->FTP_port = $ftp->FTP_port;
        $server->FTP_username = $ftp->FTP_username;
        $server->FTP_password = $ftp->FTP_password;

        return compact('server');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ServerRequest $request, $id)
    {
        $server = $this->server->model->findOrFail($id);
        $input = $request->all();
        $ftp = [
            'FTP_type' => $input['FTP_type'],
            'FTP_host' => $input['FTP_host'],
            'FTP_port' => $input['FTP_port'],
            'FTP_username' => $input['FTP_username'],
            'FTP_password' => $input['FTP_password']
        ];
        $input['ftp'] = json_encode($ftp);

        $result = $this->server->update($id, $input);
        clearPostCache(['admin_home_stats']);
        return compact('server');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->server->destroy($id, request('forced'));
        clearPostCache(['admin_home_stats']);
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
        $result = $this->server->model->withTrashed()->find($id)->restore();
        clearPostCache(['admin_home_stats']);
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
        $server = $this->server->changeStatus($id, $status);
        $status = $server->status;
        clearPostCache(['admin_home_stats']);
        return compact('status');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function test(Request $request)
    {
        $input = $request->all();
        try {
            $conn_id = ftp_connect($input['FTP_host']);
            $login_result = ftp_login($conn_id, $input['FTP_username'], $input['FTP_password']);
            $contents = ftp_nlist($conn_id, ".");
            $success = true;
        } catch (\Throwable $th) {
            $success = false;
        }
        
        return compact('success');
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
                        $result = $this->server->destroy($id, request('forced'));
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'restor':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $result = $this->server->model->withTrashed()->find($id)->restore();
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'activate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $server = $this->server->changeStatus($id, 1);
                        $status = $server->status;
                        $results[] = ['id' => $id, 'status' => $status];
                    }
                }
                break;
            case 'deactivate':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $server = $this->server->changeStatus($id, 0);
                        $status = $server->status;
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
