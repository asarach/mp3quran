@section('meta-tags')
<title>{{$page['title']}}</title>
<meta property="og:title" content="{{$page['title']}}" />
<meta name="twitter:title" content="{{$page['title']}}" />
<meta property="og:title" content="{{$page['title']}}" />
<meta name="description" content="{{$page['description']}}" />
<meta property="og:description" content="{{$page['description']}}" />
<meta name="twitter:description" content="{{$page['description']}}" />
<meta name="keywords" content="{{$page['keywords']}}" />
@endsection
<div class="main reciter-show">
    <div class="show-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-13  order-2 order-md-1">
                    <h1>{{$page['title']}}</h1>
                </div>
                <div class="col-md-11 d-flex-cc order-1 order-md-2">
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
                    <div class="soar-list">
                        <div class="sora-download download-all">
                            تحميل المصحف كاملاً
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <ul class="list-unstyled px-2">
                                    @foreach ($soar_part_a as $sora_a)
                                    <a href="{{ str_replace('mp3quran.net/' ,'mp3quran.net/download/',   $sora_a['sora_audio']) }}">
                                        <li class="sora-download">
                                            <span class="uni-icon icon-cloud_download"></span>
                                            {{ $sora_a['sora_name'] }}
                                        </li>
                                    </a>
                                    @endforeach
                                </ul>
                            </div>
                            <div class="col-12">
                                <ul class="list-unstyled px-2">
                                    @foreach ($soar_part_b as $sora_b)
                                    <a href="{{ str_replace('mp3quran.net/' ,'mp3quran.net/download/',   $sora_a['sora_audio']) }}">
                                        <li class="sora-download">
                                            <span class="uni-icon icon-cloud_download"></span>
                                            {{ $sora_b['sora_name'] }}
                                        </li>
                                    </a>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>