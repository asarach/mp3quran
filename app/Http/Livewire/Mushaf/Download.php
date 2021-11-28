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
        $items = $this->getTorrentsDatabase();
        $downloads = $this->getTorrents($items);

        if ($this->downloads_dir == 'desc') {
            $downloads = $downloads->sortByDesc($this->downloads_order);
        } else {
            $downloads = $downloads->sortBy($this->downloads_order);
        }

        $downloads = $downloads->values()->all();

        $page = Page::where('name', 'downloads')->where('status', 1)->firstOrFail();

        $metas = getMetas([
            'seo_title' => $page->getLocaleTitle(),
            'seo_description' => $page->getLocaleDescription(),
            'seo_keywords' => $page->getLocaleKeywords()
        ]);

        return view('livewire.mushaf.download', compact('downloads', 'metas'));
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
            $torrent['url'] = 'http://torrent.mp3quran.net/download.php?id=' . $item->info_hash . '&f=' . $item->filename . '.torrent';
            $torrent['added'] = Carbon::parse($item->data)->format('d/m/Y');
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
    { {
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
