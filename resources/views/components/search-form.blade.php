<form class="search-form" role="form" method="GET" action="route('search')">
    <input name="s" class="form-control mr-sm-2" type="search" placeholder="{{ trans('text.search') }}" aria-label="Search" />
    <button type="submit" class="btn btn-search">
        <span class="uni-icon icon-search" style="color: #b5bbbf"></span>
    </button>
</form>