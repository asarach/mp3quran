<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('text.tvs')" />
    <section class="content-header">
      <h1>{{ trans('text.tvs')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('text.tvs')}}</li>
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
              <h3 class="card-title">{{ trans('text.all-tvs')}}</h3>
              <div class="card-tools">
                <div class="pull-left">
                  <a v-if="trashed" @click.prevent="trashedTvs(false)" class="btn btn-info btn-sm">
                    <i class="fas fa-folder-open m-0"></i>
                    {{ trans('text.all')}}
                  </a>
                  <a v-else @click.prevent="trashedTvs(true)" class="btn btn-info btn-sm">
                    <i class="fas fa-recycle m-0"></i>
                    {{ trans('admin.trashed')}}
                  </a>
                </div>
              </div>
            </div>
            <div class="card-body table-responsive p-0">
              <filtering :orders="orders" :status="status" @filter="filterTvs" @order="orderTvs"></filtering>
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
                    <th scope="col">{{ trans('admin.reciter')}}</th>
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
                  <tr v-for="(tv, item) in tvs.data" :key="tv.id">
                    <td scope="row" class="actions-check">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          v-model="actions_items[tv.id]"
                          class="custom-control-input"
                          :id="'actionsCheckbox' + tv.id"
                        />
                        <label class="custom-control-label" :for="'actionsCheckbox'+tv.id"></label>
                      </div>
                    </td>
                    <td scope="row">{{tv.id}}</td>
                    <td>{{ tv.name }}</td>
                    <td v-if="tv.reciter">{{ tv.reciter.name }}</td>
                    <td v-else>-</td>
                    <td class="text-center">
                      <a
                        v-if="tv.status !== 1"
                        href="#"
                        class="text-danger"
                        @click.prevent="changeStatus(tv.id, 1, item)"
                      >
                        <i class="fas fa-ban"></i>
                      </a>
                      <a
                        v-else
                        href="#"
                        class="text-success"
                        @click.prevent="changeStatus(tv.id, 0, item)"
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
                            :data-original-title="trans('admin.restore-tv')"
                            @click.prevent="restorTv(tv.id)"
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
                            :data-original-title="trans('admin.delete-tv')"
                            @click.prevent="deleteTv(tv.id, item)"
                          >
                            <i class="fas fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                      <ul v-else class="list-inline p-0 m-0">
                        <li class="list-inline-item">
                          <router-link
                            :to="prefix + 'tv/edit/' + tv.id "
                            data-placement="left"
                            class="tip btn-uni edit"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.edit-tv')"
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
                            :data-original-title="trans('admin.delete-tv')"
                            @click.prevent="deleteTv(tv.id, item)"
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
                  <pagination :pagination="tvs" @paginate="getTvs()" :offset="4"></pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <tv-form
            :action="'create'"
            @refrech="getTvs()"
            :rewayat="rewayat"
            :mushafs="mushafs"
            :reciters="reciters"
            :tv="tv"
          ></tv-form>
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
      tvs: {},
      reciters: {},
      rewayat: {},
      mushafs: {},
      actions_check: false,
      actions_items: {},
      sort: this.$route.params.sort,
      direction: this.$route.params.direction,
      tv: {
        name: "",
        slug: "",
        url: "",
        image: "",
        status: 0
      },
      filters: {
        statu: "",
        type: ""
      },
      trashed: false,
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
    getTvs() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then(response => {
          self.tvs = response.data.tvs;
          self.mushafs = response.data.mushafs;
          self.rewayat = response.data.rewayat;
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
      for (let index = 0; index < this.tvs.data.length; index++) {
        this.actions_items[this.tvs.data[index].id] = this.actions_check;
      }
    },
    filterTvs(filters) {
      this.filters = filters;
      this.tvs.current_page = undefined;
      this.getTvs();
    },
    trashedTvs(trashed) {
      this.tvs.current_page = undefined;
      this.trashed = trashed;
      this.getTvs();
    },
    orderTvs(order) {
      this.sort = order.sort;
      this.direction = order.direction;
      this.tvs.current_page = undefined;
      this.getTvs();
    },
    preparUrl() {
      var base = this.ajax_prefix + "tvs?";
      var page = this.tvs.current_page;
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
      if (this.filters.tv) {
        base += "tv=" + this.filters.tv.id + "&";
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

    deleteTv(id, key) {
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
        .delete(this.ajax_prefix + "tv/" + id + forced)
        .then(function(response) {
          self.$delete(self.tvs.data, key);
          self.actions_items[self.tvs.data[key].id] = false;

          self.$notify({
            group: "admin",
            text: self.trans("admin.tv-deleted"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.tv-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    changeStatus: function(id, status, item) {
      var self = this;
      axios
        .get(this.ajax_prefix + "tv/" + id + "/status/" + status)
        .then(response => {
          self.tvs.data[item].status = parseInt(response.data.status);
          self.$notify({
            group: "admin",
            text: self.trans("admin.tv-status-changed"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(error => {
          self.$notify({
            group: "admin",
            text: self.trans("admin.tv-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    restorTv(id) {
      var self = this;
      axios
        .get(this.ajax_prefix + "tv/restore/" + id)
        .then(function(response) {
          self.trashed = false;
          self.getTvs();
          self.$notify({
            group: "admin",
            text: self.trans("admin.tv-restored"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.tv-not-restored"),
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
        .post(this.ajax_prefix + "tv/actions" + forced, data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.tvs.data
              .map(item => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.tvs.data, key);
            self.actions_items[response.data.results[index]] = false;
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.tv-deleted"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.tv-not-deleted"),
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
        .post(this.ajax_prefix + "tv/actions", data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.tvs.data
              .map(item => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.tvs.data, key);
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.tv-restored"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.tv-not-restored"),
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
        .post(this.ajax_prefix + "tv/actions", data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            var item = response.data.results[index];

            let key = self.tvs.data.map(item => item.id).indexOf(item["id"]);

            self.tvs.data[key].status = item["status"];
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.tv-status-changed"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.tv-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    }
  },
  mounted() {
    this.getTvs();
  }
};
</script>
