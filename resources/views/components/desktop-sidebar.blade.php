<div class="desktop-sidebar">

  <ul class="list-unstyled">
    @foreach ($main_menu as $menu)
    @if (false)
    <li v-if="menu.slug.includes('http')">
      <a href="{{ url($menu['slug']) }}" target="_blank" class="menu-link">
        {!! $menu['icon'] !!} 
        {{trans('text.' . $menu.title)}}
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