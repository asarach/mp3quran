@section('meta-tags')
<title>{{$page['title']}}</title>
<meta property="og:title" content="{{$page['title']}}" />
<meta name="twitter:title" content="{{$page['title']}}" />
<meta property="og:title" content="{{$page['title']}}" />
<meta name="description" content="{{$page['description']}}" />
<meta property="og:description" content="{{$page['description']}}" />
<meta name="twitter:description" content="{{$page['description']}}" />
@endsection
<div class="main reciter-show">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-13  order-2 order-md-1">
          <h1>{{$reciter['name']}} - {{$reciter_reads[$active_read]['rewaya_name']}}</h1>
          <div class="header-options">
            @if ($reciter_reads[$active_read]['radio'])
            <button type="button" class="btn btn-primary ply-btn btn-play" data-url="{{ route('ajax::radio.item') . '?id=' .   $reciter_reads[$active_read]['radio'] }}" data-item="100002-{{ $reciter_reads[$active_read]['radio'] }}" data-type="radio">
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
            @if ($reciter_reads[$active_read]['torrent'] && style_version() != 'm')
            <a href="{{ $reciter_reads[$active_read]['torrent'] }}" target="_blank" class="btn btn-primary">
              <span class="uni-icon icon-cloud_download" style="color: #fff"></span>
              {{trans('text.torrent')}}
            </a>
            @endif
          </div>
        </div>
        <div class="col-md-11 d-flex-cc order-1 order-md-2">
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
                    @include('components.card-sora', [
                    'sora' => $sora_a,
                    'rewaya' => $reciter_reads[$active_read]['rewaya_name'],
                    'reciter' => $reciter['name'] ,
                    'read_id' => $reciter_reads[$active_read]['read_id'] ,
                    'share' => [
                      'title' => $reciter_reads[$active_read]['share_title'],
                      'url' => $reciter_reads[$active_read]['share_url'],
                      'description' => $reciter_reads[$active_read]['share_description']
                      ]
                    ])
                  </li>
                  @endforeach
                </ul>
              </div>
              <div class="col-md-12">
                <ul class="list-unstyled">
                  @foreach ($soar_part_b as $sora_b)
                  <li>
                    @include('components.card-sora', [
                    'sora' => $sora_b,
                    'rewaya' => $reciter_reads[$active_read]['rewaya_name'],
                    'reciter' => $reciter['name'] ,
                    'read_id' => $reciter_reads[$active_read]['read_id'] ,
                    'share' => [
                      'title' => $reciter_reads[$active_read]['share_title'],
                      'url' => $reciter_reads[$active_read]['share_url'],
                      'description' => $reciter_reads[$active_read]['share_description']
                      ]
                    ])
                  </li>
                  @endforeach
                </ul>
              </div>
            </div>
          </div>
          @include('components.report-sora')
          @include('components.share')
        </div>
      </div>
    </div>
  </div>
</div>