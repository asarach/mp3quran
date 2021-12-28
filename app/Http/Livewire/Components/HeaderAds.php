<?php

namespace App\Http\Livewire\Components;

use App\Ad;
use Carbon\Carbon;
use Livewire\Component;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;

class HeaderAds extends Component
{
    public function render()
    {
        $locale = App::getLocale();
        $current_time = Carbon::now();
        $header_ads = Ad::where('end_date', '>', $current_time)
            ->where('start_date', '<', $current_time)
            ->where('status', 1)
            ->where('place', 1)
            ->where('locale', $locale)
            ->orderBy('order_num', 'ASC')
            ->get()
            ->toArray();

        return view('livewire.components.header-ads', compact('header_ads'));
    }
}
