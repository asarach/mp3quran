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
    <link href="{{ mix('css/errors2.0.css') }}" rel="stylesheet" type="text/css" charset="utf-8">
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
            width: 280px;
            max-width: 50%;
        }

        .error-page {
            background: #fff;
            margin: 3rem 0;
            padding: 2rem;
            text-align: center;
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
                    <div class="tb-search">
                        <form role="form" action="/search" method="GET" class="search-form">
                            <input name="s" type="search" placeholder="بحث" aria-label="Search" value="" class="form-control mr-sm-2">
                            <button type="submit" class="btn btn-search">
                                <span aria-label="Magnify icon" role="img" class="material-design-icon magnify-icon">
                                    <svg fill="#b5bbbf" width="24" height="24" viewBox="0 0 24 24" class="material-design-icon__svg">
                                        <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z">
                                            <title>Magnify icon</title>
                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </form>
                    </div>
                    <div class="tb-social">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a href="https://www.facebook.com/MP3Quran" target="_blank" title="Facebook" class="facebook-icon">
                                    <span aria-label="Facebook icon" role="img" class="material-design-icon facebook-icon">
                                        <svg fill="#4B69B0" width="24" height="24" viewBox="0 0 24 24" class="material-design-icon__svg">
                                            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z">
                                                <title>Facebook icon</title>
                                            </path>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://twitter.com/mp3quran" target="_blank" title="Twitter" class="twitter-icon">
                                    <span aria-label="Twitter icon" role="img" class="material-design-icon twitter-icon">
                                        <svg fill="#37B1E1" width="24" height="24" viewBox="0 0 24 24" class="material-design-icon__svg">
                                            <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z">
                                                <title>Twitter icon</title>
                                            </path>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://www.instagram.com/mp3quran_net/" target="_blank" title="Instagram" class="instagram-icon">
                                    <span aria-label="Instagram icon" role="img" class="material-design-icon instagram-icon">
                                        <svg fill="#C83466" width="24" height="24" viewBox="0 0 24 24" class="material-design-icon__svg">
                                            <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z">
                                                <title>Instagram icon</title>
                                            </path>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://www.youtube.com/channel/UCd321Kctv53F5c9lpxgOywg/videos" target="_blank" title="Youtube" class="youtube-icon">
                                    <span aria-label="Youtube icon" role="img" class="material-design-icon youtube-icon">
                                        <svg fill="#E83F3A" width="24" height="24" viewBox="0 0 24 24" class="material-design-icon__svg">
                                            <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z">
                                                <title>Youtube icon</title>
                                            </path>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://soundcloud.com/mp3quran_net" target="_blank" title="Soundcloud" class="soundcloud-icon">
                                    <span aria-label="Soundcloud icon" role="img" class="material-design-icon soundcloud-icon">
                                        <svg fill="#FF5E00" width="24" height="24" viewBox="0 0 24 24" class="material-design-icon__svg">
                                            <path d="M11.56,8.87V17H20.32V17C22.17,16.87 23,15.73 23,14.33C23,12.85 21.88,11.66 20.38,11.66C20,11.66 19.68,11.74 19.35,11.88C19.11,9.54 17.12,7.71 14.67,7.71C13.5,7.71 12.39,8.15 11.56,8.87M10.68,9.89C10.38,9.71 10.06,9.57 9.71,9.5V17H11.1V9.34C10.95,9.5 10.81,9.7 10.68,9.89M8.33,9.35V17H9.25V9.38C9.06,9.35 8.87,9.34 8.67,9.34C8.55,9.34 8.44,9.34 8.33,9.35M6.5,10V17H7.41V9.54C7.08,9.65 6.77,9.81 6.5,10M4.83,12.5C4.77,12.5 4.71,12.44 4.64,12.41V17H5.56V10.86C5.19,11.34 4.94,11.91 4.83,12.5M2.79,12.22V16.91C3,16.97 3.24,17 3.5,17H3.72V12.14C3.64,12.13 3.56,12.12 3.5,12.12C3.24,12.12 3,12.16 2.79,12.22M1,14.56C1,15.31 1.34,15.97 1.87,16.42V12.71C1.34,13.15 1,13.82 1,14.56Z">
                                                <title>Soundcloud icon</title>
                                            </path>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tb-languages">
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