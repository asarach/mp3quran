<template>
  <div class="content-wrapper">
    <vue-headful
      :title="trans('admin.dashboard_title') + ' | ' + trans('text.reads')"
    />
    <section class="content-header">
      <h1>{{ trans("text.reads") }}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans("admin.dashboard") }}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans("text.reads") }}</li>
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
              <h3 class="card-title">{{ trans("text.all-reads") }}</h3>
              <div class="card-tools">
                <div class="pull-left">
                  <router-link :to="prefix + 'read/create'">
                    <button class="btn btn-primary btn-sm">
                      {{ trans("admin.add-read") }}
                    </button>
                  </router-link>
                  <a
                    v-if="trashed"
                    @click.prevent="trashedReads(false)"
                    class="btn btn-info btn-sm"
                  >
                    <i class="fas fa-folder-open m-0"></i>
                    {{ trans("text.all") }}
                  </a>
                  <a
                    v-else
                    @click.prevent="trashedReads(true)"
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
                :reciters="reciters"
                :rewayat="rewayat"
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
                        <label
                          class="custom-control-label"
                          for="actionsCheck"
                        ></label>
                      </div>
                    </th>
                    <th scope="col">#</th>
                    <th scope="col">{{ trans("admin.title") }}</th>
                    <th scope="col">{{ trans("admin.reciter") }}</th>
                    <th scope="col">{{ trans("admin.rewaya") }}</th>
                    <th scope="col">{{ trans("admin.mushaf") }}</th>
                    <th scope="col" style="width: 80px; text-align: center">
                      {{ trans("admin.status") }}
                    </th>
                    <th scope="col" style="width: 100px; text-align: center">
                      {{ trans("admin.options") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(read, item, index) in reads.data" :key="read.id">
                    <td scope="row" class="actions-check">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          v-model="actions_items[read.id]"
                          class="custom-control-input"
                          :id="'actionsCheckbox' + read.id"
                        />
                        <label
                          class="custom-control-label"
                          :for="'actionsCheckbox' + read.id"
                        ></label>
                      </div>
                    </td>
                    <td scope="row">{{ read.id }}</td>
                    <td>{{ read.title }}</td>
                    <td v-if="read.reciter">{{ read.reciter.name }}</td>
                    <td v-else>-</td>
                    <td v-if="read.rewaya">{{ read.rewaya.name }}</td>
                    <td v-else>-</td>
                    <td v-if="read.mushaf">{{ read.mushaf.name }}</td>
                    <td v-else>-</td>
                    <td class="text-center">
                      <a
                        v-if="read.status !== 1"
                        href="#"
                        class="text-danger"
                        @click.prevent="changeStatus(read.id, 1, item)"
                      >
                        <i class="fas fa-ban"></i>
                      </a>
                      <a
                        v-else
                        href="#"
                        class="text-success"
                        @click.prevent="changeStatus(read.id, 0, item)"
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
                            :data-original-title="trans('admin.restore-read')"
                            @click.prevent="restorRead(read.id)"
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
                            :data-original-title="trans('admin.delete-read')"
                            @click.prevent="deleteRead(read.id, item)"
                          >
                            <i class="fas fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                      <ul v-else class="list-inline p-0 m-0">
                        <li class="list-inline-item">
                          <router-link
                            :to="prefix + 'read/edit/' + read.id"
                            data-placement="left"
                            class="tip btn-uni edit"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.edit-read')"
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
                            :data-original-title="trans('admin.delete-read')"
                            @click.prevent="deleteRead(read.id, item)"
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
                    :pagination="reads"
                    @paginate="getReads()"
                    :offset="4"
                  ></pagination>
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
      special_reads: false,
      reads: {},
      actions_check: false,
      actions_items: {},
      sort: this.$route.params.sort,
      direction: this.$route.params.direction,
      filters: {
        statu: "",
        reciter: "",
        rewaya: "",
        query: "",
        mushaf: "",
      },
      reciters: {},
      rewayat: {},
      mushafs: {},
      trashed: false,
      query: true,
      status: ["0", "1"],
      orders: [
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
          sort: "mushaf.name",
          direction: "desc",
          text: "order-by-mushaf-desc",
        },
        {
          sort: "mushaf.name",
          direction: "asc",
          text: "order-by-mushaf-asc",
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
    getReads() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then((response) => {
          self.reads = response.data.reads;
          self.reciters = response.data.reciters;
          self.rewayat = response.data.rewayat;
          self.mushafs = response.data.mushafs;
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
      for (let index = 0; index < this.reads.data.length; index++) {
        this.actions_items[this.reads.data[index].id] = this.actions_check;
      }
    },
    filterReads(filters) {
      this.filters = filters;
      this.reads.current_page = undefined;
      this.getReads();
    },
    trashedReads(trashed) {
      this.reads.current_page = undefined;
      this.trashed = trashed;
      this.getReads();
    },
    orderReads(order) {
      this.sort = order.sort;
      this.direction = order.direction;
      this.reads.current_page = undefined;
      this.getReads();
    },

    preparUrl() {
      var base = this.ajax_prefix;
      if (this.special_reads) {
        base = base + "special_reads?";
      } else {
        base = base + "reads?";
      }

      var page = this.reads.current_page;
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
        base += "rewaya=" + this.filters.rewaya.id + "&";
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
        .delete(this.ajax_prefix + "read/" + id + forced)
        .then(function (response) {
          self.$delete(self.reads.data, key);
          self.actions_items[self.reads.data[key].id] = false;

          self.$notify({
            group: "admin",
            text: self.trans("admin.read-deleted"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.read-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    changeStatus: function (id, status, item) {
      var self = this;
      axios
        .get(this.ajax_prefix + "read/" + id + "/status/" + status)
        .then((response) => {
          self.reads.data[item].status = parseInt(response.data.status);
          self.$notify({
            group: "admin",
            text: self.trans("admin.read-status-changed"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch((error) => {
          self.$notify({
            group: "admin",
            text: self.trans("admin.read-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    restorRead(id) {
      var self = this;
      axios
        .get(this.ajax_prefix + "read/restore/" + id)
        .then(function (response) {
          self.trashed = false;
          self.getReads();
          self.$notify({
            group: "admin",
            text: self.trans("admin.read-restored"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.read-not-restored"),
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
        .post(this.ajax_prefix + "read/actions" + forced, data)
        .then(function (response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.reads.data
              .map((item) => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.reads.data, key);
            self.actions_items[response.data.results[index]] = false;
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.read-deleted"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.read-not-deleted"),
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
        .post(this.ajax_prefix + "read/actions", data)
        .then(function (response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.reads.data
              .map((item) => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.reads.data, key);
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.read-restored"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.read-not-restored"),
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
        .post(this.ajax_prefix + "read/actions", data)
        .then(function (response) {
          for (let index = 0; index < response.data.results.length; index++) {
            var item = response.data.results[index];

            let key = self.reads.data
              .map((item) => item.id)
              .indexOf(item["id"]);

            self.reads.data[key].status = item["status"];
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.read-status-changed"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.read-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
  },
  mounted() {
    if (this.$route.name == "special_reads") {
      this.special_reads = true;
    }
    this.getReads();
  },
  watch: {
    $route(to, from) {
      console.log(to);
      this.show_spinner = true;
      if (to.name == "special_reads") {
        this.special_reads = true;
      }else{
        this.special_reads = false;
      }
      this.getReads();
    },
  },
};
</script>
