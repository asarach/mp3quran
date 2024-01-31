<div class="row">
    <div class="col-md-5">
        <div class="api3-nav">
            <ul class="nav flex-column" id="myTab" role="tablist">
                @foreach ($api as $menu_key => $menu_item)
                <li class="nav-item" role="presentation">
                    <button class="btn btn-secondary @if(0 == $menu_key) active @endif" id="{{$menu_item['key']}}-tab" data-toggle="tab" data-target="#{{$menu_item['key']}}" type="button" role="tab" aria-controls="{{$menu_item['key']}}" aria-selected="true">{{$menu_item['key']}}</button>
                </li>
                @endforeach
            </ul>
        </div>
    </div>

    <div class="col-md-19" id="sticky-container">
        <div class="api3-content">
            <div class="row">
                <div class="tab-content" id="myTabContent">
                    @foreach ($api as $menu_key => $menu_item)
                    <div class="tab-pane fade @if(0 == $menu_key) show active @endif " id="{{$menu_item['key']}}" role="tabpanel" aria-labelledby="{{$menu_item['key']}}-tab">
                        @foreach ($menu_item['sections_groups'] as $section_group)
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
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>