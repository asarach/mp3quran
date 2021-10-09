<template>
<div class="content-wrapper">
  <vue-headful
    :title="trans('admin.dashboard_title') + ' | ' + trans('text.subscribers')"
  />
  <section class="content-header">
    <h1>{{ trans("text.subscribers") }}</h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="prefix">
          <span class="icon-home"></span>
          {{ trans("admin.dashboard") }}
        </router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link :to="prefix + 'nl_subscribers'">
          {{ trans("text.subscribers") }}
        </router-link>
      </li>
      <li class="breadcrumb-item active">{{ trans("admin.edit-subscriber") }}</li>
    </ol>
  </section>
  <div v-if="show_spinner" class="loading-spinner">
    <loading-spinner />
  </div>
  <div v-else-if="show_error" class="subscriber-error">
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
        <nl-subscriber-form
          :action="'edit'"
          :newsletters="newsletters"
          :subscriber="subscriber"
        ></nl-subscriber-form>
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
    newsletters: {},
    subscriber: {
      name: "",
      newsletters: [],
      email: ""
    },
  };
},
methods: {
  editSubscriber() {
    var self = this;
    axios
      .get(this.ajax_prefix + "nl_subscriber/edit/" + self.$route.params.id)
      .then(function (response) {
        self.subscriber = response.data.subscriber;
        self.translations = response.data.translations;
        self.newsletters = response.data.newsletters;
        self.show_spinner = false;
      })
      .catch(function (error) {
        self.show_spinner = false;
        self.show_error = error.response.status;
      });
  },
},
mounted() {
  this.editSubscriber();
},
};
</script>
