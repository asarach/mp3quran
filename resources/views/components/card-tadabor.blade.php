<div class="tadabor-item  spib-tadabor-tb{{ $item['id'] }}" id="tadabor-tb{{ $item['id'] }}">

  @if ($item['video_url'])
  @if (isYoutube($item['video_url']))
  <iframe width="100%" height="auto" style="aspect-ratio: 16/9;" src="https://www.youtube.com/embed/{{ getYoutubeId($item['video_url']) }}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  @else
  <video src="{{ $item['video_url'] }}"></video>
  @endif

  @elseif($islink)
  <a rel="alternate" hreflang="{{ LaravelLocalization::getCurrentLocale() }}" href="{{ route('tadabor.show', ['slug' => $item['id']]) }}">
    <div class="databor-image">
      <img src="{{ $item['image_url'] }}" alt="" />
    </div>
  </a>
  @else
  <div class="databor-image">
    <img src="{{ $item['image_url'] }}" alt="" />
  </div>
  @endif

  @if ($islink)
  <a rel="alternate" hreflang="{{ LaravelLocalization::getCurrentLocale() }}" href="{{ route('tadabor.show', ['slug' => $item['id']]) }}">
    <div class="databor-text">{!! html_entity_decode($item['text']) !!}</div>
  </a>
  @else
  <div class="databor-text">{!! html_entity_decode($item['text']) !!}</div>
  @endif

  @if (!$item['video_url'])
  <div class="ssi-btns">
    <div class="ply-btn btn-loading hiden-ply-btn spib-loading">
      <div class="la-line-scale la-sm">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="ply-btn btn-pause hiden-ply-btn spib-pause">
      <span class="uni-icon icon-pause" style="color: #fff"></span>
      {{ trans("text.pause") }}
    </div>
    <div class="ply-btn  btn-play shown-ply-btn spib-play" data-url="{{ route('ajax::tadabor.item') . '?id=' . $item['id'] }}" data-item="tb{{ $item['id'] }}" data-type="tadabor">
      <span class="uni-icon icon-play_arrow" style="color: #fff"></span>
      {{ trans("text.play") }}
    </div>
    <a class="download-btn" href="{{ downloadUrl($item['audio_url']) }}">
      <div>
        <span class="uni-icon icon-cloud_download"></span>
        {{ trans("text.download") }}
      </div>
    </a>
  </div>
  @endif

  <div class="databor-options">
    <div class="option-btn">
      <div class="sora-btn link-btn clipboard-btn" data-toggle="tooltip" data-placement="top" title="{{ trans('text.copy-text') }}" data-text="{{ $item['text'] }}">
        <span class="uni-icon icon-code"></span>
      </div>
    </div>
    <div class="show-share" data-url="{{ $item['share_url'] }}" data-title="{{ $item['share_title'] }}" data-description="{{ $item['share_description'] }}">
      <span class="direct-share twitter" data-network='twitter'>
        <div class="share-icon twitter" data-toggle="tooltip" data-placement="top" title="{{ trans('text.share-twitter') }}">
          <span class="uni-icon icon-twitter" style="color: #52a7e7"></span>
        </div>
      </span>
      <span class="direct-share whatsapp" data-network='whatsapp'>
        <div class="share-icon whatsapp" data-toggle="tooltip" data-placement="top" title="{{ trans('text.share-whatsapp') }}">
          <span class="uni-icon icon-whatsapp" style="color: #43cc63"></span>
        </div>
      </span>
      <span class="direct-share facebook" data-network='facebook'>
        <div class="share-icon facebook" data-toggle="tooltip" data-placement="top" title="{{ trans('text.share-facebook') }}">
          <span class="uni-icon icon-facebook" style="color: #4b69b0"></span>
        </div>
      </span>
      <span class="direct-share telegram" data-network='telegram'>
        <div class="share-icon telegram" data-toggle="tooltip" data-placement="top" title="{{ trans('text.share-telegram') }}">
          <span class="uni-icon icon-telegram" style="color: #2c9bdb"></span>
        </div>
      </span>
    </div>
  </div>
</div>