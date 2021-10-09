@extends('auth.master')
@section('meta')
<title>{{ trans('auth.login') }} - {{ settings('app_name', 'News') }}</title>
<meta name="keywords" content="{{ settings('main_keywords', 'News') }}">
<meta name="description" content="{{ settings('main_description', 'News') }}">
@endsection
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-10 col-md-14 col-sm-18">
            <main class="main-content">
            <div class="card login-card">
                <div class="card-body">
                    <div class="loginbox-title mb-4">
                        {{ trans('auth.login') }}
                    </div>

              
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="form-group row">
                            <div class="col-md-24">
                                <input id="email" type="email" placeholder="{{ trans('text.email') }}" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email"
                                autofocus>
                                @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-24">
                                <input id="password" type="password" placeholder="{{ trans('auth.password') }}" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                                @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-24">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" name="remember" class="custom-control-input" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                    <label class="custom-control-label" for="remember">{{ trans('auth.remember-me') }}</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row mb-0 mt-4">
                            <div class="col-md-24 text-center">
                                <button type="submit" class="btn btn-primary btn-block">
                                    {{ trans('auth.login') }}
                                </button>
                                @if (Route::has('password.request'))
                                <a class="btn btn-link " href="{{ route('password.request') }}">
                                    {{ trans('auth.forgot-your-password') }}
                                </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </main>
        </div>
    </div>
</div>
@endsection
