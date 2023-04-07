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
        <li class="breadcrumb-item active">{{ trans('admin.edit-twenty_read')}}</li>
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
            :action="'edit'"
            :soar="soar"
            :twenty_rewayat="twenty_rewayat"
            :report_soar="report_soar"
            :servers="servers"
            :mushafs="mushafs"
            :reciters="reciters"
            :twenty_read="twenty_read"
          ></twenty_read-form>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-24">
          <div class="card">
            <form role="form" @submit.prevent="translatePage()">
              <div class="card-head d-flex">
                <h3 class="card-title">{{ trans('front.translations')}}</h3>
                <button type="button" @click="generateTrans()" class="btn btn-info btn-sm mr-auto">{{ trans('admin.generate')}}</button>
              </div>
              <div class="card-body table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col" style="width: 10%">{{ trans('admin.language')}}</th>
                      <th scope="col" style="width: 20%">{{ trans('text.title')}}</th>
                      <th scope="col" style="width: 35%">{{ trans('admin.description')}}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="translation in translations" :key="translation.id">
                      <th scope="row">{{translation.language}}</th>
                      <td>
                        <div class="form-group">
                          <input
                            type="text"
                            name="title"
                            class="form-control"
                            v-model="translation.title"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group">
                          <textarea
                            name="description"
                            class="form-control"
                            v-model="translation.description"
                            rows="4"
                          ></textarea>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-footer clearfix">
                <div class="float-left">
                  <button type="submit" class="btn btn-info btn-sm">{{ trans('admin.save')}}</button>
                </div>
              </div>
            </form>
          </div>
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
      mushafs: {},
      twenty_rewayat: {},
      servers: {},
      reciters: {},
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
      },
      translations: []
    };
  },
  methods: {
    edittwenty_read() {
      var self = this;
      axios
        .get(this.ajax_prefix + "twenty_read/edit/" + self.$route.params.id)
        .then(function(response) {
          self.twenty_read = response.data.twenty_read;
          self.twenty_read.soar = response.data.twenty_read.old_soar;
          self.mushafs = response.data.mushafs;
          self.report_soar = response.data.report_soar;
          self.twenty_rewayat = response.data.twenty_rewayat;
          self.servers = response.data.servers;
          self.reciters = response.data.reciters;
          self.soar = response.data.soar;
          self.translations = response.data.translations;
          self.show_spinner = false;
        })
        .catch(function(error) {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    },
    generateTrans() {
      var self = this;
      var url = this.ajax_prefix + "twenty_read/translations/generate?reciter_id=" + this.twenty_read.reciter.id + '&twenty_rewaya_id=' + this.twenty_read.twenty_rewaya.id ;
      axios
        .get(url)
        .then(response => {

         self.translations = response.data.translations;
        })
        .catch(error => {
        });
    },
    translatePage() {
      var self = this;
      var data = this.translations;
      axios
        .post(
          this.ajax_prefix + "twenty_read/translations/" + self.$route.params.id,
          data
        )
        .then(function(response) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.twenty_read-edited"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.twenty_read-not-edited"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    }
  },
  mounted() {
    this.edittwenty_read();
  }
};
</script>
