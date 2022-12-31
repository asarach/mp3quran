<div class="flip-book @if(style_version() === 'm') mobile-fliping-book @else fliping-book @endif">
  <div class="fb-controle top">
    <span class="previous-btn">
      <span class="uni-icon icon-arrow_forward"></span>
      {{ trans("text.previous") }}
    </span>
    <span class="next-btn">
      {{ trans("text.next") }}
      <span class="uni-icon icon-arrow_back"></span>
    </span>
  </div>
  @if (style_version() === 'm')
  <div class="fb-controle-side">
    <span class="previous-btn"> </span>
    <span class="next-btn"></span>
  </div>
  @endif
  <div class="book">
    <div id="pages" class="pages"></div>
  </div>
  <div class="fb-controle">
    <span class="previous-btn">
      <span class="uni-icon icon-arrow_forward"></span>
      {{ trans("text.previous") }}
    </span>
    <span class="next-btn">
      {{ trans("text.next") }}
      <span class="uni-icon icon-arrow_back"></span>
    </span>
  </div>
</div>