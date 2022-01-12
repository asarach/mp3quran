<div class="main videos-index">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 order-2 order-md-1">
          <h1>{{trans('text.videos')}}</h1>
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
          <div class="videos-list pt-3">
            <div class="card-deck">
              @foreach ($videos as $key => $video)
              <card-video :video="{{ json_encode($video) }}"></card-video>
              @if (($key + 1) % 4 == 0)
            </div>
            <div class="card-deck">
              @endif
              @endforeach
            </div>
          </div>
          @if ($videos->currentPage() < $videos->lastPage())
          <div class="load-more">
            <button type="button" class="btn btn-light" wire:click.prevent="loadMore()">{{ trans('text.lead-more')}}</button>
          </div>
          @endif
        </div>
      </div>
    </div>
  </div>
</div>