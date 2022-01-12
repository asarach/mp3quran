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
<div class="main home-show" >
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 order-2 order-md-1">
          <h1>{{trans('text.radios')}}</h1>
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
          <div class="show-filters">
            <div class="filter-name">
              <input type="text" class="form-control" name="search" wire:model="search" placeholder="{{ trans('text.search-for-name') }}" />
            </div>
            <div class="filter-rewaya mr-auto">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerIdrewaya" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{ $selected_rewaya['name'] }}  
                </button>
                <div class="dropdown-menu" aria-labelledby="triggerIdrewaya">
                  @foreach ($rewayat as $rewaya)
                  <a class="dropdown-item" href="#" wire:click.prevent="selectRewaya({{ json_encode($rewaya) }})">{{ $rewaya['name'] }}</a>
                  @endforeach
                </div>
              </div>
            </div>
          </div>
          <div class="radios-list">
            <ul class="list-unstyled">
              @foreach ($radios as $radio)
              <li>
                <card-radio :radio="{{ json_encode($radio) }}" :key="{{ $radio['id'] }}">
                  <div class="card-radio">
                    <div class="radio-info">
                      <div class="radio-name">{{$radio['name']}}<span> - {{$radio['rewaya_name']}}</span></div>
                    </div>
                  </div>
                </card-radio>
              </li>
              @endforeach
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>