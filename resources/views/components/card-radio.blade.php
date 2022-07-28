<div class="card-radio show" id="radio-100002-{{ $radio['id'] }}">
  <div class="ply-btn btn-loading hiden-ply-btn">
    <div class="la-line-scale la-sm" style="color: #f5b44a">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <div class="ply-btn btn-pause hiden-ply-btn">
    <span class="uni-icon icon-pause" style="color: #f5b44b"></span>
  </div>
  <div class="ply-btn btn-play shown-ply-btn" data-url="{{ route('ajax::radio.item') . '?id=' .  $radio['id'] }}" data-item="100002-{{ $radio['id'] }}" data-type="radio">
    <span class="uni-icon icon-play_arrow" style="color: #f5b44b"></span>
  </div>

  <div class="radio-info">
    <div class="radio-name">
      {{ $radio['name'] }}<span>- {{ $radio['rewaya_name'] }}</span>
    </div>
  </div>
  <div class="radio-btn more-btn">
    <span class="uni-icon icon-more-horizontal"></span>
  </div>
  <div class="radio-options item-options">
    <div class="radio-btn share-btn" v-tooltip="trans('text.share')" data-title="{{ $radio['share_title'] }}" data-url="{{ $radio['share_url'] }}" data-description="{{ $radio['share_description'] }}">
      <span class="uni-icon icon-share"></span>
    </div>
    <div class="radio-btn link-btn clipboard-btn" v-tooltip="trans('text.copy-link')" data-text="{{ $radio['url'] }}">
      <span class="uni-icon icon-link"></span>
    </div>

    <div class="radio-btn like-btn" v-tooltip="trans('text.add-to-favorite')" data-id="{{ $radio['id'] }}" data-group="radios">
      <span class="uni-icon icon-favorite_outline"></span>
    </div>
    <div class="radio-btn deslike-btn" v-tooltip="trans('text.remove-from-favorite')" data-id="{{ $radio['id'] }}" data-group="radios">
      <span class="uni-icon icon-favorite" style="color: #f5b44b"></span>
    </div>
  </div>
</div>