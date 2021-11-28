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
<div class="main sora-show">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <h1>{{ trans("text.sora") }}</h1>
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
        <div class="col-lg-19 pt-3" id="sticky-container">
          <sora-show :sora="{{ json_encode($sora) }}"></sora-show>
        </div>
      </div>
    </div>
  </div>
</div>