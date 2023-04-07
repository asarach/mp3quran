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
        <li class="breadcrumb-item active">{{ trans('text.twenty_reads')}}</li>
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
            <div class="card-head">
              <h3 class="card-title">{{ trans('text.all-twenty_reads')}}</h3>
              <div class="card-tools">
                <div class="pull-left">
                  <router-link :to="prefix + 'twenty_read/create'">
                    <button class="btn btn-primary btn-sm">{{ trans('admin.add-twenty_read')}}</button>
                  </router-link>
                  <a
                    v-if="trashed"
                    @click.prevent="trashedReads(false)"
                    class="btn btn-info btn-sm"
                  >
                    <i class="fas fa-folder-open m-0"></i>
                    {{ trans('text.all')}}
                  </a>
                  <a v-else @click.prevent="trashedReads(true)" class="btn btn-info btn-sm">
                    <i class="fas fa-recycle m-0"></i>
                    {{ trans('admin.trashed')}}
                  </a>
                </div>
              </div>
            </div>
            <div class="card-body table-responsive p-0">
              <filtering
                :orders="orders"
                :reciters="reciters"
                :rewayat="twenty_rewayat"
                :mushafs="mushafs"
                :status="status"
                :query="query"
                @filter="filterReads"
                @order="orderReads"
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
                    <th scope="col">{{ trans('admin.title')}}</th>
                    <th scope="col">{{ trans('admin.reciter')}}</th>
                    <th scope="col">{{ trans('admin.twenty_rewaya')}}</th>
                    <th scope="col">{{ trans('admin.mushaf')}}</th>
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
                  <tr v-for="(twenty_read, item, index) in twenty_reads.data" :key="twenty_read.id">
                    <td scope="row" class="actions-check">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          v-model="actions_items[twenty_read.id]"
                          class="custom-control-input"
                          :id="'actionsCheckbox' + twenty_read.id"
                        />
                        <label class="custom-control-label" :for="'actionsCheckbox'+twenty_read.id"></label>
                      </div>
                    </td>
                    <td scope="row">{{twenty_read.id}}</td>
                    <td>{{twenty_read.title}}</td>
                    <td v-if="twenty_read.reciter">{{twenty_read.reciter.name}}</td>
                    <td v-else>-</td>
                    <td v-if="twenty_read.twenty_rewaya">{{twenty_read.twenty_rewaya.name}}</td>
                    <td v-else>-</td>
                    <td v-if="twenty_read.mushaf">{{twenty_read.mushaf.name}}</td>
                    <td v-else>-</td>
                    <td class="text-center">
                      <a
                        v-if="twenty_read.status !== 1"
                        href="#"
                        class="text-danger"
                        @click.prevent="changeStatus(twenty_read.id, 1, item)"
                      >
                        <i class="fas fa-ban"></i>
                      </a>
                      <a
                        v-else
                        href="#"
                        class="text-success"
                        @click.prevent="changeStatus(twenty_read.id, 0, item)"
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
                            :data-original-title="trans('admin.restore-twenty_read')"
                            @click.prevent="restorRead(twenty_read.id)"
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
                            :data-original-title="trans('admin.delete-twenty_read')"
                            @click.prevent="deleteRead(twenty_read.id, item)"
                          >
                            <i class="fas fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                      <ul v-else class="list-inline p-0 m-0">
                        <li class="list-inline-item">
                          <router-link
                            :to="prefix + 'twenty_read/edit/' + twenty_read.id "
                            data-placement="left"
                            class="tip btn-uni edit"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.edit-twenty_read')"
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
                            :data-original-title="trans('admin.delete-twenty_read')"
                            @click.prevent="deleteRead(twenty_read.id, item)"
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
                  <pagination :pagination="twenty_reads" @paginate="getReads()" :offset="4"></pagination>
                </div>
              </div>
            </div>
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
      twenty_reads: {},
      actions_check: false,
      actions_items: {},
      sort: this.$route.params.sort,
      direction: this.$route.params.direction,
      filters: {
        statu: "",
        reciter: "",
        twenty_rewaya: "",
        query: "",
        mushaf: ""
      },
      reciters: {},
      twenty_rewayat: {},
      mushafs: {},
      trashed: false,
      query: true,
      status: ["0", "1"],
      orders: [
        {
          sort: "reciter.name",
          direction: "desc",
          text: "order-by-reciter-desc"
        },
        {
          sort: "reciter.name",
          direction: "asc",
          text: "order-by-reciter-asc"
        },
        {
          sort: "twenty_rewaya.name",
          direction: "desc",
          text: "order-by-twenty_rewaya-desc"
        },
        {
          sort: "twenty_rewaya.name",
          direction: "asc",
          text: "order-by-twenty_rewaya-asc"
        },
        {
          sort: "mushaf.name",
          direction: "desc",
          text: "order-by-mushaf-desc"
        },
        {
          sort: "mushaf.name",
          direction: "asc",
          text: "order-by-mushaf-asc"
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
    getReads() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then(response => {
          self.twenty_reads = response.data.twenty_reads;
          self.reciters = response.data.reciters;
          self.twenty_rewayat = response.data.twenty_rewayat;
          self.mushafs = response.data.mushafs;
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
      for (let index = 0; index < this.twenty_reads.data.length; index++) {
        this.actions_items[this.twenty_reads.data[index].id] = this.actions_check;
      }
    },
    filterReads(filters) {
      this.filters = filters;
      this.twenty_reads.current_page = undefined;
      this.getReads();
    },
    trashedReads(trashed) {
      this.twenty_reads.current_page = undefined;
      this.trashed = trashed;
      this.getReads();
    },
    orderReads(order) {
      this.sort = order.sort;
      this.direction = order.direction;
      this.twenty_reads.current_page = undefined;
      this.getReads();
    },
    preparUrl() {
      var base = this.ajax_prefix + "twenty_reads?";
      var page = this.twenty_reads.current_page;
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
      if (this.filters.mushaf) {
        base += "mushaf=" + this.filters.mushaf.id + "&";
      }
      if (this.filters.rewaya) {
        base += "twenty_rewaya=" + this.filters.rewaya.id + "&";
      }
      if (this.filters.reciter) {
        base += "reciter=" + this.filters.reciter.id + "&";
      }
      if (this.filters.query) {
        base += "q=" + this.filters.query + "&";
      }
      if (this.filters.statu) {
        base += "statu=" + this.filters.statu + "&";
      }

      return base.slice(0, -1);
    },

    deleteRead(id, key) {
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
        .delete(this.ajax_prefix + "twenty_read/" + id + forced)
        .then(function(response) {
          self.$delete(self.twenty_reads.data, key);
          self.actions_items[self.twenty_reads.data[key].id] = false;

          self.$notify({
            group: "admin",
            text: self.trans("admin.twenty_read-deleted"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.twenty_read-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    changeStatus: function(id, status, item) {
      var self = this;
      axios
        .get(this.ajax_prefix + "twenty_read/" + id + "/status/" + status)
        .then(response => {
          self.twenty_reads.data[item].status = parseInt(response.data.status);
          self.$notify({
            group: "admin",
            text: self.trans("admin.twenty_read-status-changed"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(error => {
          self.$notify({
            group: "admin",
            text: self.trans("admin.twenty_read-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    restorRead(id) {
      var self = this;
      axios
        .get(this.ajax_prefix + "twenty_read/restore/" + id)
        .then(function(response) {
          self.trashed = false;
          self.getReads();
          self.$notify({
            group: "admin",
            text: self.trans("admin.twenty_read-restored"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.twenty_read-not-restored"),
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
        .post(this.ajax_prefix + "twenty_read/actions" + forced, data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.twenty_reads.data
              .map(item => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.twenty_reads.data, key);
            self.actions_items[response.data.results[index]] = false;
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.twenty_read-deleted"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.twenty_read-not-deleted"),
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
        .post(this.ajax_prefix + "twenty_read/actions", data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.twenty_reads.data
              .map(item => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.twenty_reads.data, key);
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.twenty_read-restored"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.twenty_read-not-restored"),
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
        .post(this.ajax_prefix + "twenty_read/actions", data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            var item = response.data.results[index];

            let key = self.twenty_reads.data.map(item => item.id).indexOf(item["id"]);

            self.twenty_reads.data[key].status = item["status"];
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.twenty_read-status-changed"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.twenty_read-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    }
  },
  mounted() {
    this.getReads();
  }
};
</script>
