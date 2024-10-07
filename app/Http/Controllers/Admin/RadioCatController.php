<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\RadioRequest;
use Cviebrock\EloquentSluggable\Services\SlugService;
use App\Radio;
use Illuminate\Http\Request;
use DB;


class RadioCatController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {}

    /**
     * Display a listing of the resource.//DONE
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $radio_cats = DB::connection('apimp3')
            ->table('radio_cats')
            ->paginate(250);

        return compact('radio_cats');
    }



    /**
     * Store a newly created resource in storage.//DONE
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the input
        $validatedData = $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $input = [
            'name' => $validatedData['name']
        ];

        $radio_cat = DB::connection('apimp3')->table('radio_cats')->insert($input);

        return compact('radio_cat');
    }



    /**
     * Show the form for editing the specified resource.//DONE
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $radio_cat = DB::connection('apimp3')->table('radio_cats')
            ->where('id', $id)
            ->first();


        $languages = DB::connection('apimp3')->table('languages')->get();
        $translations = [];
        foreach ($languages as $language) {
            $arr = ['language' => $language->name];
            $name = DB::connection('apimp3')->table('radio_cats_translations')
                ->where('language_id', $language->id)
                ->where('radio_cat_id', $id)
                ->first();

            if ($name) {
                $arr['name'] = $name->name;
            } else {
                $arr['name'] = '';
            }

            $translations[$language->locale] = $arr;
        }

        return compact('radio_cat', 'translations');
    }

    /**
     * Update the specified resource in storage.//DONE
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Validate the input
        $validatedData = $request->validate([
            'name' => 'required|string|max:255'
        ]);

        // Find the existing record
        $radio_cat = DB::connection('apimp3')->table('radio_cats')->where('id', $id)->first();

        if (!$radio_cat) {
            return response()->json(['message' => 'Radio not found'], 404);
        }

        // Extract relevant data
        $input = [
            'name' => $validatedData['name']
        ];

        // Update the record
        $result = DB::connection('apimp3')->table('radio_cats')->where('id', $id)->update($input);

        // Retrieve the updated record
        $updatedRadio = DB::connection('apimp3')->table('radio_cats')->where('id', $id)->first();

        return compact('radio_cat');
    }

    /**
     * Remove the specified resource from storage.//DONE
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = DB::connection('apimp3')->table('radio_cats')
            ->where('id', $id)
            ->delete();

        return compact('result');
    }

    public function translations(Request $request, $id)
    {
        $input = $request->all();
        foreach ($input as $key => $translation) {
            $language_id = DB::connection('apimp3')->table('languages')->where('locale', $key)->first()->id;
            $name = DB::connection('apimp3')->table('radio_cats_translations')->where('language_id', $language_id)->where('radio_cat_id',  $id)->first();
            if ($name) {
                DB::connection('apimp3')->table('radio_cats_translations')->where('id', $name->id)->update(array('name' => $translation['name']));
            } elseif ($translation['name']) {
                DB::connection('apimp3')->table('radio_cats_translations')->insert(['language_id' => $language_id,  'radio_cat_id' =>  $id, 'name' => $translation['name']]);
            }
        }
        $result = true;

        return compact('result');
    }
}
