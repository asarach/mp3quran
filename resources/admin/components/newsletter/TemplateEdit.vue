<template>
<div class="content-wrapper">
  <vue-headful
    :title="trans('admin.dashboard_title') + ' | ' + trans('text.templates')"
  />
  <section class="content-header">
    <h1>{{ trans("text.templates") }}</h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="prefix">
          <span class="icon-home"></span>
          {{ trans("admin.dashboard") }}
        </router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link :to="prefix + 'nl_templates'">
          {{ trans("text.templates") }}
        </router-link>
      </li>
      <li class="breadcrumb-item active">{{ trans("admin.edit-template") }}</li>
    </ol>
  </section>
  <div v-if="show_spinner" class="loading-spinner">
    <loading-spinner />
  </div>
  <div v-else-if="show_error" class="template-error">
    <loading-error :type="show_error" />
  </div>
  <section v-else class="content">
    <div class="row">
      <div class="col-lg-24">
        <newsletter-nav></newsletter-nav>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-24">
        <nl-template-form
          :action="'edit'"
          :languages="languages"
          :template="template"
        ></nl-template-form>
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
    translations: [],
    languages: {},
    template: {
      name: "",
      columns: "",
      body: ""
    },
  };
},
methods: {
  editTemplate() {
    var self = this;
    axios
      .get(this.ajax_prefix + "nl_template/edit/" + self.$route.params.id)
      .then(function (response) {
        self.template = response.data.template;
        self.translations = response.data.translations;
        self.languages = response.data.languages;
        self.show_spinner = false;
      })
      .catch(function (error) {
        self.show_spinner = false;
        self.show_error = error.response.status;
      });
  },
},
mounted() {
  this.editTemplate();
},
};
</script>
