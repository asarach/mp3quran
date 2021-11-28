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
<div class="main tadabor-index">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <h1>{{ trans("text.tadabor") }}</h1>
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
            <div class="filter-sora mr-auto">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerIdsora" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{ $selected_sora['name'] }}
                </button>
                <div class="dropdown-menu" aria-labelledby="triggerIdsora">
                  @foreach ($soar as $sora)
                  <a class="dropdown-item" href="#" wire:click.prevent="selectSora({{ json_encode($sora) }})">{{ $sora['name'] }}</a>
                  @endforeach
                </div>
              </div>
            </div>
          </div>
          <div class="tadabor-list">
            <div class="row">
              <div class="col-md-24">
                @foreach ($items as $item)
                <tadabor-item :item="{{ json_encode($item) }}" :islink="true"></tadabor-item>
                @endforeach
              </div>
            </div>
          </div>
          <div class="tadabor-pagination">
            <div class="btn btn-secondary" wire:click.prevent="loadMore()">{{ trans('text.lead-more') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>