@extends('errors.master')
@section('meta')
<title>{{ settings('app_name')}} - {{trans('text.error-503-title')}}</title>
<meta name="description" content="{{trans('text.error-503-text')}}">
@endsection
@section('content')
<div id="content">
    <div class="errors">
        <div class="container">
            <div class="error-page error-503">
                <img src="{{asset('/img/icons/error_503.svg')}}" class="uni-icon" alt="503 Service Unavailable">
                <h1>{{trans('text.error-503-title')}}</h1>
                <p>{{trans('text.error-503-text')}}</p>
                <a href="{{route('index')}}">
                    {{trans('text.go-to-home')}}
                </a>
            </div>
        </div>
    </div>
</div>

@endsection