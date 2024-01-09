<?php

namespace App\Http\Controllers\Api3;

use App\Http\Controllers\Controller;
use App\Models\Author;
use App\Models\Mushaf;
use App\Models\Quran;
use App\Models\QuranVerseTiming;
use Illuminate\Http\Request;

class VersesTimingsController extends Controller
{

    /**
     * @param Request $request
     * get verses timings updates
     */
    public function index(Request $request)
    {
        $limit = request()->filled("limit") ? request()->get("limit") : 10;

        // Tracks
        $builder = Quran::orderBy("id", "asc")
            ->has("verses_timing");//single relation

        if ($request->filled("last_update")) {

            $date = $request->get("last_update");

            if (is_numeric($date)) { // the date is unix timestamp
                $date = date("Y-m-d H:i:s", $date);
            }

            $builder->where('updated_at', ">=", $date);
        }

        $tracks = $builder->paginate($limit);
        $tracks_total = $tracks->total();

        $tracks = $tracks->map(function ($track) {
            return [
                "id" => $track->id,
                "mushaf_id" => $track->mushaf_id,
                "sura" => $track->verses_timing?->sura_id,
                "created_at" => $track->created_at,
                "updated_at" => $track->updated_at,
                "qualities" => []/*$track->sounds->map(function($sound) {
                    return [
                        "bitrate" => $sound->quality,
                        "duration" => $sound->duration,
                        "size" => $sound->size,
                        "url" => $sound->url
                    ];
                })*/,
            ];
        });


        // Authors
        $builder = Author::orderBy("id", "asc")
            ->with('quran')
            ->has("qurans.verses_timings");

        if ($request->filled("last_update")) {

            $date = $request->get("last_update");

            if (is_numeric($date)) { // the date is unix timestamp
                $date = date("Y-m-d H:i:s", $date);
            }

            $builder->where('updated_at', ">=", $date);
        }

        $authors = $builder->paginate($limit);
        $authors_total = $authors->total();

        $authors = $authors->map(function ($author) {
            return [
                "id" => $author->id,
                "slug" => $author->quran?->slug,
                "country_iso" => "",
                "website_url" => $author->quran?->url,
                "facebook_url" => "",
                "twitter_url" => "",
                "google_plus_url" => "",
                "youtube_url" => "",
                "soundcloud_url" => $author->quran?->itunes,
                "is_active" => $author->quran?->status,
                "created_at" => $author->created_at,
                "updated_at" => $author->updated_at,
                "translations" => [[
                    "locale"        => 'ar',
                    "name"          => $author->quran?->title ?? $author->name,
                    "name_search"   => $author->name,
                    "about"         => $author->quran?->description,
                ]]
            ];
        });

        // Mushafs
        $query = Mushaf::orderBy("id", "asc")
            ->with("authors")
            ->has("qurans.verses_timings");

        if ($request->filled("last_update")) {

            $date = $request->get("last_update");

            if (is_numeric($date)) // the date is unix timestamp
                $date = date("Y-m-d H:i:s", $date);

            $query->where('updated_at', ">=", $date);
        }

        $mushafs = $query->paginate($limit);
        $mushafs_total = $mushafs->total();

        $mushafs = $mushafs->map(function ($mushaf) {
            return [
                "id" => $mushaf->id,
                "slug" => $mushaf->slug,
                "narration_id"=> null,
                "type_id"    => null,
                "reciter_id" => $mushaf->authors->count() ? $mushaf->authors->first()?->id : 0,
                "locale"     => 'ar',
                "is_active"  => $mushaf->status,
                "created_at" => null,
                "updated_at" => null,
                "translations" => [
                    [
                        "locale"      => 'ar',
                        "name"        => $mushaf->name,
                        "description" => "",
                    ]
                ]
            ];
        });

        // Verses Timings
        $query = QuranVerseTiming::orderBy("id", "asc")->with("quran");

        if ($request->filled("last_update")) {

            $date = $request->get("last_update");

            if (is_numeric($date)) // the date is unix timestamp
                $date = date("Y-m-d H:i:s", $date);

            $query->where('updated_at', ">=", $date);
        }

        $surah_timings = $query->paginate($limit);
        $surah_timings_total = $surah_timings->total();
        $surah_timings = collect($surah_timings->items());

        return [
            'status' => true,
            'data'   =>  [
                "page" => (int) request()->get("page", 1),
                "total_count" => $authors_total + $mushafs_total + $surah_timings_total + $tracks_total,
                "records_count" => count($authors) + count($mushafs) + count($surah_timings) + count($tracks),
                "records" => [
                    "reciters" => $authors,
                    "mushafs" => $mushafs,
                    "tracks" => $tracks,
                    "verses_timings" => $surah_timings->map(function($v) {
                        return [
                            'id'         => $v->id,
                            'mushaf_id'   => $v->read_id,
                            'aya'        => $v->ayah,
                            'end_time'   => $v->end_time,
                            'start_time' => $v->start_time,
                            'created_at' => null,
                            'updated_at' => null,
                            'mushaf_type'  => $v->quran?->mushaf_id,
                            'sura_id'    => $v->sura_id,
                        ];
                    })
                ]
            ]
        ];
    }
}
