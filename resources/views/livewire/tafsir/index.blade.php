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
                    <div class="show-filters">
                        <div class="filter-soar">
                        </div>
                        <div class="filter-tafsir mr-auto">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerIdtafsir" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ $selected_tafsir['name'] }}
                                </button>
                                <div class="dropdown-menu" aria-labelledby="triggerIdtafsir">
                                    @foreach ($tafsirs as $tafsir)
                                    <a class="dropdown-item" href.prevent="#" wire:click="$emit('selectTafsir', {{ $tafsir['id'] }} )">{{ $tafsir['name'] }}</a>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tafsirs-soar-list">
                        <div class="row">
                            @foreach ($soar as $sora_chunk)
                            <div class="col">
                                @foreach ($sora_chunk as $sora)

                                <a class="btn btn-primary tafsir-sora-btn" href="{{ route('tafsir.show', ['tafsir_id'=>  $selected_tafsir['id'], 'sura_id'=> $sora->id]) }}">
                                    {{ $sora->name }}
                                </a>

                                @endforeach
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>