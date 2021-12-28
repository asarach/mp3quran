@if ($header_ads)
<div class="header-ads">
    @foreach ($header_ads as $had)
    <div class="ha-item">
        <a href="{{ $had['url'] }}" target="_blank">
            <img src="{{ $had['image'] }}" alt="{{ $had['name'] }}" class="img-responsive" />
        </a>
    </div>
    @endforeach
</div>
@endif