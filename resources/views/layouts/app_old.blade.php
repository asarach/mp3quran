<!DOCTYPE html>
<html lang="{{ LaravelLocalization::getCurrentLocale() }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ $metas['seo_title']}}</title>
  <meta name="description" content="{{ $metas['seo_description']}}" />
  <meta name="keywords" content="{{ $metas['seo_keywords']}}" />
  <meta property="og:title" content="{{ $metas['seo_title']}}" />
  <meta property="og:type" content="" />
  <meta property="og:image" content="{{ $metas['image']}}" />
  <meta property="og:description" content="{{ $metas['seo_description']}}" />
  <meta property="og:locale" content="ar_AR" />
  <meta property="og:title" content="{{ $metas['seo_title']}}" />
  <meta property="og:url" content="{{ $metas['url']}}" />
  <meta property="og:site_name" content="{{ $metas['name']}}" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="{{ $metas['name']}}">
  <meta name="twitter:title" content="{{ $metas['seo_title']}}">
  <meta name="twitter:description" content="{{ $metas['seo_description']}}">
  <meta name="twitter:image" content="{{ $metas['image']}}">

  <!-- Scripts -->
  <script defer src="{{ mix('js/app-client3.js') }}"></script>

  <!-- Styles -->
  <link href="{{ asset('css/animate.min.css') }}" rel="stylesheet">
  <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css" charset="utf-8">
    
  <script>
    @foreach($data as $key => $val)
    window.{{$key}} = @json($val);
    @endforeach          
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
  <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>



</head>

<body class="{{ LocaleDirection() }}" dir="{{ LocaleDirection() }}">
  {!! $ssr !!}
  @yield('content')
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
  <script type="text/javascript">
    (function() {
  window._insp = window._insp || [];
  __insp.push(['wid', 1531425017]);
  var ldinsp = function(){
  if(typeof window._inspld != "undefined") return; window._inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=1531425017&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
  setTimeout(ldinsp, 0);
  })();
  </script>
  <!-- End Inspectlet Asynchronous Code -->
</body>

</html>