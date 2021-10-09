<template>
  <div class="content-wrapper">
    <vue-headful
      :title="trans('admin.dashboard_title') + ' | ' + trans('front.ads')"
    />
    <section class="content-header">
      <h1>{{ trans("front.ads") }}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans("admin.dashboard") }}
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="prefix + 'ads'">
            <i class="fa fa-dashboard"></i>
            {{ trans("front.ads") }}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans("admin.edit-ad") }}</li>
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
          <ad-form
            :action="'edit'"
            :ad="ad"
            :places="places"
            :languages="languages"
          ></ad-form>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-24">
          <div class="card">
            <form role="form" @submit.prevent="translatePage()">
              <div class="card-head">
                <h3 class="card-title">{{ trans("front.translations") }}</h3>
              </div>
              <div class="card-body table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col" style="width: 20%">
                        {{ trans("admin.language") }}
                      </th>
                      <th scope="col" style="width: 80%">
                        {{ trans("text.name") }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="translation in translations"
                      :key="translation.id"
                    >
                      <th scope="row">{{ translation.language }}</th>
                      <td>
                        <div class="form-group">
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            v-model="translation.name"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-footer clearfix">
                <div class="float-left">
                  <button type="submit" class="btn btn-info btn-sm">
                    {{ trans("admin.save") }}
                  </button>
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
      translations: [],
      places: [],
      languages: {},
      ad: {
        name: "",
        order_num: "",
        url: "",
        place: "",
        start_date: "",
        end_date: "",
        text: "",
        locale: "",
        image: "",
        status: 0,
      },
    };
  },
  methods: {
    editad() {
      var self = this;
      axios
        .get(this.ajax_prefix + "ad/edit/" + self.$route.params.id)
        .then(function (response) {
          self.ad = response.data.ad;
          self.translations = response.data.translations;
          self.languages = response.data.languages;
          self.places = response.data.places;
          self.show_spinner = false;
        })
        .catch(function (error) {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    },
    translatePage() {
      var self = this;
      var data = this.translations;
      axios
        .post(
          this.ajax_prefix + "ad/translations/" + self.$route.params.id,
          data
        )
        .then(function (response) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.ad-edited"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.ad-not-edited"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
  },
  mounted() {
    this.editad();
  },
};
</script>
