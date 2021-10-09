<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('front.ads')" />
    <section class="content-header">
      <h1>{{ trans('front.ads')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('front.ads')}}</li>
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
              <h3 class="card-title">{{ trans('text.all-ads')}}</h3>
              <div class="card-tools">
                <div class="pull-left">
                  <a v-if="trashed" @click.prevent="trashedAds(false)" class="btn btn-info btn-sm">
                    <i class="fas fa-folder-open m-0"></i>
                    {{ trans('text.all')}}
                  </a>
                  <a v-else @click.prevent="trashedAds(true)" class="btn btn-info btn-sm">
                    <i class="fas fa-recycle m-0"></i>
                    {{ trans('admin.trashed')}}
                  </a>
                </div>
              </div>
            </div>
            <div class="card-body table-responsive p-0">
              <filtering :orders="orders" :status="status" @filter="filterAds" @order="orderAds"></filtering>
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
                    <th scope="col">{{ trans('admin.order_num')}}</th>
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
                  <tr v-for="(ad, item) in ads.data" :key="ad.id">
                    <td scope="row" class="actions-check">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          v-model="actions_items[ad.id]"
                          class="custom-control-input"
                          :id="'actionsCheckbox' + ad.id"
                        />
                        <label class="custom-control-label" :for="'actionsCheckbox'+ad.id"></label>
                      </div>
                    </td>
                    <td scope="row">{{ad.id}}</td>
                    <td>{{ad.name}}</td>
                    <td>{{ad.order_num}}</td>
                    <td class="text-center">
                      <a
                        v-if="ad.status !== 1"
                        href="#"
                        class="text-danger"
                        @click.prevent="changeStatus(ad.id, 1, item)"
                      >
                        <i class="fas fa-ban"></i>
                      </a>
                      <a
                        v-else
                        href="#"
                        class="text-success"
                        @click.prevent="changeStatus(ad.id, 0, item)"
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
                            :data-original-title="trans('admin.restore-ad')"
                            @click.prevent="restorCounty(ad.id)"
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
                            :data-original-title="trans('admin.delete-ad')"
                            @click.prevent="deleteCounty(ad.id, item)"
                          >
                            <i class="fas fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                      <ul v-else class="list-inline p-0 m-0">
                        <li class="list-inline-item">
                          <router-link
                            :to="prefix + 'ad/edit/' + ad.id "
                            data-placement="left"
                            class="tip btn-uni edit"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.edit-ad')"
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
                            :data-original-title="trans('admin.delete-ad')"
                            @click.prevent="deleteCounty(ad.id, item)"
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
                  <pagination :pagination="ads" @paginate="getAds()" :offset="4"></pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <ad-form :action="'create'" @refrech="getAds()" :places='places' :languages="languages" :ad="ad"></ad-form>
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
      ads: {},
      actions_check: false,
      actions_items: {},
      places: [],
      languages: {},
      sort: this.$route.params.sort,
      direction: this.$route.params.direction,
      ad: {
        name: "",
        order_num: "",
        url: "",
        place: "",
        start_date: "",
        end_date: "",
        image: "",
        text: "",
        locale: "",
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
    getAds() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then(response => {
          self.ads = response.data.ads;
          self.places = response.data.places;
          self.languages = response.data.languages;
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
      for (let index = 0; index < this.ads.data.length; index++) {
        this.actions_items[this.ads.data[index].id] = this.actions_check;
      }
    },
    filterAds(filters) {
      this.filters = filters;
      this.ads.current_page = undefined;
      this.getAds();
    },
    trashedAds(trashed) {
      this.ads.current_page = undefined;
      this.trashed = trashed;
      this.getAds();
    },
    orderAds(order) {
      this.sort = order.sort;
      this.direction = order.direction;
      this.ads.current_page = undefined;
      this.getAds();
    },
    preparUrl() {
      var base = this.ajax_prefix + "ads?";
      var page = this.ads.current_page;
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
      if (this.filters.ad) {
        base += "ad=" + this.filters.ad.id + "&";
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
        .delete(this.ajax_prefix + "ad/" + id + forced)
        .then(function(response) {
          self.$delete(self.ads.data, key);
          self.actions_items[self.ads.data[key].id] = false;

          self.$notify({
            group: "admin",
            text: self.trans("admin.ad-deleted"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.ad-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    changeStatus: function(id, status, item) {
      var self = this;
      axios
        .get(this.ajax_prefix + "ad/" + id + "/status/" + status)
        .then(response => {
          self.ads.data[item].status = parseInt(response.data.status);
          self.$notify({
            group: "admin",
            text: self.trans("admin.ad-status-changed"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(error => {
          self.$notify({
            group: "admin",
            text: self.trans("admin.ad-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    restorCounty(id) {
      var self = this;
      axios
        .get(this.ajax_prefix + "ad/restore/" + id)
        .then(function(response) {
          self.trashed = false;
          self.getAds();
          self.$notify({
            group: "admin",
            text: self.trans("admin.ad-restored"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.ad-not-restored"),
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
        .post(this.ajax_prefix + "ad/actions" + forced, data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.ads.data
              .map(item => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.ads.data, key);
            self.actions_items[response.data.results[index]] = false;
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.ad-deleted"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.ad-not-deleted"),
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
        .post(this.ajax_prefix + "ad/actions", data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.ads.data
              .map(item => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.ads.data, key);
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.ad-restored"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.ad-not-restored"),
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
        .post(this.ajax_prefix + "ad/actions", data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            var item = response.data.results[index];

            let key = self.ads.data.map(item => item.id).indexOf(item["id"]);

            self.ads.data[key].status = item["status"];
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.ad-status-changed"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.ad-status-not-changed"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    }
  },
  mounted() {
    this.getAds();
  }
};
</script>
