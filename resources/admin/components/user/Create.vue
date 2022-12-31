<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('front.users')" />
    <section class="content-header">
      <h1>{{ trans('front.users')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="prefix + 'users'">
            <i class="fa fa-dashboard"></i>
            {{ trans('front.users')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('admin.add-user')}}</li>
      </ol>
    </section>
    <div v-if="show_spinner" class="loading-spinner">
      <loading-spinner />
    </div>
    <div v-else-if="show_error" class="user-error">
      <loading-error :type="show_error" />
    </div>
    <section v-else class="content">
      <div class="row">
        <div class="col-lg-12">
          <user-form :action="'create'" :user="user"></user-form>
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
      user: {
        method: "admin",
        name: "",
        email: "",
        avatar: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    ceateUser() {
      var self = this;
      axios
        .get(this.ajax_prefix + "user/create")
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
    this.ceateUser();
  }
};
</script>
