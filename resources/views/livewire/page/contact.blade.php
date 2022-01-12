@section('meta-tags')
<title>{{$page->title}}</title>
<meta property="og:title" content="{{$page->title}}" />
<meta name="twitter:title" content="{{$page->title}}" />
<meta property="og:title" content="{{$page->title}}" />
<meta name="description" content="{{$page->description}}" />
<meta property="og:description" content="{{$page->description}}" />
<meta name="twitter:description" content="{{$page->description}}" />
<meta name="keywords" content="{{$page->keywords}}" />
@endsection
<div class="main contact-show">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 order-2 order-md-1">
          <h1>{{$page->title}}</h1>
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
          <div class="card-page">
            <div class="row">
              <div class="col-md-12">
                <div class="page-text">
                  {!! $page->content !!}
                </div>
              </div>
              <div class="col-md-12">
                <form class="form-horizontal" role="form" action="{{ route('page.store.contact') }}" method="POST">
                  @honeypot
                  @csrf
                  <div class="page-body">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="inputName" class="control-label">
                            {{ trans("text.name") }}
                          </label>
                          <input type="text" name="name" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="inputEmail" class="control-label">
                            {{trans("text.email") }}
                          </label>
                          <input type="email" name="email" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputTitle" class="control-label">
                        {{ trans("text.subject") }}
                      </label>
                      <input type="text" name="subject" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="inputMessage" class="control-label">
                        {{ trans("text.message") }}
                      </label>
                      <textarea name="body" class="form-control" rows="5"></textarea>
                    </div>
                  </div>
                  <div class="contact-footer">
                    <button type="submit" class="btn btn-success">
                      {{ trans("text.send") }}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>