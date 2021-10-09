<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('front.servers')" />
    <section class="content-header">
      <h1>{{ trans('front.servers')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="prefix + 'servers'">
            <i class="fa fa-dashboard"></i>
            {{ trans('front.servers')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('admin.edit-server')}}</li>
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
          <server-form :action="'edit'" :server="server"></server-form>
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
      server: {
        name: "",
        url: "",
        FTP_type: "",
        FTP_host: "",
        FTP_port: "",
        FTP_username: "",
        FTP_password: "",
        status: ""
      }
    };
  },
  methods: {
    editServer() {
      var self = this;
      axios
        .get(this.ajax_prefix + "server/edit/" + self.$route.params.id)
        .then(function(response) {
          self.server = response.data.server;
          self.show_spinner = false;
        })
        .catch(function(error) {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    }
  },
  mounted() {
    this.editServer();
  }
};
</script>
