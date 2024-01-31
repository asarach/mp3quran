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
                    <h1>{{$page->title }}</h1>
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
                    <div class="tafsirs-list pt-3">
                        <div class="row">
                        @foreach ($tsoras as $tsora_chunk)
                            <div class="col">
                                <ul class="list-unstyled">
                                    @foreach ($tsora_chunk as $tsora)
                                    <li>
                                        <div class="card-tafsir  spib-tsora-20000{{ $tsora['tafsir_id'] }}-{{ $tsora['id'] }}"  id="tsora-20000{{ $tsora['tafsir_id'] }}-{{ $tsora['id'] }}">
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
                                            <div class="ply-btn  btn-play shown-ply-btn spib-play" data-url="{{ route('ajax::tsora.item') . '?id=' . $tsora['id']}}" data-item="20000{{ $tsora['tafsir_id'] }}-{{ $tsora['id'] }}" data-type="tsora">
                                                <span class="uni-icon icon-play_arrow1" style="color: #fff"></span>
                                            </div>
                                            <div class="tafsir-info">
                                                <div class="tafsir-name">{{$tsora['name']}}</div>
                                            </div>
                                            <a class=" download-btn ddf" data-toggle="tooltip" data-placement="bottom" title="{{ trans('text.download') }}"  href="{{ downloadUrl($tsora['url']) }}">
                                                <span class="uni-icon icon-cloud_download"></span>
                                            </a>

                                            @auth
                                            <div class="btn-tbookmark btn-bookmark-tafsir" data-toggle="tooltip" data-placement="bottom" title="{{ trans('text.play-to-bookmark') }}">
                                                {{ trans('text.bookmark-tafsir') }}
                                            </div>
                                            @else
                                            <div class="btn-tbookmark" data-toggle="tooltip" data-placement="bottom" title="{{ trans('text.login-and-play-to-bookmark') }}">
                                                {{ trans('text.bookmark-tafsir') }}
                                            </div>
                                            @endif
                                           
                                        </div>
                                    </li>
                                    @endforeach
                                </ul>
                            </div>
                            @endforeach
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>