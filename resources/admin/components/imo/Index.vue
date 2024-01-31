<template>
  <div class="content-wrapper">
    <vue-headful
      :title="trans('admin.dashboard_title') + ' | ' + trans('text.imo-apis')"
    />
    <section class="content-header">
      <h1>{{ trans("text.imo-apis") }}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans("admin.dashboard") }}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans("text.imo-apis") }}</li>
      </ol>
    </section>
    <div v-if="show_spinner" class="loading-spinner">
      <loading-spinner />
    </div>
    <div v-else-if="show_error" class="page-error">
      <loading-error :type="show_error" />
    </div>
    <section v-else class="content">
      <imo-form :reads="reads"></imo-form>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show_spinner: true,
      show_error: false,
      reads: {},
    };
  },
  methods: {
    getImos() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then((response) => {
          self.reads = response.data.reads;
          self.show_spinner = false;
          window.scroll(0, 0);
        })
        .catch((error) => {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    },
    preparUrl() {
      var base = this.ajax_prefix + "imo?";
      return base.slice(0, -1);
    },
  },
  mounted() {
    this.getImos();
  },
};
</script>
