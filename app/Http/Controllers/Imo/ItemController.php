<?php

namespace App\Http\Controllers\Imo;

use App\Models\Imo\Item;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ItemController extends ImoController
{
    /**
     * Display a listing of the album items.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = Item::all();
        return $this->formatResponse($items);
    }

    /**
     * Display the specified album item.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        try {
            $item = Item::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return $this->formatResponse(null, 'please check your request path', 404);
        }

        return $this->formatResponse($item);
    }


    /**
     * Store a newly created album item in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'item_list.*.album_id' => 'required',
                'item_list.*.item_index' => 'required|integer',
                'item_list.*.item_title' => 'required',
                'item_list.*.item_lang' => 'required',
                'item_list.*.item_desc' => 'required',
                'item_list.*.item_duration' => 'required|integer',
                'item_list.*.item_time' => 'required|integer',
                'item_list.*.item_url' => 'required|url',
            ]);
        } catch (ValidationException $e) {
            return $this->formatResponse($e->errors(), 'Validation error', 11300);
        }

        $items = $request->get('item_list');

        foreach ($items as $itemData) {
            Item::create($itemData);
        }

        return $this->formatResponse(null, 'success');
    }



    /**
     * Update the specified album item in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        try {
            $request->validate([
                'item_list.*.album_id' => 'required',
                'item_list.*.item_id' => 'required',
                'item_list.*.item_index' => 'required|integer',
                'item_list.*.item_title' => 'required',
                'item_list.*.item_lang' => 'required',
                'item_list.*.item_desc' => 'required',
                'item_list.*.item_duration' => 'required|integer',
                'item_list.*.item_time' => 'required|integer',
                'item_list.*.item_url' => 'required|url',
            ]);
        } catch (ValidationException $e) {
            return $this->formatResponse($e->errors(), 'Validation error', 11300);
        }

        $items = $request->get('item_list');

        foreach ($items as $itemData) {
            $item = Item::findOrFail($itemData['item_id']);
            $item->update($itemData);
        }

        return $this->formatResponse(null, 'success');
    }

    /**
     * Remove the specified album item from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Item::destroy($id);
        return $this->formatResponse(null, 'success', 204);
    }
}
