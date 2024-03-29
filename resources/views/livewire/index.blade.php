@section('meta-tags')
<title>{{$page->title}}</title>
<meta property="og:title" content="{{$page->title}}" />
<meta name="twitter:title" content="{{$page->title}}" />
<meta property="og:title" content="{{$page->title}}" />
<meta name="description" content="{{$page->description}}" />
<meta property="og:description" content="{{$page->description}}" />
<meta name="twitter:description" content="{{$page->description}}" />
@endsection
<div class="main home-show">
    <div class="show-header has-nav-tabs">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 order-2 order-md-1">
                    @if (style_version() != 'm')
                    <div class="header-options">
                        <div class="quick-access">
                            <a href="#" class="btn btn-primary">
                                <span class="uni-icon icon-slow_motion_video" style="color: #fff"></span>
                                {{ trans("text.quick-access") }}
                            </a>
                        </div>
                    </div>
                    @endif
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
                    <div class="nav-tabs-wrapper">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a href="#" class="nav-link active" class="nav-link">{{ trans("text.all") }}</a>
                            </li>
                            @if ($show_tadabor)
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('tadabor.index') }}" exact>
                                    {{ trans("text.tadabor-btn") }}
                                </a>
                            </li>
                            @endif
                            @if (style_version() == 'm')
                            <li class="nav-item">
                                <div class="quick-access">
                                    <a href="#" class="nav-link">
                                        <span class="uni-icon icon-slow_motion_video" style="color: #fff"></span>
                                        {{ trans("text.quick-access") }}
                                    </a>
                                </div>
                            </li>
                            @endif
                            @if (style_version() == 'm')
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('newsletter.show') }}" exact>
                                    {{ trans("text.newsletter") }}
                                </a>
                            </li>
                            @endif
                        </ul>
                    </div>
                    <div class="show-filters">
                        <div class="filter-soar">
                            <input type="text" class="form-control" wire:model="query" placeholder="{{ trans('text.search-for-reciter') }}" />
                        </div>
                        <div class="filter-rewaya mr-auto">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerIdrewaya" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    @if (false)
                                    {{ $rewayat[$rewaya]['name'] }}
                                    @else
                                    {{ trans("text.select-rewaya") }}
                                    @endif
                                </button>
                                <div class="dropdown-menu" aria-labelledby="triggerIdrewaya">
                                    <a class="dropdown-item" href.prevent="#" wire:click="$emit('selectRewaya', 0 )">{{ trans("text.all") }}</a>
                                    @foreach ($rewayat as $rewaya)
                                    <a class="dropdown-item" href.prevent="#" wire:click="$emit('selectRewaya', {{ $rewaya['id'] }} )">{{ $rewaya['name'] }}</a>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="home-reads letters">
                        @if ('all' == 'all')
                        <div class="reads-list letters">
                            @foreach ($reads as $letter => $group)


                            <div id="letter_{{ $letter }}" class="home-read-group">
                                @if ($group and $letter)
                                <h3 class="hrg-letter">
                                    {{ $letter }}
                                </h3>
                                @endif
                                @if($group)
                                <div class="row">
                                    @foreach ($group as $read)
                                    @if ($read['reciter_name'])
                                    <div class="col-md-8">
                                        <div class="card-read" title="{{ $read['soar_count'] }}">
                                            <div class="card-read-title">
                                                <a rel="alternate" href=" {{ LaravelLocalization::localizeUrl(route('reciter.show', ['slug'=> $read['slug']]) ) }} ">
                                                    {{ $read['reciter_name'] }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    @endif
                                    @endforeach

                                </div>
                                @endif
                            </div>
                            @endforeach
                        </div>

                        <div class="side-letters">
                            <div id="#sticky-letters" style="width: 32px">
                                <ul class="list-unstyled" data-turbolinks="false">
                                    @foreach ($reads as $letter => $group)
                                    <li>
                                        <a href="#letter_{{ $letter }}">{{ $letter }}</a>
                                    </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                        @else

                        <div class="reads-list">
                            <div class="row">
                                @foreach ($reads as $read)
                                @if ($read['reciter_name'])
                                <div class="col-md-8">
                                    <div class="card-read">
                                        <div class="card-read-title">
                                            <a rel="alternate" href=" {{ LaravelLocalization::localizeUrl(route('reciter.show', ['slug'=> $read['slug']]) ) }} ">
                                                {{ $read['reciter_name'] }}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                @endif
                                @endforeach
                            </div>
                        </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('components.quick-access')
</div>