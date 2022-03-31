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
<div class="main app-show">
    <div class="show-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-13 order-2 order-md-1">
                    <h1>{{$app->getLocaleTitle()}}</h1>
                </div>
                <div class="col-lg-11 d-flex-cc order-1 order-md-2">
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
                    <div class="card-app">
                        <div class="card-apppic">
                            <img src="{{ $app->getImage() }}" class="img-responsive" alt="{{ $app->getLocaleTitle() }}" title="{{ $app->getLocaleTitle() }}" />
                        </div>
                        <div class="card-apptitle">
                            <div class="card-apptitle-name">{{$app->getLocaleTitle()}}</div>
                        </div>
                        @if ($app->android)
                        <div class="card-btn app-btn-android">
                            <a class="btn btn-primary" href="{{ $app->android }}" target="_blank" role="button">
                                <span class="icon-android"></span>
                                Android
                            </a>
                        </div>
                        @endif
                        @if ($app->huawei)
                        <div class="card-btn app-btn-huawei">
                            <a class="btn btn-primary" href="{{ $app->huawei }}" target="_blank" role="button">
                                <span class="icon-huawei"></span>
                                Huawei
                            </a>
                        </div>
                        @endif
                        @if ($app->apple)
                        <div class="card-btn app-btn-apple">
                            <a class="btn btn-primary" href="{{ $app->apple }}" target="_blank" role="button">
                                <span class="icon-apple"></span>
                                ios
                            </a>
                        </div>
                        @endif

                        <div class="card-btn app-btn-share">
                            <button class="btn btn-primary" @click=" shareItem('{{$page['title']}}', '{{ Request::url()}}', '{{$page['description']}}')" role="button">
                                <span class="icon-share ml-2"></span>
                                {{ trans('text.share') }}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>