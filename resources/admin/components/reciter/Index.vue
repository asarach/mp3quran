<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('text.reciters')" />
    <section class="content-header">
      <h1>{{ trans('text.reciters')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('text.reciters')}}</li>
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
              <h3 class="card-title">{{ trans('text.all-reciters')}}</h3>
              <div class="card-tools">
                <div class="pull-left">
                  <a
                    v-if="trashed"
                    @click.prevent="trashedCountires(false)"
                    class="btn btn-info btn-sm"
                  >
                    <i class="fas fa-folder-open m-0"></i>
                    {{ trans('text.all')}}
                  </a>
                  <a v-else @click.prevent="trashedCountires(true)" class="btn btn-info btn-sm">
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
                :query="query"
                @filter="filterCountires"
                @order="orderCountires"
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
                    <th scope="col">{{ trans('text.rewayat')}}</th>
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
                  <tr v-for="(reciter, item) in reciters.data" :key="reciter.id">
                    <td scope="row" class="actions-check">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          v-model="actions_items[reciter.id]"
                          class="custom-control-input"
                          :id="'actionsCheckbox' + reciter.id"
                        />
                        <label class="custom-control-label" :for="'actionsCheckbox'+reciter.id"></label>
                      </div>
                    </td>
                    <td scope="row">{{reciter.id}}</td>
                    <td>{{reciter.name}}</td>
                    <td>
                      <span v-for="(rewaya, index) in reciter.rewayat_names" :key="index">{{rewaya}} - </span>
                    </td>
                    <td class="text-center">
                      <a
                        v-if="reciter.status !== 1"
                        href="#"
                        class="text-danger"
                        @click.prevent="changeStatus(reciter.id, 1, item)"
                      >
                        <i class="fas fa-ban"></i>
                      </a>
                      <a
                        v-else
                        href="#"
                        class="text-success"
                        @click.prevent="changeStatus(reciter.id, 0, item)"
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
                            :data-original-title="trans('admin.restore-reciter')"
                            @click.prevent="restorCounty(reciter.id)"
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
                            :data-original-title="trans('admin.delete-reciter')"
                            @click.prevent="deleteCounty(reciter.id, item)"
                          >
                            <i class="fas fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                      <ul v-else class="list-inline p-0 m-0">
                        <li class="list-inline-item">
                          <router-link
                            :to="prefix + 'reciter/edit/' + reciter.id "
                            data-placement="left"
                            class="tip btn-uni edit"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.edit-reciter')"
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
                            :data-original-title="trans('admin.delete-reciter')"
                            @click.prevent="deleteCounty(reciter.id, item)"
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
                  <pagination :pagination="reciters" @paginate="getCountires()" :offset="4"></pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <reciter-form :action="'create'" @refrech="getCountires()" :reciter="reciter"></reciter-form>
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
      reciters: {},
      actions_check: false,
      actions_items: {},
      sort: this.$route.params.sort,
      direction: this.$route.params.direction,
      reciter: {
        name: "",
        status: 0,
        description: ""
      },
      filters: {
        statu: "",
        query: "",
        type: ""
      },
      trashed: false,
      query: true,
      status: ["0", "1"],
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
    getCountires() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then(response => {
          self.reciters = response.data.reciters;
          self.show_spinner = false;
          window.scroll(0, 0);
        })
        .catch(error => {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    },
    actionsChange() {
      var items = {};
      for (let index = 0; index < this.reciters.data.length; index++) {
        this.actions_items[this.reciters.data[index].id] = this.actions_check;
      }
    },
    filterCountires(filters) {
      this.filters = filters;
      this.reciters.current_page = undefined;
      this.getCountires();
    },
    trashedCountires(trashed) {
      this.reciters.current_page = undefined;
      this.trashed = trashed;
      this.getCountires();
    },
    orderCountires(order) {
      this.sort = order.sort;
      this.direction = order.direction;
      this.reciters.current_page = undefined;
      this.getCountires();
    },
    preparUrl() {
      var base = this.ajax_prefix + "reciters?";
      var page = this.reciters.current_page;
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
      if (this.filters.reciter) {
        base += "reciter=" + this.filters.reciter.id + "&";
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
      if (this.filters.query) {
        base += "q=" + this.filters.query + "&";
      }
      if (this.filters.type) {
        base += "type=" + this.filters.type + "&";
      }

      return base.slice(0, -1);
    },

    deleteCounty(id, key) {
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
        .delete(this.ajax_prefix + "reciter/" + id + forced)
        .then(function(response) {
          self.$delete(self.reciters.data, key);
          self.actions_items[self.reciters.data[key].id] = false;

          self.$notify({
            group: "admin",
            text: self.trans("admin.reciter-deleted"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.reciter-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    changeStatus: function(id, status, item) {
      var self = this;
      axios
        .get(this.ajax_prefix + "reciter/" + id + "/status/" + status)
        .then(response => {
          self.reciters.data[item].status = parseInt(response.data.status);
          self.$notify({
            group: "admin",
            text: self.trans("admin.reciter-status-changed"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(error => {
          self.$notify({
            group: "admin",
            text: self.trans("admin.reciter-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    restorCounty(id) {
      var self = this;
      axios
        .get(this.ajax_prefix + "reciter/restore/" + id)
        .then(function(response) {
          self.trashed = false;
          self.getCountires();
          self.$notify({
            group: "admin",
            text: self.trans("admin.reciter-restored"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.reciter-not-restored"),
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
        .post(this.ajax_prefix + "reciter/actions" + forced, data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.reciters.data
              .map(item => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.reciters.data, key);
            self.actions_items[response.data.results[index]] = false;
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.reciter-deleted"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.reciter-not-deleted"),
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
        .post(this.ajax_prefix + "reciter/actions", data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.reciters.data
              .map(item => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.reciters.data, key);
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.reciter-restored"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.reciter-not-restored"),
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
        .post(this.ajax_prefix + "reciter/actions", data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            var item = response.data.results[index];

            let key = self.reciters.data
              .map(item => item.id)
              .indexOf(item["id"]);

            self.reciters.data[key].status = item["status"];
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.reciter-status-changed"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.reciter-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    }
  },
  mounted() {
    this.getCountires();
  }
};
</script>
