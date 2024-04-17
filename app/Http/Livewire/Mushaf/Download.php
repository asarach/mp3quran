<?php

namespace App\Http\Livewire\Mushaf;

use Livewire\Component;

use Cache;
use Carbon\Carbon;
use App\Torrent;
use SimpleXMLElement;
use App\Page;
use LaravelLocalization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Repositories\Page\PageRepository;
use App\Repositories\Read\ReadRepository;
use App\Repositories\Sora\SoraRepository;
use App\Repositories\Mushaf\MushafRepository;
use Symfony\Component\DomCrawler\Crawler as DomCrawler;


class Download extends Component
{
    public $downloads_order = 'title';
    public $downloads_dir = 'asc';
    public $search = null;
    public $category = ['name' => "----", 'id' => null];
    public $categories = [
        [
            'id' => "",
            'name' => "----",
        ],
        [
            'id' => "13",
            'name' => "Complete Quran - المصاحف الكاملة",
        ],
        [
            'id' => "15",
            'name' => "Translation Languages - ترجمة معاني القرآن",
        ],
        [
            'id' => "16",
            'name' => "PDF - ملفات بصيغة بي دي أف",
        ],
        [
            'id' => "17",
            'name' => "Flash - ملفات بصيغة الفلاش",
        ],
    ];


    public function render()
    {
        $downloads = $this->getTorrents();

        if ($this->downloads_dir == 'desc') {
            $downloads = $downloads->sortByDesc($this->downloads_order);
        } else {
            $downloads = $downloads->sortBy($this->downloads_order);
        }

        $downloads = $downloads->values()->all();
        // $downloads = collect();

        $page = Page::where('name', 'downloads')->where('status', 1)->firstOrFail();

        $page->title = $page->getLocaleTitle();
        $page->description = $page->getLocaleDescription();

        return view('livewire.mushaf.download', compact('downloads', 'page'));
    }

    public function orderDownloads($dir, $order)
    {
        $this->downloads_order = $order;
        $this->downloads_dir = $dir;
    }
    public function selectCategory($category)
    {
        $this->category = $category;
    }

    public function getTorrentsDomCrawler($link)
    {

        $link = 'http://torrent.mp3quran.net/';
        if ($this->search) {
            $link .= 'search=' .  $this->search . '&';
        }
        if ($this->category['id']) {
            $link .= 'category=' .  $this->category['id'] . '&';
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

    public function getTorrentsDatabase()
    {
        $items = [];
        try {
            $files = DB::connection('torrent')->table('namemap')
                ->join('summary', 'namemap.info_hash', '=', 'summary.info_hash')
                ->leftJoin('comments', 'namemap.info_hash', '=', 'comments.info_hash')
                ->select('namemap.info_hash', 'namemap.filename', 'namemap.reciter_id',  'namemap.url', 'namemap.category', 'namemap.data', 'namemap.size', 'summary.seeds', 'summary.leechers', 'summary.finished', DB::raw("count(comments.id) as comments"))
                ->groupBy('namemap.info_hash');
            if ($this->search) {
                $files = $files->where('namemap.filename', 'like', '%' .  $this->search . '%');
            }
            if ($this->category['id']) {
                $files = $files->where('namemap.category',  $this->category['id']);
                $items = $files->get()->toArray();
            }
        } catch (\Throwable $th) {
            //throw $th;
        }

        return $items;
    }

    public function getTorrents()
    {
        $torrents = DB::table('torrent')->get();
        foreach ($torrents as $torrent) {
            $torrent->name = $this->getLocaleName($torrent);
            $torrent->url = 'http://torrent.mp3quran.net/download.php?id=' . $torrent->info_hash . '&f=' . $torrent->filename . '.torrent';
            $torrent->date = Carbon::parse($torrent->date)->format('d/m/Y');
            $torrent->sizeb = $torrent->size;
            $torrent->size = $this->formatBytes($torrent->size);
        }

        return $torrents;
    }
    public function getLocaleName($item)
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

    public function formatBytes($bytes, $precision = 2)
    {
        if ($bytes >= 1073741824) {
            $bytes = number_format($bytes / 1073741824, 2) . ' GB';
        } elseif ($bytes >= 1048576) {
            $bytes = number_format($bytes / 1048576, 2) . ' MB';
        } elseif ($bytes >= 1024) {
            $bytes = number_format($bytes / 1024, 2) . ' KB';
        } elseif ($bytes > 1) {
            $bytes = $bytes . ' bytes';
        } elseif ($bytes == 1) {
            $bytes = $bytes . ' byte';
        } else {
            $bytes = '0 bytes';
        }

        return $bytes;
    }
}
