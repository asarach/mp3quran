<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('front.messages')" />
    <section class="content-header">
      <h1>{{ trans('front.messages')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('front.messages')}}</li>
      </ol>
    </section>
    <div v-if="show_spinner" class="loading-spinner">
      <loading-spinner />
    </div>
    <div v-else-if="show_error" class="message-error">
      <loading-error :type="show_error" />
    </div>
    <section v-else class="content">
      <div class="row">
        <div class="col-lg-24">
          <div class="card">
            <div class="card-head">
              <h3 class="card-title">{{ trans('text.all-messages')}}</h3>
            </div>
            <div class="card-body table-responsive p-0">
              <filtering
                :orders="orders"
                :vieweds="vieweds"
                @filter="filterMessages"
                @order="orderMessages"
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
                    <th scope="col">{{ trans('text.subject')}}</th>
                    <th scope="col">{{ trans('text.name')}}</th>
                    <th scope="col">{{ trans('text.email')}}</th>
                    <th
                      scope="col"
                      style="width: 130px;text-align: center;"
                    >{{ trans('admin.viewed')}}</th>
                    <th scope="col" class="text-center">{{ trans('admin.options')}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(message, item, index) in messages.data">
                    <td scope="row" class="actions-check">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          v-model="actions_items[message.id]"
                          class="custom-control-input"
                          :id="'actionsCheckbox' + message.id"
                        />
                        <label class="custom-control-label" :for="'actionsCheckbox'+message.id"></label>
                      </div>
                    </td>
                    <th scope="row" class="text-center">{{message.id}}</th>
                    <td>
                      {{message.subject}}
                      <router-link
                        :to="prefix + 'message/'+ message.id"
                        class="text-info mr-auto external-link"
                      >
                        <i class="fas fa-external-link-alt"></i>
                      </router-link>
                    </td>
                    <td>{{message.name}}</td>
                    <td>{{message.email}}</td>

                    <td class="text-center">
                      <a
                        v-if="message.viewed !== 1"
                        href="#"
                        class="text-info"
                        @click.prevent="changeViewed(message.id, 1, item)"
                      >
                        <i class="fas fa-envelope"></i>
                      </a>
                      <a
                        v-else
                        href="#"
                        class="text-success"
                        @click.prevent="changeViewed(message.id, 0, item)"
                      >
                        <i class="fas fa-envelope-open-text"></i>
                      </a>
                    </td>

                    <td class="text-center">
                      <ul class="list-inline p-0 m-0">
                        <li class="list-inline-item">
                          <a
                            href="#"
                            data-placement="left"
                            class="tip btn-uni delete"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.delete-message')"
                            @click.prevent="deletePage(message.id, item)"
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
                        @click.prevent="actionChangeViewed(1)"
                      >{{ trans('admin.viewed-selected') }}</a>
                      <a
                        class="dropdown-item"
                        href="#"
                        @click.prevent="actionChangeViewed(0)"
                      >{{ trans('admin.unviewed-selected') }}</a>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <pagination :pagination="messages" @paginate="getMessages()" :offset="4"></pagination>
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
      messages: {},
      actions_check: false,
      actions_items: {},
      sort: this.$route.params.sort,
      direction: this.$route.params.direction,
      filters: {
        viewed: ""
      },
      vieweds: ["0", "1"],
      orders: [
        {
          sort: "created_at",
          direction: "desc",
          text: "order-by-newest"
        },
        {
          sort: "created_at",
          direction: "asc",
          text: "order-by-oldest"
        }
      ]
    };
  },
  methods: {
    getMessages() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then(response => {
          self.messages = response.data.messages;
          self.show_spinner = false;
        })
        .catch(error => {
          self.show_spinner = false;
          self.show_error = error.response.viewed;
        });
    },
    actionsChange() {
      var items = {};
      for (let index = 0; index < this.messages.data.length; index++) {
        this.actions_items[this.messages.data[index].id] = this.actions_check;
      }
    },
    filterMessages(filters) {
      this.filters = filters;
      this.messages.current_page = undefined;
      this.getMessages();
    },
    orderMessages(order) {
      this.sort = order.sort;
      this.direction = order.direction;
      this.messages.current_page = undefined;
      this.getMessages();
    },
    preparUrl() {
      var base = this.ajax_prefix + "messages?";
      var page = this.messages.current_page;
      if (page !== undefined) {
        base += "page=" + page + "&";
      }
      if (this.sort) {
        base += "sort=" + this.sort + "&";
      }
      if (this.direction) {
        base += "direction=" + this.direction + "&";
      }
      if (this.filters.viewed) {
        base += "viewed=" + this.filters.viewed + "&";
      }
      return base.slice(0, -1);
    },
    deletePage(id, key) {
      var self = this;
      Event.$off("confirmed");
      Event.$emit("confirm");
      Event.$on("confirmed", function() {
        self.confirmDalete(id, key);
      });
    },
    confirmDalete(id, key) {
      var self = this;
      axios
        .delete(this.ajax_prefix + "message/" + id)
        .then(function(response) {
          self.actions_items[self.messages.data[key].id] = false;

          self.$delete(self.messages.data, key);
          self.$notify({
            group: "admin",
            text: self.trans("admin.message-deleted"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.message-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    changeViewed: function(id, viewed, item) {
      var self = this;
      axios
        .get(this.ajax_prefix + "message/" + id + "/viewed/" + viewed)
        .then(response => {
          self.messages.data[item].viewed = parseInt(response.data.viewed);
          self.$notify({
            group: "admin",
            text: self.trans("admin.message-viewed-changed"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(error => {
          self.$notify({
            group: "admin",
            text: self.trans("admin.message-viewed-not-changed"),
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
      var data = {
        action: "delete",
        items: this.actions_items
      };
      axios
        .post(this.ajax_prefix + "message/actions", data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.messages.data
              .map(item => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.messages.data, key);
            self.actions_items[response.data.results[index]] = false;
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.message-deleted"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.message-not-deleted"),
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
        .post(this.ajax_prefix + "message/actions", data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.messages.data
              .map(item => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.messages.data, key);
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.message-restored"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.message-not-restored"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    actionChangeViewed(statu) {
      var self = this;
      if (statu == 1) {
        var action = "viewed";
      } else {
        var action = "unviewed";
      }
      var data = {
        action: action,
        items: this.actions_items
      };
      axios
        .post(this.ajax_prefix + "message/actions", data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            var item = response.data.results[index];

            let key = self.messages.data
              .map(item => item.id)
              .indexOf(item["id"]);

            self.messages.data[key].viewed = item["viewed"];
          }
          self.$notify({
            group: "admin",
            text: self.trans("admin.message-viewed-changed"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.message-viewed-not-changed"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    }
  },
  mounted() {
    this.getMessages();
  }
};
</script>
