<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('front.languages')" />
    <section class="content-header">
      <h1>{{ trans('front.languages')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="prefix + 'languages'">
            <i class="fa fa-dashboard"></i>
            {{ trans('front.languages')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('admin.edit-language')}}</li>
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
          <language-form :action="'edit'" :language="language"></language-form>
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
      language: {
        name: "",
        locale: "",
        script: "",
        native: "",
        regional: "",
        direction: "",
        status: "",
        name_english: "",
        display: ""
      }
    };
  },
  methods: {
    editLanguage() {
      var self = this;
      axios
        .get(this.ajax_prefix + "language/edit/" + self.$route.params.id)
        .then(function(response) {
          self.language = response.data.language;
          self.show_spinner = false;
        })
        .catch(function(error) {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    }
  },
  mounted() {
    this.editLanguage();
  }
};
</script>
