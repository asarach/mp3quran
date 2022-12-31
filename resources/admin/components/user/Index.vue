<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('front.users')" />
    <section class="content-header">
      <h1>{{ trans('front.users')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('front.users')}}</li>
      </ol>
    </section>
    <div v-if="show_spinner" class="loading-spinner">
      <loading-spinner />
    </div>
    <div v-else-if="show_error" class="user-error">
      <loading-error :type="show_error" />
    </div>
    <section v-else class="content">
      <div class="row">
        <div class="col-lg-24">
          <div class="card">
            <div class="card-head">
              <h3 class="card-title">{{ trans('text.all-users')}}</h3>
              <div class="card-tools">
                <div class="pull-left mr-2">
                  <router-link :to="prefix + 'user/create'">
                    <button class="btn btn-primary btn-sm">{{ trans('admin.add-user')}}</button>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="card-body table-responsive p-0">
              <table class="table table-hover table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">{{ trans('text.name')}}</th>
                    <th scope="col">{{ trans('text.email')}}</th>
                    <th
                      scope="col"
                      style="width: 130px;text-align: center;"
                    >{{ trans('admin.role')}}</th>
                    <th scope="col" class="text-center">{{ trans('admin.options')}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, item, index) in users.data">
                    <td scope="row">{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>
                      <div class="change-role dropdown">
                        <button
                          class="btn dropdown-toggle"
                          type="button"
                          id="dropdownChangeRole"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >{{trans('admin.role-' + user.role)}}</button>
                        <div
                          class="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownChangeRole"
                        >
                          <a
                            class="dropdown-item"
                            href="#"
                            @click.prevent="changeRole(user.id, role, item)"
                            v-for="role in roles"
                          >{{ trans('admin.role-' + role) }}</a>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <ul class="list-inline p-0 m-0">
                        <li class="list-inline-item">
                          <router-link
                            :to="prefix + 'user/edit/' + user.id "
                            data-placement="left"
                            class="tip btn-uni edit"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.edit-user')"
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
                            :data-original-title="trans('admin.delete-user')"
                            @click.prevent="deleteUser(user.id, item)"
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
              <pagination :pagination="users" @paginate="getUsers()" :offset="4"></pagination>
            </div>
          </div>
        </div>
      </div>
      <div
        id="edit_role_model"
        class="modal edit-role-modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <form role="form" @submit.prevent="updateRole()">
              <div class="modal-body">
                <div class="form-group row">
                  <label class="col-sm-8 col-form-label">{{ trans('admin.role')}}</label>
                  <div class="col-sm-16">
                    <select name="locale" v-model="edit_role.role" class="form-control">
                      <option v-for="role in roles" :value="role">{{trans('admin.role_' + role)}}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm btn-block"
                  data-dismiss="modal"
                >{{ trans('admin.cancel')}}</button>
                <button
                  type="submit"
                  class="btn btn-danger btn-sm btn-block"
                >{{ trans('admin.update')}}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
const Errors = require("../../errors.js");

export default {
  data() {
    return {
      errors: new Errors(),
      users: {},
      roles: {},
      show_spinner: true,
      show_error: false,
      edit_user: {
        id: "",
        key: "",
        name: "",
        email: ""
      },
      edit_role: {
        id: "",
        key: "",
        role: ""
      }
    };
  },
  methods: {
    getUsers() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then(response => {
          self.users = response.data.users;
          self.roles = response.data.roles;
          self.show_spinner = false;
          window.scroll(0, 0);
        })
        .catch(error => {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    },
    preparUrl() {
      var base = this.ajax_prefix + "users?";
      var page = this.users.current_page;
      if (page !== undefined) {
        base += "page=" + page + "&";
      }
      var url = base.slice(0, -1);
      return url;
    },
    changeRole: function(id, role, item) {
      var self = this;
      axios
        .get(this.ajax_prefix + "user/" + id + "/role/" + role)
        .then(response => {
          self.users.data[item].role = response.data.role;
          self.$notify({
            group: "admin",
            text: self.trans("admin.user-role-changed"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(error => {
          self.$notify({
            group: "admin",
            text: self.trans("admin.user-role-not-changed"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    deleteUser(id, key) {
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
        .delete(this.ajax_prefix + "user/" + id)
        .then(function(response) {
          self.$delete(self.users.data, key);
          self.$notify({
            group: "admin",
            text: self.trans("admin.user-deleted"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.user-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>
