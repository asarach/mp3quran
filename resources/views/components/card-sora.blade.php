<div class="sora-item show" id="sora-{{ $sora['id'] }}">
    <div class="ply-btn btn-loading hiden-ply-btn">
        <div class="la-line-scale la-sm">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="ply-btn btn-pause hiden-ply-btn">
        <span class="uni-icon icon-pause" style="color: #fff"></span>
    </div>
    <div class="ply-btn  btn-play shown-ply-btn" data-url="{{ route('ajax::soar.item') . '?r=' . $read_id . '&s=' . $sora['sora_id'] }}" data-item="{{ $sora['id'] }}" data-type="sora">
        <span class="uni-icon icon-play_arrow1" style="color: #fff"></span>
    </div>
    <div class="sora-info">
        <div class="sora-num">{{ $sora['sora_num'] }}</div>
        @if (isset($sora['reciter_name']))
        <div class="sora-num">
            {{ $sora['reciter_name'] }}
        </div>
        @endif
        <div class="sora-name">
            <a href="{{ route('reciter.sora', ['slug' => $sora['read_slug'], 'sora_id' => $sora['sora_id']]) }}" rel="alternate" hreflang="{{ LaravelLocalization::getCurrentLocale() }}" class="card-reciter-name">
                {{ $sora['sora_name'] }}
            </a>
        </div>
    </div>
    <div class="sora-btn more-btn">
        <span class="uni-icon icon-more-horizontal"></span>
    </div>
    <div class="sora-options">
        <div class="sora-btn share-btn" v-tooltip="trans('text.share')" data-title="{{ $sora['share_title'] }}" data-url="{{ $sora['share_url'] }}" data-description="{{ $sora['share_description'] }}">
            <span class="uni-icon icon-share"></span>
        </div>
        <div class="sora-btn link-btn clipboard-btn" v-tooltip="trans('text.copy-link')" data-text="{{ $sora['sora_audio'] }}">
            <span class="uni-icon icon-link"></span>
        </div>
        <a class="sora-btn download-btn" v-tooltip="trans('text.download')" href="{{ downloadUrl($sora['sora_audio']) }}">
            <span class="uni-icon icon-cloud_download"></span>
        </a>
        <div class="sora-btn playlist-add" v-tooltip="trans('text.add-to-playlist')" data-url="{{ route('ajax::soar.item') . '?r=' . $read_id . '&s=' . $sora['sora_id'] }}">
            <span class="uni-icon icon-playlist_add"></span>
        </div>
        <div class="sora-btn like-btn" v-tooltip="trans('text.add-to-favorite')" data-id="{{ $sora['id'] }}" data-group="soar">
            <span class="uni-icon icon-favorite_outline"></span>
        </div>
        <div class="sora-btn deslike-btn" v-tooltip="trans('text.remove-from-favorite')" data-id="{{ $sora['id'] }}" data-group="soar">
            <span class="uni-icon icon-favorite" style="color: #f5b44b"></span>
        </div>
        <div class="sora-btn report-btn" v-tooltip="trans('text.report-sora')" data-read="{{ $sora['read_slug'] }}" data-sora="{{ $sora['id'] }}" :data-prefix="ajax_prefix">
            <span class="uni-icon icon-warning"></span>
        </div>
    </div>
</div>