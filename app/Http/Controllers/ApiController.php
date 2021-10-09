<?php

namespace Mp3quran\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use Cache;

class ApiController extends Controller {

    private $language;
    private $surah;
    private $surah_translation_name;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $ayat = 'welcome';

        return compact('ayat');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function aya(Request $request) {
        $this->validate($request, [
            'aya' => 'required',
            'surah' => 'required',
            'language' => 'required'
        ]);

        //$json = Cache::rememberForever('aya_' . $request->input('aya').'_language_' . $request->input('language').'_surah_' . $request->input('surah'), function () use ($request) {

        $this->setParams($request);

        $aya = DB::table('ayas')
                ->where('order', $request->input('aya'))
                ->where('language_id', $this->language->id)
                ->where('surah_id', $this->surah->id);
        if ($request->input('translation')) {
            $aya = $aya->where('translation_name', $request->input('translation'))->first();
        } else {
            $aya = $aya->first();
        }
        if (is_null($aya)) {
            return ['error' => 'Aya not found!'];
        }

        $result = $this->ayaToArray($request, $aya);

        return json_encode($result);

        //});
        //return $json;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function ayat(Request $request) {
        $this->validate($request, [
            'from' => 'required',
            'to' => 'required',
            'surah' => 'required',
            'language' => 'required'
        ]);

        //$json = Cache::rememberForever('aya_from_' . $request->input('from').'aya_to_' . $request->input('to').'_language_' . $request->input('language').'_surah_' . $request->input('surah'), function () use ($request) {

        $this->setParams($request);

        $ayat = DB::table('ayas')
                ->whereBetween('ayas.order', [$request->input('from'), $request->input('to')])
                ->where('language_id', $this->language->id)
                ->where('surah_id', $this->surah->id);
        if ($request->input('translation')) {
            $ayat = $ayat->where('translation_name', $request->input('translation'))->get();
        } else {
            $ayat = $ayat->get();
        }

        if (is_null($ayat)) {
            return ['error' => 'Ayat not found!'];
        }
        $result = [];


        foreach ($ayat as $aya) {
            $result[$aya->order] = $this->ayaToArray($request, $aya);
        }

        return json_encode($result);

        //});
        //return $json;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function surah(Request $request) {
        $this->validate($request, [
            'surah' => 'required',
            'language' => 'required'
        ]);

        //$json = Cache::rememberForever('language_' . $request->input('language').'_surah_' . $request->input('surah'), function () use ($request) {

        $this->setParams($request);

        $ayat = DB::table('ayas')
                ->where('language_id', $this->language->id)
                ->where('surah_id', $this->surah->id);
        if ($request->input('translation')) {
            $ayat = $ayat->where('translation_name', $request->input('translation'))->get();
        } else {
            $ayat = $ayat->get();
        }
        if (is_null($ayat)) {
            return ['error' => 'Surah not found!'];
        }

        $result = [];
        foreach ($ayat as $aya) {
            $result[$aya->order] = $this->ayaToArray($request, $aya);
        }

        return json_encode($result);

        //});
        //return $json;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function translations(Request $request) {
        $this->validate($request, [
            'languages' => 'required|string'
        ]);

        //$json = Cache::rememberForever('translations_language_' . $request->input('languages'), function () use ($request) {

        $languages = explode(',', $request->input('languages'));
        $result = [];

        foreach ($languages as $locale) {
            $result[$locale] = DB::table('translations')
                    ->where('locale', $locale)
                    ->get()
                    ->pluck('text', 'item');
        }


        return json_encode($result);

        //});
        //return $json;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function reciters(Request $request) {
        $this->validate($request, [
            'languages' => 'required|string'
        ]);

        //$json = Cache::rememberForever('translations_language_' . $request->input('languages'), function () use ($request) {

        $langs = explode(',', $request->input('languages'));

        $languages = DB::table('languages')->whereIn('locale', $langs)->get();
        $reciters = DB::table('reciters')->get();
        $result = [];

        foreach ($reciters as $reciter) {
            $name = ['default' => $reciter->name];
            foreach ($languages as $locale) {
                $tans = DB::table('reciter_translations')
                        ->where('reciter_id', $reciter->id)
                        ->where('language_id', $locale->id)
                        ->first();
                if ($tans) {
                    $name[$locale->locale] = $tans->text;
                }
            }
            $result[] = ['id' => $reciter->id, 'name' => $name];
        }


        return json_encode($result);

        //});
        //return $json;
    }

