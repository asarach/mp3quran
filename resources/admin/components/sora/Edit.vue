<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('text.soar')" />
    <section class="content-header">
      <h1>{{ trans('text.soar')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="prefix + 'soar'">
            <i class="fa fa-dashboard"></i>
            {{ trans('text.soar')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('admin.edit-sora')}}</li>
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
          <sora-form :action="'edit'" :sora="sora"></sora-form>
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
      sora: {
        name: "",
        slug: "",
        start_page: "",
        end_page: "",
        status: 0,
        makkia: 0,
        ayat_count: "",
        num: ""
      }
    };
  },
  methods: {
    editSora() {
      var self = this;
      axios
        .get(this.ajax_prefix + "sora/edit/" + self.$route.params.id)
        .then(function(response) {
          self.sora = response.data.sora;
          self.show_spinner = false;
        })
        .catch(function(error) {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    }
  },
  mounted() {
    this.editSora();
  }
};
</script>
