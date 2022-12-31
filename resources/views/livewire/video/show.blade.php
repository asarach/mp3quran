@section('meta-tags')
<title>{{$page['title']}}</title>
<meta property="og:title" content="{{$page['title']}}" />
<meta name="twitter:title" content="{{$page['title']}}" />
<meta property="og:title" content="{{$page['title']}}" />
<meta name="description" content="{{$page['description']}}" />
<meta property="og:description" content="{{$page['description']}}" />
<meta name="twitter:description" content="{{$page['description']}}" />
@endsection
<div class="main video-show">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 order-2 order-md-1">
          <h1>{{ trans("text.videos") }}</h1>
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
          <div class="card-video full-width">
            <div class="card-videoplayer">
              @if ($video['type'] == '0' || $video['type'] == '1')
              <iframe width="420" height="315"
              src="https://www.youtube.com/embed/{{ $video['youtube_id'] }}">
              </iframe>
              @elseif(!empty($video['url']))
              <div class="dplayer" data-url="{{$video['url']}}"></div>
              @endif
            </div>
            <div class="card-videotitle">
              <div class="card-videotitle-name">{{ $video['title'] }}</div>
              <div class="card-videotitle-job">{{ $video['reciter_name'] }}</div>
              <div class="dropdown btn-download">
                <button class="btn btn-primary  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="uni-icon icon-file_download" style="color: #fff"></span>
                  {{ trans("text.download") }}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  @if ($video['type'] != '0')
                  <a class="dropdown-item" href="{{ $video['url'] }} + '?download=1'" target="_blank" download>{{ trans("text.direct-download") }}</a>
                  @endif
                  <a class="dropdown-item" href="{{ route('video.download', ['download_id' => $video['id']]) }}">
                    {{ trans("text.download-with-logo") }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>