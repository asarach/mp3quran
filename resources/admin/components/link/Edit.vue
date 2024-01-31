<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('front.links')" />
    <section class="content-header">
      <h1>{{ trans('front.links')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="prefix + 'links'">
            <i class="fa fa-dashboard"></i>
            {{ trans('front.links')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('admin.edit-link')}}</li>
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
          <link-form :action="'edit'" :link="link"></link-form>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
const { DateTime } = require("luxon");

export default {
  data() {
    return {
      show_spinner: true,
      show_error: false,
      link: {
        new_url: "",
        old_url: "",
        status: 0
      }
    };
  },
  methods: {
    editlink() {
      var self = this;
      axios
        .get(this.ajax_prefix + "link/edit/" + self.$route.params.id)
        .then(function(response) {
          self.link = response.data.link;
          self.show_spinner = false;
        })
        .catch(function(error) {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    }
  },
  mounted() {
    this.editlink();
  }
};
</script>
