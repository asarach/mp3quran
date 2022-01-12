<div class="main about-show">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5  order-2 order-md-1">
          <h1>{{ trans("text.newsletter") }}</h1>
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
          <div class="card-page header-newsletters">
            <livewire:newsletter.subscribe/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>