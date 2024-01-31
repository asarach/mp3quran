<template>
<div class="card">
  <form role="form" @submit.prevent="storeMessage()">
    <div class="card-head">
      <h3 v-if="action == 'create'" class="card-title">
        {{ trans("admin.create-message") }}
      </h3>
      <h3 v-else class="card-title">{{ trans("admin.edit-message") }}</h3>
    </div>
    <div class="card-body table-responsive">
      <div class="row">
        <div class="col-lg-24">
          <div class="form-group">
            <label class="col-form-label">{{ trans("text.subject") }}</label>
            <input
              type="text"
              name="subject"
              class="form-control"
              v-model="message.subject"
              @keydown="errors.clear('subject')"
            />
            <small class="form-text text-danger" v-if="errors.has('subject')">
              {{ errors.get("subject") }}
            </small>
          </div>
          <div class="form-group">
            <label class="col-form-label">
              {{ trans("admin.templates") }}
            </label>
            <multiselect
              v-model="message.template"
              selected-label
              select-label
              deselect-label
              :options="templates"
              :placeholder="trans('admin.templates')"
              label="name"
              track-by="id"
              :multiple="false"
            >
              <span slot="noResult">{{ trans("text.no-item-found") }}</span>
            </multiselect>
            <small
              class="form-text text-danger"
              v-if="errors.has('templates')"
            >
              {{ errors.get("templates") }}
            </small>
          </div>
          <div v-if="message.template && message.template.columns == '1'" class="form-group">
            <label class="col-form-label">
              {{ trans("admin.body") }}
            </label>
            <textarea
              name="leftcol"
              class="form-control"
              v-model="message.leftcol"
              rows="3"
              @change="errors.clear('leftcol')"
            ></textarea>
            <small class="form-text text-danger" v-if="errors.has('leftcol')">
              {{ errors.get("leftcol") }}
            </small>
          </div>
          <div v-if="message.template && message.template.columns == '2'" class="row">
            <div class="col">
              <div class="form-group">
                <label class="col-form-label">
                  {{ trans("admin.leftcol") }}
                </label>
                <textarea
                  name="leftcol"
                  class="form-control"
                  v-model="message.leftcol"
                  rows="3"
                  @change="errors.clear('leftcol')"
                ></textarea>
                <small
                  class="form-text text-danger"
                  v-if="errors.has('leftcol')"
                >
                  {{ errors.get("leftcol") }}
                </small>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label class="col-form-label">
                  {{ trans("admin.rightcol") }}
                </label>
                <textarea
                  name="rightcol"
                  class="form-control"
                  v-model="message.rightcol"
                  rows="3"
                  @change="errors.clear('rightcol')"
                ></textarea>
                <small
                  class="form-text text-danger"
                  v-if="errors.has('rightcol')"
                >
                  {{ errors.get("rightcol") }}
                </small>
              </div>
            </div>
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
props: ["action", "message", "templates"],
data() {
  return {
    errors: new Errors(),
  };
},
methods: {
  storeMessage() {
    var self = this;
    var data = this.message;
    if (this.action == "edit") {
      axios
        .put(this.ajax_prefix + "nl_message/" + this.message.id, data)
        .then((response) => {
          self.$router.push(this.prefix + "nl_messages");
          self.$notify({
              group: "admin",
              text: self.trans("admin.message-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
        })
        .catch((error) => {
          self.errors.record(error);

          self.$notify({
              group: "admin",
              text: self.trans("admin.message-not-edited"),
              type: "warning",
              title: self.trans("admin.warning")
            });
        });
    } else {
      axios
        .post(this.ajax_prefix + "nl_message", data)
        .then((response) => {
          self.$router.push(this.prefix + "nl_messages");

          self.$notify({
              group: "admin",
              text: self.trans("admin.message-added"),
              type: "success",
              title: self.trans("admin.success")
            });
        })
        .catch((error) => {
          self.errors.record(error);

          self.$notify({
              group: "admin",
              text: self.trans("admin.message-not-added"),
              type: "warning",
              title: self.trans("admin.warning")
            });
        });
    }
  },
},
};
</script>
