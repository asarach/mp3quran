<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <mobile v-if="style_version == 'm'"></mobile>
    <desktop v-else></desktop>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      style_version: state => state.settings.style_version
    })
  }
};
</script>
