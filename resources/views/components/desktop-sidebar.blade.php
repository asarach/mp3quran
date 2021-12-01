<div class="desktop-sidebar">

  <ul class="list-unstyled">
    @foreach ($main_menu as $menu)
    @if (filter_var($menu['slug'], FILTER_VALIDATE_URL))
    <li>
      <a href="{{ url($menu['slug']) }}" target="_blank" class="menu-link">
        {!! $menu['icon'] !!}
        {{trans('text.' . $menu['title'])}}
      </a>
    </li>
    @else
    <li>
      <a href="{{ LaravelLocalization::localizeUrl($menu['slug']) }}" class="menu-link">
        {!! $menu['icon'] !!}
        {{trans('text.' . $menu['title'])}}
      </a>
    </li>
    @endif
    @endforeach
  </ul>
</div>