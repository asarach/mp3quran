<template>
  <div class="main about-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{page_content.title}}</h1>
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
            <div class="card-page">
              <div class="page-text" v-html="page_content.content"></div>
            </div>
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
      style_version: state => state.settings.style_version,
      page_content: state => state.page.page_content,
      initial: state => state.initial
    })
  },

  data() {
    return {
      url: this.ajax_prefix + "/privacy"
    };
  },

  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("page/setData", this);
  },

  destroyed() {
    this.$store.dispatch("page/unsetData");
  }
};
</script>
