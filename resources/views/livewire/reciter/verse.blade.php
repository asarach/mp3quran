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
        <div class="col-lg-5 order-2 order-md-1">
          <h1>{{ trans("text.sora") }}</h1>
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
        <div class="col-lg-19 pt-3" id="sticky-container">
          <div class="sora-item sora-show-item showoptions" id="sora-{{ $sora['id'] }}">
            <div class="sora-info">
              <div class="sora-name">
                {{ trans('text.sora-name-text', ['sora' => $sora['name'] ])}} - {{ trans('text.sora-verse-nbr', ['nbr' => $sora['verse'] ])}}
              </div>
              <div class="sora-reciter">
                {{ trans('text.sora-reciter-text', ['reciter' => $sora['reciter'] ])}}
              </div>
              <div class="sora-verse-text">
                {{ $sora['text']}}
              </div>
              <div class="sora-rewaya">
                {{ trans('text.sora-rewaya-text', ['rewaya' => $sora['rewaya'] ])}}
              </div>
            </div>
            <div class="ssi-btns">
              <div class="ply-btn btn-loading hiden-ply-btn">
                <div class="la-line-scale la-sm">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="ply-btn btn-pause hiden-ply-btn">
                <span class="uni-icon icon-pause" style="color: #fff"></span>
                {{ trans("text.pause") }}
              </div>
              <div class="ply-btn btn-play shown-ply-btn" data-url="{{ route('ajax::soar.item') . '?r=' . $sora['read_id'] . '&s=' . $sora['sora_id'] }}" data-item="{{ $sora['id'] }}" data-type="sora" data-time="{{ $sora['start_time'] }}">
                <span class="uni-icon icon-play_arrow" style="color: #fff"></span>
                {{ trans("text.play") }}
              </div>
              <a class="download-btn" href="{{ downloadUrl($sora['file']) }}">
                <div>
                  <span class="uni-icon icon-cloud_download"></span>
                  {{ trans("text.download") }}
                </div>
              </a>
            </div>
            <div class="sora-options">
              <div class="sora-btn share-btn" v-tooltip="trans('text.share')" data-title="{{ $sora['share_title'] }}" data-url="{{ $sora['share_url'] }}" data-description="{{ $sora['share_description'] }}">
                <span class="uni-icon icon-share"></span>
              </div>
              <div class="sora-btn link-btn clipboard-btn" v-tooltip="trans('text.copy-link')" data-text="{{ $sora['file'] }}">
                <span class="uni-icon icon-link"></span>
              </div>
              <div class="sora-btn playlist-add" v-tooltip="trans('text.add-to-playlist')" data-url="{{ route('ajax::soar.item') . '?r=' . $sora['read_id'] . '&s=' . $sora['sora_id'] }}">
                <span class="uni-icon icon-playlist_add"></span>
              </div>
              <div class="sora-btn like-btn" v-tooltip="trans('text.add-to-favorite')" data-id="{{ $sora['id'] }}" data-group="soar">
                <span class="uni-icon icon-favorite_outline"></span>
              </div>
              <div class="sora-btn deslike-btn" v-tooltip="trans('text.remove-from-favorite')" data-id="{{ $sora['id'] }}" data-group="soar">
                <span class="uni-icon icon-favorite" style="color: #f5b44b"></span>
              </div>
              <div class="sora-btn report-btn" v-tooltip="trans('text.report-sora')" data-read="{{ $sora['read_slug'] }}" data-sora="{{ $sora['id'] }}" :data-prefix="ajax_prefix">
                <span class="uni-icon icon-warning"></span>
              </div>
            </div>
          </div>

          @include('components.report-sora')
          @include('components.share')
        </div>
      </div>
    </div>
  </div>
</div>