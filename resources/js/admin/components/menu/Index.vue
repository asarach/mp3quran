<template>
  <div class="content-wrapper">
    <vue-headful
      :title="trans('admin.dashboard_title') + ' | ' + trans('front.menus')"
    />
    <section class="content-header">
      <h1>{{ trans("front.menus") }}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans("admin.dashboard") }}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans("front.menus") }}</li>
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
              <h3 class="card-title">{{ trans("admin.all-menus") }}</h3>
              <div class="card-tools">
                <div class="pull-left">
                  <a
                    v-if="trashed"
                    @click.prevent="trashedMenus(false)"
                    class="btn btn-info btn-sm"
                  >
                    <i class="fas fa-folder-open m-0"></i>
                    {{ trans("admin.all") }}
                  </a>
                  <a
                    v-else
                    @click.prevent="trashedMenus(true)"
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
                @order="orderMenus"
                :status="status"
                @filter="filterMenus"
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
                    <th scope="col">{{ trans('admin.order_num')}}</th>
                    <th scope="col">{{ trans('admin.place')}}</th>
                    <th scope="col" style="width: 80px; text-align: center">
                      {{ trans("admin.status") }}
                    </th>

                    <th scope="col" style="width: 100px; text-align: center">
                      {{ trans("admin.options") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(menu, item) in menus.data" :key="menu.id">
                    <td scope="row" class="actions-check">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          v-model="actions_items[menu.id]"
                          class="custom-control-input"
                          :id="'actionsCheckbox' + menu.id"
                        />
                        <label
                          class="custom-control-label"
                          :for="'actionsCheckbox' + menu.id"
                        ></label>
                      </div>
                    </td>
                    <td scope="row">{{ menu.id }}</td>
                    <td>{{ menu.title }}</td>
                    <td>{{menu.order_num}}</td>
                    <td>{{menu.place}}</td>
                    <td class="text-center">
                      <a
                        v-if="menu.status !== 1"
                        href="#"
                        class="text-danger"
                        @click.prevent="changeStatus(menu.id, 1, item)"
                      >
                        <i class="fas fa-ban"></i>
                      </a>
                      <a
                        v-else
                        href="#"
                        class="text-success"
                        @click.prevent="changeStatus(menu.id, 0, item)"
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
                            :data-original-title="trans('admin.restore-menu')"
                            @click.prevent="restorMenu(menu.id)"
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
                            :data-original-title="trans('admin.delete-menu')"
                            @click.prevent="deleteMenu(menu.id, item)"
                          >
                            <i class="fas fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                      <ul v-else class="list-inline p-0 m-0">
                        <li class="list-inline-item">
                          <router-link
                            :to="prefix + 'menu/edit/' + menu.id"
                            data-placement="left"
                            class="tip btn-uni edit"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.edit-menu')"
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
                            :data-original-title="trans('admin.delete-menu')"
                            @click.prevent="deleteMenu(menu.id, item)"
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
                      >
                        {{ trans("admin.delete-selected") }}
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        @click.prevent="actionRestor()"
                        v-if="this.trashed"
                      >
                        {{ trans("admin.restor-selected") }}
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        v-if="!this.trashed"
                        @click.prevent="actionChangeStatus(1)"
                      >
                        {{ trans("admin.status-active-selected") }}
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        v-if="!this.trashed"
                        @click.prevent="actionChangeStatus(0)"
                      >
                        {{ trans("admin.status-deactive-selected") }}
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <pagination
                    :pagination="menus"
                    @paginate="getMenus()"
                    :offset="4"
                  ></pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <menu-form
            :action="'create'"
            @refrech="getMenus()"
            :menu="menu"
            :languages="languages"
            :places="places"
          ></menu-form>
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
      actions_check: false,
      actions_items: {},
      sort: this.$route.params.sort,
      direction: this.$route.params.direction,
      filters: {
        statu: "",
      },
      menus: {},
      status: ["0", "1"],
      trashed: false,
      languages: {},
      places: {},
      menu: {
        title: "",
        slug: "",
        order_num: "",
        place: "",
        icon: "",
        languages: [],
        status: 0,
      },
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
          sort: "created_at",
          direction: "desc",
          text: "order-by-newest",
        },
        {
          sort: "created_at",
          direction: "asc",
          text: "order-by-oldest",
        },
      ],
    };
  },

  methods: {
    getMenus() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then((response) => {
          self.menus = response.data.menus;
          self.languages = response.data.languages;
          self.places = response.data.places;

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
      for (let index = 0; index < this.menus.data.length; index++) {
        this.actions_items[this.menus.data[index].id] = this.actions_check;
      }
    },
    preparUrl() {
      var base = this.ajax_prefix + "menus?";
      var page = this.menus.current_page;
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
      if (this.filters.statu) {
        base += "statu=" + this.filters.statu + "&";
      }

      return base.slice(0, -1);
    },
    filterMenus(filters) {
      this.filters = filters;
      this.menus.current_page = undefined;
      this.getMenus();
    },
    orderMenus(order) {
      this.sort = order.sort;
      this.direction = order.direction;
      this.menus.current_page = undefined;
      this.getMenus();
    },
    deleteMenu(id, key) {
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
        .delete(this.ajax_prefix + "menu/" + id + forced)
        .then(function (response) {
          self.actions_items[self.menus.data[key].id] = false;
          self.$delete(self.menus.data, key);

          Event.$emit(
            "notify",
            self.trans("admin.menu-deleted"),
            "success",
            self.trans("text.success")
          );
        })
        .catch(function (error) {
          Event.$emit(
            "notify",
            self.trans("admin.menu-not-deleted"),
            "warning",
            self.trans("text.warning")
          );
        });
    },
    changeStatus: function (id, status, item) {
      var self = this;
      axios
        .get(this.ajax_prefix + "menu/" + id + "/status/" + status)
        .then((response) => {
          self.menus.data[item].status = parseInt(response.data.status);
          Event.$emit(
            "notify",
            self.trans("admin.menu-status-changed"),
            "success",
            self.trans("text.success")
          );
        })
        .catch((error) => {
          Event.$emit(
            "notify",
            self.trans("admin.menu-status-not-changed"),
            "warning",
            self.trans("text.warning")
          );
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
        .post(this.ajax_prefix + "menu/actions" + forced, data)
        .then(function (response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.menus.data
              .map((item) => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.menus.data, key);
            self.actions_items[response.data.results[index]] = false;
          }
          Event.$emit(
            "notify",
            self.trans("admin.menu-deleted"),
            "success",
            self.trans("admin.success")
          );
        })
        .catch(function (error) {
          Event.$emit(
            "notify",
            self.trans("admin.menu-not-deleted"),
            "warning",
            self.trans("admin.warning")
          );
        });
    },
    actionChangeStatus(status) {
      var self = this;
      if (status == 1) {
        var action = "status-active";
      } else {
        var action = "status-deactive";
      }
      var data = {
        action: action,
        items: this.actions_items,
      };
      axios
        .post(this.ajax_prefix + "menu/actions", data)
        .then(function (response) {
          for (let index = 0; index < response.data.results.length; index++) {
            var item = response.data.results[index];

            let key = self.menus.data
              .map((item) => item.id)
              .indexOf(item["id"]);

            self.menus.data[key].status = item["status"];
          }
          Event.$emit(
            "notify",
            self.trans("admin.menu-status-changed"),
            "success",
            self.trans("admin.success")
          );
        })
        .catch(function (error) {
          Event.$emit(
            "notify",
            self.trans("admin.menu-status-not-changed"),
            "warning",
            self.trans("admin.warning")
          );
        });
    },
    trashedMenus(trashed) {
      this.menus.current_page = undefined;
      this.trashed = trashed;
      this.getMenus();
    },
    restorMenu(id) {
      var self = this;
      axios
        .get(this.ajax_prefix + "menu/restore/" + id)
        .then(function (response) {
          self.trashed = false;
          self.getMenus();
          Event.$emit(
            "notify",
            self.trans("admin.menu-restored"),
            "success",
            self.trans("text.success")
          );
        })
        .catch(function (error) {
          Event.$emit(
            "notify",
            self.trans("admin.menu-not-restored"),
            "warning",
            self.trans("text.warning")
          );
        });
    },
    actionRestor() {
      var self = this;
      var data = {
        action: "restor",
        items: this.actions_items,
      };
      axios
        .post(this.ajax_prefix + "menu/actions", data)
        .then(function (response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.menus.data
              .map((item) => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.menus.data, key);
          }
          Event.$emit(
            "notify",
            self.trans("admin.menu-restored"),
            "success",
            self.trans("admin.success")
          );
        })
        .catch(function (error) {
          Event.$emit(
            "notify",
            self.trans("admin.menu-not-restored"),
            "warning",
            self.trans("admin.warning")
          );
        });
    },
  },
  mounted() {
    this.getMenus();
  },
};
</script>