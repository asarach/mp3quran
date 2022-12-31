<template>
  <div class="card">
    <form role="form" @submit.prevent="storeCounty()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">
          {{ trans("admin.create-ad") }}
        </h3>
        <h3 v-else class="card-title">{{ trans("admin.edit-ad") }}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="form-group">
          <label class="col-form-label">{{ trans("text.name") }}</label>
          <input
            type="text"
            name="name"
            class="form-control"
            v-model="ad.name"
            @keydown="errors.clear('name')"
          />
          <small class="form-text text-danger" v-if="errors.has('name')">{{
            errors.get("name")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.url") }}</label>
          <input
            type="text"
            name="url"
            class="form-control"
            v-model="ad.url"
            @keydown="errors.clear('url')"
          />
          <small class="form-text text-danger" v-if="errors.has('url')">{{
            errors.get("url")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.text") }}</label>
          <textarea
            name="text"
            v-model="ad.text"
            class="form-control"
            rows="3"
            @keydown="errors.clear('text')"
          ></textarea>
          <small class="form-text text-danger" v-if="errors.has('text')">{{
            errors.get("text")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.locale") }}</label>
          <select
            name="locale"
            v-model="ad.locale"
            class="form-control"
            @change="errors.clear('locale')"
          >
            <option
              v-for="language2 in languages"
              :value="language2.locale"
              :key="language2.id"
            >
              {{ language2.name }}
            </option>
          </select>
          <small class="form-text text-danger" v-if="errors.has('locale')">{{
            errors.get("locale")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.order_num") }}</label>
          <input
            type="number"
            name="order_num"
            class="form-control"
            v-model="ad.order_num"
            @keydown="errors.clear('order_num')"
          />
          <small class="form-text text-danger" v-if="errors.has('order_num')">{{
            errors.get("order_num")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.placement") }}</label>
          <select
            v-model="ad.place"
            @change="errors.clear('place')"
            class="custom-select custom-select-lg mb-3"
          >
            <option v-for="place in places" :key="place.id" :value="place.id">
              {{ trans("text.placement-" + place.name) }}
            </option>
          </select>
          <small class="form-text text-danger" v-if="errors.has('place')">{{
            errors.get("place")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.start_date") }}</label>
          <datetime
            v-model="ad.start_date"
            type="date"
            value-zone="local"
            zone="local"
          ></datetime>
          <small
            class="form-text text-danger"
            v-if="errors.has('start_date')"
            >{{ errors.get("start_date") }}</small
          >
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.end_date") }}</label>
          <datetime
            v-model="ad.end_date"
            type="date"
            value-zone="local"
            zone="local"
          ></datetime>
          <small class="form-text text-danger" v-if="errors.has('end_date')">{{
            errors.get("end_date")
          }}</small>
        </div>

        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.image") }}</label>
          <upload-image
            @uploaded="imageUploaded"
            :image="ad.old_image"
            type="mpa"
            nbr="322"
          ></upload-image>
          <small class="form-text text-danger" v-if="errors.has('image')">{{
            errors.get("image")
          }}</small>
        </div>

        <div class="form-group">
          <label>{{ trans("admin.status") }}</label>
          <div class="row">
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="1"
                  id="customRadiostatus1"
                  class="custom-control-input"
                  v-model="ad.status"
                />
                <label class="custom-control-label" for="customRadiostatus1">{{
                  trans("admin.active")
                }}</label>
              </div>
            </div>
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="0"
                  id="customRadiostatus2"
                  class="custom-control-input"
                  v-model="ad.status"
                />
                <label class="custom-control-label" for="customRadiostatus2">{{
                  trans("admin.deactive")
                }}</label>
              </div>
            </div>
          </div>
          <small class="form-text text-danger" v-if="errors.has('status')">{{
            errors.get("status")
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
  props: ["action", "ad", "places", "languages"],
  data() {
    return {
      errors: new Errors(),
    };
  },
  mounted() {},
  methods: {
    imageUploaded(image) {
      this.ad.image = image;
    },
    storeCounty() {
      var self = this;
      var data = this.ad;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "ad/" + this.ad.id, data)
          .then((response) => {
            self.$router.push(this.prefix + "ads");
            self.$notify({
              group: "admin",
              text: self.trans("admin.ad-edited"),
              type: "success",
              title: self.trans("admin.success"),
            });
          })
          .catch((error) => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.ad-not-edited"),
              type: "warning",
              title: self.trans("admin.warning"),
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "ad", data)
          .then((response) => {
            self.$router.push(this.prefix + "ads");
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.ad-added"),
              type: "success",
              title: self.trans("admin.success"),
            });
          })
          .catch((error) => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.ad-not-added"),
              type: "warning",
              title: self.trans("admin.warning"),
            });
          });
      }
    },
  },
};
</script>
