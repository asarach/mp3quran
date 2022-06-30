@section('meta-tags')
<title>{{$page->title}}</title>
<meta property="og:title" content="{{$page->title}}" />
<meta name="twitter:title" content="{{$page->title}}" />
<meta property="og:title" content="{{$page->title}}" />
<meta name="description" content="{{$page->description}}" />
<meta property="og:description" content="{{$page->description}}" />
<meta name="twitter:description" content="{{$page->description}}" />
<meta name="keywords" content="{{$page->keywords}}" />

@endsection
@section('page-scripts')
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js"></script>
<script>
    hljs.highlightAll();
</script>
<script>
    window.addEventListener('index-updated', event => {
        hljs.highlightAll();
    })
</script>
@endsection
<div class="main api3-show">
    <div class="show-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 order-2 order-md-1">
                    <h1>{{ trans('text.api3') }}</h1>
                    <div class="header-options">
                        <a href="{{ route('page.api') }}" class="btn btn-primary px-4 mb-4">
                            {{trans('text.api-old')}}
                        </a>
                    </div>
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
                <div class="col-md-5">
                    <div class="api3-nav">
                        @foreach ($api as $menu_key => $menu_item)
                        <button type="button" class="btn btn-secondary @if($index == $menu_key) active @endif" wire:click.prevent="showTab({{ $menu_key}})">{{$menu_item['key']}}</button>
                        @endforeach
                    </div>
                </div>

                <div class="col-md-19" id="sticky-container">
                    <div class="api3-content">
                        <div class="row">
                            @foreach ($api[$index]['sections_groups'] as $section_group)
                            <div class="col">
                                @foreach ($section_group as $section)
                                <section class="section-{{ $section['type'] }}">
                                    <div class="section-title">
                                        {{ $section['title'] }}
                                    </div>
                                    <div class="section-content">
                                        @switch($section['type'])
                                        @case('table')
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    @foreach ($section['content'][0] as $header => $headerVal)
                                                    <th scope="col">{{ $header }}</th>
                                                    @endforeach
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @foreach ($section['content'] as $tbody)
                                                <tr>
                                                    @foreach ($tbody as $tbodyItem)
                                                    <th scope="col">{{ $tbodyItem }}</th>
                                                    @endforeach
                                                </tr>
                                                @endforeach
                                            </tbody>
                                        </table>
                                        @break
                                        @case('response')
                                        <pre>
                                            <code class="language-json">{{ json_encode($section['content'], JSON_PRETTY_PRINT) }}</code>
                                        </pre>
                                        @break
                                        @default
                                        {{ $section['content'] }}
                                        @endswitch
                                    </div>
                                </section>
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