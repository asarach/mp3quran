@section('meta-tags')
<title>{{$page->title}}</title>
<meta property="og:title" content="{{$page->title}}" />
<meta name="twitter:title" content="{{$page->title}}" />
<meta property="og:title" content="{{$page->title}}" />
<meta name="description" content="{{$page->description}}" />
<meta property="og:description" content="{{$page->description}}" />
<meta name="twitter:description" content="{{$page->description}}" />
<link href="https://vjs.zencdn.net/7.20.3/video-js.css" rel="stylesheet" />
@endsection
<div class="main tvs-show">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 order-2 order-md-1">
          <h1>{{trans('text.live-tvs')}}</h1>
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
          <div class="tvs-list">
            <div class="card-tv">
              <h3>{{$tv[0]['name']}}</h3>
              <video id="my-video" class="video-js" controls preload="auto" width="720" height="405" poster="/img/{{$tv[0]['slug']}}.webp" data-setup='{"liveui": true}'>
                <source src="{{$tv[0]['url']}}" type="application/x-mpegURL" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@section('page-scripts')
<script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
@endsection