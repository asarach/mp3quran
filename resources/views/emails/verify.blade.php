@component('mail::message')
# {{ trans('email.hello') }}

{{ trans('email.click-button-verify-email') }}

@component('mail::button', ['url' => $url, 'color' => 'green'])
{{ trans('email.verify-email-address') }}
@endcomponent

{{ trans('email.verify-email-no-action') }}

{{ trans('email.regards') }},<br>
{{ settings('app_name') }}

@slot('subcopy')
    {{ trans('email.verify-email-footer', ['url' => $url]) }}
@endslot
@endcomponent
