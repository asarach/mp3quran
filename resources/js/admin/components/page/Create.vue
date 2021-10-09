<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('front.pages')" />
    <section class="content-header">
      <h1>{{ trans('front.pages')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="prefix + 'pages'">
            <i class="fa fa-dashboard"></i>
            {{ trans('front.pages')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('admin.add-page')}}</li>
      </ol>
    </section>
    <div v-if="show_spinner" class="loading-spinner">
      <loading-spinner />
    </div>
    <div v-else-if="show_error" class="page-error">
      <loading-error :type="show_error" />
    </div>
    <section v-else class="content">
      <div class="row">
        <div class="col-lg-24">
          <page-form :action="'create'" :page="page"></page-form>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show_spinner: true,
      show_error: false,
      page: {
        name: "",
        slug: "",
        title: "",
        content: "",
        status: "",
        keywords: "",
        description: ""
      }
    };
  },
  methods: {
    ceatePage() {
      var self = this;
      axios
        .get(this.ajax_prefix + "page/create")
        .then(function(response) {
          self.show_spinner = false;
        })
        .catch(function(error) {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    }
  },
  mounted() {
    this.ceatePage();
  }
};
</script>
