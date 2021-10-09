@extends('errors.master')
@section('meta')
<title>{{ settings('app_name')}} - {{trans('text.error-500-title')}}</title>
<meta name="description" content="{{trans('text.error-500-text')}}">
@endsection
@section('content')
<div id="content">
    <div class="errors">
        <div class="container">
            <div class="error-page error-500">
                <img src="{{asset('/img/icons/error_500.svg')}}" class="uni-icon" alt="500 Internal Server Error">
                <h1>{{trans('text.error-500-title')}}</h1>
                <p>{{trans('text.error-500-text')}}</p>
                <a href="{{route('index')}}">
                    {{trans('text.go-to-home')}}
                </a>
            </div>
        </div>
    </div>
</div>
@endsection