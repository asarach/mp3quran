<template>
<div class="content-wrapper">
  <vue-headful
    :title="trans('admin.dashboard_title') + ' | ' + trans('text.messages')"
  />
  <section class="content-header">
    <h1>{{ trans("text.messages") }}</h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="prefix">
          <span class="icon-home"></span>
          {{ trans("admin.dashboard") }}
        </router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link :to="prefix + 'nl_messages'">
          {{ trans("text.messages") }}
        </router-link>
      </li>
      <li class="breadcrumb-item active">{{ message.subject }}</li>
    </ol>
  </section>
  <div v-if="show_spinner" class="loading-spinner">
    <loading-spinner />
  </div>
  <div v-else-if="show_error" class="message-error">
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
        <div class="card" v-html="message.content"></div>
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
    templates: {},
    message: {
      subject: "",
      content: ""
    },
  };
},
methods: {
  showMessage() {
    var self = this;
    axios
      .get(this.ajax_prefix + "nl_message/" + self.$route.params.id)
      .then(function (response) {
        self.message = response.data.message;
        self.show_spinner = false;
      })
      .catch(function (error) {
        self.show_spinner = false;
        self.show_error = error.response.status;
      });
  },
},
mounted() {
  this.showMessage();
},
};
</script>
