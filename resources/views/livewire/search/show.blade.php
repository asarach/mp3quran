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
<div class="main search-show">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <h1>{{trans('text.search')}}</h1>
          <div class="header-options"></div>
        </div>
        <div class="col-lg-19">
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
              @if (!$reads->isEmpty())
              <li class="nav-item">
                <a class="nav-link @if($active_tab == 'reads') active @endif" href="#" wire:click.prevent="showTab('reads')">{{trans('text.reads')}}</a>
              </li>
              @endif
              @if (!$reciters->isEmpty())
              <li class="nav-item">
                <a class="nav-link @if($active_tab == 'reciters') active @endif" href="#" wire:click.prevent="showTab('reciters')">{{trans('text.reciters')}}</a>
              </li>
              @endif
              @if (!$radios->isEmpty())
              <li class="nav-item">
                <a class="nav-link @if($active_tab == 'radios') active @endif" href="#" wire:click.prevent="showTab('radios')">{{trans('text.radios')}}</a>
              </li>
              @endif
              @if (!$videos->isEmpty())
              <li class="nav-item">
                <a class="nav-link @if($active_tab == 'videos') active @endif" href="#" wire:click.prevent="showTab('videos')">{{trans('text.videos')}}</a>
              </li>
              @endif
              @if (!$tvs->isEmpty())
              <li class="nav-item">
                <a class="nav-link @if($active_tab == 'tvs') active @endif" href="#" wire:click.prevent="showTab('tvs')">{{trans('text.tvs')}}</a>
              </li>
              @endif
            </ul>
          </div>
          <div class="tab-content">
            @if ($active_tab == 'reads' )
            <div class="search-tab-pane">
              @foreach ($reads as $read)
              <read :read="{{ json_encode($read) }}"></read>
              @endforeach
              @if ($reads->currentPage() < $reads->lastPage())
                <button type="button" class="btn btn-success" @click="moreReads()">
                  <span class="uni-icon icon-more-horizontal" style="color: #fff"></span>
                  {{trans('text.lead-more')}}
                </button>
                @endif
            </div>
            @endif
            @if ($active_tab == 'reciters' )
            <div class="search-tab-pane">
              @foreach ($reciters as $reciter)
              <card-reciter :reciter="{{ json_encode($reciter) }}"></card-reciter>
              @endforeach
              @if ($reciters->currentPage() < $reciters->lastPage())
                <button type="button" class="btn btn-success" @click="moreReciters()">
                  <span class="uni-icon icon-more-horizontal" style="color: #fff"></span>
                  {{trans('text.lead-more')}}
                </button>
                @endif
            </div>
            @endif
            @if ($active_tab == 'radios' )
            <div class="search-tab-pane">
              @foreach ($radios as $radio)
              <card-radio :radio="{{ json_encode($radio) }}"></card-radio>
              @endforeach
              @if ($radios->currentPage() < $radios->lastPage())
                <button type="button" class="btn btn-success" @click="moreRadios()">
                  <span class="uni-icon icon-more-horizontal" style="color: #fff"></span>
                  {{trans('text.lead-more')}}
                </button>
                @endif
            </div>
            @endif
            @if ($active_tab == 'videos' )
            <div class="search-tab-pane">
              @foreach ($videos as $video)
              <card-video :video="{{ json_encode($video) }}"></card-video>
              @endforeach
              @if ($videos->currentPage() < $videos->lastPage())
                <button type="button" class="btn btn-success" @click="moreVideos()">
                  <span class="uni-icon icon-more-horizontal" style="color: #fff"></span>
                  {{trans('text.lead-more')}}
                </button>
                @endif
            </div>
            @endif

            @if ($active_tab == 'tvs' )
            <div class="search-tab-pane">
              @foreach ($tvs as $tv)
              <card-tv :tv="{{ json_encode($tv) }}"></card-tv>
              @endforeach
              @if ($tvs->currentPage() < $tvs->lastPage())
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
  </div>
</div>