<template>
  <div class="content-wrapper">
    <vue-headful
      :title="
        trans('admin.dashboard_title') + ' | ' + trans('front.translations')
      "
    />
    <section class="content-header">
      <h1>{{ trans("front.translations") }}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans("admin.dashboard") }}
          </router-link>
        </li>
        <li class="breadcrumb-item active">
          {{ trans("front.translations") }}
        </li>
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
            <form role="form" @submit.prevent="updateTranslations">
              <div class="card-head">
                <h3 class="card-title">{{ trans("text.all-translations") }}</h3>
                <div class="card-tools">
                  <div
                    class="btn-refresh float-right tip"
                    data-placement="left"
                    data-toggle="tooltip"
                    title
                    :data-original-title="trans('admin.refresh')"
                    @click="getTranslations()"
                  >
                    <i class="fas fa-sync-alt"></i>
                  </div>
                  <div
                    class="btn-auto-fix float-right mr-3 tip"
                    data-placement="left"
                    data-toggle="tooltip"
                    title
                    :data-original-title="trans('admin.fix-translations')"
                    @click="fixTranslations()"
                  >
                    <i class="fas fa-tools"></i>
                  </div>
                </div>
              </div>
              <div class="card-body table-responsive p-0">
                <filtering
                  :languages="languages"
                  :groups="groups"
                  :item="item"
                  :text="text"
                  @filter="filterTranslations"
                ></filtering>
                <table class="table table-hover table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">{{ trans("admin.item") }}</th>
                      <th scope="col" style="width: 10%">
                        {{ trans("admin.group") }}
                      </th>
                      <th scope="col" style="width: 60%">
                        {{ trans("admin.text") }}
                      </th>
                      <th scope="col" style="width: 10%">
                        {{ trans("admin.locale") }}
                      </th>
                      <th scope="col" class="text-center">
                        {{ trans("admin.options") }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(translation, item, index) in translations.data">
                      <th scope="row" class="text-center">
                        {{ translation.id }}
                      </th>
                      <td>
                        {{ translation.item }}
                        <span
                          class="badge badge-info"
                          v-tooltip="translation.arabic_text"
                          v-clipboard:copy="translation.arabic_text"
                          style="cursor: pointer"
                          >!</span
                        >
                      </td>
                      <th scope="row" class="text-center">
                        {{ translation.group }}
                      </th>

                      <td>
                        <textarea
                          v-model="update_translations[translation.id]"
                          :name="translation.id"
                          class="form-control"
                          rows="1"
                          v-html="translation.text"
                        ></textarea>
                      </td>
                      <th scope="row" class="text-center">
                        {{ localeName(translation.locale) }}
                      </th>

                      <td class="text-center">
                        <ul class="list-inline p-0 m-0">
                          <li class="list-inline-item">
                            <a
                              href="#"
                              data-placement="left"
                              class="tip btn-uni delete"
                              data-toggle="tooltip"
                              title
                              :data-original-title="
                                trans('admin.delete-translation')
                              "
                              @click.prevent="deleteItem(translation.id, item)"
                            >
                              <i class="fas fa-trash"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-footer clearfix">
                <pagination
                  :pagination="translations"
                  @paginate="getTranslations()"
                  :offset="4"
                ></pagination>
                <div class="float-left">
                  <button type="submit" class="btn btn-primary btn-sm">
                    {{ trans("admin.save") }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-24">
          <div class="card">
            <div class="card-head with-border">
              <h3 class="card-title">{{ trans("admin.new-translation") }}</h3>
            </div>
            <div class="card-body">
              <form
                role="form"
                class="form-inline float-right add-translation"
                @submit.prevent="storeTranslation()"
              >
                <div class="form-group mr-2 ml-2">
                  <label for="locale" class="mr-2 ml-2">{{
                    trans("admin.locale")
                  }}</label>
                  <select
                    name="locale"
                    v-model="translation.locale"
                    class="form-control"
                    @change="errors.clear('locale')"
                  >
                    <option
                      v-for="language2 in languages"
                      :value="language2.locale"
                    >
                      {{ language2.name }}
                    </option>
                  </select>
                  <small
                    class="form-text text-danger"
                    v-if="errors.has('locale')"
                    >{{ errors.get("locale") }}</small
                  >
                </div>
                <div class="form-group mr-2 ml-2">
                  <label class="mr-2 ml-2">{{ trans("admin.group") }}</label>
                  <select
                    name="group"
                    v-model="translation.group"
                    class="form-control"
                    @change="errors.clear('group')"
                  >
                    <option v-for="group in groups" :value="group">
                      {{ group }}
                    </option>
                  </select>
                  <small
                    class="form-text text-danger"
                    v-if="errors.has('group')"
                    >{{ errors.get("group") }}</small
                  >
                </div>
                <div class="form-group mr-2 ml-2">
                  <label for="item" class="mr-2 ml-2">{{
                    trans("admin.item")
                  }}</label>
                  <input
                    type="text"
                    v-model="translation.item"
                    name="item"
                    class="form-control"
                    @keydown="errors.clear('item')"
                  />
                  <small
                    class="form-text text-danger"
                    v-if="errors.has('item')"
                    >{{ errors.get("item") }}</small
                  >
                </div>
                <div class="form-group mr-2 ml-2">
                  <label for="text" class="mr-2 ml-2">{{
                    trans("admin.text")
                  }}</label>
                  <textarea
                    name="text"
                    v-model="translation.text"
                    class="form-control"
                    rows="1"
                    @keydown="errors.clear('text')"
                  ></textarea>
                  <small
                    class="form-text text-danger"
                    v-if="errors.has('text')"
                    >{{ errors.get("text") }}</small
                  >
                </div>
                <button type="submit" class="btn btn-primary inline-submit">
                  {{ trans("admin.add") }}
                </button>
              </form>
            </div>
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
      errors: new Errors(),
      filters: {
        locale: "",
        group: "",
        text: "",
        item: "",
      },
      translation: {
        locale: "",
        group: "",
        item: "",
        text: "",
      },
      update_translations: {},
      translations: {},
      language: {},
      languages: {},
      groups: {},
      text: true,
      item: true,
      show_spinner: true,
      show_error: false,
    };
  },
  methods: {
    localeName(loacle) {
      var name = "";
      for (var i = 0; i < this.languages.length; i++) {
        if (this.languages[i].locale == loacle) {
          name = this.languages[i].name_english;
          break;
        }
      }

      return name;
    },
    filterTranslations(filters) {
      this.filters = filters;
      this.translations.current_page = undefined;
      this.getTranslations();
    },
    getTranslations() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then((response) => {
          self.language = response.data.language;
          self.languages = response.data.languages;
          self.groups = response.data.groups;
          self.translations = response.data.translations;
          self.update_translations = {};
          var i;
          for (i = 0; i < response.data.translations.data.length; i++) {
            var trans = response.data.translations.data[i];
            var key = trans.id;
            var val = trans.text;
            self.update_translations[key] = val;
          }
          self.show_spinner = false;
          window.scroll(0, 0);
        })
        .catch((error) => {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    },
    preparUrl() {
      var base = this.ajax_prefix + "translations?";
      var page = this.translations.current_page;
      var locale = this.filters.locale;
      var group = this.filters.group;
      var item = this.filters.item;
      var text = this.filters.text;
      if (locale) {
        base += "locale=" + locale + "&";
      }
      if (group) {
        base += "group=" + group + "&";
      }
      if (text) {
        base += "text=" + text + "&";
      }
      if (item) {
        base += "item=" + item + "&";
      }
      if (page !== undefined) {
        base += "page=" + page + "&";
      }
      var url = base.slice(0, -1);
      return url;
    },
    storeTranslation() {
      var self = this;
      var data = this.translation;
      axios
        .post(this.ajax_prefix + "translation", data)
        .then(function (response) {
          self.translation = {
            locale: "",
            group: "",
            item: "",
            text: "",
          };
          self.$notify({
            group: "admin",
            text: self.trans("admin.translation-added"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.errors.record(error);
          self.$notify({
            group: "admin",
            text: self.trans("admin.translation-not-added"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    updateTranslations() {
      var self = this;
      var data = this.update_translations;
      axios
        .put(this.ajax_prefix + "translations", data)
        .then(function (response) {
          self.translation = {
            locale: "",
            group: "",
            item: "",
            text: "",
          };
          self.$notify({
            group: "admin",
            text: self.trans("admin.translation-edited"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.translation-not-edited"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    deleteItem(id, key) {
      var self = this;
      Event.$off("confirmed");
      Event.$emit("confirm");
      Event.$on("confirmed", function () {
        self.confirmDalete(id, key);
      });
    },
    confirmDalete(id, key) {
      var self = this;
      axios
        .delete(this.ajax_prefix + "translation/" + id)
        .then(function (response) {
          self.$delete(self.translations.data, key);
          self.$notify({
            group: "admin",
            text: self.trans("admin.translation-deleted"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.translation-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    fixTranslations() {
      var self = this;
      axios
        .get(this.ajax_prefix + "translations/translator-fix")
        .then(function (response) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.translation-fixed"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.translation-not-fixed"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
  },
  mounted() {
    this.getTranslations();
  },
};
</script>
