<template>
  <a :href="prefix + read.slug" class="card-read">
    <div class="card-read-title">{{ read.reciter_name }}</div>
    <div class="card-reciter-name">{{ read.name }}</div>
    <div class="card-rewaya-name">{{ read.rewaya_name }}</div>
    <div class="card-mushaf-name">{{ read.mushaf_name }}</div>
  </a>
</template>
<script>
export default {
  props: ["read"],
  data() {
    return {
      notification: {
        message: this.message,
        type: this.type,
        title: this.title,
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>
