<div class="desktop-sidebar">

  <ul class="list-unstyled">
    @foreach ($main_menu as $menu)
    @if (str_contains($menu['slug'], 'atheer-radio.com'))
    <li>
      <a href="{{ url($menu['slug']) . '/' . str_replace( 'eng', 'en' , LaravelLocalization::getCurrentLocale()) }}" target="_blank" class="menu-link">
        {!! $menu['icon'] !!}
        {{trans('text.' . $menu['title'])}}
      </a>
    </li>
    @elseif (filter_var($menu['slug'], FILTER_VALIDATE_URL))
    <li>
      <a href="{{ url($menu['slug']) }}" target="_blank" class="menu-link">
        {!! $menu['icon'] !!}
        {{trans('text.' . $menu['title'])}}
      </a>
    </li>
    @else
    <li>
      <a href="{{ LaravelLocalization::localizeUrl($menu['slug']) }}" class="menu-link  @if(request()->url()  == LaravelLocalization::localizeUrl($menu['slug']) ) active @endif">
        {!! $menu['icon'] !!}
        {{trans('text.' . $menu['title'])}}
      </a>
    </li>
    @endif
    @endforeach

 
    <li>
      <a href="{{ LaravelLocalization::localizeUrl('tafsirs') }}" class="menu-link">
        <span class="mp3-icon icon-tafsir"></span>
        {{trans('text.tafsirs')}}
      </a>
    </li>

    <li>
      <a href="{{ LaravelLocalization::localizeUrl('special_rewayat') }}" class="menu-link">
        <span class="mp3-icon icon-headphones"></span>
        {{trans('front.twenty_rewayat')}}
      </a>
    </li>

  </ul>
</div>