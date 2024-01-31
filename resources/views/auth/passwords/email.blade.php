@extends('auth.master')
@section('meta')
    <title>{{ trans('auth.reset-password') }} - {{ settings('app_name', 'News') }}</title>
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
                      {{ trans('auth.reset-password') }}
                  </div>
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('password.email') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-md-8 col-form-label text-md-right">{{ trans('text.email') }}</label>

                            <div class="col-md-16">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row mb-0 mt-4">
                            <div class="col-md-20 offset-md-4">
                                <button type="submit" class="btn btn-primary btn-block">
                                    {{ trans('auth.send-password-reset-link') }}
                                </button>
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
