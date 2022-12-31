<template>
  <div class="card">
    <form role="form" @submit.prevent="storevgroup()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">{{ trans('admin.create-vgroup')}}</h3>
        <h3 v-else class="card-title">{{ trans('admin.edit-vgroup')}}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="form-group">
          <label class="col-form-label">{{ trans('text.name')}}</label>
          <input
            type="text"
            name="title"
            class="form-control"
            v-model="vgroup.name"
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
            v-model="vgroup.slug"
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
                  v-model="vgroup.status"
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
                  v-model="vgroup.status"
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
  props: ["action", "soar", "vgroup"],
  data() {
    return {
      errors: new Errors()
    };
  },
  methods: {
    imageUploaded(image) {
      this.vgroup.image = image;
    },
    storevgroup() {
      var self = this;
      var data = this.vgroup;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "vgroup/" + this.vgroup.id, data)
          .then(response => {
            self.$router.push(this.prefix + "vgroups");
            self.$notify({
              group: "admin",
              text: self.trans("admin.vgroup-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.vgroup-not-edited"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "vgroup", data)
          .then(response => {
            self.$router.push(this.prefix + "vgroups");
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.vgroup-added"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.vgroup-not-added"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      }
    }
  }
};
</script>
