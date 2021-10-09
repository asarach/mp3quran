@component('mail::message')
# {{ trans('email.hello') }}

{!! $body !!}

{{ trans('email.regards') }},<br>

{{ settings('app_name', 'News') }}
@endcomponent
