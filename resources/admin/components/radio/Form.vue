<template>
  <div class="card">
    <form role="form" @submit.prevent="storeRadio()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">
          {{ trans("admin.create-radio") }}
        </h3>
        <h3 v-else class="card-title">{{ trans("admin.edit-radio") }}</h3>
      </div>
      <div class="card-body table-responsive">

        <!-- name -->
        <div class="form-group">
          <label class="col-form-label">{{ trans("text.name") }}</label>
          <input
            type="text"
            name="name"
            class="form-control"
            v-model="radio.name"
            @keydown="errors.clear('name')"
          />
          <small class="form-text text-danger" v-if="errors.has('name')">{{
            errors.get("name")
          }}</small>
        </div>

        <!-- url -->
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.url") }}</label>
          <input
            type="text"
            name="url"
            class="form-control"
            v-model="radio.url"
            @keydown="errors.clear('url')"
          />
          <small class="form-text text-danger" v-if="errors.has('url')">{{
            errors.get("url")
          }}</small>
        </div>

         <!-- reciter -->
        <div class="form-group">
          <label class="col-form-label">{{ trans("text.reciter") }}</label>
          <multiselect
            v-model="radio.reciter"
            selected-label
            select-label
            deselect-label
            :options="reciters"
            :placeholder="trans('admin.reciter')"
            label="name"
            track-by="id"
            :multiple="false"
          >
            <span slot="noResult">{{ trans("admin.no-item-found") }}</span>
          </multiselect>
          <small class="form-text text-danger" v-if="errors.has('reciter')">{{
            errors.get("reciter")
          }}</small>
        </div>

        <!-- rewaya -->
        <div class="form-group">
          <label class="col-form-label">{{ trans("text.rewaya") }}</label>
          <multiselect
            v-model="radio.rewaya"
            selected-label
            select-label
            deselect-label
            :options="rewayat"
            :placeholder="trans('admin.rewaya')"
            label="name"
            track-by="id"
            :multiple="false"
          >
            <span slot="noResult">{{ trans("admin.no-item-found") }}</span>
          </multiselect>
          <small class="form-text text-danger" v-if="errors.has('rewaya')">{{
            errors.get("rewaya")
          }}</small>
        </div>

        <!-- mushaf -->
        <div class="form-group">
          <label class="col-form-label">{{ trans("text.mushaf") }}</label>
          <multiselect
            v-model="radio.mushaf"
            selected-label
            select-label
            deselect-label
            :options="mushafs"
            :placeholder="trans('admin.mushaf')"
            label="name"
            track-by="id"
            :multiple="false"
          >
            <span slot="noResult">{{ trans("admin.no-item-found") }}</span>
          </multiselect>
          <small class="form-text text-danger" v-if="errors.has('mushaf')">{{
            errors.get("mushaf")
          }}</small>
        </div>

        <!-- radio_cat -->
        <div class="form-group">
          <label class="col-form-label">{{ trans("text.radio_cat") }}</label>
          <multiselect
            v-model="radio.radio_cat"
            selected-label
            select-label
            deselect-label
            :options="radio_cats"
            :placeholder="trans('admin.radio_cat')"
            label="name"
            track-by="id"
            :multiple="false"
          >
            <span slot="noResult">{{ trans("admin.no-item-found") }}</span>
          </multiselect>
          <small class="form-text text-danger" v-if="errors.has('radio_cat')">{{
            errors.get("radio_cat")
          }}</small>
        </div>

       
        <!-- list -->
        <div class="form-group">
          <label>{{ trans("admin.list") }}</label>
          <div class="row">
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="1"
                  id="customRadiolist1"
                  class="custom-control-input"
                  v-model="radio.list"
                />
                <label class="custom-control-label" for="customRadiolist1">{{
                  trans("admin.with-list")
                }}</label>
              </div>
            </div>
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="0"
                  id="customRadiolist2"
                  class="custom-control-input"
                  v-model="radio.list"
                />
                <label class="custom-control-label" for="customRadiolist2">{{
                  trans("admin.without-list")
                }}</label>
              </div>
            </div>
          </div>
          <small class="form-text text-danger" v-if="errors.has('list')">{{
            errors.get("list")
          }}</small>
        </div>
      </div>
      <div class="card-footer clearfix">
        <div class="float-right">
          <button
            v-if="action == 'create'"
            type="submit"
            class="btn btn-info btn-sm"
          >
            {{ trans("admin.create") }}
          </button>
          <button v-else type="submit" class="btn btn-info btn-sm">
            {{ trans("admin.save") }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
const Errors = require("../../errors.js");

export default {
  props: ["action", "reciters", "rewayat", "radio", "radio_cats", "mushafs"],
  data() {
    return {
      errors: new Errors(),
    };
  },
  mounted() {},
  methods: {
    imageUploaded(image) {
      this.radio.image = image;
    },
    storeRadio() {
      var self = this;
      var data = this.radio;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "radio/" + this.radio.id, data)
          .then((response) => {
            self.$router.push(this.prefix + "radios");
            self.$notify({
              group: "admin",
              text: self.trans("admin.radio-edited"),
              type: "success",
              title: self.trans("admin.success"),
            });
          })
          .catch((error) => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.radio-not-edited"),
              type: "warning",
              title: self.trans("admin.warning"),
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "radio", data)
          .then((response) => {
            self.$router.push(this.prefix + "radios");
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.radio-added"),
              type: "success",
              title: self.trans("admin.success"),
            });
          })
          .catch((error) => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.radio-not-added"),
              type: "warning",
              title: self.trans("admin.warning"),
            });
          });
      }
    },
  },
};
</script>
