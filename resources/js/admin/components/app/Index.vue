<template>
  <div class="content-wrapper">
    <vue-headful
      :title="trans('admin.dashboard_title') + ' | ' + trans('text.apps')"
    />
    <section class="content-header">
      <h1>{{ trans("text.apps") }}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans("admin.dashboard") }}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans("text.apps") }}</li>
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
              <h3 class="card-title">{{ trans("text.all-apps") }}</h3>
              <div class="card-tools">
                <div class="pull-left">
                  <a
                    v-if="trashed"
                    @click.prevent="trashedApps(false)"
                    class="btn btn-info btn-sm"
                  >
                    <i class="fas fa-folder-open m-0"></i>
                    {{ trans("text.all") }}
                  </a>
                  <a
                    v-else
                    @click.prevent="trashedApps(true)"
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
                :types="types"
                :status="status"
                @filter="filterApps"
                @order="orderApps"
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
                    <th scope="col">{{ trans("admin.title") }}</th>
                    <th scope="col">{{ trans("admin.order_num") }}</th>
                    <th scope="col">{{ trans("admin.type") }}</th>
                    <th scope="col" style="width: 80px; text-align: center">
                      {{ trans("admin.status") }}
                    </th>
                    <th scope="col" style="width: 100px; text-align: center">
                      {{ trans("admin.options") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(app, item) in apps.data" :key="app.id">
                    <td scope="row" class="actions-check">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          v-model="actions_items[app.id]"
                          class="custom-control-input"
                          :id="'actionsCheckbox' + app.id"
                        />
                        <label
                          class="custom-control-label"
                          :for="'actionsCheckbox' + app.id"
                        ></label>
                      </div>
                    </td>
                    <td scope="row">{{ app.id }}</td>
                    <td>{{ app.title }}</td>
                    <td>{{ app.order_num }}</td>
                    <td>{{ trans("admin.app-type-" + app.type) }}</td>
                    <td class="text-center">
                      <a
                        v-if="app.status !== 1"
                        href="#"
                        class="text-danger"
                        @click.prevent="changeStatus(app.id, 1, item)"
                      >
                        <i class="fas fa-ban"></i>
                      </a>
                      <a
                        v-else
                        href="#"
                        class="text-success"
                        @click.prevent="changeStatus(app.id, 0, item)"
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
                            :data-original-title="trans('admin.restore-app')"
                            @click.prevent="restorApp(app.id)"
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
                            :data-original-title="trans('admin.delete-app')"
                            @click.prevent="deleteApp(app.id, item)"
                          >
                            <i class="fas fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                      <ul v-else class="list-inline p-0 m-0">
                        <li class="list-inline-item">
                          <router-link
                            :to="prefix + 'app/edit/' + app.id"
                            data-placement="left"
                            class="tip btn-uni edit"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.edit-app')"
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
                            :data-original-title="trans('admin.delete-app')"
                            @click.prevent="deleteApp(app.id, item)"
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
                    :pagination="apps"
                    @paginate="getApps()"
                    :offset="4"
                  ></pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <app-form
            :action="'create'"
            @refrech="getApps()"
            :app="app"
          ></app-form>
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
      apps: {},
      actions_check: false,
      actions_items: {},
      sort: this.$route.params.sort,
      direction: this.$route.params.direction,
      app: {
        title: "",
        order_num: "",
        url: "",
        android: "",
        apple: "",
        huawei: "",
        image: "",
        type: "",
        keywords: "",
        description: "",
        status: 0,
      },
      filters: {
        statu: "",
        type: "",
      },
      trashed: false,
      status: ["0", "1"],
      types: ["1", "2"],
      orders: [
        {
          sort: "order_num",
          direction: "desc",
          text: "order-by-order_num-desc"
        },
        {
          sort: "order_num",
          direction: "asc",
          text: "order-by-order_num-asc"
        },
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
    getApps() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then((response) => {
          self.apps = response.data.apps;
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
      for (let index = 0; index < this.apps.data.length; index++) {
        this.actions_items[this.apps.data[index].id] = this.actions_check;
      }
    },
    filterApps(filters) {
      this.filters = filters;
      this.apps.current_page = undefined;
      this.getApps();
    },
    trashedApps(trashed) {
      this.apps.current_page = undefined;
      this.trashed = trashed;
      this.getApps();
    },
    orderApps(order) {
      this.sort = order.sort;
      this.direction = order.direction;
      this.apps.current_page = undefined;
      this.getApps();
    },
    preparUrl() {
      var base = this.ajax_prefix + "apps?";
      var page = this.apps.current_page;
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
      if (this.filters.app) {
        base += "app=" + this.filters.app.id + "&";
      }
      if (this.filters.rewaya) {
        base += "rewaya=" + this.filters.rewaya.id + "&";
      }
      if (this.filters.reciter) {
        base += "reciter=" + this.filters.reciter.id + "&";
      }
      if (this.filters.statu) {
        base += "statu=" + this.filters.statu + "&";
      }
      if (this.filters.type) {
        base += "type=" + this.filters.type + "&";
      }

      return base.slice(0, -1);
    },

    deleteApp(id, key) {
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
        .delete(this.ajax_prefix + "app/" + id + forced)
        .then(function (response) {
          self.$delete(self.apps.data, key);
          self.actions_items[self.apps.data[key].id] = false;

          self.$notify({
            group: "admin",
            text: self.trans("admin.app-deleted"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.app-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    changeStatus: function (id, status, item) {
      var self = this;
      axios
        .get(this.ajax_prefix + "app/" + id + "/status/" + status)
        .then((response) => {
          self.apps.data[item].status = parseInt(response.data.status);
          self.$notify({
            group: "admin",
            text: self.trans("admin.app-status-changed"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch((error) => {
          self.$notify({
            group: "admin",
            text: self.trans("admin.app-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    restorApp(id) {
      var self = this;
      axios
        .get(this.ajax_prefix + "app/restore/" + id)
        .then(function (response) {
          self.trashed = false;
          self.getApps();
          self.$notify({
            group: "admin",
            text: self.trans("admin.app-restored"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.app-not-restored"),
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
        .post(this.ajax_prefix + "app/actions" + forced, data)
        .then(function (response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.apps.data
              .map((item) => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.apps.data, key);
            self.actions_items[response.data.results[index]] = false;
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.app-deleted"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.app-not-deleted"),
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
        .post(this.ajax_prefix + "app/actions", data)
        .then(function (response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.apps.data
              .map((item) => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.apps.data, key);
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.app-restored"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.app-not-restored"),
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
        .post(this.ajax_prefix + "app/actions", data)
        .then(function (response) {
          for (let index = 0; index < response.data.results.length; index++) {
            var item = response.data.results[index];

            let key = self.apps.data.map((item) => item.id).indexOf(item["id"]);

            self.apps.data[key].status = item["status"];
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.app-status-changed"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.app-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
  },
  mounted() {
    this.getApps();
  },
};
</script>
