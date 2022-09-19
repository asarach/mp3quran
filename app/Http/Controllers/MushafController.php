<?php

namespace App\Http\Controllers;

use Cache;
use Carbon\Carbon;
use App\Torrent;
use SimpleXMLElement;
use LaravelLocalization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Repositories\Page\PageRepository;
use App\Repositories\Read\ReadRepository;
use App\Repositories\Sora\SoraRepository;
use App\Repositories\Mushaf\MushafRepository;
use Symfony\Component\DomCrawler\Crawler as DomCrawler;


class MushafController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(PageRepository $page, ReadRepository $read, MushafRepository $mushaf, SoraRepository $sora, Torrent $torrent)
    {
        $this->mushaf = $mushaf;
        $this->read = $read;
        $this->torrent = $torrent;
        $this->sora = $sora;
        $this->page = $page;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function mushaf()
    {

        $parts = [
            '1' => ['start_page' => 1, 'name' => trans('text.part') . ' 1'],
            '2' => ['start_page' => 22, 'name' => trans('text.part') . ' 2'],
            '3' => ['start_page' => 42, 'name' => trans('text.part') . ' 3'],
            '4' => ['start_page' => 62, 'name' => trans('text.part') . ' 4'],
            '5' => ['start_page' => 82, 'name' => trans('text.part') . ' 5'],
            '6' => ['start_page' => 102, 'name' => trans('text.part') . ' 6'],
            '7' => ['start_page' => 121, 'name' => trans('text.part') . ' 7'],
            '8' => ['start_page' => 142, 'name' => trans('text.part') . ' 8'],
            '9' => ['start_page' => 162, 'name' => trans('text.part') . ' 9'],
            '10' => ['start_page' => 182, 'name' => trans('text.part') . ' 10'],
            '11' => ['start_page' => 201, 'name' => trans('text.part') . ' 11'],
            '12' => ['start_page' => 222, 'name' => trans('text.part') . ' 12'],
            '13' => ['start_page' => 242, 'name' => trans('text.part') . ' 13'],
            '14' => ['start_page' => 262, 'name' => trans('text.part') . ' 14'],
            '15' => ['start_page' => 282, 'name' => trans('text.part') . ' 15'],
            '16' => ['start_page' => 302, 'name' => trans('text.part') . ' 16'],
            '17' => ['start_page' => 322, 'name' => trans('text.part') . ' 17'],
            '18' => ['start_page' => 342, 'name' => trans('text.part') . ' 18'],
            '19' => ['start_page' => 362, 'name' => trans('text.part') . ' 19'],
            '20' => ['start_page' => 382, 'name' => trans('text.part') . ' 20'],
            '21' => ['start_page' => 402, 'name' => trans('text.part') . ' 21'],
            '22' => ['start_page' => 422, 'name' => trans('text.part') . ' 22'],
            '23' => ['start_page' => 442, 'name' => trans('text.part') . ' 23'],
            '24' => ['start_page' => 462, 'name' => trans('text.part') . ' 24'],
            '25' => ['start_page' => 482, 'name' => trans('text.part') . ' 25'],
            '26' => ['start_page' => 502, 'name' => trans('text.part') . ' 26'],
            '27' => ['start_page' => 522, 'name' => trans('text.part') . ' 27'],
            '28' => ['start_page' => 542, 'name' => trans('text.part') . ' 28'],
            '29' => ['start_page' => 562, 'name' => trans('text.part') . ' 29'],
            '30' => ['start_page' => 582, 'name' => trans('text.part') . ' 30'],
        ];

        return compact('parts');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function alkahf()
    {
        // Cache::forget('alkahf_read_soar_' . LaravelLocalization::getCurrentLocale());
        $read_soar = Cache::rememberForever('alkahf_read_soar_' . LaravelLocalization::getCurrentLocale(), function () {
            $read_soar = [];
            $reads = $this->read->model
                ->where('status', 1)
                ->get();
            foreach ($reads as $read) {
                $kahf = $read->soar->where('id', 18)->first();
                if ($kahf) {
                    $read_soar[] = [
                        'read' =>  $read->id,
                        'sora' =>  '18',
                        'reciter_name' => $read->reciter->getLocaleName()
                    ];
                }
            }
            return $read_soar;
        });
        $seo_page = $this->page->model->where('name', 'alkahf-surah')->where('status', 1)->firstOrFail();
        $page_share = [
            'title' => $seo_page->getLocaleTitle(),
            'url' => route('alkahf'),
            'description' =>  $seo_page->getLocaleDescription(),
        ];        

        return compact('read_soar', 'page_share');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mushaf  $mushaf
     * @return \Illuminate\Http\Response
     */
    public function download(Request $request)
    {
        $input = $request->all();
        // $items = $this->getTorrentsDomCrawler($input);
        $items = $this->getTorrentsDatabase($input);
        $downloads = $this->getTorrents($items);
        // dd($downloads);
        if (isset($input['dir']) && isset($input['order'])) {
            if ($input['dir'] == 'desc') {
                $downloads = $downloads->sortByDesc($input['order']);
            } else {
                $downloads = $downloads->sortBy($input['order']);
            }
        }
        $downloads = $downloads->values()->all();

        $seo_page = $this->page->model->where('name', 'downloads')->where('status', 1)->firstOrFail();

        $page_title = $seo_page->getLocaleTitle();

        $page = 'downloads';
        if (request()->ajax()) {
            return compact('page', 'downloads', 'page_title');
        }
        $params = get_params(compact('page', 'downloads', 'page_title'));

        $params['metas'] = getMetas([
            'seo_title' => $seo_page->getLocaleTitle(),
            'seo_description' => $seo_page->getLocaleDescription(),
        ]);

        return view('layouts.app', $params);
    }

    public function getTorrentsDomCrawler($link)
    {

        $link = 'http://torrent.mp3quran.net/';
        if (isset($input['search'])) {
            $link .= 'search=' . $input['search'] . '&';
        }
        if (isset($input['category'])) {
            $link .= 'category=' . $input['category'] . '&';
        }
        $link = substr($link, 0, -1);

        $client = new \GuzzleHttp\Client();
        $request = $client->request('GET', $link);
        $html = (string) $request->getBody();

        $document = new DomCrawler($html);
        $downloads = $document->filter('#maintable')->filter('tr')->each(function ($tr, $i) {
            return $tr->filter('td')->each(function ($td, $i) {
                if ($i == 0) {
                    return  trans('downloads.' . $td->text());
                } elseif ($i == 2) {
                    $a = new SimpleXMLElement('<a href="www.something.com">Click here</a>');

                    $itm =  str_replace('download.php', 'http://torrent.mp3quran.net/download.php', trim($td->html()));
                    $itm =  str_replace('images/download.gif', '/img/download.png', $itm);
                    $itm =  str_replace('_', ' ', $itm);
                    return $itm;
                } else {
                    return  str_replace('_', ' ', trim($td->text()));
                }
            });
        });

        return array_slice($downloads, 2);
    }

    public function getTorrentsDatabase($input)
    {

        $files = DB::connection('torrent')->table('namemap')
            ->join('summary', 'namemap.info_hash', '=', 'summary.info_hash')
            ->leftJoin('comments', 'namemap.info_hash', '=', 'comments.info_hash')
            ->select('namemap.info_hash', 'namemap.filename', 'namemap.reciter_id',  'namemap.url', 'namemap.category', 'namemap.data', 'namemap.size', 'summary.seeds', 'summary.leechers', 'summary.finished', DB::raw("count(comments.id) as comments"))
            ->groupBy('namemap.info_hash');
        if (isset($input['search'])) {
            $files = $files->where('namemap.filename', 'like', '%' .$input['search'] . '%');
        }
        if (isset($input['category'])) {
            $files = $files->where('namemap.category', $input['category']);
        }

        return $files->get()->toArray();
    }

    public function getTorrents($items)
    {
        $torrents = collect();
        foreach ($items as $item) {
            $torrent = [];
            $torrent['name'] = $this->getLocaleName($item); 
            $torrent['comments'] = $item->comments;
            $torrent['url'] = 'http://torrent.mp3quran.net/download.php?id='.$item->info_hash. '&f=' .$item->filename. '.torrent';
            $torrent['added'] = Carbon::parse($item->data)->format('d/m/Y') ;
            $torrent['date'] = $item->data;
            $torrent['size'] = $this->formatBytes($item->size);
            $torrent['sizeb'] = $item->size;
            $torrent['seeders'] = $item->seeds;
            $torrent['leechers'] = $item->leechers;
            $torrent['completed'] = $item->finished;

            $torrents->push($torrent);
        }
        return $torrents;
    }
    public function getLocaleName($item)
    {
        {
            $name = trans('downloads.' . trim($item->filename));
            if (strpos($name, 'downloads.') !== false or $name == '') {
                $name = trans('reciter-name.' . $item->reciter_id);
                if (strpos($name, 'reciter-name.') !== false) {
                    return $this->filename;
                }
            }
            return $name;
        }
        return $name;
    }

    public function formatBytes($bytes, $precision = 2) { 
        if ($bytes >= 1073741824)
        {
            $bytes = number_format($bytes / 1073741824, 2) . ' GB';
        }
        elseif ($bytes >= 1048576)
        {
            $bytes = number_format($bytes / 1048576, 2) . ' MB';
        }
        elseif ($bytes >= 1024)
        {
            $bytes = number_format($bytes / 1024, 2) . ' KB';
        }
        elseif ($bytes > 1)
        {
            $bytes = $bytes . ' bytes';
        }
        elseif ($bytes == 1)
        {
            $bytes = $bytes . ' byte';
        }
        else
        {
            $bytes = '0 bytes';
        }

        return $bytes;
    } 
}
