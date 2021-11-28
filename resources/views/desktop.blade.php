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
                        {{ trans("text.listen-to-radio") }}
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
                            <span class="uni-icon icon-b5bbbf" style="color: #b5bbbf"></span>
                            English
                        </div>
                        <div class="tbl-dropdown" :class="{ opened: show_languages }">
                            <div class="close-lan" @click="closeLanguages">
                                <span class="uni-icon icon-clear"></span>
                            </div>
                            <div class="row">
                                @foreach ($languages as $language)
                                <div class="col-8">
                                    <a href="'/' + key" class="tbl-item">{{ $language['native'] }}</a>
                                </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <share-box></share-box>
            <div>
                {{ $slot }}
            </div>

            <notifications position="bottom left" group="app" animation-type="velocity" :animation="animation" classes="desktop-notifications" />

        </div>
    </div>

    <div id="appFooter">
        <footer id="footer" data-turbolinks-permanent>
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
            <audio-player type="desktop" class="audio-player"></audio-player>
        </footer>
    </div>
</div>