@if (count($tbookmarks)> 0)
<div class="tafsirs-list tafsirs-bookmarks">
    <h3>{{ trans('text.tafsirs-bookmarks') }}</h3>
    <ul class="list-unstyled">
        @foreach ($tbookmarks as $tbookmark)
        @if ($tbookmark['tsora'])
        <li>
            <div class="card-tafsir spib-sora-{{ $tbookmark['tsora']['id'] }}" class="sora-item {{ $tbookmark['tsora']['id'] }}" id="sora-{{ $tbookmark['tsora']['id'] }}">
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
                </div>
                <div class="ply-btn  btn-play shown-ply-btn spib-play" data-url="{{ route('ajax::tsora.item') . '?id=' . $tbookmark['tsora']['id'] }}" data-item="{{ $tbookmark['tsora']['id'] }}" data-type="tsora" data-time="{{ $tbookmark['time'] * 1000 }}">
                    <span class="uni-icon icon-play_arrow1" style="color: #fff"></span>
                </div>
                <div class="tafsir-info">
                    <div class="tafsir-name">{{$tbookmark['tsora']['name']}}<span> - {{$tbookmark['tsora']['tafsir_name']}}</span></div>
                </div>
            </div>
        </li>
        @endif

        @endforeach
    </ul>
</div>
@else
<div class="mb-3"></div>
@endif