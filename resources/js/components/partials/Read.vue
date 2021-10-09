<template>
  <router-link  :to="'/' +  $store.state.current_language +'/' + read.slug" class="card-read">
    <div class="card-read-title">{{read.reciter_name}}</div>
    <div class="card-reciter-name">{{read.name}}</div>
    <div class="card-rewaya-name">{{read.rewaya_name}}</div>
    <div class="card-mushaf-name">{{read.mushaf_name}}</div>
  </router-link>
</template>
<script>
export default {
  props: ["read"],
  data() {
    return {
      notification: {
        message: this.message,
        type: this.type,
        title: this.title
      }
    };
  },
  methods: {},
  mounted() {}
};
</script>
