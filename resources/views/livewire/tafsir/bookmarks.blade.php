@section('meta-tags')
<title>{{$page->title}}</title>
<meta property="og:title" content="{{$page->title}}" />
<meta name="twitter:title" content="{{$page->title}}" />
<meta property="og:title" content="{{$page->title}}" />
<meta name="description" content="{{$page->description}}" />
<meta property="og:description" content="{{$page->description}}" />
<meta name="twitter:description" content="{{$page->description}}" />
@endsection

<div class="main tafsirs-show ">
    <div class="show-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 order-2 order-md-1">
                    <h1>{{trans('text.tafsirs')}}</h1>
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
                    <div class="tafsirs-list tafsirs-bookmarks">
                        <h3>{{ trans('text.tafsirs-bookmarks') }}</h3>
                        <ul class="list-unstyled">
                            @foreach ($tbookmarks as $tbookmark)
                            @if ($tbookmark['tsora'])
                            <li>
                                <div class="card-tafsir spib-sora-{{ $tbookmark['tsora']['id'] }}" class="sora-item {{ $tbookmark['tsora']['id'] }}" id="sora-{{ $tbookmark['tsora']['id'] }}">
                                    <div class="ply-btn btn-loading hiden-ply-btn spib-loading">
                                        <div class="la-line-scale la-sm">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div class="ply-btn btn-pause hiden-ply-btn spib-pause">
                                        <span class="uni-icon icon-pause" style="color: #fff"></span>
                                    </div>
                                    <div class="ply-btn  btn-play shown-ply-btn spib-play" data-url="{{ route('ajax::tsora.item') . '?id=' . $tbookmark['tsora']['id'] }}" data-item="{{ $tbookmark['tsora']['id'] }}" data-type="tsora" data-time="{{ $tbookmark['time'] * 1000 }}">
                                        <span class="uni-icon icon-play_arrow1" style="color: #fff"></span>
                                    </div>
                                    <div class="tafsir-info">
                                        <div class="tafsir-name">{{$tbookmark['tsora']['name']}}<span> - {{$tbookmark['tsora']['tafsir_name']}}</span></div>
                                    </div>
                                    <div wire:click="deleteBookmark({{ $tbookmark['id']}})" class="btn-bookmark-delete mr-auto" data-toggle="tooltip" data-placement="bottom" title="{{ trans('text.remove-from-bookmarks') }}">
                                        <span class="uni-icon icon-clear"></span>
                                    </div>
                                </div>
                            </li>
                            @endif

                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>