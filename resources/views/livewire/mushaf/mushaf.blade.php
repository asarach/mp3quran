@section('meta-tags')
<title>{{$page->title}}</title>
<meta property="og:title" content="{{$page->title}}" />
<meta name="twitter:title" content="{{$page->title}}" />
<meta property="og:title" content="{{$page->title}}" />
<meta name="description" content="{{$page->description}}" />
<meta property="og:description" content="{{$page->description}}" />
<meta name="twitter:description" content="{{$page->description}}" />
@endsection
<div class="main mushafs-show">
    <div class="show-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 order-2 order-md-1">
                    <h1>{{trans('text.quran')}}</h1>
                    <div class="header-options"></div>
                </div>
                <div class="col-lg-19 order-1 order-md-2">
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
                    <div ref="fullscreen" id="fullscreen">
                        <div class="mushafs-flipbook" data-start="1" data-end="607" data-page="0" data-kahf="false" @if(style_version()==='m' ) data-mobile="true" @else data-mobile="false" @endif>
                            <div class="mushafs-options">
                                <div class="form-group">
                                    <select class="custom-select sora">
                                        <option value class="d-none" disabled selected>
                                            {{ trans("text.sora") }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select class="custom-select read">
                                        <option value class="d-none" disabled selected>
                                            {{ trans("text.read") }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group  mr-auto">
                                    <select class="custom-select part">
                                        <option value="0" class="d-none" disabled selected>
                                            {{ trans("text.part") }}
                                        </option>
                                    </select>
                                </div>
                                <div class="btn fullscreen-btn" id="fullscreenToggle">
                                    <span class="uni-icon icon-fullscreen" style="color: #fff;"></span>
                                </div>
                            </div>
                            @include('components.flip-book')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@include('components.share')