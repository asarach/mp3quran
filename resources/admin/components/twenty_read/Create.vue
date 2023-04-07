<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('text.twenty_reads')" />
    <section class="content-header">
      <h1>{{ trans('text.twenty_reads')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="prefix + 'twenty_reads'">
            <i class="fa fa-dashboard"></i>
            {{ trans('text.twenty_reads')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('admin.add-twenty_read')}}</li>
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
          <twenty_read-form
            :action="'create'"
            :twenty_read="twenty_read"
            :mushafs="mushafs"
            :report_soar="report_soar"
            :twenty_rewayat="twenty_rewayat"
            :servers="servers"
            :reciters="reciters"
            :soar="soar"
          ></twenty_read-form>
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
      mushafs: {},
      twenty_rewayat: {},
      server: {},
      reciters: {},
      report_soar: {},
      soar: {},
      twenty_read: {
        title: "",
        slug: "",
        url: "",
        torrent: "",
        itunes: "",
        video: "",
        description: "",
        mushaf: {},
        reciter: {},
        twenty_rewaya: {},
        server: {},
        soar: {},
        status: 0,
        featured: 0,
        promoted: 0
      }
    };
  },
  methods: {
    ceatetwenty_read() {
      var self = this;
      axios
        .get(this.ajax_prefix + "twenty_read/create")
        .then(function(response) {
          self.mushafs = response.data.mushafs;
          self.soar = response.data.soar;
          self.report_soar = response.data.report_soar;
          self.twenty_rewayat = response.data.twenty_rewayat;
          self.servers = response.data.servers;
          self.reciters = response.data.reciters;
          self.show_spinner = false;
        })
        .catch(function(error) {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    }
  },
  mounted() {
    this.ceatetwenty_read();
  }
};
</script>
