<template>
  <div class="card">
    <form role="form" @submit.prevent="storeTv()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">{{ trans('admin.create-tv')}}</h3>
        <h3 v-else class="card-title">{{ trans('admin.edit-tv')}}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="form-group">
          <label class="col-form-label">{{ trans('text.name')}}</label>
          <input
            type="text"
            name="name"
            class="form-control"
            v-model="tv.name"
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
            v-model="tv.slug"
            @keydown="errors.clear('slug')"
          />
          <small class="form-text text-danger" v-if="errors.has('slug')">{{errors.get('slug')}}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans('admin.url')}}</label>
          <input
            type="text"
            name="url"
            class="form-control"
            v-model="tv.url"
            @keydown="errors.clear('url')"
          />
          <small class="form-text text-danger" v-if="errors.has('url')">{{errors.get('url')}}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans('admin.image')}}</label>
          <upload-image @uploaded="imageUploaded" :image="tv.old_image" type="tvs" nbr="322"></upload-image>
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
                  v-model="tv.status"
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
                  v-model="tv.status"
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
  props: ["action", "tv", "mushafs", "tvt", "reciters"],
  data() {
    return {
      errors: new Errors()
    };
  },
  mounted() {},
  methods: {
    imageUploaded(image) {
      this.tv.image = image;
    },
    storeTv() {
      var self = this;
      var data = this.tv;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "tv/" + this.tv.id, data)
          .then(response => {
            self.$router.push(this.prefix + "tvs");
            self.$notify({
              group: "admin",
              text: self.trans("admin.tv-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.tv-not-edited"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "tv", data)
          .then(response => {
            self.$router.push(this.prefix + "tvs");
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.tv-added"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.tv-not-added"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      }
    }
  }
};
</script>
