@section('meta-tags')
<title>{{$page['title']}}</title>
<meta property="og:title" content="{{$page['title']}}" />
<meta name="twitter:title" content="{{$page['title']}}" />
<meta property="og:title" content="{{$page['title']}}" />
<meta name="description" content="{{$page['description']}}" />
<meta property="og:description" content="{{$page['description']}}" />
<meta name="twitter:description" content="{{$page['description']}}" />
@endsection
<div class="main search-show">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 order-2 order-md-1">
          <h1>{{trans('text.search')}}</h1>
          <div class="header-options"></div>
        </div>
        <div class="col-lg-19 order-1 order-md-2">
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
          <div class="nav-tabs-wrapper">
            <ul class="nav nav-tabs">
              @if ( false and $reads['total'] > 0 )
              <li class="nav-item">
                <a class="nav-link @if($active_tab == 'reads') active @endif" href="#" wire:click.prevent="showTab('reads')">{{trans('text.reads')}}</a>
              </li>
              @endif
              @if ($reciters['total'] > 0)
              <li class="nav-item">
                <a class="nav-link @if($active_tab == 'reciters') active @endif" href="#" wire:click.prevent="showTab('reciters')">{{trans('text.reciters')}}</a>
              </li>
              @endif
              @if ($radios['total'] > 0)
              <li class="nav-item">
                <a class="nav-link @if($active_tab == 'radios') active @endif" href="#" wire:click.prevent="showTab('radios')">{{trans('text.radios')}}</a>
              </li>
              @endif
              @if ($videos['total'] > 0)
              <li class="nav-item">
                <a class="nav-link @if($active_tab == 'videos') active @endif" href="#" wire:click.prevent="showTab('videos')">{{trans('text.videos')}}</a>
              </li>
              @endif
              @if ($tvs['total'] > 0)
              <li class="nav-item">
                <a class="nav-link @if($active_tab == 'tvs') active @endif" href="#" wire:click.prevent="showTab('tvs')">{{trans('text.tvs')}}</a>
              </li>
              @endif
            </ul>
          </div>
          <div class="tab-content">
            @if (false and $active_tab == 'reads' and false )
            <div class="search-tab-pane">
              @foreach ($reads['data'] as $read)
              @include('components.card-read', [ 'read' => $read])
              @endforeach
              @if ($reads['current_page'] < $reads['last_page'])
                <button type="button" class="btn btn-success" @click="moreReads()">
                  <span class="uni-icon icon-more-horizontal" style="color: #fff"></span>
                  {{trans('text.lead-more')}}
                </button>
                @endif
            </div>
            @endif
            @if ($active_tab == 'reciters' )
            <div class="search-tab-pane">
              @foreach ($reciters['data'] as $reciter)
              @include('components.card-reciter ', [ 'reciter' => $reciter])
              @endforeach
              @if ($reciters['current_page'] < $reciters['last_page'])
                <button type="button" class="btn btn-success" @click="moreReciters()">
                  <span class="uni-icon icon-more-horizontal" style="color: #fff"></span>
                  {{trans('text.lead-more')}}
                </button>
                @endif
            </div>
            @endif
            @if ($active_tab == 'radios' )
            <div class="search-tab-pane">
              @foreach ($radios['data'] as $radio)
              @include('components.card-radio ', [ 'radio' => $radio])
              @endforeach
              @if ($radios['current_page'] < $radios['last_page'])
                <button type="button" class="btn btn-success" @click="moreRadios()">
                  <span class="uni-icon icon-more-horizontal" style="color: #fff"></span>
                  {{trans('text.lead-more')}}
                </button>
                @endif
            </div>
            @endif
            @if ($active_tab == 'videos' )
            <div class="search-tab-pane">
              @foreach ($videos['data'] as $video)
              <card-video :video="{{ json_encode($video) }}"></card-video>
              @endforeach
              @if ($videos['current_page'] < $videos['last_page'])
                <button type="button" class="btn btn-success" @click="moreVideos()">
                  <span class="uni-icon icon-more-horizontal" style="color: #fff"></span>
                  {{trans('text.lead-more')}}
                </button>
                @endif
            </div>
            @endif

            @if ($active_tab == 'tvs' )
            <div class="search-tab-pane">
              @foreach ($tvs['data'] as $tv)
              <card-tv :tv="{{ json_encode($tv) }}"></card-tv>
              @endforeach
              @if ($tvs['current_page'] < $tvs['last_page'])
                <button type="button" class="btn btn-success" @click="moreTvs()">
                  <span class="uni-icon icon-more-horizontal" style="color: #fff"></span>
                  {{trans('text.lead-more')}}
                </button>
                @endif
            </div>
            @endif
          </div>
        </div>
      </div>
    </div>
    @include('components.share')
  </div>
</div>