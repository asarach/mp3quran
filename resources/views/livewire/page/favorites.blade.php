@section('meta-tags')
<title>{{$page['title']}}</title>
<meta property="og:title" content="{{$page['title']}}" />
<meta name="twitter:title" content="{{$page['title']}}" />
<meta property="og:title" content="{{$page['title']}}" />
<meta name="description" content="{{$page['description']}}" />
<meta property="og:description" content="{{$page['description']}}" />
<meta name="twitter:description" content="{{$page['description']}}" />
@endsection
<div class="main favorite-show">
  <div class="show-header has-nav-tabs">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 order-2 order-md-1">
          <h1>{{trans('text.favorites')}}</h1>
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
          <div>
            <div class="nav-tabs-wrapper">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                @if (!empty($reads) )
                <li class="nav-item" role="presentation">
                  <a class="nav-link @if($active_tab == 'reads') active @endif  " id="reads-tab" data-toggle="tab" href="#reads" role="tab" aria-controls="reads" aria-selected="true">
                    {{ trans("text.reciters") }}
                  </a>
                </li>
                @endif
                @if (!empty($soar) )
                <li class="nav-item" role="presentation">
                  <a class="nav-link @if($active_tab == 'soar') active @endif  " id="soar-tab" data-toggle="tab" href="#soar" role="tab" aria-controls="soar" aria-selected="false">
                    {{ trans("text.soar") }}
                  </a>
                </li>
                @endif
                @if (!empty($radios) )
                <li class="nav-item" role="presentation">
                  <a class="nav-link @if($active_tab == 'radios') active @endif  " role="presentation" id="radios-tab" data-toggle="tab" href="#radios" role="tab" aria-controls="radios" aria-selected="false">
                    {{ trans("text.radios") }}
                  </a>
                </li>
                @endif
                @if (!empty($videos) )
                <li class="nav-item" role="presentation">
                  <a class="nav-link @if($active_tab == 'videos') active @endif  " id="videos-tab" data-toggle="tab" href="#videos" role="tab" aria-controls="videos" aria-selected="false">
                    {{ trans("text.videos") }}
                  </a>
                </li>
                @endif
              </ul>
            </div>
            <div class="tab-content" id="myTabContent">
              <div class="favorite-tab-pane tab-pane fade  @if($active_tab == 'reads') show active @endif   " id="reads" role="tabpanel" aria-labelledby="reads-tab">
                <div class="row">
                  @foreach ($reads as $read)
                  <div class="col-md-12">
                    @include('components.card-sora', [ 'read' => $read])
                  </div>
                  @endforeach
                </div>
              </div>
              <div class="favorite-tab-pane tab-pane fade  @if($active_tab == 'soar') show active @endif " id="soar" role="tabpanel" aria-labelledby="soar-tab">
                <div class="soar-list">
                  <ul class="list-unstyled">
                    @foreach ($soar as $sora)
                    <li>
                      @include('components.card-sora', [
                      'sora' => $sora,
                      'rewaya' => $sora['rewaya_name'],
                      'reciter' => $sora['reciter_name'] ,
                      'read_id' => $sora['read_id'] ,
                      'share' => [
                      'title' => $sora['share_title'],
                      'url' => $sora['share_url'],
                      'description' => $sora['share_description']
                      ]
                      ])
                    </li>
                    @endforeach
                  </ul>
                </div>
              </div>
              <div class="favorite-tab-pane tab-pane fade  @if($active_tab == 'radios') show active @endif " id="radios" role="tabpanel" aria-labelledby="radios-tab">
                @foreach ($radios as $radio)
                @include('components.card-radio ', [ 'radio' => $radio])
                @endforeach
              </div>
              <div class="favorite-tab-pane tab-pane fade  @if($active_tab == 'videos') show active @endif " id="videos" role="tabpanel" aria-labelledby="videos-tab">
                @foreach ($videos as $video)
                <div class="card card-video">
                  <a
                    href="{{ route('video.show', ['slug'=> $video['slug']]) }}"
                    rel="alternate"
                    hreflang="{{ LaravelLocalization::getCurrentLocale() }}"
                  >
                    <img
                      src="{{$video['image']}}"
                      class="card-img-top"
                      alt="{{$video['title']}}"
                      title="{{$video['title']}}"
                    />
                  </a>
                  <div class="card-body">
                    <a
                      href="{{ route('video.show', ['slug'=> $video['slug']]) }}"
                      rel="alternate"
                      hreflang="{{ LaravelLocalization::getCurrentLocale() }}"
                    >
                      <h4 class="card-title">{{ $video['reciter_name'] }}</h4>
                    </a>
                  </div>
                </div>
                @endforeach
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  @include('components.share')
</div>