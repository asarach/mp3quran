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
          <div class="header-right">
            <h1>{{ trans("text.download-video-with-logo") }}</h1>
            <div class="header-options"></div>
          </div>
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
          <div class="card-logo-video" data-id="{{ $video['id'] }}" data-url="{{ $video['url'] }}">
            <div class="video">
              <h3 class="mb-3">{{ trans("text.logo-video-title-1") }}</h3>
              <div class="dplayer" data-url="{{ $video['url'] }}"></div>
            </div>
            <div class="image">
              <h3>{{ trans("text.logo-video-select-logo") }}</h3>
              @include('components.image-uploader', ['type'=> 'video-logo'])
              <small id="imageError" style="display: none;" class="form-text text-danger">
                {{ trans("text.logo-video-error-image") }}
              </small>
            </div>
            <h3 class="mb-0 mt-2">
              {{ trans("text.logo-video-select-place") }}
            </h3>
            <div class="select-place">
              <div class="top-right">
                <div class="custom-control custom-radio">
                  <input type="radio" name="place" value="tr" class="custom-control-input" id="customCheckTR" />
                  <label class="custom-control-label" for="customCheckTR">{{
                    trans("text.top-right")
                    }}</label>
                </div>
              </div>
              <div class="top-center">
                <div class="custom-control custom-radio">
                  <input type="radio" name="place" value="tc" class="custom-control-input" id="customCheckTC" />
                  <label class="custom-control-label" for="customCheckTC">{{
                    trans("text.top-center")
                    }}</label>
                </div>
              </div>
              <div class="top-left">
                <div class="custom-control custom-radio">
                  <input type="radio" name="place" value="tl" class="custom-control-input" id="customCheckTL" />
                  <label class="custom-control-label" for="customCheckTL">
                    {{ trans("text.top-left") }}
                  </label>
                </div>
              </div>
              <div class="bottom-right">
                <div class="custom-control custom-radio">
                  <input type="radio" name="place" value="br" class="custom-control-input" id="customCheckBR" />
                  <label class="custom-control-label" for="customCheckBR">{{
                    trans("text.bottom-right")
                    }}</label>
                </div>
              </div>
              <div class="bottom-center">
                <div class="custom-control custom-radio">
                  <input type="radio" name="place" value="bc" class="custom-control-input" id="customCheckBC" />
                  <label class="custom-control-label" for="customCheckBC">{{
                    trans("text.bottom-center")
                    }}</label>
                </div>
              </div>
              <div class="bottom-left">
                <div class="custom-control custom-radio">
                  <input type="radio" name="place" value="bl" class="custom-control-input" id="customCheckBL" />
                  <label class="custom-control-label" for="customCheckBL">{{
                    trans("text.bottom-left")
                    }}</label>
                </div>
              </div>
            </div>
            <small id="placeError" style="display: none;" class="form-text text-danger">
              {{ trans("text.logo-video-error-place") }}
            </small>
            <div class="video-state">
              <button id="generateVideoBtn" type="button" class="btn btn-primary">
                {{ trans("text.logo-video-generate-video") }}
              </button>
              <a  style="display: none;" id="downloadVideoBtn" target="_blank" href="" class="btn btn-success">
                {{ trans("text.logo-video-download-video") }}
              </a>
              <div  style="display: none;" id="progressVideo" class="video-progress">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 0%;" ariaValuenow="0" aria-valuemin="0" aria-valuemax="100">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>