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
<div class="main uploads-show">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <h1>{{ trans("text.uploads") }}</h1>
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
          <div class="card-page">
            <file-uploader></file-uploader>
            <div class="uploads-list">
              <div class="row">
                @foreach ($uploads as $upload)
                <div class="col-md-8">
                  <div class="card-upload">
                    <div class="card-uploadpic">
                      <img src="{{ $upload['image'] }}" class="img-responsive" alt="{{ $upload['title'] }}" title="{{ $upload['title'] }}" />
                    </div>
                    <div class="card-uploadtitle">
                      <div class="card-uploadtitle-name">
                        {{ $upload['title'] }}
                      </div>
                    </div>
                    <div class="card-btn">
                      <a class="btn btn-primary" href="$upload['url']" target="_blank" role="button">{{ trans("text.download") }}</a>
                    </div>
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
</div>