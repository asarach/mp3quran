<template>
  <div class="card">
    <form role="form" @submit.prevent="storelanguage()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">{{ trans('admin.create-language')}}</h3>
        <h3 v-else class="card-title">{{ trans('admin.edit-language')}}</h3>
      </div>
      <div class="card-body table-responsive">
        <div v-if="action !== 'edit' && avalaiblelocales" class="orm-group">
          <multiselect
            v-model="avalaiblelocale"
            selected-label
            select-label
            deselect-label
            :options="avalaiblelocales"
            :placeholder="trans('admin.language')"
            label="name"
            track-by="locale"
            :multiple="false"
          >
            <span slot="noResult">{{trans('admin.no-item-found')}}</span>
          </multiselect>
        </div>

        <div v-if="action == 'edit'" class="form-group">
          <label class="col-form-label">{{ trans('text.name')}}</label>
          <input
            type="text"
            name="name"
            class="form-control"
            v-model="language.name"
            @keydown="errors.clear('name')"
          />
          <small class="form-text text-danger" v-if="errors.has('name')">{{errors.get('name')}}</small>
        </div>
        <div v-if="action == 'edit'" class="form-group">
          <label class="col-form-label">{{ trans('admin.locale')}}</label>
          <input
            type="text"
            name="locale"
            class="form-control"
            v-model="language.locale"
            @keydown="errors.clear('locale')"
          />
          <small class="form-text text-danger" v-if="errors.has('locale')">{{errors.get('locale')}}</small>
        </div>
        <div v-if="action == 'edit'" class="form-group">
          <label class="col-form-label">{{ trans('admin.script')}}</label>
          <input
            type="text"
            name="script"
            class="form-control"
            v-model="language.script"
            @keydown="errors.clear('script')"
          />
          <small class="form-text text-danger" v-if="errors.has('script')">{{errors.get('script')}}</small>
        </div>
        <div v-if="action == 'edit'" class="form-group">
          <label class="col-form-label">{{ trans('admin.native')}}</label>
          <input
            type="text"
            name="native"
            class="form-control"
            v-model="language.native"
            @keydown="errors.clear('native')"
          />
          <small class="form-text text-danger" v-if="errors.has('native')">{{errors.get('native')}}</small>
        </div>
        <div v-if="action == 'edit'" class="form-group">
          <label class="col-form-label">{{ trans('admin.regional')}}</label>
          <input
            type="text"
            name="regional"
            class="form-control"
            v-model="language.regional"
            @keydown="errors.clear('regional')"
          />
          <small
            class="form-text text-danger"
            v-if="errors.has('regional')"
          >{{errors.get('regional')}}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans('admin.display')}}</label>
          <input
            type="text"
            name="display"
            class="form-control"
            v-model="language.display"
            @keydown="errors.clear('display')"
          />
          <small
            class="form-text text-danger"
            v-if="errors.has('display')"
          >{{errors.get('display')}}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans('text.name_english')}}</label>
          <input
            type="text"
            name="name_english"
            class="form-control"
            v-model="language.name_english"
            @keydown="errors.clear('name_english')"
          />
          <small
            class="form-text text-danger"
            v-if="errors.has('name_english')"
          >{{errors.get('name_english')}}</small>
        </div>
        <div class="form-group w-100">
          <label>{{ trans('admin.direction')}}</label>
          <div class="row">
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="rtl"
                  id="customRadiodirection1"
                  class="custom-control-input"
                  v-model="language.direction"
                />
                <label
                  class="custom-control-label"
                  for="customRadiodirection1"
                >{{ trans('admin.rtl')}}</label>
              </div>
            </div>
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="ltr"
                  id="customRadiodirection2"
                  class="custom-control-input"
                  v-model="language.direction"
                />
                <label
                  class="custom-control-label"
                  for="customRadiodirection2"
                >{{ trans('admin.ltr')}}</label>
              </div>
            </div>
          </div>
          <small
            class="form-text text-danger"
            v-if="errors.has('direction')"
          >{{errors.get('direction')}}</small>
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
                  v-model="language.status"
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
                  v-model="language.status"
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
  props: ["action", "avalaiblelocales", "language"],
  data() {
    return {
      errors: new Errors(),
      avalaiblelocale: {
        locale: "",
        name: "",
        script: "",
        native: "",
        regional: ""
      }
    };
  },
  methods: {
    imageUploaded(image) {
      this.language.image = image;
    },
    storelanguage() {
      var self = this;
      var data = this.language;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "language/" + this.language.id, data)
          .then(response => {
            self.$router.push(this.prefix + "languages");
            self.$notify({
              group: "admin",
              text: self.trans("admin.language-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.language-not-edited"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      } else {
        this.language.locale = this.avalaiblelocale.locale;
        this.language.name = this.avalaiblelocale.name;
        this.language.script = this.avalaiblelocale.script;
        this.language.native = this.avalaiblelocale.native;
        this.language.regional = this.avalaiblelocale.regional;
        axios
          .post(this.ajax_prefix + "language", data)
          .then(response => {
            this.language = {
              name: "",
              script: "",
              native: "",
              regional: "",
              locale: ""
            };
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.language-added"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.language-not-added"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      }
    }
  }
};
</script>
