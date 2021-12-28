<!DOCTYPE html>
<html lang="{{ LaravelLocalization::getCurrentLocale() }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}"> @yield('meta')

  <title>{{ $metas['seo_title']}}</title>
  <meta name="description" content="{{ $metas['seo_description']}}" />
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

  <!-- Fonts -->
  <link href="{{ asset('plugins/icomoon/styles.css') }}" rel="stylesheet">

  <!-- Styles -->
  <link href="{{ mix('css/app2.0.css') }}" rel="stylesheet" type="text/css" charset="utf-8">

  <script>
    window.App = {
            !!
            json_encode([
                'csrfToken' => csrf_token(),
                'name' => settings('app_name'),
                'urlBase' => getUrlBase(),
                'user' => Auth::user()
            ]) !!
        };
  </script>
</head>

<body class="rtl">
  <div id="app">
    <div class="drawer-content">
      <div class="container main-container">
        <div class="wrapper">
          @yield('page-top') @yield('content') @yield('page-bottom')
          <div class="copyright-text">
            {!! trans('front.copyright', ['year' => Carbon\Carbon::now()->year])!!}
            تطوير <a href="https://drsrv.com/" target="_blank">Drsrv</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

</html>