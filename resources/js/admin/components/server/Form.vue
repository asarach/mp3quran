<template>
  <div class="card">
    <form role="form" @submit.prevent="storeserver()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">{{ trans('admin.create-server')}}</h3>
        <h3 v-else class="card-title">{{ trans('admin.edit-server')}}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="row">
          <div class="form-group w-100">
            <label class="col-form-label">{{ trans('text.name')}}</label>
            <input
              type="text"
              name="name"
              class="form-control"
              v-model="server.name"
              @keydown="errors.clear('name')"
            />
            <small class="form-text text-danger" v-if="errors.has('name')">{{errors.get('name')}}</small>
          </div>
          <div class="form-group w-100">
            <label class="col-form-label">{{ trans('admin.url')}}</label>
            <input
              type="text"
              name="url"
              class="form-control"
              v-model="server.url"
              @keydown="errors.clear('url')"
            />
            <small class="form-text text-danger" v-if="errors.has('url')">{{errors.get('url')}}</small>
          </div>
          <div class="form-group w-100">
            <label class="col-form-label">{{ trans('admin.FTP_type')}}</label>
            <select
              class="custom-select"
              v-model="server.FTP_type"
              @change="errors.clear('FTP_type')"
            >
              <option value>النوع</option>
              <option value="FTP">FTP</option>
              <option value="SFTP">SFTP</option>
              <option value="SSH">SSH</option>
            </select>
            <small
              class="form-text text-danger"
              v-if="errors.has('FTP_type')"
            >{{errors.get('FTP_type')}}</small>
          </div>
          <div class="form-group w-100">
            <label class="col-form-label">{{ trans('admin.FTP_host')}}</label>
            <input
              type="text"
              name="FTP_host"
              class="form-control"
              v-model="server.FTP_host"
              @keydown="errors.clear('FTP_host')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('FTP_host')"
            >{{errors.get('FTP_host')}}</small>
          </div>
          <div class="form-group w-100">
            <label class="col-form-label">{{ trans('admin.FTP_port')}}</label>
            <input
              type="text"
              name="FTP_port"
              class="form-control"
              v-model="server.FTP_port"
              @keydown="errors.clear('FTP_port')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('FTP_port')"
            >{{errors.get('FTP_port')}}</small>
          </div>
          <div class="form-group w-100">
            <label class="col-form-label">{{ trans('admin.FTP_username')}}</label>
            <input
              type="text"
              name="FTP_username"
              class="form-control"
              v-model="server.FTP_username"
              @keydown="errors.clear('FTP_username')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('FTP_username')"
            >{{errors.get('FTP_username')}}</small>
          </div>
          <div class="form-group w-100">
            <label class="col-form-label">{{ trans('admin.FTP_password')}}</label>
            <input
              type="text"
              name="FTP_password"
              class="form-control"
              v-model="server.FTP_password"
              @keydown="errors.clear('FTP_password')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('FTP_password')"
            >{{errors.get('FTP_password')}}</small>
          </div>
          <div class="form-group w-100">
            <label>{{ trans('admin.status')}}</label>
            <div class="row">
              <div class="col">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    value="1"
                    id="customRadiostatus1"
                    class="custom-control-input"
                    v-model="server.status"
                  />
                  <label
                    class="custom-control-label"
                    for="customRadiostatus1"
                  >{{ trans('admin.active')}}</label>
                </div>
              </div>
              <div class="col">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    value="0"
                    id="customRadiostatus2"
                    class="custom-control-input"
                    v-model="server.status"
                  />
                  <label
                    class="custom-control-label"
                    for="customRadiostatus2"
                  >{{ trans('admin.deactive')}}</label>
                </div>
              </div>
            </div>
            <small
              class="form-text text-danger"
              v-if="errors.has('status')"
            >{{errors.get('status')}}</small>
          </div>
        </div>
      </div>
      <div class="card-footer clearfix">
        <div class="float-right">
          <button
            v-if="action == 'create'"
            type="submit"
            class="btn btn-info btn-sm"
          >{{ trans('admin.create')}}</button>
          <button v-else type="submit" class="btn btn-info btn-sm">{{ trans('admin.save')}}</button>
          <button
            type="button"
            @click.prevent="testServer()"
            class="btn btn-warning btn-sm"
          >{{ trans('admin.test-server')}}</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
const Errors = require("../../errors.js");

export default {
  props: ["action", "soar", "server"],
  data() {
    return {
      errors: new Errors()
    };
  },
  methods: {
    imageUploaded(image) {
      this.server.image = image;
    },
    testServer() {
      var self = this;
      var data = this.server;
      axios
        .post(this.ajax_prefix + "server/test", data)
        .then(response => {
          if (response.data.success) {
            self.$notify({
              group: "admin",
              text: self.trans("admin.server-connected"),
              type: "success",
              title: self.trans("admin.success")
            });
          } else {
            self.$notify({
              group: "admin",
              text: self.trans("admin.server-not-connected"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          }
        })
        .catch(error => {
          self.$notify({
            group: "admin",
            text: self.trans("admin.server-not-connected"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    storeserver() {
      var self = this;
      var data = this.server;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "server/" + this.server.id, data)
          .then(response => {
            self.$router.push(this.prefix + "servers");
            self.$notify({
              group: "admin",
              text: self.trans("admin.server-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.server-not-edited"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "server", data)
          .then(response => {
            self.$router.push(this.prefix + "servers");
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.server-added"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.server-not-added"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      }
    }
  }
};
</script>
