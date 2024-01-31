<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('front.special_rewayat')" />
    <section class="content-header">
      <h1>{{ trans('front.special_rewayat')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('front.special_rewayat')}}</li>
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
              <h3 class="card-title">{{ trans('text.all-special_rewayat')}}</h3>
              <div class="card-tools">
                <div class="pull-left">
                  <a
                    v-if="trashed"
                    @click.prevent="trashedspecial_rewayat(false)"
                    class="btn btn-info btn-sm"
                  >
                    <i class="fas fa-folder-open m-0"></i>
                    {{ trans('text.all')}}
                  </a>
                  <a v-else @click.prevent="trashedspecial_rewayat(true)" class="btn btn-info btn-sm">
                    <i class="fas fa-recycle m-0"></i>
                    {{ trans('admin.trashed')}}
                  </a>
                </div>
              </div>
            </div>
            <div class="card-body table-responsive p-0">
              <filtering
                :orders="orders"
                :status="status"
                @filter="filterRewayat"
                @order="orderspecial_rewayat"
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
                        <label class="custom-control-label" for="actionsCheck"></label>
                      </div>
                    </th>

                    <th scope="col">#</th>
                    <th scope="col">{{ trans('text.name')}}</th>
                    <th
                      scope="col"
                      style="width: 80px;text-align: center;"
                    >{{ trans('admin.status')}}</th>
                    <th
                      scope="col"
                      style="width: 100px;text-align: center;"
                    >{{ trans('admin.options')}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(special_rewaya, item, index) in special_rewayat.data" :key="special_rewaya.id">
                    <td scope="row" class="actions-check">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          v-model="actions_items[special_rewaya.id]"
                          class="custom-control-input"
                          :id="'actionsCheckbox' + special_rewaya.id"
                        />
                        <label class="custom-control-label" :for="'actionsCheckbox'+special_rewaya.id"></label>
                      </div>
                    </td>
                    <td scope="row">{{special_rewaya.id}}</td>
                    <td>{{special_rewaya.name}}</td>
                    <td class="text-center">
                      <a
                        v-if="special_rewaya.status !== 1"
                        href="#"
                        class="text-danger"
                        @click.prevent="changeStatus(special_rewaya.id, 1, item)"
                      >
                        <i class="fas fa-ban"></i>
                      </a>
                      <a
                        v-else
                        href="#"
                        class="text-success"
                        @click.prevent="changeStatus(special_rewaya.id, 0, item)"
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
                            :data-original-title="trans('admin.restore-special_rewaya')"
                            @click.prevent="restorRewaya(special_rewaya.id)"
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
                            :data-original-title="trans('admin.delete-special_rewaya')"
                            @click.prevent="deleteRewaya(special_rewaya.id, item)"
                          >
                            <i class="fas fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                      <ul v-else class="list-inline p-0 m-0">
                        <li class="list-inline-item">
                          <router-link
                            :to="prefix + 'special_rewaya/edit/' + special_rewaya.id "
                            data-placement="left"
                            class="tip btn-uni edit"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.edit-special_rewaya')"
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
                            :data-original-title="trans('admin.delete-special_rewaya')"
                            @click.prevent="deleteRewaya(special_rewaya.id, item)"
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
                      <span class="text-muted">{{trans('admin.actions')}}</span>
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownActions"
                    >
                      <a
                        class="dropdown-item"
                        href="#"
                        @click.prevent="actionDelete()"
                      >{{ trans('admin.delete-selected') }}</a>
                      <a
                        class="dropdown-item"
                        href="#"
                        v-if="!this.trashed"
                        @click.prevent="actionChangeStatus(1)"
                      >{{ trans('admin.activate-selected') }}</a>
                      <a
                        class="dropdown-item"
                        href="#"
                        v-if="!this.trashed"
                        @click.prevent="actionChangeStatus(0)"
                      >{{ trans('admin.deactivate-selected') }}</a>
                      <a
                        class="dropdown-item"
                        href="#"
                        @click.prevent="actionRestor()"
                        v-if="this.trashed"
                      >{{ trans('admin.restor-selected') }}</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <pagination :pagination="special_rewayat" @paginate="getRewayat()" :offset="4"></pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <special_rewaya-form :action="'create'" @refrech="getRewayat()" :special_rewaya="special_rewaya"></special_rewaya-form>
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
        statu: ""
      },
      special_rewayat: {},
      status: ["0", "1"],
      trashed: false,
      special_rewaya: {
        name: "",
        slug: "",
        status: 0
      },
      orders: [
        {
          sort: "name",
          direction: "desc",
          text: "order-by-name-desc"
        },
        {
          sort: "name",
          direction: "asc",
          text: "order-by-name-asc"
        },
        {
          sort: "id",
          direction: "desc",
          text: "order-by-newest"
        },
        {
          sort: "id",
          direction: "asc",
          text: "order-by-oldest"
        }
      ]
    };
  },
  methods: {
    getRewayat() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then(response => {
          self.special_rewayat = response.data.special_rewayat;
          self.show_spinner = false;
          window.scroll(0, 0);
        })
        .catch(error => {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    },
    filterRewayat(filters) {
      this.filters = filters;
      this.special_rewayat.current_page = undefined;
      this.getRewayat();
    },
    actionsChange() {
      var items = {};
      for (let index = 0; index < this.special_rewayat.data.length; index++) {
        this.actions_items[this.special_rewayat.data[index].id] = this.actions_check;
      }
    },
    trashedspecial_rewayat(trashed) {
      this.special_rewayat.current_page = undefined;
      this.trashed = trashed;
      this.getRewayat();
    },
    orderspecial_rewayat(order) {
      this.sort = order.sort;
      this.direction = order.direction;
      this.special_rewayat.current_page = undefined;
      this.getRewayat();
    },
    preparUrl() {
      var base = this.ajax_prefix + "special_rewayat?";
      var page = this.special_rewayat.current_page;
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

    deleteRewaya(id, key) {
      var self = this;
      Event.$off("confirmed");
      Event.$emit("confirm");
      Event.$on("confirmed", function() {
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
        .delete(this.ajax_prefix + "special_rewaya/" + id + forced)
        .then(function(response) {
          self.actions_items[self.special_rewayat.data[key].id] = false;
          self.$delete(self.special_rewayat.data, key);
          self.$notify({
            group: "admin",
            text: self.trans("admin.special_rewaya-deleted"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.special_rewaya-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    changeStatus: function(id, status, item) {
      var self = this;
      axios
        .get(this.ajax_prefix + "special_rewaya/" + id + "/status/" + status)
        .then(response => {
          self.special_rewayat.data[item].status = parseInt(response.data.status);
          self.$notify({
            group: "admin",
            text: self.trans("admin.special_rewaya-status-changed"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(error => {
          self.$notify({
            group: "admin",
            text: self.trans("admin.special_rewaya-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    restorRewaya(id) {
      var self = this;
      axios
        .get(this.ajax_prefix + "special_rewaya/restore/" + id)
        .then(function(response) {
          self.trashed = false;
          self.getRewayat();
          self.$notify({
            group: "admin",
            text: self.trans("admin.special_rewaya-restored"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.special_rewaya-not-restored"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    actionDelete() {
      var self = this;
      Event.$off("confirmed");
      Event.$emit("confirm");
      Event.$on("confirmed", function() {
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
        items: this.actions_items
      };
      axios
        .post(this.ajax_prefix + "special_rewaya/actions" + forced, data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.special_rewayat.data
              .map(item => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.special_rewayat.data, key);
            self.actions_items[response.data.results[index]] = false;
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.special_rewaya-deleted"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.special_rewaya-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    actionRestor() {
      var self = this;
      var data = {
        action: "restor",
        items: this.actions_items
      };
      axios
        .post(this.ajax_prefix + "special_rewaya/actions", data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.special_rewayat.data
              .map(item => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.special_rewayat.data, key);
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.special_rewaya-restored"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.special_rewaya-not-restored"),
            type: "warning",
            title: self.trans("admin.warning")
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
        items: this.actions_items
      };
      axios
        .post(this.ajax_prefix + "special_rewaya/actions", data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            var item = response.data.results[index];

            let key = self.special_rewayat.data
              .map(item => item.id)
              .indexOf(item["id"]);

            self.special_rewayat.data[key].status = item["status"];
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.special_rewaya-status-changed"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.special_rewaya-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    }
  },
  mounted() {
    this.getRewayat();
  }
};
</script>
