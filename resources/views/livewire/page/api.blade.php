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
            {!! $docContent !!}
        </div>
    </div>
</div>