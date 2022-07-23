<div>
    <div id="app">
        <div class="desktop-ui">
            <div class="top-bar">
                <div class="container d-flex">
                    <div class="tb-logo">
                        <a href="{{ route('index') }}" class="main-logo">
                            <img src="{{ asset('img/logo2.png') }}" class="user-image" alt />
                        </a>
                    </div>
                    <div class="tb-search">
                        <form class="search-form" method="GET" role="form" action="{{ route('search.get') }}">
                            <input name="s" class="form-control mr-sm-2" type="search" placeholder="{{ trans('text.search') }}" aria-label="Search" />
                            <button type="submit" class="btn btn-search">
                                <span class="uni-icon icon-magnifying-glass" style="color: #b5bbbf"></span>
                            </button>
                        </form>
                    </div>
                    <div class="tb-radio">
                        <button type="button" class="btn btn-success" @click.prevent="getItemAndPlay(ajax_prefix + '/main-radio')">
                            <span class="uni-icon icon-radio" style="color: #fff"></span>
                            {{ trans("text.live-radio") }}
                        </button>
                    </div>
                    @if (1)
                    <div class="header-newsletters mr-auto">
                        <livewire:newsletter.subscribe />
                    </div>
                    @else
                    <div class="tb-social">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a href="{{settings('facebook')}}" class="facebook-icon" target="_blank" title="Facebook">
                                    <span class="uni-icon icon-facebook" style="color: #4B69B0"></span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="{{settings('twitter')}}" class="twitter-icon" target="_blank" title="Twitter">
                                    <span class="uni-icon icon-twitter" style="color: #37B1E1"></span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="{{settings('instagram')}}" class="instagram-icon" target="_blank" title="Instagram">
                                    <span class="uni-icon icon-instagram" style="color: #C83466"></span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="{{settings('youtube')}}" class="youtube-icon" target="_blank" title="Youtube">
                                    <span class="uni-icon icon-youtube" style="color: #E83F3A"></span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="{{settings('soundcloud')}}" class="soundcloud-icon" target="_blank" title="Soundcloud">
                                    <span class="uni-icon icon-soundcloud" style="color: #FF5E00"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    @endif


                    <div class="tb-languages">
                        <div class="tbl-btn" @click="toggelLanguages()">
                            <span class="uni-icon icon-earth" style="color: #b5bbbf"></span>
                            English
                        </div>
                        <div class="tbl-dropdown" :class="{ opened: show_languages }">
                            <div class="close-lan" @click="closeLanguages">
                                <span class="uni-icon icon-clear"></span>
                            </div>
                            <div class="row">
                                @foreach ($languages as $key => $language)
                                <div class="col-8">
                                    <a href="{{ LaravelLocalization::getLocalizedURL($key)}}" data-turbolinks="false" class="tbl-item">{{ $language['native'] }}</a>
                                </div>
                                @endforeach
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
                    @if (false)
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
                    @endif
                    @endauth
                </div>
            </div>
            <div>
                {{ $slot }}
            </div>
            <notifications position="bottom left" group="app" animation-type="velocity" :animation="animation" classes="desktop-notifications" />
        </div>
    </div>

    <div id="appFooter">
        <footer id="footer" data-turbolinks-permanent>
            <div id="MainLoading">
                <circle-spin></circle-spin>
            </div>
            <div class="container d-flex">
                <div class="helpful-links">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="{{ route('page.about') }}" class="helpful-link">{{ trans("text.about") }}</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="{{ route('page.privacy') }}" class="helpful-link">{{ trans("text.privacy") }}</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="{{ route('page.api') }}" class="helpful-link">{{ trans("text.api") }}</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="{{ route('page.contact') }}" class="helpful-link">{{ trans("text.contact") }}</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="{{ route('page.sitemap') }}" class="helpful-link">{{ trans("text.sitemap") }}</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-social">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="{{settings('facebook')}}" class="facebook-icon" target="_blank" title="Facebook">
                                <span class="uni-icon icon-facebook" style="color: #4B69B0"></span>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="{{settings('twitter')}}" class="twitter-icon" target="_blank" title="Twitter">
                                <span class="uni-icon icon-twitter" style="color: #37B1E1"></span>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="{{settings('instagram')}}" class="instagram-icon" target="_blank" title="Instagram">
                                <span class="uni-icon icon-instagram" style="color: #C83466"></span>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="{{settings('youtube')}}" class="youtube-icon" target="_blank" title="Youtube">
                                <span class="uni-icon icon-youtube" style="color: #E83F3A"></span>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="{{settings('soundcloud')}}" class="soundcloud-icon" target="_blank" title="Soundcloud">
                                <span class="uni-icon icon-soundcloud" style="color: #FF5E00"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                @if (false)
                <div class="row">
                    <div class="col-12">
                        <div class="social-links">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a href="{{settings('facebook')}}" class="facebook-icon" target="_blank" title="Facebook">
                                        <span class="uni-icon icon-facebook" style="color: #4B69B0"></span>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="{{settings('twitter')}}" class="twitter-icon" target="_blank" title="Twitter">
                                        <span class="uni-icon icon-twitter" style="color: #37B1E1"></span>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="{{settings('instagram')}}" class="instagram-icon" target="_blank" title="Instagram">
                                        <span class="uni-icon icon-twitter" style="color: #C83466"></span>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="{{settings('youtube')}}" class="youtube-icon" target="_blank" title="Youtube">
                                        <span class="uni-icon icon-youtube" style="color: #E83F3A"></span>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="{{settings('soundcloud')}}" class="soundcloud-icon" target="_blank" title="Soundcloud">
                                        <span class="uni-icon icon-soundcloud" style="color: #FF5E00"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="footer-apps">
                            <h3>{{ trans("text.our-apps") }}</h3>
                            <p>{{ trans("text.our-apps-text") }}</p>

                            <a href="https://play.google.com/store/apps/details?id=my.smartech.mp3quran" target="_blank" class="foo_app_btn">
                                <img src="{{ asset('img/google_play.jpg') }}" alt="google_play" class="img-fluid" />
                            </a>
                            <a href="https://itunes.apple.com/sa/app/mp3quran/id533029431?mt=8" target="_blank" class="foo_app_btn">
                                <img src="{{ asset('img/app_store.jpg') }}" alt="app_store" class="img-fluid" />
                            </a>
                            <a href="https://www.microsoft.com/en-us/p/mp3-quran/9nblggh5k24h" target="_blank" class="foo_app_btn">
                                <img src="{{ asset('img/windows.jpg') }}" alt="windows" class="img-fluid" />
                            </a>
                        </div>
                    </div>
                </div>
                @endif

            </div>
            @include('components.desktop-player')
        </footer>
    </div>
</div>