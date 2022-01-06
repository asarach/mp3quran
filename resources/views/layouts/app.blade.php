<!DOCTYPE html>
<html lang="{{ LaravelLocalization::getCurrentLocale() }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta property="og:url" content="{{ request()->url()}}" />
    <meta property="og:site_name" content="{{ settings('name')}}" />
    <meta name="twitter:image" content="">
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="{{ settings('name')}}">
    <meta property="og:locale" content="{{ LaravelLocalization::getCurrentLocale() }}" />
    <meta property="og:image" content="" />
    <meta property="og:type" content="" />

    @yield('meta-tags')
    <meta name="turbolinks-cache-control" content="no-cache">

    <!-- Styles -->
    <link href="{{ asset('css/animate.min.css') }}" rel="stylesheet">
    <link href="{{ asset('plugins/icomoon/style.css') }}" rel="stylesheet">
    <link href="{{ mix('css/app2.0.css') }}" rel="stylesheet" type="text/css" charset="utf-8">

    <script>
        window.App = {!! json_encode([
                  'csrfToken' => csrf_token(),
                  'urlBase' => getFrontUrlBase(),
                  'style_version' => style_version() ,
                  'current_language' => LaravelLocalization::getCurrentLocale(),
          ]) !!};          
    </script>
    @livewireScripts
    <script src="https://cdn.jsdelivr.net/gh/livewire/turbolinks@v0.1.x/dist/livewire-turbolinks.js" data-turbolinks-eval="false"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    <script src="{{ asset('js/trans/text_'.LaravelLocalization::getCurrentLocale().'.js') }}"></script>
    <script defer src="{{ mix('js/player2.0.js') }}" data-turbolinks-eval="false"></script>
    <script src="{{ mix('js/app2.0.js') }}" defer data-turbolinks-eval="true" data-turbolinks-track="reload"></script>
    @yield('headerScripts')
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-176648-2"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-176648-2');
    </script>
        
 
</head>

<body class="{{ LocaleDirection() }}" dir="{{ LocaleDirection() }}">
    @if (style_version() == 'm')
    @include('mobile')
    @else
    @include('desktop')
    @endif
    @if ($popup)
    <div class="popupOverlay">
        <div class="popupBox" id="popupBox">
            <a class="close" data-id="{{ $popup->id }}">X</a>
            <a href="{{ $popup->url }}" target="_blank">
                <img src="{{ $popup->getImage('xl')  }}" alt="{{ $popup->name }}">
                <div class="caption">
                    {!! $popup->text !!}
                </div>
            </a>
        </div>
    </div>
    @endif

    @yield('page-scripts')
</body>

</html>