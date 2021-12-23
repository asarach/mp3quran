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
            <a id="languagesToggl">
              <span class="uni-icon icon-earth"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <share-box></share-box>
    <div class="main-content">
      {{ $slot }}
    </div>
    <notifications position="bottom left" group="app" animation-type="velocity" :animation="animation" classes="desktop-notifications" />
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
      <circle-spin></circle-spin>
    </div>
    <audio-player type="mobile" class="audio-player"></audio-player>
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
    </div>
  </div>
  <div class="tb-languages">
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
  <nav class="main-menu">
    <a href="{{ route('index') }}" class="menu-link">
      <span class="uni-icon icon-home"></span>
      {{ trans("text.home") }}
    </a>
    <a href="{{ route('radio.index') }}" class="menu-link">
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


<!-- Begin Inspectlet Asynchronous Code -->
<script type="text/javascript">
  $(document).ready(function () {
  $('#languagesToggl').click(function (e) { 
    e.preventDefault();
    $('.tb-languages .tbl-dropdown').toggleClass('opened');
    $('#footer .expend-menu').removeClass('expended');
  });
  $('#toggelExpended').click(function (e) { 
    e.preventDefault();
    $('#footer .expend-menu').toggleClass('expended');
    $('.tb-languages .tbl-dropdown').removeClass('opened');
  });
  // $('#footer .expend-menu').click(function (e) { 
  //   $('.ply-fullplayer').removeClass('opened');
  // });
  // $('#footer .main-menu').click(function (e) { 
  //   $('.ply-fullplayer').removeClass('opened');
  // });
 });
</script>