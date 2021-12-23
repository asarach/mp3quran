<template>
<div class="content-wrapper">
  <vue-headful
    :title="trans('admin.dashboard_title') + ' | ' + trans('text.newsletters')"
  />
  <section class="content-header">
    <h1>{{ trans("text.newsletters") }}</h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="prefix">
          <span class="icon-home"></span>
          {{ trans("admin.dashboard") }}
        </router-link>
      </li>
      <li class="breadcrumb-item active">{{ trans("text.newsletters") }}</li>
    </ol>
  </section>
  <div v-if="show_spinner" class="loading-spinner">
    <loading-spinner />
  </div>
  <div v-else-if="show_error" class="newsletter-error">
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
            <h3 class="card-title">{{ trans("admin.all-newsletters") }}</h3>
            <div class="card-tools">
              <div class="pull-left mr-2">
                <router-link :to="prefix + 'newsletter/create'">
                  <button class="btn btn-primary btn-sm">
                    {{ trans("admin.add-newsletter") }}
                  </button>
                </router-link>
                <a
                  v-if="trashed"
                  @click.prevent="trashedNewsletters(false)"
                  class="btn btn-info btn-sm"
                >
                <span class="icon-folder-open m-0"></span>
                  {{ trans("admin.all") }}
                </a>
                <a
                  v-else
                  @click.prevent="trashedNewsletters(true)"
                  class="btn btn-info btn-sm"
                >
                <span class="icon-bin2 m-0"></span>
                  {{ trans("admin.trashed") }}
                </a>
              </div>
            </div>
          </div>
          <div class="card-body table-responsive p-0">
            <filtering
              :status="status"
              :languages="languages"
              :filtering="true"
              @filter="filterNewsletters"
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
                  <th scope="col">{{ trans("text.name") }}</th>
                  <th scope="col">{{ trans("admin.description") }}</th>
                  <th scope="col" style="width: 130px; text-align: center">
                    {{ trans("admin.status") }}
                  </th>
                  <th scope="col" class="text-center">
                    {{ trans("admin.options") }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(newsletter, item) in newsletters.data" :key="item">
                  <td scope="row" class="actions-check">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        v-model="actions_items[newsletter.id]"
                        class="custom-control-input"
                        :id="'actionsCheckbox' + newsletter.id"
                      />
                      <label
                        class="custom-control-label"
                        :for="'actionsCheckbox' + newsletter.id"
                      ></label>
                    </div>
                  </td>
                  <td scope="row">{{ newsletter.id }}</td>
                  <td>
                      {{ newsletter.name }}
                  </td>
                  <td>{{ newsletter.description }}</td>
                  <td class="text-center">
                    <a
                      v-if="newsletter.status !== 1"
                      href="#"
                      class="text-danger"
                      @click.prevent="changeStatus(newsletter.id, 1, item)"
                    >
                    <span class="icon-cross"></span>
                    </a>
                    <a
                      v-else
                      href="#"
                      class="text-success"
                      @click.prevent="changeStatus(newsletter.id, 0, item)"
                    >
                    <span class="icon-checkmark"></span>
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
                          :data-original-title="trans('admin.restore-newsletter')"
                          @click.prevent="restorNewsletter(newsletter.id)"
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
                          :data-original-title="trans('admin.delete-newsletter')"
                          @click.prevent="deleteNewsletter(newsletter.id, item)"
                        >
                          <span class="icon-bin"></span>
                        </a>
                      </li>
                    </ul>
                    <ul v-else class="list-inline p-0 m-0">
                      <li class="list-inline-item">
                        <router-link
                          :to="prefix + 'newsletter/edit/' + newsletter.id"
                          data-placement="left"
                          class="tip btn-uni edit"
                          data-toggle="tooltip"
                          title
                          :data-original-title="trans('admin.edit-newsletter')"
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
                          :data-original-title="trans('admin.delete-newsletter')"
                          @click.prevent="deleteNewsletter(newsletter.id, item)"
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
                      v-if="!this.trashed"
                      @click.prevent="actionChangeStatus(1)"
                    >
                      {{ trans("admin.activate-selected") }}
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      v-if="!this.trashed"
                      @click.prevent="actionChangeStatus(0)"
                    >
                      {{ trans("admin.deactivate-selected") }}
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
                  :pagination="newsletters"
                  @paginate="getNewsletters()"
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
    newsletter: {
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
    newsletters: {},
    language: {},
    languages: {},
    trashed: false,
    status: ["0", "1"],
    show_spinner: true,
    show_error: false,
  };
},
methods: {
  getNewsletters() {
    var self = this;
    var url = this.preparUrl();
    axios
      .get(url)
      .then((response) => {
        self.newsletters = response.data.newsletters;
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
    for (let index = 0; index < this.newsletters.data.length; index++) {
      this.actions_items[this.newsletters.data[index].id] = this.actions_check;
    }
  },
  filterNewsletters(filters) {
    this.filters = filters;
    this.newsletters.current_newsletter = undefined;
    this.getNewsletters();
  },
  preparUrl() {
    var base = this.ajax_prefix + "newsletters?";
    var newsletter = this.newsletters.current_newsletter;
    if (newsletter !== undefined) {
      base += "newsletter=" + newsletter + "&";
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
  trashedNewsletters(trashed) {
    this.newsletters.current_newsletter = undefined;
    this.trashed = trashed;
    this.getNewsletters();
  },
  duplicateNewsletter(id, key) {
    var self = this;
    axios
      .get(this.ajax_prefix + "newsletter/duplicate/" + id)
      .then((response) => {
        self.newsletters.data.push(response.data.newsletter);

        self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-duplicate"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch((error) => {
        self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-not-duplicate"),
              type: "warning",
              title: self.trans("admin.warning")
            });
      });
  },
  deleteNewsletter(id, key) {
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
      .get(this.ajax_prefix + "newsletter/" + id + "/status/" + status)
      .then((response) => {
        self.newsletters.data[item].status = parseInt(response.data.status);

        self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-status-changed"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch((error) => {
        self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-status-not-changed"),
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
      .delete(this.ajax_prefix + "newsletter/" + id + forced)
      .then(function (response) {
        self.actions_items[self.newsletters.data[key].id] = false;
        self.newsletters.data.splice(key, 1);

        self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-deleted"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch(function (error) {
        self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-not-deleted"),
              type: "warning",
              title: self.trans("admin.warning")
            });
      });
  },
  restorNewsletter(id) {
    var self = this;
    axios
      .get(this.ajax_prefix + "newsletter/restore/" + id)
      .then(function (response) {
        self.trashed = false;
        self.getNewsletters();

        self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-restored"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch(function (error) {
        self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-not-restored"),
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
      .post(this.ajax_prefix + "newsletter/actions" + forced, data)
      .then(function (response) {
        for (let index = 0; index < response.data.results.length; index++) {
          let key = self.newsletters.data
            .map((item) => item.id)
            .indexOf(response.data.results[index]); // find index of your object
          self.newsletters.data.splice(key, 1);
          
          self.actions_items[response.data.results[index]] = false;
        }

        self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-deleted"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch(function (error) {
        self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-not-deleted"),
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
      .post(this.ajax_prefix + "newsletter/actions", data)
      .then(function (response) {
        for (let index = 0; index < response.data.results.length; index++) {
          let key = self.newsletters.data
            .map((item) => item.id)
            .indexOf(response.data.results[index]); // find index of your object
          self.newsletters.data.splice(key, 1);
        }

        self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-restored"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch(function (error) {
        self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-not-restored"),
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
      .post(this.ajax_prefix + "newsletter/actions", data)
      .then(function (response) {
        for (let index = 0; index < response.data.results.length; index++) {
          var item = response.data.results[index];

          let key = self.newsletters.data
            .map((item) => item.id)
            .indexOf(item["id"]);

          self.newsletters.data[key].status = item["status"];
        }

        self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-status-changed"),
              type: "success",
              title: self.trans("admin.success")
            });
      })
      .catch(function (error) {
        self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-status-not-changed"),
              type: "warning",
              title: self.trans("admin.warning")
            });
      });
  },
},
mounted() {
  var newsletter = this.$route.query.newsletter;
  if (newsletter != undefined ) {
    this.newsletters.current_newsletter = newsletter;
  }
  this.getNewsletters();
},
};
</script>
