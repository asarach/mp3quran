@extends('errors.master')
@section('meta')
<title>{{ settings('app_name')}} - {{trans('text.error-502-title')}}</title>
<meta name="description" content="{{trans('text.error-502-text')}}">
@endsection
@section('content')
<div id="content">
    <div class="errors">
        <div class="container">
            <div class="error-page error-502">
                <img src="{{asset('/img/icons/error_502.svg')}}" class="uni-icon" alt="502 Bad Gateway">
                <h1>{{trans('text.error-502-title')}}</h1>
                <p>{{trans('text.error-502-text')}}</p>
                <a href="{{route('index')}}">
                    {{trans('text.go-to-home')}}
                </a>
            </div>
        </div>

    </div>
</div>
@endsection