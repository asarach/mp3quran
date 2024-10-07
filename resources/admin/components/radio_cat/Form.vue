<template>
  <div class="card">
    <form role="form" @submit.prevent="storeRadioCat()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">
          {{ trans("admin.create-radio_cat") }}
        </h3>
        <h3 v-else class="card-title">{{ trans("admin.edit-radio_cat") }}</h3>
      </div>
      <div class="card-body table-responsive">

        <!-- name -->
        <div class="form-group">
          <label class="col-form-label">{{ trans("text.name") }}</label>
          <input
            type="text"
            name="name"
            class="form-control"
            v-model="radio_cat.name"
            @keydown="errors.clear('name')"
          />
          <small class="form-text text-danger" v-if="errors.has('name')">{{
            errors.get("name")
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
  props: ["action", "radio_cat",],
  data() {
    return {
      errors: new Errors(),
    };
  },
  mounted() {},
  methods: {
    storeRadioCat() {
      var self = this;
      var data = this.radio_cat;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "radio_cat/" + this.radio_cat.id, data)
          .then((response) => {
            self.$router.push(this.prefix + "radio_cats");
            self.$notify({
              group: "admin",
              text: self.trans("admin.radio_cat-edited"),
              type: "success",
              title: self.trans("admin.success"),
            });
          })
          .catch((error) => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.radio_cat-not-edited"),
              type: "warning",
              title: self.trans("admin.warning"),
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "radio_cat", data)
          .then((response) => {
            self.$router.push(this.prefix + "radio_cats");
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.radio_cat-added"),
              type: "success",
              title: self.trans("admin.success"),
            });
          })
          .catch((error) => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.radio_cat-not-added"),
              type: "warning",
              title: self.trans("admin.warning"),
            });
          });
      }
    },
  },
};
</script>
