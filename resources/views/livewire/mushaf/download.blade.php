@section('meta-tags')
<title>{{$page->title}}</title>
<meta property="og:title" content="{{$page->title}}" />
<meta name="twitter:title" content="{{$page->title}}" />
<meta property="og:title" content="{{$page->title}}" />
<meta name="description" content="{{$page->description}}" />
<meta property="og:description" content="{{$page->description}}" />
<meta name="twitter:description" content="{{$page->description}}" />
@endsection
<div class="main downloads-show">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 order-2 order-md-1">
          <h1>{{ trans("text.quran-download") }}</h1>
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
            <form>
              <div class="filter-search">
                <input type="text" class="form-control" wire:model="search" placeholder="{{ trans('text.search') }}" />
              </div>
            </form>
            <div class="filter-category mr-auto">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerIdcategory" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{ $category['name'] }}
                </button>
                <div class="dropdown-menu" aria-labelledby="triggerIdcategory">
                  @foreach ($categories as $category)
                  <a class="dropdown-item" href="#" wire:click.prevent="selectCategory({{ json_encode($category) }})">{{ $category['name'] }}</a>
                  @endforeach
                </div>
              </div>
            </div>
          </div>
          <div class="download-card">
            <table class="table table-striped table-sm table-responsive">
              <thead>
                <tr>
                  <th scope="col" class="th-index">
                    #
                  </th>
                  <th scope="col" class="th-file">
                    <span class="sortable-col">{{ trans("text.file") }}
                      @if ( $downloads_order == 'name' && $downloads_dir == 'asc' )
                      <a href="#" wire:click.prevent="orderDownloads('desc',  'name')">
                        <span class="uni-icon icon-arrow_downward"></span>
                      </a>
                      @elseif($downloads_order == 'name' && $downloads_dir == 'desc')
                      <a href="#" wire:click.prevent="orderDownloads('asc',  'name')">
                        <span class="uni-icon icon-arrow_upward"></span>
                      </a>
                      @else
                      <a href="#" wire:click.prevent="orderDownloads('desc',  'name')">
                        <span class="uni-icon icon-swap_vert"></span>
                      </a>
                      @endif
                    </span>
                  </th>
                  <th scope="col" class="th-download">
                    {{ trans("text.download") }}
                  </th>
                  <th scope="col" class="th-added">
                    <span class="sortable-col">{{ trans("text.added") }}
                      @if ($downloads_order == 'date' && $downloads_dir == 'asc')
                      <a href="#" wire:click.prevent="orderDownloads('desc',  'date')">
                        <span class="uni-icon icon-arrow_upward"></span>
                      </a>
                      @elseif($downloads_order == 'date' && $downloads_dir == 'desc' )
                      <a href="#" wire:click.prevent="orderDownloads('asc',  'date')">
                        <span class="uni-icon icon-arrow_downward"></span>
                      </a>
                      @else
                      <a href="#" wire:click.prevent="orderDownloads('desc',  'date')">
                        <span class="uni-icon icon-swap_vert"></span>
                      </a>
                      @endif
                    </span>
                  </th>
                  <th scope="col" class="th-size">
                    <span class="sortable-col">{{ trans("text.size") }}
                      @if ($downloads_order == 'sizeb' && $downloads_dir == 'asc')
                      <a href="#" wire:click.prevent="orderDownloads(  'desc',  'sizeb')">
                        <span class="uni-icon icon-arrow_upward"></span>
                      </a>
                      @elseif($downloads_order == 'sizeb' && $downloads_dir == 'desc')
                      <a href="#" wire:click.prevent="orderDownloads(  'asc',  'sizeb')">
                        <span class="uni-icon icon-arrow_downward"></span>
                      </a>
                      @else
                      <a href="#" wire:click.prevent="orderDownloads( 'desc',  'sizeb')">
                        <span class="uni-icon icon-swap_vert"></span>
                      </a>
                      @endif
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                @foreach ($downloads as $index => $download)
                <tr>
                  <td class="th-index">{{ $index + 1 }}</td>
                  <td scope="row" class="th-file">{{ $download->name }}</td>
                  <td class="th-download">
                    <a href="{{ str_replace('http://', 'https://', $download->url) }}" class="btn btn-sm btn-info">
                      {{ trans("text.download") }}
                    </a>
                  </td>
                  <td class="th-added">{{ $download->date }}</td>
                  <td class="th-size">{{ $download->size }}</td>
                </tr>
                @endforeach
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>