<template>
  <div class="main tadabor-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{ trans("text.tadabor") }}</h1>
            <div class="header-options"></div>
          </div>
          <div class="col-lg-19">
            <ads-header></ads-header>
          </div>
        </div>
      </div>
    </div>
    <div class="show-body">
      <div class="container">
        <div class="row">
          <div v-if="style_version == 'r'" class="col-md-5">
            <desktop-sidebar></desktop-sidebar>
          </div>
          <div class="col-lg-19 pt-3" id="sticky-container">
           <tadabor-item  :item="item" :islink="false"></tadabor-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      style_version: (state) => state.settings.style_version,
      item: (state) => state.tadabor.item,
      initial: (state) => state.initial,
    }),
  },
  data() {
    return {
      url: this.ajax_prefix + "/tadabor/" + this.$route.params.id,
    };
  },

  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("tadabor/setSingleData", this);
  },

  destroyed() {
    this.$store.dispatch("tadabor/unsetSingleData");
  },
};
</script>
