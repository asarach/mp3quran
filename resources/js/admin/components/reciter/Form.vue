<template>
  <div class="card">
    <form role="form" @submit.prevent="storeCounty()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">{{ trans('admin.create-reciter')}}</h3>
        <h3 v-else class="card-title">{{ trans('admin.edit-reciter')}}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="form-group">
          <label class="col-form-label">{{ trans('text.name')}}</label>
          <input
            type="text"
            name="name"
            class="form-control"
            v-model="reciter.name"
            @keydown="errors.clear('name')"
          />
          <small class="form-text text-danger" v-if="errors.has('name')">{{errors.get('name')}}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans('admin.description')}}</label>
          <textarea
            name="description"
            class="form-control"
            v-model="reciter.description"
            rows="3"
            @change="errors.clear('description')"
          ></textarea>
          <small
            class="form-text text-danger"
            v-if="errors.has('description')"
          >{{errors.get('description')}}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans('admin.keywords')}}</label>
          <textarea
            name="keywords"
            class="form-control"
            v-model="reciter.keywords"
            rows="3"
            @change="errors.clear('keywords')"
          ></textarea>
          <small
            class="form-text text-danger"
            v-if="errors.has('keywords')"
          >{{errors.get('keywords')}}</small>
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
                  v-model="reciter.status"
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
                  v-model="reciter.status"
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
  props: ["action", "reciter"],
  data() {
    return {
      errors: new Errors()
    };
  },
  mounted() {},
  methods: {
    storeCounty() {
      var self = this;
      var data = this.reciter;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "reciter/" + this.reciter.id, data)
          .then(response => {
            self.$router.push(this.prefix + "reciters");
            self.$notify({
              group: "admin",
              text: self.trans("admin.reciter-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.reciter-not-edited"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "reciter", data)
          .then(response => {
            self.$router.push(this.prefix + "reciters");
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.reciter-added"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.reciter-not-added"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      }
    }
  }
};
</script>
