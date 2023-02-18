<?php

namespace App\Http\Controllers\Api3;

use App\Sora;
use App\Rewaya;
use App\Reciter;
use App\Models\Tafsir;
use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\LazyCollection;
use Waavi\Translation\Models\Language;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class ApiController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public $language = null;
    public $language_code = 'ar';
    public $reciter = null;
    public $rewaya = null;
    public $sura = null;
    public $read = null;
    public $tafsir = null;
    public $last_updated_date = null;


    public function getLanguages()
    {
        $languages = Language::get();
        $langs = [];
        foreach ($languages as $language) {
            $item = [];
            $item['id'] = (string) $language->id;
            $item['language'] = $language->name_english;
            $item['native'] = $language->native;
            $item['surah'] = config('app.url') . '/api/v3/suwar?language=' . $language->locale;
            $item['rewayah'] = config('app.url') . '/api/v3/riwayat?language=' . $language->locale;
            $item['reciters'] = config('app.url') . '/api/v3/reciters?language=' . $language->locale;
            $item['radios'] = config('app.url') . '/api/v3/radios?language=' . $language->locale;
            $item['tafasir'] = config('app.url') . '/api/v3/tafasir?language=' . $language->locale;
            $langs[] = $item;
        }

        return $langs;
    }

    public function getSuwar()
    {
        $suwar = DB::table('soar')->where('status', 1);
        if ($this->language_code !== null) {
            $suwar = $suwar->join('translator_translations', 'soar.id', '=', 'translator_translations.item')
                ->where('translator_translations.locale', $this->language_code)
                ->where('translator_translations.group', 'sora-name')
                ->select('soar.id', 'translator_translations.text as name', 'soar.start_page', 'soar.end_page', 'soar.makkia');
        }
        return $suwar->orderBy('id')->get();
    }

    public function getRiwayat()
    {
        $riwayat = Rewaya::where('status', 1);
        if ($this->language !== null) {
            $riwayat = $riwayat->join('translator_translations', 'rewayat.id', '=', 'translator_translations.item')
                ->where('translator_translations.locale', $this->language_code)
                ->where('translator_translations.group', 'rewaya-name')
                ->select('rewayat.id', 'translator_translations.text as name');
        } else {
            $riwayat = $riwayat->select('rewayat.id', 'rewayat.name');
        }

        return $riwayat->get();
    }

    public function setParams($request)
    {
        if ($request->input('language')) {
            $language = Language::where('locale', $request->input('language'))->first();
            if ($language) {
                $this->language = $language->id;
                $this->language_code = $language->locale;
            }
        }

        if ($request->input('reciter')) {
            $reciter = Reciter::where('status', 1)->where('id', $request->input('reciter'))->first();
            if ($reciter) {
                $this->reciter = $reciter->id;
            }
        }

        if ($request->input('rewaya')) {
            $rewaya = Rewaya::where('status', 1)->where('id', $request->input('rewaya'))->first();
            if ($rewaya) {
                $this->rewaya = $rewaya->id;
            }
        }

        if ($request->input('sura')) {
            $sura = Sora::where('status', 1)->where('id', $request->input('sura'))->first();
            if ($sura) {
                $this->sura = $sura->id;
            }
        }
        if ($request->input('surah')) {
            $sura = Sora::where('status', 1)->where('id', $request->input('surah'))->first();
            if ($sura) {
                $this->sura = $sura->id;
            }
        }
        if ($request->input('read')) {
            $read = Sora::where('status', 1)->where('id', $request->input('read'))->first();
            if ($read) {
                $this->read = $read->id;
            }
        }

        if ($request->input('tafsir')) {
            $tafsir = Tafsir::where('status', 1)->where('id', $request->input('tafsir'))->first();
            if ($tafsir) {
                $this->tafsir = $tafsir->id;
            }
        }
        if ($request->input('last_updated_date')) {
            $this->last_updated_date = $request->input('last_updated_date');
        }
    }
}
