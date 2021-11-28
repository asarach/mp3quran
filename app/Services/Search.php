<?php

namespace App\Services;

use TeamTNT\TNTSearch\TNTSearch;

class Search
{

    /**
     * Search image
     *
     * @return boolean
     */
    public function search($q, $index)
    {
        $tnt = new TNTSearch;
        $tnt->loadConfig(config('scout.tntsearch'));
        $tnt->selectIndex($index . ".index");
        $tnt->fuzziness = true;

        $res = $tnt->searchBoolean($q, 36);

        return $res['ids'];
    }
}
