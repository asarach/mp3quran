<div class="main videos-index">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <h1>{{trans('text.videos')}}</h1>
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
          <div class="show-filters">
            <div class="filter-name">
              <input type="text" class="form-control" name="search" wire:model="search" placeholder="{{ trans('text.search-for-name') }}" />
            </div>
          </div>
          <div class="videos-list">
            @foreach ($playlists as $playlist)
            <card-playlist :playlist="{{ json_encode($playlist) }}"></card-playlist>
            @endforeach
          </div>
          @if ($playlists->currentPage() < $playlists->lastPage())
          <div class="load-more">
            <button type="button" class="btn btn-light" wire:click.prevent="loadMore()">{{ trans('text.lead-more')}}</button>
          </div>
          @endif
        </div>
      </div>
    </div>
  </div>
</div>