@section('meta-tags')
<title>{{$page->title}}</title>
<meta property="og:title" content="{{$page->title}}" />
<meta name="twitter:title" content="{{$page->title}}" />
<meta property="og:title" content="{{$page->title}}" />
<meta name="description" content="{{$page->description}}" />
<meta property="og:description" content="{{$page->description}}" />
<meta name="twitter:description" content="{{$page->description}}" />
@endsection
<div class="main special-rewayat-show">
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
                    <div class="special-rewayat-reads letters">
                        <div class="reads-list letters">
                            @foreach ($reads as $letter => $group)
                            <div id="letter_{{ $letter }}" class="special-rewayat-read-group">
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
                                                <a rel="alternate" href="{{ route('reciter.show', ['slug'=> $read['slug']]) }}">
                                                    {{ $read['title'] }}
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>