<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Translation\TranslationRepository;
use Waavi\Translation\Repositories\LanguageRepository;
use App\Http\Requests\TranslationRequest;
use Waavi\Translation\Facades\TranslationCache;
use Waavi\Translation\Models\Translation;
use Storage;

class TranslationController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Translation $translation, TranslationRepository $translationRepo, LanguageRepository $language)
    {
        $this->translation = $translation;
        $this->translationRepo = $translationRepo;
        $this->language = $language;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $translations = $this->translation;
        if ($request->locale) {
            $translations = $translations->where('locale', $request->locale);
            $language = $this->language->findByLocale($request->locale);
        } else {
            $language = $this->language->findByLocale('ar');
        }
        if ($request->group) {
            $translations = $translations->where('group', $request->group);
        }
        if ($request->item) {
            $translations = $translations->where('item',  $request->item);
        }
        if ($request->text) {
            $translations = $translations->where('text', 'like', '%' . $request->text . '%');
        }
        $translations = $translations->orderBy('id', 'asc')->paginate(50);

        foreach ($translations as $translation) {
            
            try {
                $translation->arabic_text = $this->translation->where('locale', 'ar')->where('item', $translation->item)->where('group', $translation->group)->first()->text;
                
            } catch (\Throwable $th) {
                $translation->arabic_text = '';
            }
            
        }
        //dd($translations);

        $languages = $this->language->all();

        $groups = $this->translationRepo->getGroupsArray();

        return compact('translations', 'language', 'languages', 'groups');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TranslationRequest $request)
    {
        $input = $request->all();
        $result = $this->translationRepo->create($input);
        flushTrans();

        if (!$result) {
            abort(401);
        } else {
            return ['success' => true];
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TranslationRequest $request)
    {
        $input = $request->all();

        $result = $this->translationRepo->update($input);

        flushTrans();

        if (!$result) {
            abort(401);
        } else {
            return ['success' => true];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = $this->translation->findOrFail($id);
        $result = $item->delete();

        flushTrans();

        if (!$result) {
            abort(401);
        } else {
            return ['success' => true];
        }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function fixTranslations()
    {

        $result = $this->translationRepo->fixTranslations();
        $success = true;

        flushTrans();
        return ['success' => $success, 'reslut' => $result];
    }

    
}
