<div id="app">
  <div class="mobile-ui">
    <div class="top-bar ">
      <div class="container">
        <div class="d-flex">
          <div class="tb-logo">
            <a href="{{ route('index') }}" class="main-logo">
              <img src="{{ asset('img/logo2.png')}}" class="user-image" alt />
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
          <div class="tb-languages">
            <a class="tbl-btn" id="languagesToggl">
              <span class="uni-icon icon-earth"></span>
            </a>
          </div>

          <div class="header-user dropdown">
            <button class="btn btn-profile-menu dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
              <i class="uni-icon icon-account_circle"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              @auth
              <a class="dropdown-item   @if(request()->url()  == LaravelLocalization::localizeUrl('favorites') ) active @endif" href="{{ route('page.favorites') }}">
                <span class="icon-favorite"></span>
                {{trans('text.favorites')}}
              </a>
              <a class="dropdown-item   @if(request()->url()  == LaravelLocalization::localizeUrl('tafsir/bookmarks') ) active @endif" href="{{ route('tafsir.bookmarks') }}">
                <span class="mp3-icon icon-tafsir""></span>
                {{ trans(" text.tafsir-bookmarks") }} </a>
                  <a class=" dropdown-item @if(request()->url() == LaravelLocalization::localizeUrl('playlists') ) active @endif" href="{{ route('page.playlists') }}">
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
                  @else
                  <a class="dropdown-item" href="{{ route('login') }}">
                    <i class="far fa-user"></i> {{ trans('auth.login') }}
                  </a>
                  <a class="dropdown-item" href="{{ route('register') }}">
                    <i class="far fa-user"></i> {{ trans('auth.register') }}
                  </a>
                  @endauth
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="main-content">
      {{ $slot }}
    </div>
  </div>
</div>

<footer id="footer" class="mobile-ui">
  <div class="container">
    <div class="social-links">
      <ul class="list-inline">
        <li class="list-inline-item">
          <a href="{{settings('facebook')}}" class="facebook-icon" target="_blank" title="Facebook">
            <span class="uni-icon icon-facebook" style="color: #4B69B0"></span>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="{{settings('twitter')}}" class="twitter-icon" target="_blank" title="Twitter">
            <span class="uni-icon icon-x" style="color: #000"></span>
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
  </div>
  <div id="appFooter" data-turbolinks-permanent>
    <div id="MainLoading">
      @include('components.circle-spin')
    </div>
    @include('components.mobile-player')
  </div>
  <div class="expend-menu">
    <div class="row">
      @foreach ($main_menu as $menu)
      @if (filter_var($menu['slug'], FILTER_VALIDATE_URL))
      <a href="{{ url($menu['slug']) }}" target="_blank" class="menu-link">
        {!! $menu['icon'] !!}
        {{trans('text.' . $menu['title'])}}
      </a>
      @else
      <a href="{{ LaravelLocalization::localizeUrl($menu['slug']) }}" class="menu-link">
        {!! $menu['icon'] !!}
        {{trans('text.' . $menu['title'])}}
      </a>
      @endif
      @endforeach
      <a href="{{ LaravelLocalization::localizeUrl('tafsirs') }}" class="menu-link">
        <span class="mp3-icon icon-tafsir"></span>
        {{trans('text.tafsirs')}}
      </a>
    </div>
  </div>
  <div class="tb-languages">
    <div class="tbl-dropdown">
      <div class="close-lan">
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
  <nav class="main-menu">
    <a href="{{ route('index') }}" class="menu-link">
      <span class="uni-icon icon-home"></span>
      {{ trans("text.home") }}
    </a>
    <a blam target="_blank" href="https://www.atheer-radio.com/home/{{ str_replace( 'eng', 'en' , LaravelLocalization::getCurrentLocale()) }}" class="menu-link">
      <span class="uni-icon icon-radio"></span>
      {{ trans("text.radios") }}
    </a>
    <a href="{{ route('mushaf') }}" class="menu-link">
      <span class="uni-icon icon-menu_book"></span>
      {{ trans("text.quran") }}
    </a>
    <a href="#" class="menu-link" id="toggelExpended">
      <span class="uni-icon icon-more-horizontal"></span>
      {{ trans("text.more") }}
    </a>
  </nav>
</footer>