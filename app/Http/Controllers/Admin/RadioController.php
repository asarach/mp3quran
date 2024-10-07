<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\RadioRequest;
use Cviebrock\EloquentSluggable\Services\SlugService;
use App\Radio;
use Illuminate\Http\Request;
use DB;


class RadioController extends Controller
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
        $radio_cat = request('radio_cat');
        $reciter = request('reciter');
        $mushaf = request('mushaf');
        $reciter = request('reciter');
        $trashed = request('trashed');
        $q = request('q');

        $radios = DB::connection('apimp3')->table('radios')
            ->join('reciters', 'reciters.id', '=', 'radios.reciter_id')
            ->join('mushaf', 'mushaf.id', '=', 'radios.mushaf_id')
            ->join('radio_cats', 'radio_cats.id', '=', 'radios.radio_cat_id')
            ->join('reciter_translations', 'reciters.id', '=', 'reciter_translations.reciter_id')
            ->join('radio_cats_translations', 'radio_cats.id', '=', 'radio_cats_translations.radio_cat_id')
            ->join('mushaf_translations', 'mushaf.id', '=', 'mushaf_translations.mushaf_id')
            ->where('reciter_translations.language_id', 1)
            ->where('radio_cats_translations.language_id', 1)
            ->where('mushaf_translations.language_id', 1);

        if ($radio_cat) {
            $radios->where('radios.radio_cat_id', $radio_cat);
        }

        if ($reciter) {
            $radios->where('radios.reciter_id', $reciter);
        }

        if ($mushaf) {
            $radios->where('radios.mushaf_id', $mushaf);
        }

        if ($trashed) {
            $radios = $radios->whereNotNull('radios.deleted_at');
        }

        if ($q) {
            $radios->where('reciter_translations.name', 'LIKE', '%' . $q . '%');
        }

        $radios = $radios
            ->select('radios.*', 'reciters.name as reciter_name', 'rewayat.name as rewaya_name')
            ->select('radios.*', 'reciter_translations.name as reciter_name', 'radio_cats_translations.name as category', 'mushaf_translations.name as mushaf')
            ->orderBy('radios.id', 'desc')
            ->paginate(250);

        $radio_cats = DB::connection('apimp3')->table('radio_cats')->select(['id', 'name'])->get();
        $reciters = DB::connection('apimp3')->table('reciters')->select(['id', 'name'])->get();
        $mushafs = DB::connection('apimp3')->table('mushaf')->select(['id', 'name'])->get();
        $rewayat = DB::connection('apimp3')->table('rewayat')->select(['id', 'name'])->get();

        return compact('radios', 'reciters', 'radio_cats', 'mushafs', 'rewayat');
    }



    /**
     * Store a newly created resource in storage.//DONE
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RadioRequest $request)
    {
        // Validate the input
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'url' => 'required|url',
            'list' => 'required|integer',
            'mushaf.id' => 'required|integer',
            'reciter.id' => 'required|integer',
            'rewaya.id' => 'required|integer',
            'radio_cat.id' => 'required|integer',
        ]);

        $input = [
            'name' => $validatedData['name'],
            'url' => $validatedData['url'],
            'list' => $validatedData['list'],
            'mushaf_id' => $validatedData['mushaf']['id'],
            'reciter_id' => $validatedData['reciter']['id'],
            'rewaya_id' => $validatedData['rewaya']['id'],
            'radio_cat_id' => $validatedData['radio_cat']['id'],
        ];

        $radio = DB::connection('apimp3')->table('radios')->insert($input);

        return compact('radio');
    }



    /**
     * Show the form for editing the specified resource.//DONE
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $radio = DB::connection('apimp3')->table('radios')
            ->join('reciters', 'reciters.id', '=', 'radios.reciter_id')
            ->join('mushaf', 'mushaf.id', '=', 'radios.mushaf_id')
            ->join('rewayat', 'rewayat.id', '=', 'radios.rewaya_id')
            ->join('radio_cats', 'radio_cats.id', '=', 'radios.radio_cat_id')
            ->where('radios.id', $id)
            ->select(
                'radios.id as radio_id',
                'radios.name as radio_name',
                'radios.url',
                'radios.list',
                'radios.created_at',
                'radios.updated_at',
                'reciters.id as reciter_id',
                'reciters.name as reciter_name',
                'mushaf.id as mushaf_id',
                'mushaf.name as mushaf_name',
                'rewayat.id as rewaya_id',
                'rewayat.name as rewaya_name',
                'radio_cats.id as radio_cat_id',
                'radio_cats.name as radio_cat_name'
            )
            ->first();


        if ($radio) {
            $radio = [
                'id' => $radio->radio_id,
                'name' => $radio->radio_name,
                'url' => $radio->url,
                'list' => $radio->list,
                'created_at' => $radio->created_at,
                'updated_at' => $radio->updated_at,
                'reciter' => [
                    'id' => $radio->reciter_id,
                    'name' => $radio->reciter_name,
                ],
                'mushaf' => [
                    'id' => $radio->mushaf_id,
                    'name' => $radio->mushaf_name,
                ],
                'rewaya' => [
                    'id' => $radio->rewaya_id,
                    'name' => $radio->rewaya_name,
                ],
                'radio_cat' => [
                    'id' => $radio->radio_cat_id,
                    'name' => $radio->radio_cat_name,
                ],
            ];
        }


        $radio_cats = DB::connection('apimp3')->table('radio_cats')->select(['id', 'name'])->get();
        $reciters = DB::connection('apimp3')->table('reciters')->select(['id', 'name'])->get();
        $mushafs = DB::connection('apimp3')->table('mushaf')->select(['id', 'name'])->get();
        $rewayat = DB::connection('apimp3')->table('rewayat')->select(['id', 'name'])->get();


        return compact('radio', 'reciters', 'radio_cats', 'mushafs', 'rewayat');
    }

    /**
     * Update the specified resource in storage.//DONE
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(RadioRequest $request, $id)
    {
        // Validate the input
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'url' => 'required|url',
            'list' => 'required|integer',
            'mushaf.id' => 'required|integer',
            'reciter.id' => 'required|integer',
            'rewaya.id' => 'required|integer',
            'radio_cat.id' => 'required|integer',
        ]);

        // Find the existing record
        $radio = DB::connection('apimp3')->table('radios')->where('id', $id)->first();

        if (!$radio) {
            return response()->json(['message' => 'Radio not found'], 404);
        }

        // Extract relevant data
        $input = [
            'name' => $validatedData['name'],
            'url' => $validatedData['url'],
            'list' => $validatedData['list'],
            'mushaf_id' => $validatedData['mushaf']['id'],
            'reciter_id' => $validatedData['reciter']['id'],
            'rewaya_id' => $validatedData['rewaya']['id'],
            'radio_cat_id' => $validatedData['radio_cat']['id'],
        ];

        // Update the record
        $result = DB::connection('apimp3')->table('radios')->where('id', $id)->update($input);

        // Retrieve the updated record
        $updatedRadio = DB::connection('apimp3')->table('radios')->where('id', $id)->first();

        return compact('radio');
    }

    /**
     * Remove the specified resource from storage.//DONE
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = DB::connection('apimp3')->table('radios')
            ->where('id', $id)
            ->delete();

        return compact('result');
    }

    /**
     * Remove the specified resource from storage.//DONE
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function changeList($id, $list)
    {
        $radio = DB::connection('apimp3')->table('radios')
            ->where('id', $id)
            ->update(['list' => $list]);

        return compact('list');
    }
}
