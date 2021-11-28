<div class="newsletter">
    <h5 class="mb-0">{{ trans("text.newsletter") }}</h5>
    @if ($subscribed)
    <div class="alert alert-success" id="newsletterSuccess">
        {{ trans("text.newsletter-success") }}
    </div>
    @else
    <form class="newsletter-form"  wire:submit.prevent="subscribe">

        <input wire:model="email" name="email" class="form-control mr-sm-2" type="email" placeholder="{{ trans('text.email') }}" aria-label="Search" />
        @error('email') <span class="error">{{ $message }}</span> @enderror

        <button type="submit" class="btn btn-subscribe">
            {{ trans('text.subscribe') }}
        </button>
    </form>
    @endif
</div>