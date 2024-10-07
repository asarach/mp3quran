<?php

namespace App\Http\Controllers\Api3;

use App\Http\Controllers\Controller;
use App\Models\Author;
use App\Mushaf;
use App\Models\QuranVerseTiming;
use App\Models\SurahRead;
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
        /*$builder = Quran::orderBy("id", "asc")
            ->has("verses_timing");*///single relation

        $builder = SurahRead::orderBy("id", "asc");

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
                "mushaf_id" => $track->read_id,
                "sura" => $track->sura_id,
                'duration' => $track->duration,
                'filename' => $track->filename,
                "created_at" => $track->created_at?->format("Y-m-d H:i:s"),
                "updated_at" => $track->updated_at?->format("Y-m-d H:i:s"),
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
            ->with(['translations']);
            //->has("qurans.verses_timings");

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
                "slug" => "",
                "country_iso" => "",
                "website_url" => "",
                "facebook_url" => "",
                "twitter_url" => "",
                "google_plus_url" => "",
                "youtube_url" => "",
                "soundcloud_url" => "",
                "is_active" => $author?->status,
                "created_at" => $author->created_at,
                "updated_at" => $author->updated_at,
                "translations" => $author->translations->isNotEmpty() ?
                    $author->translations?->map(function($translation) {
                        return [
                            "locale"        => $translation->language_id,
                            "language_id"   => $translation->language_id,
                            "name"          => $translation->name,
                            "name_search"   => $translation->name,
                            "about"         => "",
                            "letter"         => $translation->letter,
                        ];
                    })
                    : [
                        [
                            "locale"        => 'ar',
                            "name"          => $author->name,
                            "name_search"   => $author->name,
                            "about"         => $author?->description,
                        ]
                    ]
            ];
        });

        // Mushafs
        $query = Mushaf::orderBy("id", "asc")
            ->with("authors");
           // ->has("qurans.verses_timings");

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
                "narration_id"=> $mushaf->special_rewaya_id,
                "type_id"    => $mushaf->mushaf_id,
                "reciter_id" => $mushaf->reciter_id,
                "locale"     => 'ar',
                "is_active"  => $mushaf->status,
                "created_at" => $mushaf->created_at?->format("Y-m-d H:i:s"),
                "updated_at" => $mushaf->updated_at?->format("Y-m-d H:i:s"),
                "translations" => [
                    [
                        "locale"      => 'ar',
                        "name"        => $mushaf->title,
                        "description" => $mushaf->description,
                    ]
                ]
            ];
        });

        // Verses Timings
        $query = QuranVerseTiming::orderBy("id", "asc")->with(["moshaf"]);

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
                            'track_id'   => $v->track()->where('sura_id', $v->sura_id)->first()?->id,
                            'mushaf_id'  => $v->read_id,
                            'aya'        => $v->ayah,
                            'end_time'   => $v->end_time,
                            'start_time' => $v->start_time,
                            'created_at' => $v->created_at?->format("Y-m-d H:i:s"),
                            'updated_at' => $v->updated_at?->format("Y-m-d H:i:s"),
                            'mushaf_type'=> $v->moshaf?->mushaf_id,
                            'sura_id'    => $v->sura_id,
                        ];
                    })
                ]
            ]
        ];
    }
}
// reads => musahf table (id is mushaf id)
// sura_read is the track table, track id should be filename