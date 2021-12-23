<template>
  <div class="main tvs-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{trans('text.live-tvs')}}</h1>
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
          <div class="col-lg-19" id="sticky-container">
            <div class="tvs-list">
              <card-tv v-for="tv  in tvs" :key="tv.id" :tv="tv"></card-tv>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      style_version: state => state.settings.style_version,
      tvs: state => state.tv.tvs.data,
      initial: state => state.initial
    })
  },

  data() {
    return {
      url: this.ajax_prefix + "/live"
    };
  },
  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("tv/setData", this);
  },

  destroyed() {
    this.$store.dispatch("tv/unsetData");
  }
};
</script>
