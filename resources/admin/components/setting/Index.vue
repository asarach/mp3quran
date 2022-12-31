<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('front.settings')" />
    <section class="content-header">
      <h1>{{ trans('front.settings')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('front.settings')}}</li>
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
          <div class="card">
            <form role="form" @submit.prevent="updateSettings()">
              <div class="card-head">
                <h3 class="card-title">{{ trans('admin.edit-settings')}}</h3>
              </div>
              <div class="card-body table-responsive">
                <div class="form-group row">
                  <label class="col-sm-8 col-form-label">{{ trans('admin.app_name')}}</label>
                  <div class="col-sm-16">
                    <input
                      type="text"
                      name="app_name"
                      class="form-control"
                      v-model="settings.app_name"
                      @keydown="errors.clear('app_name')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('app_name')"
                    >{{errors.get('app_name')}}</small>
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-sm-8 col-form-label">{{ trans('admin.home_title')}}</label>
                  <div class="col-sm-16">
                    <input
                      type="text"
                      name="home_title"
                      class="form-control"
                      v-model="settings.home_title"
                      @keydown="errors.clear('home_title')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('home_title')"
                    >{{errors.get('home_title')}}</small>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-8 col-form-label">{{ trans('admin.main_description')}}</label>
                  <div class="col-sm-16">
                    <textarea
                      name="main_description"
                      class="form-control"
                      v-model="settings.main_description"
                      rows="3"
                      @change="errors.clear('main_description')"
                    ></textarea>
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('main_description')"
                    >{{errors.get('main_description')}}</small>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-8 col-form-label">{{ trans('admin.main_keywords')}}</label>
                  <div class="col-sm-16">
                    <textarea
                      name="main_keywords"
                      class="form-control"
                      v-model="settings.main_keywords"
                      rows="3"
                      @change="errors.clear('main_keywords')"
                    ></textarea>
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('main_keywords')"
                    >{{errors.get('main_keywords')}}</small>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-8 col-form-label">{{ trans('admin.main_radio')}}</label>
                  <div class="col-sm-16">
                    <input
                      type="text"
                      name="main_radio"
                      class="form-control"
                      v-model="settings.main_radio"
                      @keydown="errors.clear('main_radio')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('main_radio')"
                    >{{errors.get('main_radio')}}</small>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-8 col-form-label">{{ trans('admin.facebook')}}</label>
                  <div class="col-sm-16">
                    <input
                      type="text"
                      name="facebook"
                      class="form-control"
                      v-model="settings.facebook"
                      @keydown="errors.clear('facebook')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('facebook')"
                    >{{errors.get('facebook')}}</small>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-8 col-form-label">{{ trans('admin.soundcloud')}}</label>
                  <div class="col-sm-16">
                    <input
                      type="text"
                      name="soundcloud"
                      class="form-control"
                      v-model="settings.soundcloud"
                      @keydown="errors.clear('soundcloud')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('soundcloud')"
                    >{{errors.get('soundcloud')}}</small>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-8 col-form-label">{{ trans('admin.youtube')}}</label>
                  <div class="col-sm-16">
                    <input
                      type="text"
                      name="youtube"
                      class="form-control"
                      v-model="settings.youtube"
                      @keydown="errors.clear('youtube')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('youtube')"
                    >{{errors.get('youtube')}}</small>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-8 col-form-label">{{ trans('admin.instagram')}}</label>
                  <div class="col-sm-16">
                    <input
                      type="text"
                      name="instagram"
                      class="form-control"
                      v-model="settings.instagram"
                      @keydown="errors.clear('instagram')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('instagram')"
                    >{{errors.get('instagram')}}</small>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-8 col-form-label">{{ trans('admin.twitter')}}</label>
                  <div class="col-sm-16">
                    <input
                      type="text"
                      name="twitter"
                      class="form-control"
                      v-model="settings.twitter"
                      @keydown="errors.clear('twitter')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('twitter')"
                    >{{errors.get('twitter')}}</small>
                  </div>
                </div>
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
const Errors = require("../../errors.js");

export default {
  data() {
    return {
      show_spinner: true,
      show_error: false,
      errors: new Errors(),
      settings: {
        app_name: "",
        facebook: "",
        soundcloud: "",
        youtube: "",
        instagram: "",
        twitter: "",
        main_radio: "",
        home_title: "",
        main_keywords: "",
        main_description: ""
      }
    };
  },
  methods: {
    getSettings() {
      var self = this;
      axios
        .get(this.ajax_prefix + "settings")
        .then(function(response) {
          self.settings.app_name = response.data.settings.app_name;
          self.settings.facebook = response.data.settings.facebook;
          self.settings.soundcloud = response.data.settings.soundcloud;
          self.settings.youtube = response.data.settings.youtube;
          self.settings.instagram = response.data.settings.instagram;
          self.settings.twitter = response.data.settings.twitter;
          self.settings.main_radio = response.data.settings.main_radio;
          self.settings.home_title = response.data.settings.home_title;
          self.settings.main_keywords = response.data.settings.main_keywords;
          self.settings.main_description =
            response.data.settings.main_description;
          self.show_spinner = false;
        })
        .catch(function(error) {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    },
    updateSettings() {
      var self = this;
      var data = this.settings;
      axios
        .put(this.ajax_prefix + "settings", data)
        .then(response => {
          self.$router.push(this.prefix + "settings");
          self.$notify({
            group: "admin",
            text: self.trans("front.settings-edited"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(error => {
          self.errors.record(error);
          self.$notify({
            group: "admin",
            text: self.trans("front.settings-not-edited"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    }
  },
  mounted() {
    this.getSettings();
  }
};
</script>
