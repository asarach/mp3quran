
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
<div class="main apps-show">
    <div class="show-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 order-2 order-md-1">
                    <h1>{{ trans('text.apps') }}</h1>
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
                    <div class="card-page">
                        <div class="apps-list">
                            <div class="row">
                                @foreach ($apps as $app)
                                <div class="col-md-8">
                                    <a href="{{ route('apps.show', ['slug'=> $app->id]) }}">
                                        <div class="card-app">
                                            <div class="card-apppic">
                                                <img src="{{ $app->getImage() }}" class="img-responsive" alt="{{ $app->title }}" title="{{ $app->title }}" />
                                            </div>
                                            <div class="card-apptitle">
                                                <div class="card-apptitle-name">{{$app->title}}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>