@section('meta-tags')
<title>{{$page->title}}</title>
<meta property="og:title" content="{{$page->title}}" />
<meta name="twitter:title" content="{{$page->title}}" />
<meta property="og:title" content="{{$page->title}}" />
<meta name="description" content="{{$page->description}}" />
<meta property="og:description" content="{{$page->description}}" />
<meta name="twitter:description" content="{{$page->description}}" />
@endsection
<div class="main api-show">
  <div class="show-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 order-2 order-md-1">
          <h1>{{ trans('text.api') }}</h1>
          <div class="header-options">
            <a href="{{ route('page.api3') }}" class="btn btn-primary px-4 mb-4">
              {{trans('text.api-3')}}
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
          <div class="api-nav">
            @foreach ($api as $key => $item)
            <button type="button" class="btn btn-secondary @if($index == $key) active @endif" wire:click.prevent="showTab({{ $key }})">{{$item['key']}}</button>
            @endforeach
          </div>
        </div>
        <div class="col-md-19" id="sticky-container">
          <div class="api-content">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              @foreach ($api[$index]['content'] as $key_current_tab => $item)
              <li class="nav-item">
                <a class="nav-link @if($key_current_tab == 'Description') active @endif" id="{{ $key_current_tab}}tab" data-toggle="tab" href="#{{ $key_current_tab}}" role="tab" ariaControls="{{ $key_current_tab}}" aria-selected="true">{{ $key_current_tab}}</a>
              </li>
              @endforeach
            </ul>
            @if ($api[$index]['content'])
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="Description" role="tabpanel" aria-labelledby="Description-tab">
                <table class="table table-striped">
                  <tbody>
                    @foreach ($api[$index]['content']['Description'] as $desc)
                    <tr>
                      <th>{{$desc['name']}}</th>
                      <th>{!! $desc['val'] !!}</th>
                    </tr>
                    @endforeach
                  </tbody>
                </table>
              </div>
              <div class="tab-pane fade" id="Inputs" role="tabpanel" aria-labelledby="Inputs-tab">
                @foreach ( $api[$index]['content']['Inputs'] as $input)
                <table class="table table-bordered mt-3 mb-3">
                  <tbody>
                    @if (isset($input['root']))
                    <tr>
                      <th scope="row" style="width: 160px;">Root Node</th>
                      <td>{{$input['root']}}</td>
                    </tr>
                    @endif
                    @if (isset($input['parameters']))
                    <tr>
                      <th scope="row" style="width: 160px;">Parameters</th>
                      <td>{{$input['parameters']}}</td>
                    </tr>
                    @endif
                    @if (isset($input['description']))
                    <tr>
                      <th scope="row" style="width: 160px;">Description</th>
                      <td>{{$input['description']}}</td>
                    </tr>
                    @endif
                    @if (isset($input['ocuurances']))
                    <tr>
                      <th scope="row" style="width: 160px;">Ocuurances</th>
                      <td>{{$input['ocuurances']}}</td>
                    </tr>
                    @endif
                    @if (isset($input['example']))
                    <tr>
                      <th scope="row" style="width: 160px;">Example</th>
                      <td>{{$input['example']}}</td>
                    </tr>
                    @endif
                    @if (isset($input['comments']))
                    <tr>
                      <th scope="row" style="width: 160px;">Comments</th>
                      <td>{{$input['comments']}}</td>
                    </tr>
                    @endif
                    @if (isset($input['sample']))
                    <tr>
                      <th scope="row" style="width: 160px;">Sample Request</th>
                      <td>{{$input['sample']}}</td>
                    </tr>
                    @endif
                  </tbody>
                </table>
                @endforeach
              </div>
              <div class="tab-pane fade" id="Outputs" role="tabpanel" aria-labelledby="Outputs-tab">
                @foreach ( $api[$index]['content']['Outputs'] as $output)
                <table class="table table-bordered mt-3 mb-3">
                  <tbody>
                    @if (isset($input['root']))
                    <tr>
                      <th scope="row" style="width: 160px;">Root Node</th>
                      <td>{{$input['root']}}</td>
                    </tr>
                    @endif
                    @if (isset($input['parameters']))
                    <tr>
                      <th scope="row" style="width: 160px;">Parameters</th>
                      <td>{{$input['parameters']}}</td>
                    </tr>
                    @endif
                    @if (isset($input['description']))
                    <tr>
                      <th scope="row" style="width: 160px;">Description</th>
                      <td>{{$input['description']}}</td>
                    </tr>
                    @endif
                    @if (isset($input['ocuurances']))
                    <tr>
                      <th scope="row" style="width: 160px;">Ocuurances</th>
                      <td>{{$input['ocuurances']}}</td>
                    </tr>
                    @endif
                    @if (isset($input['example']))
                    <tr>
                      <th scope="row" style="width: 160px;">Example</th>
                      <td>{{$input['example']}}</td>
                    </tr>
                    @endif
                    @if (isset($input['response']))
                    <tr>
                      <th scope="row" style="width: 160px;">Sample response</th>
                      <td>{{$input['response']}}</td>
                    </tr>
                    @endif
                    @if (isset($input['sample']))
                    <tr>
                      <th scope="row" style="width: 160px;">Sample Request</th>
                      <td>{{$input['sample']}}</td>
                    </tr>
                    @endif
                  </tbody>
                </table>
                @endforeach
              </div>
            </div>
            @endif
          </div>
        </div>
      </div>
    </div>
  </div>
</div>