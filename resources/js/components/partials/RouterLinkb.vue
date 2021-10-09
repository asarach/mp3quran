<template>
  <router-link v-if="this.$router.currentRoute.path != to" :to="to" class="helpful-link"  rel="alternate" :hreflang="$store.state.current_language" exact>
    <slot></slot>
  </router-link>
  <a v-else :href="to" class="active"  rel="alternate" :hreflang="$store.state.current_language">
    <slot></slot>
  </a>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: false,
      default: "a"
    }
  },
  mounted() {
  }
};
</script>
