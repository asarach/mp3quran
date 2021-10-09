<?php

namespace Mp3quran\Http\Controllers;

use Illuminate\Http\Request;
use Mp3quran\Repositories\Sora\SoraRepository;
use Mp3quran\Repositories\Read\ReadRepository;
use LaravelLocalization;
use CyrildeWit\EloquentViewable\Support\Period;
use Carbon\Carbon;

class SoraController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(ReadRepository $read, SoraRepository $sora)
    {
        $this->read = $read;
        $this->sora = $sora;
    }

    /**
     * Display the specified resource.
     *
     * @param  \Mp3quran\Read  $read
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        $read = request('r');
        $soar = $this->sora->model->where('status', 1);
        if ($read) {
            $soar = $soar
                ->leftJoin('sura_read', 'soar.id', '=', 'sura_read.sura_id')
                ->where('sura_read.read_id', $read);
        }

        $soar = $soar->orderBy('num', 'asc')->get();

        return compact('soar');
    }


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function item()
    {
        $input = request()->all();
        if (!isset($input['s'])) {
            $input['s'] = '';
        }
        if (!isset($input['r'])) {
            $input['r'] = '';
        }
        try {
            $sora = $this->sora->model
                ->where('id', $input['s'])
                ->first();

            $read = $this->read->model
                ->where('id', $input['r'])
                ->first();


            $item = [
                'id' => $sora->getNum() . '-' . $read->id,
                'read_id' => $read->id,
                'sora_id' => $sora->id,
                'num' => $sora->getNum(),
                'name' => $sora->getLocaleName(),
                'reciter' => $read->reciter->getLocaleName(),
                'read_slug' => $read->slug,
                'type' => 'sora',
                'share_url' => route('reciter.show', ['slug' => $read->slug]),
                'share_description' => $read->getLocaleShareDescription($sora->getLocaleName()),
                'share_title' => $read->getLocaleShareTitle($sora->getLocaleName()),
                'file' => $read->getAudioUrl($sora->id),
            ];
        } catch (\Throwable $th) {
            $item = [];
            \Log::notice('Error sora Item with read: ' . $input['r'] . ' and sora : ' . $input['s']);
        }




        return  $item;
    }
}
