<div class="card-reciter">
    <a href="{{ route('reciter.show', ['slug'=> $reciter['slug']]) }}" rel="alternate" hreflang="{{ LaravelLocalization::getCurrentLocale() }}" class="card-reciter-name">{{$reciter['name']}}</a>
</div>