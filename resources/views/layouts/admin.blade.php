<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Mp3quran | Admin</title>
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <!-- Font Awesome -->
  <link rel="stylesheet" href="/plugins/fontawesome/css/all.min.css">
  <link rel="stylesheet" href="/plugins/icomoon_admin/styles.css">

  <!-- Theme style -->
  <link rel="stylesheet" href="{{ mix('css/admin2.2.css') }}">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700">
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
  <script>
    window.App = {!! json_encode([
              'csrfToken' => csrf_token(),
              'name' => settings('app_name'),
              'urlBase' => getUrlBase(),
              'appUrl' => config('app.url'),
              'user' => Auth::user()
      ]) !!};
  </script>
</head>

<body class="skin-blue sidebar-toggled rtl">
  <div class="page-wrapper chiller-theme" id="app">
    <!-- main-header -->
    <header class="main-header">
      <!-- Header Navbar -->
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="{{route('index')}}">
          <span class="logo-mini"><b>M</b>Q</span>
          <span class="logo-lg"><b>Mp3</b>Quran</span>
        </a>
        <a id="toggled-sidebar" class="btn btn-sm btn-navbar" href="#">
          <i class="fas fa-bars"></i>
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav navbar-right mr-auto">
            <div class="btn-group">
              <clear-cache></clear-cache>
              <a href="{{ route('logout') }}" class="btn btn-navbar" onclick="event.preventDefault();
                           document.getElementById('logout-form').submit();">
                <span class="icon-switch" style="font-size: 18px;margin-top: 3px;"></span>
              </a>
              <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                {{ csrf_field() }}
              </form>
            </div>
            <div class="btn-group">
              <router-link :to="prefix + 'settings'" role="button" class="btn btn-navbar dropdown-toggle"
                data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-cog"></i>
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
        <div class="sidebar-header">
          <div class="user-pic">
            <img class="img-responsive img-rounded" src="{{$user->getAvatar()}}" alt="User picture">
          </div>
          <div class="user-info">
            <span class="user-name">{{$user->name}}</span>
          </div>
        </div>
        <!-- sidebar-search  -->
        <div class="sidebar-menu">
          <ul>
            <li class="header-menu">
              <span>{{ trans('front.general')}}</span>
            </li>
            <li>
              <router-link :to="prefix">
                <i class="uni-icon icon-home4"></i>
                <span>{{ trans('front.index')}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'reciters'">
                <i class="uni-icon icon-users4"></i>
                <span>{{ trans('text.reciters')}}</span>
                <span class="badge badge-pill badge-info">{{$counts['reciters']}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'reads'">
                <i class="uni-icon icon-mic2"></i>
                <span>{{ trans('text.reads')}}</span>
                <span class="badge badge-pill badge-info">{{$counts['reads']}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'special_reads'">
                <i class="uni-icon icon-mic2"></i>
                <span>{{ trans('text.special_reads')}}</span>
                <span class="badge badge-pill badge-info">{{$counts['special_reads']}}</span>

              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'videos'">
                <i class="uni-icon icon-clapboard-play"></i>
                <span>{{ trans('text.videos')}}</span>
                <span class="badge badge-pill badge-info">{{$counts['videos']}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'radios'">
                <i class="uni-icon icon-radio"></i>
                <span>{{ trans('text.radios')}}</span>
                <span class="badge badge-pill badge-info">{{$counts['radios']}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'tvs'">
                <i class="uni-icon icon-tv"></i>
                <span>{{ trans('text.tvs')}}</span>
                <span class="badge badge-pill badge-info">{{$counts['tvs']}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'tadabors'">
                <i class="fas fa-book-reader"></i>
                <span>{{ trans('text.tadabors')}}</span>
                <span class="badge badge-pill badge-info">{{$counts['tadabors']}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'reports'">
                <i class="fas fa-exclamation-triangle"></i>
                <span>{{ trans('text.reports')}}</span>
                <span class="badge badge-pill badge-warning">{{$counts['reports']}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'tafsirs'">
                <i class="fas fa-exclamation-triangle"></i>
                <span>{{ trans('text.tafsirs')}}</span>
              </router-link>
            </li>


            <li class="header-menu">
              <span>{{ trans('front.extra')}}</span>
            </li>
            <li>
              <router-link :to="prefix + 'menus'">
                <i class="uni-icon icon-more2"></i>
                <span>{{ trans('front.menu')}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'nl_messages'">
                <i class="uni-icon icon-megaphone"></i>
                <span>{{ trans('front.newsletters')}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'rewayat'">
                <i class="uni-icon icon-stack2"></i>
                <span>{{ trans('front.rewayat')}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'special_rewayat'">
                <i class="uni-icon icon-stack2"></i>
                <span>{{ trans('front.special_rewayat')}}</span>
              </router-link>
            </li>
            
            <li>
              <router-link :to="prefix + 'mushafs'">
                <i class="uni-icon icon-more2"></i>
                <span>{{ trans('front.mushafs')}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'vgroups'">
                <i class="uni-icon icon-more2"></i>
                <span>{{ trans('front.vgroups')}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'soar'">
                <i class="fas fa-quran"></i>
                <span>{{ trans('text.soar')}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'servers'">
                <i class="uni-icon icon-server"></i>
                <span>{{ trans('front.servers')}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'apps'">
                <i class="uni-icon icon-iphone"></i>
                <span>{{ trans('text.apps')}}</span>
              </router-link>
            </li>

            <li>
              <router-link :to="prefix + 'users'">
                <i class="fa fa-users"></i>
                <span>{{ trans('front.users')}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'pages'">
                <i class="fa fa-file"></i>
                <span>{{ trans('front.pages')}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'ads'" exact>
                <i class="uni-icon icon-megaphone"></i>
                <span>{{ trans('front.ads')}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'messages'">
                <i class="fa fa-envelope-open-text"></i>
                <span>{{ trans('text.messages')}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'languages'">
                <i class="uni-icon icon-earth"></i>
                <span>{{ trans('front.languages')}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'translations'" exact>
                <i class="fa fa-language"></i>
                <span>{{ trans('front.translations')}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'links'" exact>
                <i class="fa fa-link"></i>
                <span>{{ trans('front.links')}}</span>
              </router-link>
            </li>
            <li>
              <router-link :to="prefix + 'imo'" exact>
                <i class="fa fa-server"></i>
                <span>{{ trans('front.imo-apis')}}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- sidebar-menu  -->
      </div>
    </nav>
    <!-- sidebar-wrapper  -->
    <main class="page-content">
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </main>
    <confirmation></confirmation>
    <notifications
      position="bottom left"
      group="admin"
      animation-type="velocity"
      :animation="animation"
      classes="desktop-notifications"
    />
    
    <!-- page-content" -->
  </div>


  <!-- REQUIRED JS SCRIPTS -->

  <!-- AdminLTE App -->
  <script src="{{ asset('js/trans/admin_'.LaravelLocalization::getCurrentLocale().'.2.'. settings('translations_version').'.js') }}"></script>
  <script src="{{ mix('/js/admin2.2.js') }}"></script>
  <script src="{{ asset('plugins/ckeditor/ckeditor.js')}}" type="text/javascript"></script>
</body>

</html>