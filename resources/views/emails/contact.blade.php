@component('mail::message')
# {{ trans('email.new-contact-message') }}

# {{trans('text.name')}} :
{!! $name !!}

# {{trans('text.email')}} :
{!! $email !!}

# {{trans('text.subject')}} :
{!! $subject !!}

# {{trans('admin.content')}} :
{!! $body !!}

@endcomponent
