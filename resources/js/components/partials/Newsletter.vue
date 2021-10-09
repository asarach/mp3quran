<template>
  <div class="newsletter">
    <h5 class="mb-0">{{ trans("text.newsletter") }}</h5>
    <div v-if="subscribed" class="alert alert-success" id="newsletterSuccess">
      {{ trans("text.newsletter-success") }}
    </div>
    <form v-else class="newsletter-form" role="form" @submit.prevent="subscribe()">
      <input
        v-model="email"
        name="email"
        class="form-control mr-sm-2"
        type="email"
        :placeholder="trans('text.email')"
        aria-label="Search"
      />
      <button type="submit" class="btn btn-subscribe">
        {{ trans('text.subscribe') }}
      </button>
    </form>
  </div>
</template>
<script>
import { mapState , mapActions} from "vuex";

export default {
  data() {
    return {
      email: "",
      url: "/" + this.$store.state.current_language + "/newsletter/subscribe",
    };
  },
  computed: {
    
    ...mapState({
      subscribed: (state) => state.subscribed,
    }),
  },
  methods: {
    subscribe() {
      this.$store.dispatch("newsletterSubscribe", this);
    },
  },
};
</script>
