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
                    <h1>{{trans('text.tafsirs')}}</h1>
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
                    @include('livewire.tafsir.bookmarks')
                    <div class="tafsirs-soar-list">
                        @foreach ($soar as $sora_chunk)
                        <div class="row">
                            @foreach ($sora_chunk as $sora)
                            <div class="col">
                                <button class="btn btn-primary tafsir-sora-btn" data-sora="{{ $sora->id }}">
                                    {{ $sora->name }}
                                </button>
                            </div>
                            @endforeach
                        </div>
                        <div class="collapse-row">
                            @foreach ($sora_chunk as $sora)
                            <div class="tafsir-sora-collapse" id="tafsirsSora-{{ $sora->id }}">
                                <div class="card card-body">
                                    @foreach ($sora->tafsirs as $tafsir)
                                    <a href="{{ route('tafsir.show', ['tafsir_id'=> $tafsir->id, 'sura_id'=> $sora->id]) }}">
                                         {{ $tafsir->name }}
                                    </a>
                                    @endforeach
                                </div>
                            </div>
                            @endforeach
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>