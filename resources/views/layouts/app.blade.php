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
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css" charset="utf-8">

    <script>
        window.App = {!! json_encode([
                  'csrfToken' => csrf_token(),
                  'urlBase' => url('/'),
                  'style_version' => style_version() ,
                  'current_language' => LaravelLocalization::getCurrentLocale(),
          ]) !!};
    </script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-176648-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-176648-2');
    </script>
    <!-- Global site tag (gtag.js) - Google Ads: 1068260209 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-1068260209"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-1068260209');
    </script>
    {{-- <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script> --}}

    @livewireStyles
    @livewireScripts
    {{-- <script src="https://cdn.jsdelivr.net/gh/livewire/vue@v0.3.x/dist/livewire-vue.js"></script> --}}
    {{-- <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.2/dist/alpine.min.js" defer></script> --}}
    <script src="https://cdn.jsdelivr.net/gh/livewire/turbolinks@v0.1.x/dist/livewire-turbolinks.js" data-turbolinks-eval="false"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    <script src="{{ asset('js/trans/text_'.LaravelLocalization::getCurrentLocale().'.js') }}"></script>
    <script defer src="{{ mix('js/player.js') }}" data-turbolinks-eval="false"></script>
    <script src="{{ mix('js/app.js') }}" defer data-turbolinks-eval="true" data-turbolinks-track="reload"></script>

    {{-- <script src="{{ mix('js/turbolinks.js') }}" defer></script> --}}
    @yield('headerScripts')
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

    <!-- Begin Inspectlet Asynchronous Code -->
    {{-- <script type="text/javascript">
        (function() {
        window._insp = window._insp || [];
        __insp.push(['wid', 1531425017]);
        var ldinsp = function(){
        if(typeof window._inspld != "undefined") return; window._inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=1531425017&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
        setTimeout(ldinsp, 0);
        })();
    </script> --}}
    <!-- End Inspectlet Asynchronous Code -->

    <script src="https://cdn.jsdelivr.net/npm/howler@2.2.1/dist/howler.min.js"></script>

    @yield('page-scripts')
</body>

</html>