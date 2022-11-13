@section('meta-tags')
<title>{{$page->title}}</title>
<meta property="og:title" content="{{$page->title}}" />
<meta name="twitter:title" content="{{$page->title}}" />
<meta property="og:title" content="{{$page->title}}" />
<meta name="description" content="{{$page->description}}" />
<meta property="og:description" content="{{$page->description}}" />
<meta name="twitter:description" content="{{$page->description}}" />
@endsection

<div class="main tafsirs-show ">
    <div class="show-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 order-2 order-md-1">
                    <h1>{{$page->title }}</h1>
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
                    <div class="tafsirs-list pt-3">
                        <ul class="list-unstyled">
                            @foreach ($tsoras as $tsora)
                            <li>
                                <div class="card-tafsir">
                                    <div class="ply-btn" @click.prevent="getItemAndPlay(ajax_prefix + '/tsora/item?id={{ $tsora['id'] }}')">
                                        <scale-loader v-if="isLoading({ type: 'tsora', id: '20000{{ $tsora['tafsir_id'] }}-{{ $tsora['id'] }}'  })" color="#0D3A4D" height="10px" width="2px"></scale-loader>
                                        <span v-else-if="isPlaying({ type: 'tsora', id: '20000{{ $tsora['tafsir_id'] }}-{{ $tsora['id'] }}' })" class="uni-icon icon-pause" style="color: #f5b44b"></span>
                                        <span v-else class="uni-icon icon-play_arrow" style="color: #f5b44b"></span>
                                    </div>
                                    <div class="tafsir-info">
                                        <div class="tafsir-name">{{$tsora['name']}}<span> - {{$tsora['tafsir_name']}}</span></div>
                                    </div>
                                </div>
                            </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>