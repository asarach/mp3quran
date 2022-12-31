<template>
<div class="content-wrapper">
  <vue-headful
    :title="trans('admin.dashboard_title') + ' | ' + trans('text.messages')"
  />
  <section class="content-header">
    <h1>{{ trans("text.messages") }}</h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="prefix">
          <span class="icon-home"></span>
          {{ trans("admin.dashboard") }}
        </router-link>
      </li>
      <li class="breadcrumb-item active">{{ trans("text.messages") }}</li>
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
        <newsletter-nav></newsletter-nav>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-24">
        <div class="card">
          <div class="card-head">
            <h3 class="card-title">{{ trans("admin.all-messages") }}</h3>
            <div class="card-tools">
              <div class="pull-left mr-2">
                <router-link :to="prefix + 'nl_message/create'">
                  <button class="btn btn-primary btn-sm">
                    {{ trans("admin.add-message") }}
                  </button>
                </router-link>
                <a
                  v-if="trashed"
                  @click.prevent="trashedMessages(false)"
                  class="btn btn-info btn-sm"
                >
                  <span class="icon-folder-open m-0"></span>
                  {{ trans("admin.all") }}
                </a>
                <a
                  v-else
                  @click.prevent="trashedMessages(true)"
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
                  <th scope="col">{{ trans("text.subject") }}</th>
                  <th scope="col">{{ trans("admin.template") }}</th>
                  <th scope="col" class="text-center">
                    {{ trans("admin.options") }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(message, item) in messages.data" :key="item">
                  <td scope="row" class="actions-check">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        v-model="actions_items[message.id]"
                        class="custom-control-input"
                        :id="'actionsCheckbox' + message.id"
                      />
                      <label
                        class="custom-control-label"
                        :for="'actionsCheckbox' + message.id"
                      ></label>
                    </div>
                  </td>
                  <td scope="row">{{ message.id }}</td>
                  <td>
                    <router-link :to="prefix + 'nl_message/' + message.id">
                      {{ message.subject }}
                    </router-link>
                  </td>
                  <td v-if="message.template">{{ message.template.name }}</td>
                  <td v-else>-</td>
                  <td class="text-center">
                    <ul v-if="trashed" class="list-inline p-0 m-0">
                      <li class="list-inline-item">
                        <a
                          href="#"
                          data-placement="left"
                          class="tip btn-uni edit"
                          data-toggle="tooltip"
                          title
                          :data-original-title="
                            trans('admin.restore-message')
                          "
                          @click.prevent="restorMessage(message.id)"
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
                          :data-original-title="trans('admin.delete-message')"
                          @click.prevent="deleteMessage(message.id, item)"
                        >
                          <span class="icon-bin"></span>
                        </a>
                      </li>
                    </ul>
                    <ul v-else class="list-inline p-0 m-0">
                      <li class="list-inline-item">
                        <a
                          @click.prevent="sendMessage(message.id)"
                          data-placement="left"
                          class="tip btn-uni info"
                          data-toggle="tooltip"
                          title
                          :data-original-title="trans('admin.send-message')"
                        >
                          <span class="icon-redo2"></span>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <router-link
                          :to="prefix + 'nl_message/edit/' + message.id"
                          data-placement="left"
                          class="tip btn-uni edit"
                          data-toggle="tooltip"
                          title
                          :data-original-title="trans('admin.edit-message')"
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
                          :data-original-title="trans('admin.delete-message')"
                          @click.prevent="deleteMessage(message.id, item)"
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
                  :pagination="messages"
                  @paginate="getMessages()"
                  :offset="4"
                ></pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div
    id="message_model"
    class="modal delet-modal fade confirmation"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
        <div class="form-group">
            <label class="col-form-label">
              {{ trans("admin.newsletters") }}
            </label>
            <multiselect
              v-model="send_message.newsletters"
              selected-label
              select-label
              deselect-label
              :options="newsletters"
              :placeholder="trans('admin.newsletters')"
              label="name"
              track-by="id"
              :multiple="true"
            >
              <span slot="noResult">{{ trans("text.no-item-found") }}</span>
            </multiselect>
          </div>
      </div>
      <div class="modal-footer">
        <div class="confirm_btns">
          <button type="button" class="btn btn-info" @click="sendMessageConfirm()">
            {{ trans("admin.send") }}
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
data() {
  return {
    message: {
      name: "",
      alias: "",
      language: {},
    },
    send_message: {
      id: "",
      newsletters: [],
    },
    filters: {
      statu: "",
      language: "",
    },
    actions_check: false,
    actions_items: {},
    messages: {},
    language: {},
    newsletters: [],
    trashed: false,
    status: ["0", "1"],
    show_spinner: true,
    show_error: false,
  };
},
methods: {
  getMessages() {
    var self = this;
    var url = this.preparUrl();
    axios
      .get(url)
      .then((response) => {
        self.messages = response.data.messages;
        self.newsletters = response.data.newsletters;
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
    for (let index = 0; index < this.messages.data.length; index++) {
      this.actions_items[this.messages.data[index].id] = this.actions_check;
    }
  },
  filterMessages(filters) {
    this.filters = filters;
    this.messages.current_message = undefined;
    this.getMessages();
  },
  preparUrl() {
    var base = this.ajax_prefix + "nl_messages?";
    var message = this.messages.current_message;
    if (message !== undefined) {
      base += "message=" + message + "&";
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
  trashedMessages(trashed) {
    this.messages.current_message = undefined;
    this.trashed = trashed;
    this.getMessages();
  },
  sendMessage(id) {
    this.send_message.id = id;
    $("#message_model").modal("show");
  },
  sendMessageConfirm() {
    var self = this;
    var data = this.send_message;
    axios
      .post(this.ajax_prefix + "nl_message/send", data)
      .then((response) => {
        self.$notify({
              group: "admin",
              text: self.trans("admin.message-sent"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch((error) => {
        self.$notify({
              group: "admin",
              text: self.trans("admin.message-not-sent"),
              type: "success",
              title: self.trans("admin.success")
            });
      });
  },
  deleteMessage(id, key) {
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
      .get(this.ajax_prefix + "nl_message/" + id + "/status/" + status)
      .then((response) => {
        self.messages.data[item].status = parseInt(response.data.status);

        self.$notify({
              group: "admin",
              text: self.trans("admin.message-status-changed"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch((error) => {
        self.$notify({
              group: "admin",
              text: self.trans("admin.message-status-not-changed"),
              type: "warning",
              title: self.trans("admin.warning")
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
      .delete(this.ajax_prefix + "nl_message/" + id + forced)
      .then(function (response) {
        self.actions_items[self.messages.data[key].id] = false;
        self.messages.data.splice(key, 1);

        self.$notify({
              group: "admin",
              text: self.trans("admin.message-deleted"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch(function (error) {
        self.$notify({
              group: "admin",
              text: self.trans("admin.message-not-deleted"),
              type: "warning",
              title: self.trans("admin.warning")
            });
      });
  },
  restorMessage(id) {
    var self = this;
    axios
      .get(this.ajax_prefix + "nl_message/restore/" + id)
      .then(function (response) {
        self.trashed = false;
        self.getMessages();

        self.$notify({
              group: "admin",
              text: self.trans("admin.message-restored"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch(function (error) {
        self.$notify({
              group: "admin",
              text: self.trans("admin.message-not-restored"),
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
      .post(this.ajax_prefix + "nl_message/actions" + forced, data)
      .then(function (response) {
        for (let index = 0; index < response.data.results.length; index++) {
          let key = self.messages.data
            .map((item) => item.id)
            .indexOf(response.data.results[index]); // find index of your object
          self.messages.data.splice(key, 1);

          self.actions_items[response.data.results[index]] = false;
        }

        self.$notify({
              group: "admin",
              text: self.trans("admin.message-deleted"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch(function (error) {
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
      items: this.actions_items,
    };
    axios
      .post(this.ajax_prefix + "nl_message/actions", data)
      .then(function (response) {
        for (let index = 0; index < response.data.results.length; index++) {
          let key = self.messages.data
            .map((item) => item.id)
            .indexOf(response.data.results[index]); // find index of your object
          self.messages.data.splice(key, 1);
        }

        self.$notify({
              group: "admin",
              text: self.trans("admin.message-restored"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch(function (error) {
        self.$notify({
              group: "admin",
              text: self.trans("admin.message-not-restored"),
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
      .post(this.ajax_prefix + "nl_message/actions", data)
      .then(function (response) {
        for (let index = 0; index < response.data.results.length; index++) {
          var item = response.data.results[index];

          let key = self.messages.data
            .map((item) => item.id)
            .indexOf(item["id"]);

          self.messages.data[key].status = item["status"];
        }

        self.$notify({
              group: "admin",
              text: self.trans("admin.message-status-changed"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch(function (error) {
        self.$notify({
              group: "admin",
              text: self.trans("admin.message-status-not-changed"),
              type: "warning",
              title: self.trans("admin.warning")
            });
      });
  },
},
mounted() {
  var message = this.$route.query.message;
  if (message != undefined) {
    this.messages.current_message = message;
  }
  this.getMessages();
},
};
</script>
