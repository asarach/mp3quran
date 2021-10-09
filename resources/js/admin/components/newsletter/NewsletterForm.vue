<template>
<div class="card">
  <form role="form" @submit.prevent="storeNewsletter()">
    <div class="card-head">
      <h3 v-if="action == 'create'" class="card-title">
        {{ trans("admin.create-newsletter") }}
      </h3>
      <h3 v-else class="card-title">{{ trans("admin.edit-newsletter") }}</h3>
    </div>
    <div class="card-body table-responsive">
      <div class="row">
        <div class="col-lg-24">
          <div class="form-group">
            <label class="col-form-label">{{ trans("text.name") }}</label>
            <input
              type="text"
              name="name"
              class="form-control"
              v-model="newsletter.name"
              @keydown="errors.clear('name')"
            />
            <small class="form-text text-danger" v-if="errors.has('name')">
              {{ errors.get("name") }}
            </small>
          </div>
          <div class="form-group">
            <label class="col-form-label">{{
              trans("admin.description")
            }}</label>
            <textarea
              name="description"
              class="form-control"
              @keydown="errors.clear('description')"
              v-model="newsletter.description"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <small
              class="form-text text-danger"
              v-if="errors.has('description')"
            >
              {{ errors.get("description") }}
            </small>
          </div>
          <div class="form-group">
            <label>{{ trans("admin.status") }}</label>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                value="1"
                id="customRadio1"
                class="custom-control-input"
                v-model="newsletter.status"
              />
              <label class="custom-control-label" for="customRadio1">
                {{ trans("admin.active") }}
              </label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                value="0"
                id="customRadio2"
                class="custom-control-input"
                v-model="newsletter.status"
              />
              <label class="custom-control-label" for="customRadio2">
                {{ trans("admin.deactive") }}
              </label>
            </div>
            <small class="form-text text-danger" v-if="errors.has('status')">
              {{ errors.get("status") }}
            </small>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer clearfix">
      <div class="float-left">
        <button
          v-if="action == 'create'"
          type="submit"
          class="btn btn-info btn-sm"
        >
          {{ trans("admin.create") }}
        </button>
        <button v-else type="submit" class="btn btn-info btn-sm">
          {{ trans("text.save") }}
        </button>
      </div>
    </div>
  </form>
</div>
</template>
<script>
const Errors = require("../../errors.js");
export default {
props: ["action", "newsletter"],
data() {
  return {
    errors: new Errors(),
  };
},
methods: {
  storeNewsletter() {
    var self = this;
    var data = this.newsletter;
    if (this.action == "edit") {
      axios
        .put(this.ajax_prefix + "newsletter/" + this.newsletter.id, data)
        .then((response) => {
          self.$router.push(this.prefix + "newsletters");

          self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
        })
        .catch((error) => {
          self.errors.record(error);

          self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-not-edited"),
              type: "warning",
              title: self.trans("admin.warning")
            });
        });
    } else {
      axios
        .post(this.ajax_prefix + "newsletter", data)
        .then((response) => {
          self.$router.push(this.prefix + "newsletters");

          self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-added"),
              type: "success",
              title: self.trans("admin.success")
            });
        })
        .catch((error) => {
          self.errors.record(error);

          self.$notify({
              group: "admin",
              text: self.trans("admin.newsletter-not-added"),
              type: "warning",
              title: self.trans("admin.warning")
            });
        });
    }
  },
},
};
</script>
