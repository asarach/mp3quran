@section('meta-tags')
<title>{{$page->title}}</title>
<meta property="og:title" content="{{$page->title}}" />
<meta name="twitter:title" content="{{$page->title}}" />
<meta property="og:title" content="{{$page->title}}" />
<meta name="description" content="{{$page->description}}" />
<meta property="og:description" content="{{$page->description}}" />
<meta name="twitter:description" content="{{$page->description}}" />
@endsection
<div class="main reciters-show">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 order-2 order-md-1">
          <h1>{{trans('text.reciters')}}</h1>
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
          <div class="show-filters">
            <div class="filter-name">
              <input type="text" class="form-control" name="search" wire:model="search" placeholder="{{ trans('text.search-for-reciter') }}" />
            </div>
            <div class="filter-letters">
              <ul class="list-inline">
                <li class="list-inline-item" wire:click.prevent="selectLetter('')">{{trans('text.all')}}</li>
                @foreach ($letters as $letter)
                @if ($letter)
                <li class="list-inline-item" wire:click.prevent="selectLetter('{{ $letter }}')">{{$letter}}</li>
                @endif
                @endforeach
              </ul>
            </div>
          </div>
          <div class="reciters-list">
            @foreach ($reciters as $reciter)
            @if ($reciter['slug'] && $reciter['name'])
            <div class="card-reciter">
              <a href="{{ route('reciter.show', ['slug'=> $reciter['slug']]) }}" rel="alternate" hreflang="{{ LaravelLocalization::getCurrentLocale() }}" class="card-reciter-name">{{$reciter['name']}}</a>
            </div>
            @endif
            @endforeach
          </div>
        </div>
      </div>
    </div>
  </div>
</div>