<template>
  <div class="main apps-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{ trans('text.apps') }}</h1>
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
              <div class="apps-list">
                <div class="row">
                  <div v-for="app  in apps" :key="app.id" class="col-md-8">
                    <div class="card-app">
                      <div class="card-apppic">
                        <img
                          :src="app.image"
                          class="img-responsive"
                          :alt="app.title"
                          :title="app.title"
                        />
                      </div>
                      <div class="card-apptitle">
                        <div class="card-apptitle-name">{{app.title}}</div>
                      </div>
                      <div class="card-btn">
                        <a
                          class="btn btn-primary"
                          :href="app.url"
                          target="_blank"
                          role="button"
                        >{{trans('text.download')}}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      apps: state => state.app.apps,
      initial: state => state.initial
    })
  },

  data() {
    return {
      url: this.ajax_prefix + "/apps"
    };
  },

  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("app/setData", this);
  },

  destroyed() {
    this.$store.dispatch("app/unsetData");
  }
};
</script>
