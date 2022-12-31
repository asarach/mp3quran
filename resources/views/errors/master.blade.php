<!DOCTYPE html>
<html lang="{{ LaravelLocalization::getCurrentLocale() }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @yield('meta')
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link href="{{ mix('css/errors2.2.css') }}" rel="stylesheet" type="text/css" charset="utf-8">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8N6M1XX9E1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8N6M1XX9E1');
    </script>

    <style>
        .tbl-dropdown.show {
            opacity: 1;
            height: auto;
            display: block;
        }

        .error-page img {
            width: 100px;
            max-width: 50%;
        }

        .errors{
            padding-top: 50px; 
            min-height: calc(100vh - 106px);
        }

        .error-page {
            background: #fff;
            margin: 3rem 0;
            padding: 2rem;
            text-align: center;
            border-radius: 0.5rem;
        }

        .error-page h1 {
            font-size: 1.5rem;
            margin: 1rem 0;
        }
    </style>
</head>

<body class="{{ LocaleDirection() }}" dir="{{ LocaleDirection() }}">
    <div id="app" data-server-rendered="true">
        <div class="__cov-progress" style="background-color:rgb(19, 91, 55);opacity:0;top:0px;left:0px;width:0%;height:2px;transition:opacity 0.6s;"></div>
        <div class="desktop-ui">
            <div class="top-bar">
                <div class="container d-flex">
                    <div class="tb-logo"><a href="/{{ LaravelLocalization::getCurrentLocale() }}/" rel="alternate" hreflang="{{ LaravelLocalization::getCurrentLocale() }}" class="helpful-link main-logo"><img src="/img/logo2.png" alt="" class="user-image"></a></div>
                    
                    <div class="tb-languages mr-auto">
                        <div class="tbl-btn">
                            <span aria-label="Earth icon" role="img" class="material-design-icon earth-icon">
                                <svg fill="#b5bbbf" width="24" height="24" viewBox="0 0 24 24" class="material-design-icon__svg">
                                    <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z">
                                        <title>Earth icon</title>
                                    </path>
                                </svg>
                            </span>
                            English
                        </div>
                        <div class="tbl-dropdown">
                            <div class="close-lan">
                                <span aria-label="Close icon" role="img" class="material-design-icon close-icon">
                                    <svg fill="#0D3A4D" width="24" height="24" viewBox="0 0 24 24" class="material-design-icon__svg">
                                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">
                                            <title>Close icon</title>
                                        </path>
                                    </svg>
                                </span>
                            </div>
                            <div class="row">
                                <div class="col-8"><a href="/ar" class="tbl-item">العربية</a></div>
                                <div class="col-8"><a href="/eng" class="tbl-item">English</a></div>
                                <div class="col-8"><a href="/fr" class="tbl-item">Français</a></div>
                                <div class="col-8"><a href="/ru" class="tbl-item">Pусский</a></div>
                                <div class="col-8"><a href="/de" class="tbl-item">Deutsch</a></div>
                                <div class="col-8"><a href="/es" class="tbl-item">Español</a></div>
                                <div class="col-8"><a href="/tr" class="tbl-item">Türkçe</a></div>
                                <div class="col-8"><a href="/cn" class="tbl-item">中文</a></div>
                                <div class="col-8"><a href="/th" class="tbl-item">ไทย</a></div>
                                <div class="col-8"><a href="/ur" class="tbl-item">اردو</a></div>
                                <div class="col-8"><a href="/bn" class="tbl-item">বাংলা</a></div>
                                <div class="col-8"><a href="/bs" class="tbl-item">Bosanski</a></div>
                                <div class="col-8"><a href="/ug" class="tbl-item">ئۇيغۇرچە</a></div>
                                <div class="col-8"><a href="/fa" class="tbl-item">فارسی</a></div>
                                <div class="col-8"><a href="/tg" class="tbl-item">тоҷикӣ</a></div>
                                <div class="col-8"><a href="/ml" class="tbl-item">മലയാളം</a></div>
                                <div class="col-8"><a href="/tl" class="tbl-item">Tagalog</a></div>
                                <div class="col-8"><a href="/id" class="tbl-item">Indonesia</a></div>
                                <div class="col-8"><a href="/pt" class="tbl-item">Português</a></div>
                                <div class="col-8"><a href="/ha" class="tbl-item">Hausa</a></div>
                                <div class="col-8"><a href="/sw" class="tbl-item">Kiswahili</a></div>
                            </div>
                        </div>
                    </div>

                    @auth
                    <div class="header-user dropdown">
                        <button class="btn btn-profile-menu dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                            <i class="uni-icon icon-account_circle"></i> {{ Auth::user()->name }}
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item   @if(request()->url()  == LaravelLocalization::localizeUrl('favorites') ) active @endif" href="{{ route('page.favorites') }}">
                                <span class="icon-favorite"></span>
                                {{trans('text.favorites')}}
                            </a>
                            <a class="dropdown-item   @if(request()->url()  == LaravelLocalization::localizeUrl('playlists') ) active @endif" href="{{ route('page.playlists') }}">
                                <span class="icon-playlist_play"></span>
                                {{trans('text.playlists')}}
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                            <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                <span class="icon-signout"></span>
                                {{ trans('auth.logout') }}
                            </a>
                        </div>
                    </div>
                    @else
                    <div class="header-user">
                        <a class="btn-login" href="{{ route('login') }}">
                            <i class="far fa-user"></i> {{ trans('auth.login') }}
                        </a>
                        @if(Route::has('register'))
                        <a class="btn-register" href="{{ route('register') }}">
                            <i class="far fa-user"></i> {{ trans('auth.register') }}
                        </a>
                        @endif
                    </div>
                    @endauth
                </div>
            </div>
            @yield('content')
            <footer>
                <div class="container">
                    <div class="helpful-links">
                        <ul class="list-inline">
                            <li class="list-inline-item"><a href="/{{ LaravelLocalization::getCurrentLocale() }}/about" rel="alternate" hreflang="{{ LaravelLocalization::getCurrentLocale() }}" class="helpful-link helpful-link">نبذة عنا</a></li>
                            <li class="list-inline-item"><a href="/{{ LaravelLocalization::getCurrentLocale() }}/apps" rel="alternate" hreflang="{{ LaravelLocalization::getCurrentLocale() }}" class="helpful-link helpful-link">التطبيقات</a></li>
                            <li class="list-inline-item"><a href="/{{ LaravelLocalization::getCurrentLocale() }}/api" rel="alternate" hreflang="{{ LaravelLocalization::getCurrentLocale() }}" class="helpful-link helpful-link">API</a></li>
                            <li class="list-inline-item"><a href="/{{ LaravelLocalization::getCurrentLocale() }}/contact-us" rel="alternate" hreflang="{{ LaravelLocalization::getCurrentLocale() }}" class="helpful-link helpful-link">تواصل معنا</a></li>
                            <li class="list-inline-item"><a href="/{{ LaravelLocalization::getCurrentLocale() }}/sitemap" rel="alternate" hreflang="{{ LaravelLocalization::getCurrentLocale() }}" class="helpful-link helpful-link">خريطة الموقع</a></li>
                        </ul>
                    </div>
                    <!---->
                </div>
            </footer>
            <script>
                $(document).ready(function () {
                $('.tbl-btn').click(function (e) { 
                    $('.tbl-dropdown').toggleClass('show');
                });
                $('.close-lan').click(function (e) { 
                    $('.tbl-dropdown').removeClass('show');
                });
            });
            </script>
        </div>
    </div>
</body>

</html>