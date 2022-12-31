<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('front.pages')" />
    <section class="content-header">
      <h1>{{ trans('front.pages')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('front.pages')}}</li>
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
              <h3 class="card-title">{{ trans('text.all-pages')}}</h3>
              <div class="card-tools">
                <div class="pull-left mr-2">
                  <router-link :to="prefix + 'page/create'">
                    <button class="btn btn-primary btn-sm">{{ trans('admin.add-page')}}</button>
                  </router-link>
                  <a
                    v-if="trashed"
                    @click.prevent="trashedPages(false)"
                    class="btn btn-info btn-sm"
                  >
                    <i class="fas fa-folder-open m-0"></i>
                    {{ trans('text.all')}}
                  </a>
                  <a v-else @click.prevent="trashedPages(true)" class="btn btn-info btn-sm">
                    <i class="fas fa-recycle m-0"></i>
                    {{ trans('admin.trashed')}}
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
                        <label class="custom-control-label" for="actionsCheck"></label>
                      </div>
                    </th>
                    <th scope="col">#</th>
                    <th scope="col">{{ trans('text.name')}}</th>
                    <th scope="col">{{ trans('admin.title')}}</th>
                    <th
                      scope="col"
                      style="width: 130px;text-align: center;"
                    >{{ trans('admin.status')}}</th>
                    <th scope="col" class="text-center">{{ trans('admin.options')}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(page, item, index) in pages.data">
                    <td scope="row" class="actions-check">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          v-model="actions_items[page.id]"
                          class="custom-control-input"
                          :id="'actionsCheckbox' + page.id"
                        />
                        <label class="custom-control-label" :for="'actionsCheckbox'+page.id"></label>
                      </div>
                    </td>
                    <td scope="row">{{page.id}}</td>
                    <td>
                      <a :href="'/' + page.name" target="_blank">{{page.name}}</a>
                    </td>
                    <td>{{page.title}}</td>
                    <td class="text-center">
                      <a
                        v-if="page.status !== 1"
                        href="#"
                        class="text-danger"
                        @click.prevent="changeStatus(page.id, 1, item)"
                      >
                        <i class="fas fa-ban"></i>
                      </a>
                      <a
                        v-else
                        href="#"
                        class="text-success"
                        @click.prevent="changeStatus(page.id, 0, item)"
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
                            :data-original-title="trans('admin.restore-page')"
                            @click.prevent="restorPage(page.id)"
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
                            :data-original-title="trans('admin.delete-page')"
                            @click.prevent="deletePage(page.id, item)"
                          >
                            <i class="fas fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                      <ul v-else class="list-inline p-0 m-0">
                        <li class="list-inline-item">
                          <router-link
                            :to="prefix + 'page/edit/' + page.id "
                            data-placement="left"
                            class="tip btn-uni edit"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.edit-page')"
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
                            :data-original-title="trans('admin.delete-page')"
                            @click.prevent="deletePage(page.id, item)"
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
                  <pagination :pagination="pages" @paginate="getPages()" :offset="4"></pagination>
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
      page: {
        name: "",
        alias: ""
      },
      actions_check: false,
      actions_items: {},
      pages: {},
      trashed: false,
      status: ["0", "1"],
      show_spinner: true,
      show_error: false
    };
  },
  methods: {
    getPages() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then(response => {
          self.pages = response.data.pages;
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
      for (let index = 0; index < this.pages.data.length; index++) {
        this.actions_items[this.pages.data[index].id] = this.actions_check;
      }
    },
    preparUrl() {
      var base = this.ajax_prefix + "pages?";
      var page = this.pages.current_page;
      if (page !== undefined) {
        base += "page=" + page + "&";
      }
      if (this.trashed) {
        base += "trashed=" + this.trashed + "&";
      }
      var url = base.slice(0, -1);
      return url;
    },
    trashedPages(trashed) {
      this.pages.current_page = undefined;
      this.trashed = trashed;
      this.getPages();
    },
    duplicatePage(id, key) {
      var self = this;
      axios
        .get(this.ajax_prefix + "page/duplicate/" + id)
        .then(response => {
          self.pages.data.push(response.data.page);
         self.$notify({
                group: 'admin',
                text:self.trans("admin.page-duplicate"),
            type: 'success',
            title: self.trans("admin.success")
          });
        })
        .catch(error => {
         self.$notify({
                group: 'admin',
                text:self.trans("admin.page-not-duplicate"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    deletePage(id, key) {
      var self = this;
      Event.$off("confirmed");
      Event.$emit("confirm");
      Event.$on("confirmed", function() {
        self.confirmDalete(id, key);
      });
    },
    changeStatus: function(id, status, item) {
      var self = this;
      axios
        .get(this.ajax_prefix + "page/" + id + "/status/" + status)
        .then(response => {
          self.pages.data[item].status = parseInt(response.data.status);
         self.$notify({
                group: 'admin',
                text:self.trans("admin.page-status-changed"),
            type: 'success',
            title: self.trans("admin.success")
          });
        })
        .catch(error => {
         self.$notify({
                group: 'admin',
                text:self.trans("admin.page-status-not-changed"),
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
        .delete(this.ajax_prefix + "page/" + id + forced)
        .then(function(response) {
          self.actions_items[self.pages.data[key].id] = false;
          self.$delete(self.pages.data, key);
         self.$notify({
                group: 'admin',
                text:self.trans("admin.page-deleted"),
            type: 'success',
            title: self.trans("admin.success")
         });
        })
        .catch(function(error) {
         self.$notify({
                group: 'admin',
                text:self.trans("admin.page-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    restorPage(id) {
      var self = this;
      axios
        .get(this.ajax_prefix + "page/restore/" + id)
        .then(function(response) {
          self.trashed = false;
          self.getPages();
         self.$notify({
                group: 'admin',
                text:self.trans("admin.page-restored"),
            type: 'success',
                title:  self.trans("admin.success")
          });
        })
        .catch(function(error) {
         self.$notify({
                group: 'admin',
                text:self.trans("admin.page-not-restored"),
            type: "warning",
            title:  self.trans("admin.warning")
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
        .post(this.ajax_prefix + "page/actions" + forced, data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.pages.data
              .map(item => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.pages.data, key);
            self.actions_items[response.data.results[index]] = false;
          }
         self.$notify({
                group: 'admin',
                text:self.trans("admin.page-deleted"),
            type: 'success',
                title:  self.trans("admin.success")
          });
        })
        .catch(function(error) {
         self.$notify({
                group: 'admin',
                text:self.trans("admin.page-not-deleted"),
            type: "warning",
            title:  self.trans("admin.warning")
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
        .post(this.ajax_prefix + "page/actions", data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            let key = self.pages.data
              .map(item => item.id)
              .indexOf(response.data.results[index]); // find index of your object
            self.$delete(self.pages.data, key);
          }
         self.$notify({
                group: 'admin',
                text:self.trans("admin.page-restored"),
            type: 'success',
                title:  self.trans("admin.success")
          });
        })
        .catch(function(error) {
         self.$notify({
                group: 'admin',
                text:self.trans("admin.page-not-restored"),
            type: "warning",
            title:  self.trans("admin.warning")
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
        .post(this.ajax_prefix + "page/actions", data)
        .then(function(response) {
          for (let index = 0; index < response.data.results.length; index++) {
            var item = response.data.results[index];

            let key = self.pages.data.map(item => item.id).indexOf(item["id"]);

            self.pages.data[key].status = item["status"];
          }
         self.$notify({
                group: 'admin',
                text:self.trans("admin.page-status-changed"),
            type: 'success',
                title:  self.trans("admin.success")
          });
        })
        .catch(function(error) {
         self.$notify({
                group: 'admin',
                text:self.trans("admin.page-status-not-changed"),
            type: "warning",
            title:  self.trans("admin.warning")
          });
        });
    }
  },
  mounted() {
    this.getPages();
  }
};
</script>
