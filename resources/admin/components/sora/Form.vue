<template>
  <div class="card">
    <form role="form" @submit.prevent="storesora()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">{{ trans('admin.create-sora')}}</h3>
        <h3 v-else class="card-title">{{ trans('admin.edit-sora')}}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="row">
          <div class="form-group w-100">
            <label class="col-form-label">{{ trans('text.name')}}</label>
            <input
              type="text"
              name="title"
              class="form-control"
              v-model="sora.name"
              @keydown="errors.clear('name')"
            />
            <small class="form-text text-danger" v-if="errors.has('name')">{{errors.get('name')}}</small>
          </div>

          <div v-if="action == 'edit'" class="form-group w-100">
            <label class="col-form-label">{{ trans('admin.slug')}}</label>
            <input
              type="text"
              name="slug"
              class="form-control"
              v-model="sora.slug"
              @keydown="errors.clear('slug')"
            />
            <small class="form-text text-danger" v-if="errors.has('slug')">{{errors.get('slug')}}</small>
          </div>
          <div class="form-group w-100">
            <label class="col-form-label">{{ trans('admin.ayat_count')}}</label>
            <input
              type="number"
              name="ayat_count"
              class="form-control"
              v-model="sora.ayat_count"
              @keydown="errors.clear('ayat_count')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('ayat_count')"
            >{{errors.get('ayat_count')}}</small>
          </div>
          <div class="form-group w-100">
            <label class="col-form-label">{{ trans('admin.num')}}</label>
            <input
              type="number"
              name="num"
              class="form-control"
              v-model="sora.num"
              @keydown="errors.clear('num')"
            />
            <small class="form-text text-danger" v-if="errors.has('num')">{{errors.get('num')}}</small>
          </div>
          <div class="form-group w-100">
            <label class="col-form-label">{{ trans('admin.start_page')}}</label>
            <input
              type="number"
              name="start_page"
              class="form-control"
              v-model="sora.start_page"
              @keydown="errors.clear('start_page')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('start_page')"
            >{{errors.get('start_page')}}</small>
          </div>
          <div class="form-group w-100">
            <label class="col-form-label">{{ trans('admin.end_page')}}</label>
            <input
              type="number"
              name="end_page"
              class="form-control"
              v-model="sora.end_page"
              @keydown="errors.clear('end_page')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('end_page')"
            >{{errors.get('end_page')}}</small>
          </div>
          <div class="form-group w-100">
            <label>{{ trans('admin.sora-makkia')}}</label>
            <div class="row">
              <div class="col">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    value="1"
                    id="customRadiomakkia1"
                    class="custom-control-input"
                    v-model="sora.makkia"
                  />
                  <label
                    class="custom-control-label"
                    for="customRadiomakkia1"
                  >{{ trans('admin.sora-makkia-1')}}</label>
                </div>
              </div>
              <div class="col">
                <div class="custom-control custom-radio">
                  <input
                    type="radio"
                    value="0"
                    id="customRadiomakkia2"
                    class="custom-control-input"
                    v-model="sora.makkia"
                  />
                  <label
                    class="custom-control-label"
                    for="customRadiomakkia2"
                  >{{ trans('admin.sora-makkia-0')}}</label>
                </div>
              </div>
            </div>
            <small
              class="form-text text-danger"
              v-if="errors.has('makkia')"
            >{{errors.get('makkia')}}</small>
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
                    v-model="sora.status"
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
                    v-model="sora.status"
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
        </div>
      </div>
    </form>
  </div>
</template>
<script>
const Errors = require("../../errors.js");

export default {
  props: ["action", "sora"],
  data() {
    return {
      errors: new Errors()
    };
  },
  methods: {
    imageUploaded(image) {
      this.sora.image = image;
    },
    storesora() {
      var self = this;
      var data = this.sora;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "sora/" + this.sora.id, data)
          .then(response => {
            self.$router.push(this.prefix + "soar");
            self.$notify({
              group: "admin",
              text: self.trans("admin.sora-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.sora-not-edited"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "sora", data)
          .then(response => {
            self.$router.push(this.prefix + "soar");
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.sora-added"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.sora-not-added"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      }
    }
  }
};
</script>
