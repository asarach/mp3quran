<template>
  <div class="content-wrapper">
    <vue-headful
      :title="trans('admin.dashboard_title') + ' | ' + trans('text.reports')"
    />
    <section class="content-header">
      <h1>{{ trans("text.reports") }}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans("admin.dashboard") }}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans("text.reports") }}</li>
      </ol>
    </section>
    <div v-if="show_spinner" class="loading-spinner">
      <loading-spinner />
    </div>
    <div v-else-if="show_error" class="page-error">
      <loading-error :type="show_error" />
    </div>
    <section v-else class="content">
      <div class="card">
        <div class="card-head">
          <h3 class="card-title">{{ trans("text.all-reports") }}</h3>
        </div>
        <div class="card-body table-responsive p-0">
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
                <th scope="col">{{ trans("admin.read") }}</th>
                <th scope="col">{{ trans("admin.sora") }}</th>
                <th scope="col">{{ trans("admin.rewaya") }}</th>
                <th scope="col">{{ trans("admin.note") }}</th>
                <th scope="col" style="width: 100px; text-align: center">
                  {{ trans("admin.options") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(report, item) in reports.data" :key="report.id">
                <td scope="row" class="actions-check">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      v-model="actions_items[report.id]"
                      class="custom-control-input"
                      :id="'actionsCheckbox' + report.id"
                    />
                    <label
                      class="custom-control-label"
                      :for="'actionsCheckbox' + report.id"
                    ></label>
                  </div>
                </td>
                <td scope="row">{{ report.id }}</td>
                <td>
                  <router-link
                    :to="prefix + 'read/edit/' + report.read_id"
                    class="text-primary">
                    {{ report.title }}
                  </router-link>
                </td>
                <td>{{ report.name }}</td>
                <td>{{ report.rewaya_name }}</td>
                <td>{{ report.note }}</td>
                <td class="text-center">
                  <ul class="list-inline p-0 m-0">
                    <li class="list-inline-item">
                      <a
                        href="#"
                        data-placement="left"
                        class="tip btn-uni delete"
                        data-toggle="tooltip"
                        title
                        :data-original-title="trans('admin.delete-report')"
                        @click.prevent="deleteReport(report.id, item)"
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
                  <span class="text-muted">{{ trans("admin.actions") }}</span>
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
                </div>
              </div>
            </div>
            <div class="col">
              <pagination
                :pagination="reports"
                @paginate="getReports()"
                :offset="4"
              ></pagination>
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
      reports: {},
      actions_check: false,
      actions_items: {},
      sort: this.$route.params.sort,
      direction: this.$route.params.direction,
      report: {
        title: "",
        order_num: "",
        url: "",
        android: "",
        reportle: "",
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
          text: "order-by-order_num-desc",
        },
        {
          sort: "order_num",
          direction: "asc",
          text: "order-by-order_num-asc",
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
    getReports() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then((response) => {
          self.reports = response.data.reports;
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
      for (let index = 0; index < this.reports.data.length; index++) {
        this.actions_items[this.reports.data[index].id] = this.actions_check;
      }
    },
    filterReports(filters) {
      this.filters = filters;
      this.reports.current_page = undefined;
      this.getReports();
    },
    trashedReports(trashed) {
      this.reports.current_page = undefined;
      this.trashed = trashed;
      this.getReports();
    },
    orderReports(order) {
      this.sort = order.sort;
      this.direction = order.direction;
      this.reports.current_page = undefined;
      this.getReports();
    },
    preparUrl() {
      var base = this.ajax_prefix + "reports?";
      var page = this.reports.current_page;
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
      if (this.filters.report) {
        base += "report=" + this.filters.report.id + "&";
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

    deleteReport(id, key) {
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
        .delete(this.ajax_prefix + "report/" + id + forced)
        .then(function (response) {
          self.$delete(self.reports.data, key);
          self.actions_items[self.reports.data[key].id] = false;

          self.$notify({
            group: "admin",
            text: self.trans("admin.report-deleted"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.report-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    changeStatus: function (id, status, item) {
      var self = this;
      axios
        .get(this.ajax_prefix + "report/" + id + "/status/" + status)
        .then((response) => {
          self.reports.data[item].status = parseInt(response.data.status);
          self.$notify({
            group: "admin",
            text: self.trans("admin.report-status-changed"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch((error) => {
          self.$notify({
            group: "admin",
            text: self.trans("admin.report-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    restorReport(id) {
      var self = this;
      axios
        .get(this.ajax_prefix + "report/restore/" + id)
        .then(function (response) {
          self.trashed = false;
          self.getReports();
          self.$notify({
            group: "admin",
            text: self.trans("admin.report-restored"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.report-not-restored"),
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
        .post(this.ajax_prefix + "report/actions" + forced, data)
        .then(function (response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.reports.data
              .map((item) => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.reports.data, key);
            self.actions_items[response.data.results[index]] = false;
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.report-deleted"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.report-not-deleted"),
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
        .post(this.ajax_prefix + "report/actions", data)
        .then(function (response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.reports.data
              .map((item) => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.reports.data, key);
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.report-restored"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.report-not-restored"),
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
        .post(this.ajax_prefix + "report/actions", data)
        .then(function (response) {
          for (let index = 0; index < response.data.results.length; index++) {
            var item = response.data.results[index];

            let key = self.reports.data
              .map((item) => item.id)
              .indexOf(item["id"]);

            self.reports.data[key].status = item["status"];
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.report-status-changed"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.report-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
  },
  mounted() {
    this.getReports();
  },
};
</script>
