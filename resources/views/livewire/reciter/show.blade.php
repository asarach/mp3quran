@section('meta-tags')
<title>{{$page['title']}}</title>
<meta property="og:title" content="{{$page['title']}}" />
<meta name="twitter:title" content="{{$page['title']}}" />
<meta property="og:title" content="{{$page['title']}}" />
<meta name="description" content="{{$page['description']}}" />
<meta property="og:description" content="{{$page['description']}}" />
<meta name="twitter:description" content="{{$page['description']}}" />
<meta name="keywords" content="{{$page['keywords']}}" />
@endsection
<div class="main reciter-show">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-13">
          <h1>{{$reciter['name']}} - {{$reciter_reads[$active_read]['rewaya_name']}}</h1>
          <div class="header-options">
            @if ($reciter_reads[$active_read]['radio'])
            <button type="button" class="btn btn-primary"@click.prevent="getItemAndPlay(ajax_prefix + '/radio/item?id=' + {{ $reciter_reads[$active_read]['radio'] }})">
              <span class="uni-icon icon-radio" style="color: #fff"></span>
              {{trans('text.listen-to-radio')}}
            </button>
            @endif
            @if ($reciter_reads[$active_read]['itunes'])
            <a href="{{ $reciter_reads[$active_read]['itunes'] }}" target="_blank" class="btn btn-primary">
              <span class="uni-icon icon-headphones" style="color: #fff"></span>
              {{trans('text.itunes')}}
            </a>
            @endif
            @if ($reciter_reads[$active_read]['torrent'])
            <a href="{{ $reciter_reads[$active_read]['torrent'] }}" target="_blank" class="btn btn-primary">
              <span class="uni-icon icon-cloud_download" style="color: #fff"></span>
              {{trans('text.torrent')}}
            </a>
            @endif
          </div>
        </div>
        <div class="col-lg-11 d-flex-cc">
          <livewire:components.header-ads />
        </div>
      </div>
    </div>
  </div>
  <div class="show-body">
    <div class="container">
      <div class="row">
        @if (style_version() == 'r')
        <div class="col-md-5">
          @include('components.desktop-sidebar')
        </div>
        @endif
        <div class="col-lg-19" id="sticky-container">
          <div class="show-filters">
            
            <div class="filter-name">
              <input type="text" class="form-control" name="search" wire:model="search" placeholder="{{ trans('text.search-for-name') }}" />
            </div>
            {{-- <div class="filter-soar like-btn" v-if="soarIncludes(read.read_id)" @click="removeReadFavorite(read.read_id)">
              <span class="uni-icon icon-favorite" style="color: #f5b44b"></span>
            </div>tofixe
            <div class="filter-soar deslike-btn" v-else @click="addReadFavorite(read.read_id)">
              <span class="uni-icon icon-favorite_outline" style="color: #ff0D3A4Df"></span>
            </div> --}}
            @if ($reciter['reads'] && count($reciter['reads']) > 1)
            <div class="filter-rewaya mr-auto">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerIdrewaya" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{$reciter_reads[$active_read]['rewaya_name'] . $reciter_reads[$active_read]['mushaf_name']}}</button>
                <div class="dropdown-menu" aria-labelledby="triggerIdrewaya">
                  @foreach ($reciter['reads'] as $read)
                  <a class="dropdown-item" href="{{ route('reciter.show', ['slug' => $read['slug']]) }}" rel="alternate" hreflang="{{ LaravelLocalization::getCurrentLocale() }}">
                    {{$read['rewaya_name'] . $read['mushaf_name']}}
                  </a>
                  @endforeach
                </div>
              </div>
            </div>
            @endif
          </div>
          <div class="soar-list">
            <div class="row">
              <div class="col-md-12">
                <ul class="list-unstyled">
                  @foreach ($soar_part_a as $sora_a)
                  <li>
                    <card-sora :sora="{{ json_encode($sora_a) }}" rewaya="{{ $reciter_reads[$active_read]['rewaya_name'] }}" read_id="{{ $reciter_reads[$active_read]['read_id'] }}" reciter="{{ $reciter['name'] }}" :share=" {{ json_encode(['title' => $reciter_reads[$active_read]['share_title'], 'url' => $reciter_reads[$active_read]['share_url'], 'description' => $reciter_reads[$active_read]['share_description'] ]) }} "></card-sora>
                  </li>
                  @endforeach
                </ul>
              </div>
              <div class="col-md-12">
                <ul class="list-unstyled">
                  @foreach ($soar_part_b as $sora_b)
                  <li>
                    <card-sora :sora="{{ json_encode($sora_b) }}" rewaya="{{ $reciter_reads[$active_read]['rewaya_name'] }}" read_id="{{ $reciter_reads[$active_read]['read_id'] }}" reciter="{{ $reciter['name'] }}" :share=" {{ json_encode(['title' => $reciter_reads[$active_read]['share_title'], 'url' => $reciter_reads[$active_read]['share_url'], 'description' => $reciter_reads[$active_read]['share_description'] ]) }} "></card-sora>
                  </li>
                  @endforeach
                </ul>
              </div>
            </div>
          </div>
          <report-sora></report-sora>
        </div>
      </div>
    </div>
  </div>
</div>