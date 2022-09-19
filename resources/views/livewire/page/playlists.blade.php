@section('meta-tags')
<title>{{$page->title}}</title>
<meta property="og:title" content="{{$page->title}}" />
<meta name="twitter:title" content="{{$page->title}}" />
<meta property="og:title" content="{{$page->title}}" />
<meta name="description" content="{{$page->description}}" />
<meta property="og:description" content="{{$page->description}}" />
<meta name="twitter:description" content="{{$page->description}}" />
@endsection
<div class="main playlists-show">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 order-2 order-md-1">
          <h1>{{trans('text.playlists')}}</h1>
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
          <div class="playlists-list">
            @foreach ($playlists as $playlist)
            <div class="card-playlist">
              <div class="load-btn"  @click.prevent="loadPalylist('{{ $playlist->id }}', '{{ $playlist->name }}')" >
                <span class="uni-icon icon-play_arrow1" style="color: #f5b44b"></span>
              </div>
              <h3>{{ $playlist->name }}</h3>
              <div class="delete-btn"  @click.prevent="deletePalylist('{{ $playlist->id }}')">
                <span class="uni-icon icon-clear"></span>
              </div>
            </div>
            @endforeach
          </div>
        </div>
      </div>
    </div>
  </div>
</div>