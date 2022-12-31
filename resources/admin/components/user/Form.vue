<template>
  <div class="card">
    <form role="form" @submit.prevent="storeUser()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">{{ trans('admin.create-user')}}</h3>
        <h3 v-else class="card-title">{{ trans('admin.edit-user')}}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="form-group row">
          <label class="col-sm-8 col-form-label">{{ trans('text.name')}}</label>
          <div class="col-sm-12">
            <input
              type="text"
              name="name"
              class="form-control"
              v-model="user.name"
              @keydown="errors.clear('name')"
            />
            <small class="form-text text-danger" v-if="errors.has('name')">{{errors.get('name')}}</small>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-8 col-form-label">{{ trans('text.email')}}</label>
          <div class="col-sm-12">
            <input
              dir="ltr"
              type="text"
              name="email"
              class="form-control"
              v-model="user.email"
              @keydown="errors.clear('email')"
            />
            <small class="form-text text-danger" v-if="errors.has('email')">{{errors.get('email')}}</small>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-8 col-form-label">{{ trans('front.password')}}</label>
          <div class="col-sm-12">
            <input
              type="password"
              name="password"
              class="form-control"
              v-model="user.password"
              @keydown="errors.clear('password')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('password')"
            >{{errors.get('password')}}</small>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-8 col-form-label">{{ trans('front.password-confirm')}}</label>
          <div class="col-sm-12">
            <input
              type="password"
              name="password_confirmation"
              class="form-control"
              v-model="user.password_confirmation"
              @keydown="errors.clear('password')"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-8 col-form-label">{{ trans('admin.avatar')}}</label>
          <div class="col-lg-16">
            <upload-avatar @uploaded="avatarUploaded" :avatar="user.old_avatar"></upload-avatar>
            <small
              class="form-text text-danger"
              v-if="errors.has('avatar')"
            >{{errors.get('avatar')}}</small>
          </div>
        </div>
      </div>
      <div class="card-footer clearfix">
        <div class="float-left">
          <button
            v-if="action == 'create'"
            type="submit"
            class="btn btn-info btn-sm"
          >{{ trans('admin.create')}}</button>
          <button v-else type="submit" class="btn btn-info btn-sm">{{ trans('admin.save')}}</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
const Errors = require("../../errors.js");

export default {
  props: ["action", "user"],
  data() {
    return {
      errors: new Errors()
    };
  },
  methods: {
    storeUser() {
      var self = this;
      this.user.method = "admin";
      var data = this.user;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "user/" + this.user.id, data)
          .then(response => {
            self.$router.push(this.prefix + "users");
            self.$notify({
              group: "admin",
              text: self.trans("admin.user-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.user-not-edited"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "user", data)
          .then(response => {
            self.$router.push(this.prefix + "users");
            self.$notify({
              group: "admin",
              text: self.trans("admin.user-added"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.user-not-added"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      }
    },
    avatarUploaded(image) {
      this.user.avatar = image;
    }
  }
};
</script>
