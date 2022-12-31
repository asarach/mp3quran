<template>
  <div class="card">
    <form role="form" @submit.prevent="storemushaf()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">{{ trans('admin.create-mushaf')}}</h3>
        <h3 v-else class="card-title">{{ trans('admin.edit-mushaf')}}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="form-group">
          <label class="col-form-label">{{ trans('text.name')}}</label>
          <input
            type="text"
            name="title"
            class="form-control"
            v-model="mushaf.name"
            @keydown="errors.clear('name')"
          />
          <small class="form-text text-danger" v-if="errors.has('name')">{{errors.get('name')}}</small>
        </div>
        <div v-if="action == 'edit'" class="form-group">
          <label class="col-form-label">{{ trans('admin.slug')}}</label>
          <input
            type="text"
            name="slug"
            class="form-control"
            v-model="mushaf.slug"
            @keydown="errors.clear('slug')"
          />
          <small class="form-text text-danger" v-if="errors.has('slug')">{{errors.get('slug')}}</small>
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
                  v-model="mushaf.status"
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
                  v-model="mushaf.status"
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
  props: ["action", "soar", "mushaf"],
  data() {
    return {
      errors: new Errors()
    };
  },
  methods: {
    imageUploaded(image) {
      this.mushaf.image = image;
    },
    storemushaf() {
      var self = this;
      var data = this.mushaf;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "mushaf/" + this.mushaf.id, data)
          .then(response => {
            self.$router.push(this.prefix + "mushafs");
            self.$notify({
              group: "admin",
              text: self.trans("admin.mushaf-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.mushaf-not-edited"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "mushaf", data)
          .then(response => {
            self.$router.push(this.prefix + "mushafs");
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.mushaf-added"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.mushaf-not-added"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      }
    }
  }
};
</script>
