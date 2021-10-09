<?php

namespace Mp3quran\Http\Controllers\Admin;

use Mp3quran\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mp3quran\Repositories\Message\MessageRepository;

class MessageController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(MessageRepository $message)
    {
        $this->message = $message;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $columns = [ 'viewed' => 'viewed'];
        $messages = $this->message->model
                       ->sortable(['created_at' => 'desc'])
                       ->select('id', 'name', 'email', 'subject', 'viewed')
                       ->filterColumns($columns)
                       ->paginate(20);

        return compact('messages');
    }


    /**
     * Display the specified resource.
     *
     * @param  \Mp3quran\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $message = $this->message->model->findOrFail($id);
        $this->message->changeViewed($id, 1);

        return compact('message');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \Mp3quran\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->message->destroy($id);
        return compact('result');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function changeViewed($id, $viewed)
    {
        $message = $this->message->changeViewed($id, $viewed);
        $viewed = $message->viewed;
        return compact('viewed');
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
                        $result = $this->message->destroy($id, request('forced'));
                        if ($result) {
                            $results[] = $id;
                        }
                    }
                }
                break;
            case 'viewed':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $message = $this->message->changeViewed($id, 1);
                        $viewed = $message->viewed;
                        $results[] = ['id' => $id, 'viewed' => $viewed];
                    }
                }
                break;
            case 'unviewed':
                foreach ($input['items'] as $id => $val) {
                    if ($val) {
                        $message = $this->message->changeViewed($id, 0);
                        $viewed = $message->viewed;
                        $results[] = ['id' => $id, 'viewed' => $viewed];
                    }
                }
                break;
            default:
                break;
        }

        return compact('results');
    }
}
