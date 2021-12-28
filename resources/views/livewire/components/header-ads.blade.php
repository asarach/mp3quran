<div class="header-ads">
    @if ($header_ads)
    @foreach ($header_ads as $had)
    <div class="ha-item">
        <a href="{{ $had['url'] }}" target="_blank">
            <img src="{{ $had['image'] }}" alt="{{ $had['name'] }}" class="img-responsive" />
        </a>
    </div>
    @endforeach
    @endif
</div>