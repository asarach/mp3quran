@section('meta-tags')
<title>{{$page->title}}</title>
<meta property="og:title" content="{{$page->title}}" />
<meta name="twitter:title" content="{{$page->title}}" />
<meta property="og:title" content="{{$page->title}}" />
<meta name="description" content="{{$page->description}}" />
<meta property="og:description" content="{{$page->description}}" />
<meta name="twitter:description" content="{{$page->description}}" />
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
            @foreach ($tvs['data'] as $tv)
            <div class="card-tv">
              <a href="{{ route('tv.show', ['tvid' =>$tv['id']   ]) }}">
                <h3>{{ $tv['name'] }}</h3>
              </a>
            </div>
            @endforeach
          </div>
        </div>
      </div>
    </div>
  </div>
</div>