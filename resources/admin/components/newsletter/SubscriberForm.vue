<template>
<div class="card">
  <form role="form" @submit.prevent="storeSubscriber()">
    <div class="card-head">
      <h3 v-if="action == 'create'" class="card-title">
        {{ trans("admin.create-subscriber") }}
      </h3>
      <h3 v-else class="card-title">{{ trans("admin.edit-subscriber") }}</h3>
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
              v-model="subscriber.name"
              @keydown="errors.clear('name')"
            />
            <small class="form-text text-danger" v-if="errors.has('name')">
              {{ errors.get("name") }}
            </small>
          </div>
          
          <div class="form-group">
            <label class="col-form-label">{{ trans("admin.email") }}</label>
            <input
              type="email"
              name="email"
              class="form-control"
              v-model="subscriber.email"
              @keydown="errors.clear('email')"
            />
            <small class="form-text text-danger" v-if="errors.has('email')">
              {{ errors.get("email") }}
            </small>
          </div>
          <div class="form-group">
            <label class="col-form-label">
              {{ trans("admin.newsletters") }}
            </label>
            <multiselect
              v-model="subscriber.newsletters"
              selected-label
              select-label
              deselect-label
              :options="newsletters"
              :placeholder="trans('admin.newsletters')"
              label="name"
              track-by="id"
              :multiple="true"
            >
              <span slot="noResult">{{ trans("text.no-item-found") }}</span>
            </multiselect>
            <small
              class="form-text text-danger"
              v-if="errors.has('newsletters')"
            >
              {{ errors.get("newsletters") }}
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
props: ["action", "subscriber", "newsletters"],
data() {
  return {
    errors: new Errors(),
  };
},
methods: {
  storeSubscriber() {
    var self = this;
    var data = this.subscriber;
    if (this.action == "edit") {
      axios
        .put(this.ajax_prefix + "nl_subscriber/" + this.subscriber.id, data)
        .then((response) => {
          self.$router.push(this.prefix + "nl_subscribers");

          self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
        })
        .catch((error) => {
          self.errors.record(error);

          self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-not-edited"),
              type: "warning",
              title: self.trans("admin.warning")
            });
        });
    } else {
      axios
        .post(this.ajax_prefix + "nl_subscriber", data)
        .then((response) => {
          self.$router.push(this.prefix + "nl_subscribers");

          self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-added"),
              type: "success",
              title: self.trans("admin.success")
            });
        })
        .catch((error) => {
          self.errors.record(error);

          self.$notify({
              group: "admin",
              text: self.trans("admin.subscriber-not-added"),
              type: "success",
              title: self.trans("admin.success")
            });
        });
    }
  },
},
};
</script>
