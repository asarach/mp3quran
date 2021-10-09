@extends('auth.master')
@section('meta')
<title>{{ trans('auth.register') }} - {{ settings('app_name', 'News') }}</title>
<meta name="keywords" content="{{ settings('main_keywords', 'News') }}">
<meta name="description" content="{{ settings('main_description', 'News') }}">
@endsection
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-10 col-md-14 col-sm-18">
          <main class="main-content">
            <div class="card  login-card">
                <div class="card-body">
                    <div class="loginbox-title mb-4">
                        {{ trans('auth.register') }}
                    </div>
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="name" class="col-md-8 col-form-label text-md-right">{{ trans('text.name') }}</label>

                            <div class="col-md-16">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-8 col-form-label text-md-right">{{ trans('auth.e-mail-address') }}</label>

                            <div class="col-md-16">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-8 col-form-label text-md-right">{{ trans('auth.password') }}</label>

                            <div class="col-md-16">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-8 col-form-label text-md-right">{{ trans('auth.confirm-password') }}</label>

                            <div class="col-md-16">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-24">
                                <button type="submit" class="btn btn-primary btn-block">
                                    {{ trans('auth.register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                    <div class="loginbox-signup">
                        <a class="btn btn-link " href="{{ route('login') }}">
                            {{ trans('auth.login') }}
                        </a>
                    </div>
                </div>
            </div>
            </main>
        </div>
    </div>
</div>
@endsection
