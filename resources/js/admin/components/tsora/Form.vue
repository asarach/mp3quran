<template>
  <div class="card">
    <form role="form" @submit.prevent="storeCounty()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">
          {{ trans("admin.create-tsora") }}
        </h3>
        <h3 v-else class="card-title">{{ trans("admin.edit-tsora") }}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.sora") }}</label>
          <multiselect
            v-model="tsora.sora"
            selected-label
            select-label
            deselect-label
            :options="soar"
            :placeholder="trans('admin.sora')"
            label="name"
            track-by="id"
            :multiple="false"
          >
            <span slot="noResult">{{ trans("admin.no-item-found") }}</span>
          </multiselect>
          <small class="form-text text-danger" v-if="errors.has('sora')">{{
            errors.get("sora")
          }}</small>
        </div>
        
        <div  v-if="action == 'create'" class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            v-model="tsora.full_sura"
            id="fullSuraCheck"
          />
          <label class="custom-control-label" for="fullSuraCheck"
            >{{ trans("admin.full-tsora") }}</label
          >
        </div>
        
        <div v-if="action == 'create'" class="row">
          <div class="col">
            <div class="form-group">
              <label class="col-form-label">{{
                trans("text.start_aya")
              }}</label>
              <input
                type="text"
                name="start_aya"
                class="form-control"
                v-model="tsora.start_aya"
                @keydown="errors.clear('start_aya')"
              />
              <small
                class="form-text text-danger"
                v-if="errors.has('start_aya')"
                >{{ errors.get("start_aya") }}</small
              >
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label class="col-form-label">{{ trans("text.end_aya") }}</label>
              <input
                type="text"
                name="end_aya"
                class="form-control"
                v-model="tsora.end_aya"
                @keydown="errors.clear('end_aya')"
              />
              <small
                class="form-text text-danger"
                v-if="errors.has('end_aya')"
                >{{ errors.get("end_aya") }}</small
              >
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("text.name") }}</label>
          <input
            type="text"
            name="name"
            class="form-control"
            v-model="tsora.name"
            @keydown="errors.clear('name')"
          />
          <small class="form-text text-danger" v-if="errors.has('name')">{{
            errors.get("name")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("text.url") }}</label>
          <input
            type="text"
            name="url"
            class="form-control"
            v-model="tsora.url"
            @keydown="errors.clear('url')"
          />
          <small class="form-text text-danger" v-if="errors.has('url')">{{
            errors.get("url")
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
                  v-model="tsora.status"
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
                  v-model="tsora.status"
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
  props: ["action", "soar","tsora"],
  data() {
    return {
      errors: new Errors(),
    };
  },
  mounted() {},
  methods: {
    storeCounty() {
      var self = this;
      var data = this.tsora;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "tsora/" + this.tsora.id, data)
          .then((response) => {
            self.$router.push(
              this.prefix + "tsoras/" + response.data.tsora.tafsir_id
            );
            self.$notify({
              group: "admin",
              text: self.trans("admin.tsora-edited"),
              type: "success",
              title: self.trans("admin.success"),
            });
          })
          .catch((error) => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.tsora-not-edited"),
              type: "warning",
              title: self.trans("admin.warning"),
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "tsora", data)
          .then((response) => {
            // self.$router.push(
            //   this.prefix + "tsoras/" + response.data.tsora.tafsir_id
            // );
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.tsora-added"),
              type: "success",
              title: self.trans("admin.success"),
            });
          })
          .catch((error) => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.tsora-not-added"),
              type: "warning",
              title: self.trans("admin.warning"),
            });
          });
      }
    },
  },
};
</script>
