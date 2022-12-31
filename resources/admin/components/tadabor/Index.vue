<template>
  <div class="content-wrapper">
    <vue-headful
      :title="trans('admin.dashboard_title') + ' | ' + trans('text.tadabors')"
    />
    <section class="content-header">
      <h1>{{ trans("text.tadabors") }}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans("admin.dashboard") }}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans("text.tadabors") }}</li>
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
        <div class="col-lg-16">
          <div class="card">
            <div class="card-head">
              <h3 class="card-title">{{ trans("text.all-tadabors") }}</h3>
              <div class="card-tools">
                <div class="pull-left">
                  <a
                    v-if="trashed"
                    @click.prevent="trashedTadabors(false)"
                    class="btn btn-info btn-sm"
                  >
                    <i class="fas fa-folder-open m-0"></i>
                    {{ trans("text.all") }}
                  </a>
                  <a
                    v-else
                    @click.prevent="trashedTadabors(true)"
                    class="btn btn-info btn-sm"
                  >
                    <i class="fas fa-recycle m-0"></i>
                    {{ trans("admin.trashed") }}
                  </a>
                </div>
              </div>
            </div>
            <div class="card-body table-responsive p-0">
              <filtering
                :orders="orders"
                :status="status"
                :query="query"
                :rewayat="rewayat"
                :reciters="reciters"
                :soar="soar"
                @filter="filterTadabors"
                @order="orderTadabors"
              ></filtering>
              <table class="table table-hover table-striped">
                <thead>
                  <tr>
                    <th scope="col" class="actions-check">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          v-model="actions_check"
                          class="custom-control-input"
                          @change="actionsChange()"
                          id="actionsCheck"
                        />
                        <label
                          class="custom-control-label"
                          for="actionsCheck"
                        ></label>
                      </div>
                    </th>
                    <th scope="col">#</th>
                    <th scope="col">{{ trans("text.title") }}</th>
                    <th scope="col">{{ trans("admin.sora") }}</th>
                    <th scope="col">{{ trans("admin.reciter") }}</th>
                    <th scope="col">{{ trans("admin.rewaya") }}</th>
                    <th scope="col" style="width: 80px; text-align: center">
                      {{ trans("admin.status") }}
                    </th>
                    <th scope="col" style="width: 100px; text-align: center">
                      {{ trans("admin.options") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(tadabor, item) in tadabors.data"
                    :key="tadabor.id"
                  >
                    <td scope="row" class="actions-check">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          v-model="actions_items[tadabor.id]"
                          class="custom-control-input"
                          :id="'actionsCheckbox' + tadabor.id"
                        />
                        <label
                          class="custom-control-label"
                          :for="'actionsCheckbox' + tadabor.id"
                        ></label>
                      </div>
                    </td>
                    <td scope="row">{{ tadabor.id }}</td>
                    <td>{{ tadabor.title }}</td>

                    <td v-if="tadabor.sora">
                      {{ tadabor.sora.name }}
                    </td>
                    <td v-else>-</td>

                    <td v-if="tadabor.reciter">
                      {{ tadabor.reciter.name }}
                    </td>
                    <td v-else>-</td>

                    <td v-if="tadabor.rewaya">
                      {{ tadabor.rewaya.name }}
                    </td>
                    <td v-else>-</td>

                    <td class="text-center">
                      <a
                        v-if="tadabor.status !== 1"
                        href="#"
                        class="text-danger"
                        @click.prevent="changeStatus(tadabor.id, 1, item)"
                      >
                        <i class="fas fa-ban"></i>
                      </a>
                      <a
                        v-else
                        href="#"
                        class="text-success"
                        @click.prevent="changeStatus(tadabor.id, 0, item)"
                      >
                        <i class="fas fa-check"></i>
                      </a>
                    </td>
                    <td class="text-center">
                      <ul v-if="trashed" class="list-inline p-0 m-0">
                        <li class="list-inline-item">
                          <a
                            href="#"
                            data-placement="left"
                            class="tip btn-uni edit"
                            data-toggle="tooltip"
                            title
                            :data-original-title="
                              trans('admin.restore-tadabor')
                            "
                            @click.prevent="restorTadabor(tadabor.id)"
                          >
                            <i class="fas fa-reply-all"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            href="#"
                            data-placement="left"
                            class="tip btn-uni delete"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.delete-tadabor')"
                            @click.prevent="deleteTadabor(tadabor.id, item)"
                          >
                            <i class="fas fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                      <ul v-else class="list-inline p-0 m-0">
                        <li class="list-inline-item">
                          <router-link
                            :to="prefix + 'tadabor/edit/' + tadabor.id"
                            data-placement="left"
                            class="tip btn-uni edit"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.edit-tadabor')"
                          >
                            <i class="fas fa-pen"></i>
                          </router-link>
                        </li>
                        <li class="list-inline-item">
                          <a
                            href="#"
                            data-placement="left"
                            class="tip btn-uni delete"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.delete-tadabor')"
                            @click.prevent="deleteTadabor(tadabor.id, item)"
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
              <div class="row">
                <div class="col">
                  <div class="actions dropdown">
                    <button
                      class="btn dropdown-toggle wp-120"
                      type="button"
                      id="dropdownActions"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="text-muted">{{
                        trans("admin.actions")
                      }}</span>
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownActions"
                    >
                      <a
                        class="dropdown-item"
                        href="#"
                        @click.prevent="actionDelete()"
                        >{{ trans("admin.delete-selected") }}</a
                      >
                      <a
                        class="dropdown-item"
                        href="#"
                        v-if="!this.trashed"
                        @click.prevent="actionChangeStatus(1)"
                        >{{ trans("admin.activate-selected") }}</a
                      >
                      <a
                        class="dropdown-item"
                        href="#"
                        v-if="!this.trashed"
                        @click.prevent="actionChangeStatus(0)"
                        >{{ trans("admin.deactivate-selected") }}</a
                      >
                      <a
                        class="dropdown-item"
                        href="#"
                        @click.prevent="actionRestor()"
                        v-if="this.trashed"
                        >{{ trans("admin.restor-selected") }}</a
                      >
                    </div>
                  </div>
                </div>
                <div class="col">
                  <pagination
                    :pagination="tadabors"
                    @paginate="getTadabors()"
                    :offset="4"
                  ></pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <tadabor-form
            :action="'create'"
            :rewayat="rewayat"
            @refrech="getTadabors()"
            :soar="soar"
            :reciters="reciters"
            :tadabor="tadabor"
          ></tadabor-form>
          <div class="card">
            <form role="form" @submit.prevent="saveLanguages()">
              <div class="card-head">
                <h3 class="card-title">
                  {{ trans("admin.active-languages") }}
                </h3>
              </div>
              <div class="card-body table-responsive">
                <div class="form-group soar-checkboxs">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      v-model="languages_check"
                      class="custom-control-input"
                      @change="languagesChange()"
                      id="languagesCheck"
                    />
                    <label class="custom-control-label" for="languagesCheck">{{
                      trans("text.all")
                    }}</label>
                  </div>
                  <div
                    v-for="language in languages"
                    :key="language.id"
                    class="custom-control custom-checkbox"
                  >
                    <input
                      type="checkbox"
                      v-model="selected_languages[language.id]"
                      class="custom-control-input"
                      :id="'languagesCheckbox' + language.id"
                    />
                    <label
                      class="custom-control-label"
                      :for="'languagesCheckbox' + language.id"
                      >{{ language.id }} - {{ language.name }}</label
                    >
                  </div>
                </div>
              </div>
              <div class="card-footer clearfix">
                <div class="float-right">
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
export default {
  data() {
    return {
      show_spinner: true,
      show_error: false,
      tadabors: {},
      soar: {},
      languages: {},
      selected_languages: [],
      languages_check: false,
      rewayat: {},
      reciters: {},
      actions_check: false,
      actions_items: {},
      sort: this.$route.params.sort,
      direction: this.$route.params.direction,
      tadabor: {
        title: "",
        audio_url: "",
        image_url: "",
        text: "",
        sora: {},
        reciter: {},
        rewaya: {},
        status: 0,
      },
      filters: {
        statu: "",
        query: "",
        rewaya: "",
        sora: "",
        reciter: "",
        type: "",
      },
      trashed: false,
      query: true,
      status: ["0", "1"],

      orders: [
        {
          sort: "title",
          direction: "desc",
          text: "order-by-title-desc",
        },
        {
          sort: "title",
          direction: "asc",
          text: "order-by-title-asc",
        },
        {
          sort: "reciter.name",
          direction: "desc",
          text: "order-by-reciter-desc",
        },
        {
          sort: "reciter.name",
          direction: "asc",
          text: "order-by-reciter-asc",
        },
        {
          sort: "sora.name",
          direction: "desc",
          text: "order-by-sora-desc",
        },
        {
          sort: "sora.name",
          direction: "asc",
          text: "order-by-sora-asc",
        },
        {
          sort: "rewaya.name",
          direction: "desc",
          text: "order-by-rewaya-desc",
        },
        {
          sort: "rewaya.name",
          direction: "asc",
          text: "order-by-rewaya-asc",
        },
        {
          sort: "id",
          direction: "desc",
          text: "order-by-newest",
        },
        {
          sort: "id",
          direction: "asc",
          text: "order-by-oldest",
        },
      ],
    };
  },
  methods: {
    languagesChange() {
      var items = {};
      for (let index = 0; index < this.languages.length; index++) {
        this.selected_languages[
          this.languages[index].id
        ] = this.languages_check;
      }
    },
    saveLanguages() {
      var self = this;
      var data = {
        languages: this.selected_languages,
      };
      axios
        .post(this.ajax_prefix + "tadabor/languages", data)
        .then((response) => {
          self.$notify({
            group: "admin",
            text: self.trans("admin.languages-updated"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch((error) => {
          self.$notify({
            group: "admin",
            text: self.trans("admin.languages-not-updated"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    getTadabors() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then((response) => {
          self.tadabors = response.data.tadabors;
          self.soar = response.data.soar;
          self.languages = response.data.languages;
          self.selected_languages = response.data.tadabor_languages;
          self.rewayat = response.data.rewayat;
          self.reciters = response.data.reciters;
          self.show_spinner = false;
          window.scroll(0, 0);
        })
        .catch((error) => {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    },
    actionsChange() {
      var items = {};
      for (let index = 0; index < this.tadabors.data.length; index++) {
        this.actions_items[this.tadabors.data[index].id] = this.actions_check;
      }
    },
    filterTadabors(filters) {
      this.filters = filters;
      this.tadabors.current_page = undefined;
      this.getTadabors();
    },
    trashedTadabors(trashed) {
      this.tadabors.current_page = undefined;
      this.trashed = trashed;
      this.getTadabors();
    },
    orderTadabors(order) {
      this.sort = order.sort;
      this.direction = order.direction;
      this.tadabors.current_page = undefined;
      this.getTadabors();
    },
    preparUrl() {
      var base = this.ajax_prefix + "tadabors?";
      var page = this.tadabors.current_page;
      if (page !== undefined) {
        base += "page=" + page + "&";
      }
      if (this.sort) {
        base += "sort=" + this.sort + "&";
      }
      if (this.direction) {
        base += "direction=" + this.direction + "&";
      }
      if (this.trashed) {
        base += "trashed=" + this.trashed + "&";
      }
      if (this.filters.tadabor) {
        base += "tadabor=" + this.filters.tadabor.id + "&";
      }
      if (this.filters.rewaya) {
        base += "rewaya=" + this.filters.rewaya.id + "&";
      }
      if (this.filters.reciter) {
        base += "reciter=" + this.filters.reciter.id + "&";
      }
      if (this.filters.sora) {
        base += "sora=" + this.filters.sora.id + "&";
      }
      if (this.filters.statu) {
        base += "statu=" + this.filters.statu + "&";
      }
      if (this.filters.query) {
        base += "q=" + this.filters.query + "&";
      }
      if (this.filters.type) {
        base += "type=" + this.filters.type + "&";
      }

      return base.slice(0, -1);
    },

    deleteTadabor(id, key) {
      var self = this;
      Event.$off("confirmed");
      Event.$emit("confirm");
      Event.$on("confirmed", function () {
        self.confirmDalete(id, key);
      });
    },

    confirmDalete(id, key) {
      var self = this;
      var forced = "";
      if (this.trashed) {
        forced = "?forced=true";
      }
      axios
        .delete(this.ajax_prefix + "tadabor/" + id + forced)
        .then(function (response) {
          self.$delete(self.tadabors.data, key);
          self.actions_items[self.tadabors.data[key].id] = false;

          self.$notify({
            group: "admin",
            text: self.trans("admin.tadabor-deleted"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.tadabor-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    changeStatus: function (id, status, item) {
      var self = this;
      axios
        .get(this.ajax_prefix + "tadabor/" + id + "/status/" + status)
        .then((response) => {
          self.tadabors.data[item].status = parseInt(response.data.status);
          self.$notify({
            group: "admin",
            title: self.trans("admin.success"),
            type: "success",
            text: self.trans("admin.tadabor-status-changed"),
          });
        })
        .catch((error) => {
          self.$notify({
            group: "admin",
            text: self.trans("admin.tadabor-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    restorTadabor(id) {
      var self = this;
      axios
        .get(this.ajax_prefix + "tadabor/restore/" + id)
        .then(function (response) {
          self.trashed = false;
          self.getTadabors();
          self.$notify({
            group: "admin",
            text: self.trans("admin.tadabor-restored"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.tadabor-not-restored"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    actionDelete() {
      var self = this;
      Event.$off("confirmed");
      Event.$emit("confirm");
      Event.$on("confirmed", function () {
        self.confirmActionDelete();
      });
    },
    confirmActionDelete() {
      var self = this;
      var forced = "";
      if (this.trashed) {
        forced = "?forced=true";
      }
      var data = {
        action: "delete",
        items: this.actions_items,
      };
      axios
        .post(this.ajax_prefix + "tadabor/actions" + forced, data)
        .then(function (response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.tadabors.data
              .map((item) => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.tadabors.data, key);
            self.actions_items[response.data.results[index]] = false;
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.tadabor-deleted"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.tadabor-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    actionRestor() {
      var self = this;
      var data = {
        action: "restor",
        items: this.actions_items,
      };
      axios
        .post(this.ajax_prefix + "tadabor/actions", data)
        .then(function (response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.tadabors.data
              .map((item) => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.tadabors.data, key);
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.tadabor-restored"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.tadabor-not-restored"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    actionChangeStatus(statu) {
      var self = this;
      if (statu == 1) {
        var action = "activate";
      } else {
        var action = "deactivate";
      }
      var data = {
        action: action,
        items: this.actions_items,
      };
      axios
        .post(this.ajax_prefix + "tadabor/actions", data)
        .then(function (response) {
          for (let index = 0; index < response.data.results.length; index++) {
            var item = response.data.results[index];

            let key = self.tadabors.data
              .map((item) => item.id)
              .indexOf(item["id"]);

            self.tadabors.data[key].status = item["status"];
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.tadabor-status-changed"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.tadabor-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
  },
  mounted() {
    this.getTadabors();
  },
};
</script>
