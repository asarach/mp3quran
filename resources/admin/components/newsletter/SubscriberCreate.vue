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
      <li class="breadcrumb-item active">{{ trans("admin.add-subscriber") }}</li>
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
          :action="'create'"
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
    newsletters: {},
    subscriber: {
      name: "",
      newsletters: [],
      email: ""
    },
  };
},
methods: {
  ceateSubscriber() {
    var self = this;
    axios
      .get(this.ajax_prefix + "nl_subscriber/create")
      .then(function (response) {
        self.show_spinner = false;
        self.newsletters = response.data.newsletters;
      })
      .catch(function (error) {
        self.show_spinner = false;
        self.show_error = error.response.status;
      });
  },
},
mounted() {
  this.ceateSubscriber();
},
};
</script>
