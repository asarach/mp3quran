<div class="main video-show">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="header-right">
            <h1>{{ trans("text.download-video-with-logo") }}</h1>
            <div class="header-options"></div>
          </div>
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
          <card-logo-video :video="{{ json_encode($video) }}"></card-logo-video>
        </div>
      </div>
    </div>
  </div>
</div>