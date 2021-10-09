<template>
<div class="content-wrapper">
  <vue-headful
    :title="trans('admin.dashboard_title') + ' | ' + trans('text.subscribers')"
  />
  <section class="content-header">
    <h1>{{ trans("text.subscribers") }}</h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="prefix">
          <span class="icon-home"></span>
          {{ trans("admin.dashboard") }}
        </router-link>
      </li>
      <li class="breadcrumb-item active">{{ trans("text.subscribers") }}</li>
    </ol>
  </section>
  <div v-if="show_spinner" class="loading-spinner">
    <loading-spinner />
  </div>
  <div v-else-if="show_error" class="subscriber-error">
    <loading-error :type="show_error" />
  </div>
  <section v-else class="content">
    <div class="row">
      <div class="col-lg-24">
        <newsletter-nav></newsletter-nav>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-24">
        <div class="card">
          <div class="card-head">
            <h3 class="card-title">{{ trans("admin.all-subscribers") }}</h3>
            <div class="card-tools">
              <div class="pull-left mr-2">
                <router-link :to="prefix + 'nl_subscriber/create'">
                  <button class="btn btn-primary btn-sm">
                    {{ trans("admin.add-subscriber") }}
                  </button>
                </router-link>
                <a
                  v-if="trashed"
                  @click.prevent="trashedSubscribers(false)"
                  class="btn btn-info btn-sm"
                >
                <span class="icon-folder-open m-0"></span>
                  {{ trans("admin.all") }}
                </a>
                <a
                  v-else
                  @click.prevent="trashedSubscribers(true)"
                  class="btn btn-info btn-sm"
                >
                <span class="icon-bin2 m-0"></span>
                  {{ trans("admin.trashed") }}
                </a>
              </div>
            </div>
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
                  <th scope="col">{{ trans("text.name") }}</th>
                  <th scope="col">{{ trans("admin.email") }}</th>
                  <th scope="col" class="text-center">
                    {{ trans("admin.options") }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(subscriber, item) in subscribers.data" :key="item">
                  <td scope="row" class="actions-check">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        v-model="actions_items[subscriber.id]"
                        class="custom-control-input"
                        :id="'actionsCheckbox' + subscriber.id"
                      />
                      <label
                        class="custom-control-label"
                        :for="'actionsCheckbox' + subscriber.id"
                      ></label>
                    </div>
                  </td>
                  <td scope="row">{{ subscriber.id }}</td>
                  <td>
                      {{ subscriber.name }}
                  </td>
                  <td>{{ subscriber.email }}</td>
                 
                  <td class="text-center">
                    <ul v-if="trashed" class="list-inline p-0 m-0">
                      <li class="list-inline-item">
                        <a
                          href="#"
                          data-placement="left"
                          class="tip btn-uni edit"
                          data-toggle="tooltip"
                          title
                          :data-original-title="trans('admin.restore-subscriber')"
                          @click.prevent="restorSubscriber(subscriber.id)"
                        >
                           <span class="icon-undo m-0"></span>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          href="#"
                          data-placement="left"
                          class="tip btn-uni delete"
                          data-toggle="tooltip"
                          title
                          :data-original-title="trans('admin.delete-subscriber')"
                          @click.prevent="deleteSubscriber(subscriber.id, item)"
                        >
                          <span class="icon-bin"></span>
                        </a>
                      </li>
                    </ul>
                    <ul v-else class="list-inline p-0 m-0">
                      <li class="list-inline-item">
                        <router-link
                          :to="prefix + 'nl_subscriber/edit/' + subscriber.id"
                          data-placement="left"
                          class="tip btn-uni edit"
                          data-toggle="tooltip"
                          title
                          :data-original-title="trans('admin.edit-subscriber')"
                        >
                          <span class="icon-pencil"></span>
                        </router-link>
                      </li>
                      <li class="list-inline-item">
                        <a
                          href="#"
                          data-placement="left"
                          class="tip btn-uni delete"
                          data-toggle="tooltip"
                          title
                          :data-original-title="trans('admin.delete-subscriber')"
                          @click.prevent="deleteSubscriber(subscriber.id, item)"
                        >
                          <span class="icon-bin"></span>
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
                    <span class="text-muted">
                      {{ trans("admin.actions") }}
                    </span>
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
                  </div>
                </div>
              </div>
              <div class="col">
                <pagination
                  :pagination="subscribers"
                  @paginate="getSubscribers()"
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
    subscriber: {
      name: "",
      alias: "",
      language: {},
    },
    filters: {
      statu: "",
      language: "",
    },
    actions_check: false,
    actions_items: {},
    subscribers: {},
    language: {},
    languages: {},
    trashed: false,
    status: ["0", "1"],
    show_spinner: true,
    show_error: false,
  };
},
methods: {
  getSubscribers() {
    var self = this;
    var url = this.preparUrl();
    axios
      .get(url)
      .then((response) => {
        self.subscribers = response.data.subscribers;
        self.languages = response.data.languages;
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
    for (let index = 0; index < this.subscribers.data.length; index++) {
      this.actions_items[this.subscribers.data[index].id] = this.actions_check;
    }
  },
  filterSubscribers(filters) {
    this.filters = filters;
    this.subscribers.current_subscriber = undefined;
    this.getSubscribers();
  },
  preparUrl() {
    var base = this.ajax_prefix + "nl_subscribers?";
    var subscriber = this.subscribers.current_subscriber;
    if (subscriber !== undefined) {
      base += "subscriber=" + subscriber + "&";
    }
    if (this.trashed) {
      base += "trashed=" + this.trashed + "&";
    }
    if (this.filters.statu) {
      base += "statu=" + this.filters.statu + "&";
    }
    if (this.filters.statu) {
      base += "statu=" + this.filters.statu + "&";
    }
    if (this.filters.language_index || this.filters.language_index === 0) {
      base +=
        "language=" + this.languages[this.filters.language_index].id + "&";
    }
    var url = base.slice(0, -1);
    return url;
  },
  trashedSubscribers(trashed) {
    this.subscribers.current_subscriber = undefined;
    this.trashed = trashed;
    this.getSubscribers();
  },
  duplicateSubscriber(id, key) {
    var self = this;
    axios
      .get(this.ajax_prefix + "nl_subscriber/duplicate/" + id)
      .then((response) => {
        self.subscribers.data.push(response.data.subscriber);

        self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-duplicate"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch((error) => {
        self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-not-duplicate"),
              type: "success",
              title: self.trans("admin.success")
            });
      });
  },
  deleteSubscriber(id, key) {
    var self = this;
    Event.$off("confirmed");
    Event.$emit("confirm");
    Event.$on("confirmed", function () {
      self.confirmDalete(id, key);
    });
  },
  changeStatus: function (id, status, item) {
    var self = this;
    axios
      .get(this.ajax_prefix + "nl_subscriber/" + id + "/status/" + status)
      .then((response) => {
        self.subscribers.data[item].status = parseInt(response.data.status);

        self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-status-changed"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch((error) => {
        self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-status-not-changed"),
              type: "success",
              title: self.trans("admin.success")
            });
      });
  },
  confirmDalete(id, key) {
    var self = this;
    var forced = "";
    if (this.trashed) {
      forced = "?forced=true";
    }
    axios
      .delete(this.ajax_prefix + "nl_subscriber/" + id + forced)
      .then(function (response) {
        self.actions_items[self.subscribers.data[key].id] = false;
        self.subscribers.data.splice(key, 1);

        self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-deleted"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch(function (error) {
        console.log(error);
        self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-not-deleted"),
              type: "warning",
              title: self.trans("admin.warning")
            });
      });
  },
  restorSubscriber(id) {
    var self = this;
    axios
      .get(this.ajax_prefix + "nl_subscriber/restore/" + id)
      .then(function (response) {
        self.trashed = false;
        self.getSubscribers();

        self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-restored"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch(function (error) {
        self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-not-restored"),
              type: "warning",
              title: self.trans("admin.warning")
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
      .post(this.ajax_prefix + "nl_subscriber/actions" + forced, data)
      .then(function (response) {
        for (let index = 0; index < response.data.results.length; index++) {
          let key = self.subscribers.data
            .map((item) => item.id)
            .indexOf(response.data.results[index]); // find index of your object
          self.subscribers.data.splice(key, 1);
          
          self.actions_items[response.data.results[index]] = false;
        }

        self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-deleted"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch(function (error) {
        self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-not-deleted"),
              type: "warning",
              title: self.trans("admin.warning")
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
      .post(this.ajax_prefix + "nl_subscriber/actions", data)
      .then(function (response) {
        for (let index = 0; index < response.data.results.length; index++) {
          let key = self.subscribers.data
            .map((item) => item.id)
            .indexOf(response.data.results[index]); // find index of your object
          self.subscribers.data.splice(key, 1);
        }

        self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-restored"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch(function (error) {
        self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-not-restored"),
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
      items: this.actions_items,
    };
    axios
      .post(this.ajax_prefix + "nl_subscriber/actions", data)
      .then(function (response) {
        for (let index = 0; index < response.data.results.length; index++) {
          var item = response.data.results[index];

          let key = self.subscribers.data
            .map((item) => item.id)
            .indexOf(item["id"]);

          self.subscribers.data[key].status = item["status"];
        }

        self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-status-changed"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch(function (error) {
        self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-status-not-changed"),
              type: "warning",
              title: self.trans("admin.warning")
            });
      });
  },
},
mounted() {
  var subscriber = this.$route.query.subscriber;
  if (subscriber != undefined ) {
    this.subscribers.current_subscriber = subscriber;
  }
  this.getSubscribers();
},
};
</script>
