<template>
  <div class="card">
    <form role="form" @submit.prevent="storeLink()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">{{ trans('admin.create-link')}}</h3>
        <h3 v-else class="card-title">{{ trans('admin.edit-link')}}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="form-group">
          <label class="col-form-label">{{ trans('admin.old_url')}}</label>
          <input
            type="text"
            name="old_url"
            class="form-control"
            v-model="link.old_url"
            @keydown="errors.clear('old_url')"
          />
          <small
            class="form-text text-danger"
            v-if="errors.has('old_url')"
          >{{errors.get('old_url')}}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans('admin.new_url')}}</label>
          <input
            type="text"
            name="new_url"
            class="form-control"
            v-model="link.new_url"
            @keydown="errors.clear('new_url')"
          />
          <small
            class="form-text text-danger"
            v-if="errors.has('new_url')"
          >{{errors.get('new_url')}}</small>
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
                  v-model="link.status"
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
                  v-model="link.status"
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
  props: ["action", "link", "mushafs", "rewayat", "reciters"],
  data() {
    return {
      errors: new Errors()
    };
  },
  mounted() {},
  methods: {
    imageUploaded(image) {
      this.link.image = image;
    },
    storeLink() {
      var self = this;
      var data = this.link;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "link/" + this.link.id, data)
          .then(response => {
            self.$router.push(this.prefix + "links");
            self.$notify({
              group: "admin",
              text: self.trans("admin.link-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.link-not-edited"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "link", data)
          .then(response => {
            self.$router.push(this.prefix + "links");
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.link-added"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.link-not-added"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      }
    }
  }
};
</script>
