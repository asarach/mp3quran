<template>
  <div class="card">
    <form role="form" @submit.prevent="storeApp()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">{{ trans('admin.create-app')}}</h3>
        <h3 v-else class="card-title">{{ trans('admin.edit-app')}}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="form-group">
          <label class="col-form-label">{{ trans('admin.title')}}</label>
          <input
            type="text"
            name="title"
            class="form-control"
            v-model="app.title"
            @keydown="errors.clear('title')"
          />
          <small class="form-text text-danger" v-if="errors.has('title')">{{errors.get('title')}}</small>
        </div>
        <div class="form-group">
          <label>{{ trans('admin.type')}}</label>
          <div class="row">
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="2"
                  id="customRadiotype1"
                  class="custom-control-input"
                  v-model="app.type"
                />
                <label
                  class="custom-control-label"
                  for="customRadiotype1"
                >{{ trans('admin.mobile-app')}}</label>
              </div>
            </div>
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="1"
                  id="customRadiotype2"
                  class="custom-control-input"
                  v-model="app.type"
                />
                <label
                  class="custom-control-label"
                  for="customRadiotype2"
                >{{ trans('admin.tv-app')}}</label>
              </div>
            </div>
          </div>
          <small class="form-text text-danger" v-if="errors.has('type')">{{errors.get('type')}}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">Android</label>
          <input
            type="text"
            name="android"
            class="form-control"
            v-model="app.android"
            @keydown="errors.clear('android')"
          />
          <small class="form-text text-danger" v-if="errors.has('android')">{{errors.get('android')}}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">Ios Apple</label>
          <input
            type="text"
            name="apple"
            class="form-control"
            v-model="app.apple"
            @keydown="errors.clear('apple')"
          />
          <small class="form-text text-danger" v-if="errors.has('apple')">{{errors.get('apple')}}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">Huawei</label>
          <input
            type="text"
            name="huawei"
            class="form-control"
            v-model="app.huawei"
            @keydown="errors.clear('huawei')"
          />
          <small class="form-text text-danger" v-if="errors.has('huawei')">{{errors.get('huawei')}}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.order_num") }}</label>
          <input
            type="number"
            name="order_num"
            class="form-control"
            v-model="app.order_num"
            @keydown="errors.clear('order_num')"
          />
          <small class="form-text text-danger" v-if="errors.has('order_num')">{{
            errors.get("order_num")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans('admin.image')}}</label>
          <upload-image @uploaded="imageUploaded" :image="app.old_image" type="apps" nbr="322"></upload-image>
          <small class="form-text text-danger" v-if="errors.has('image')">{{errors.get('image')}}</small>
        </div>
        <div class="form-group">
          <label>{{ trans('admin.status')}}</label>
          <div class="row">
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="1"
                  id="customRadiostatus1"
                  class="custom-control-input"
                  v-model="app.status"
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
                  v-model="app.status"
                />
                <label
                  class="custom-control-label"
                  for="customRadiostatus2"
                >{{ trans('admin.deactive')}}</label>
              </div>
            </div>
          </div>
          <small class="form-text text-danger" v-if="errors.has('status')">{{errors.get('status')}}</small>
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
        </div>
      </div>
    </form>
  </div>
</template>
<script>
const Errors = require("../../errors.js");

export default {
  props: ["action", "app"],
  data() {
    return {
      errors: new Errors()
    };
  },
  mounted() {},
  methods: {
    imageUploaded(image) {
      this.app.image = image;
    },
    storeApp() {
      var self = this;
      var data = this.app;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "app/" + this.app.id, data)
          .then(response => {
            self.$router.push(this.prefix + "apps");
            self.$notify({
              group: "admin",
              text: self.trans("admin.app-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.app-not-edited"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "app", data)
          .then(response => {
            self.$router.push(this.prefix + "apps");
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.app-added"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.app-not-added"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      }
    }
  }
};
</script>
