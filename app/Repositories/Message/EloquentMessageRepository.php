<?php

namespace Mp3quran\Repositories\Message;

use Mp3quran\Repositories\EloquentRepository;
use Mp3quran\Message;

class EloquentMessageRepository extends EloquentRepository implements MessageRepository
{

    public $model;

    public function __construct(Message $model)
    {
        $this->model = $model;
    }

    public function create(array $data)
    {
        $item = new $this->model;

        $item->name = $data['name'];
        $item->email = $data['email'];
        $item->subject = $data['subject'];
        $item->body = $data['body'];

        $item->save();

        return $item;
    }

    public function update($id, array $data)
    {
        $item = $this->model->findOrFail($id);

        $item->name = $data['name'];
        $item->email = $data['email'];
        $item->subject = $data['subject'];
        $item->body = $data['body'];

        $item->save();

        return $item;
    }

    public function destroy($id)
    {
        $item = $this->model->findOrFail($id);
        return $item->delete();
    }
}