    public function ayaToArray($request, $aya) {
        $audio = ['arabic_reciter_name' => '', 'arabic_file' => '', 'arabic_bitrate' => '', 'reciter_name' => '', 'file' => '', 'bitrate' => ''];
        if ($request->input('reciter')) {
            $reciter = DB::table('reciters')->where('id', $request->input('reciter'))->first();
            if (is_null($reciter)) {
                return ['error' => 'Reciter not found!'];
            }

            $audio_selected_language = DB::table('audios')
                    ->where('reciter_id', $reciter->id)
                    ->where('language_id', $this->language->id)
                    ->where('surah_id', $this->surah->id)
                    ->where('aya_id', $aya->order);

            if ($request->input('bitrate')) {
                $audio_selected_language = $audio_selected_language->where('bitrate', $request->input('bitrate'))->first();
            } else {
                $audio_selected_language = $audio_selected_language->first();
            }

            
                $tans = DB::table('reciter_translations')
                        ->where('reciter_id', $reciter->id)
                        ->where('language_id', $this->language->id)
                        ->first();
                if ($tans) {
                    $reciter_name = $tans->text;
                } else {
                    $reciter_name = $reciter->name;
                }
				$audio['reciter_name'] = $reciter_name;
			if ($audio_selected_language) {	
                $audio['file'] = $audio_selected_language->file;
                $audio['bitrate'] = $audio_selected_language->bitrate;
            }
            $audio_in_arabic = DB::table('audios')
                    ->where('reciter_id', $reciter->id)
                    ->where('language_id', 1)
                    ->where('surah_id', $this->surah->id)
                    ->where('aya_id', $aya->order);
            if ($request->input('bitrate')) {
                $audio_in_arabic = $audio_in_arabic->where('bitrate', $request->input('bitrate'))->first();
            } else {
                $audio_in_arabic = $audio_in_arabic->first();
            }

            if ($audio_in_arabic) {
                $tans2 = DB::table('reciter_translations')
                        ->where('reciter_id', $reciter->id)
                        ->where('language_id', 1)
                        ->first();
                if ($tans2) {
                    $reciter_name2 = $tans2->text;
                } else {
                    $reciter_name2 = $reciter->name;
                }
                
                $audio['arabic_reciter_name'] = $reciter_name2;
                $audio['arabic_file'] = $audio_in_arabic->file;
                $audio['arabic_bitrate'] = $audio_in_arabic->bitrate;
            }
        }

        $aya_arabic = DB::table('ayas')
                ->where('order', $aya->order)
                ->where('language_id', 1)
                ->where('surah_id', $this->surah->id)
                ->first();

        $result = [
            'lang' => $this->language->name,
            'lang_native' => $this->language->native,
            'surah_id' => $aya->surah_id,
            'aya_id' => $aya->order,
            'surah_name' => $this->surah->name,
            'ayah_text' => $aya_arabic->text,
            //'hamish_text' => $aya_arabic->hamish,
           // 'author_name' => $aya_arabic->translation_name,
            'image_url' => $aya_arabic->image_url,
            'reciter_name' => $audio['arabic_reciter_name'],
            'audio_url_arabic' => $audio['arabic_file'],
            'bitrate' => $audio['arabic_bitrate']
        ];
        if( $this->language->locale !== 'ar'){
            $result['surah_name_lang'] = $this->surah_translation_name;
            $result['author_name_lang'] = $aya->translation_name;
            $result['ayah_text_lang'] = $aya->text;
            $result['hamish_lang'] = $aya->hamish;
            $result['reciter_name_lang'] = $audio['reciter_name'];
            $result['audio_url_in_selected_lang'] = $audio['file'];
        }

        return $result;
    }

    public function setParams($request) {

        $language = DB::table('languages')->where('locale', $request->input('language'))->first();
        if (is_null($language)) {
            $this->language = DB::table('languages')->where('locale', 'ar')->first();
        }
        $this->language = $language;


        $surah = DB::table('surahs')->where('order', $request->input('surah'))->first();
        if (is_null($surah)) {
            return ['error' => 'Surah not found!'];
        }
        $this->surah = $surah;


        $surah_translation = DB::table('surah_translation')->where('language_id', $language->id)->where('surah_id', $surah->id)->first();
        if (!is_null($surah_translation)) {
            $surah_translation_name = $surah_translation->name;
        } else {
            $surah_translation_name = '';
        }
        $this->surah_translation_name = $surah_translation_name;
    }

}
