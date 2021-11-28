<div class="main mushafs-show">
    <div class="show-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <h1>{{trans('text.quran')}}</h1>
                    <div class="header-options"></div>
                </div>
                <div class="col-lg-19">
                    <livewire:components.header-ads />
                </div>
            </div>
        </div>
    </div>
    <div class="show-body">
        <div class="container">
            <div class="row">
                @if (style_version() == 'r')
                <div class="col-md-5">
                    @include('components.desktop-sidebar')
                </div>
                @endif
                <div class="col-lg-19" id="sticky-container">
                    <mushafs-flipbook></mushafs-flipbook>
                </div>
            </div>
        </div>
    </div>
</div>