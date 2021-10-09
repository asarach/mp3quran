<template>
<div class="card">
  <form role="form" @submit.prevent="storeTemplate()">
    <div class="card-head">
      <h3 v-if="action == 'create'" class="card-title">
        {{ trans("admin.create-template") }}
      </h3>
      <h3 v-else class="card-title">{{ trans("admin.edit-template") }}</h3>
    </div>
    <div class="card-body table-responsive">
      <div class="row">
        <div class="col-lg-17">
          <div class="form-group">
            <label class="col-form-label">{{ trans("text.name") }}</label>
            <input
              type="text"
              name="name"
              class="form-control"
              v-model="template.name"
              @keydown="errors.clear('name')"
            />
            <small class="form-text text-danger" v-if="errors.has('name')">
              {{ errors.get("name") }}
            </small>
          </div>
          <div class="form-group">
            <label class="col-form-label">{{ trans("admin.columns") }}</label>
            <select
              name="columns"
              v-model="template.columns"
              class="form-control"
            >
              <option value="1">{{ trans("admin.nl-template-1-cols") }}</option> 
              <option value="2">{{ trans("admin.nl-template-2-cols") }}</option>
            </select>
            <small class="form-text text-danger" v-if="errors.has('columns')">
              {{ errors.get("columns") }}
            </small>
          </div>
          <div class="form-group">
            <label class="col-form-label">
              {{ trans("admin.body") }}
            </label>
            {{ trans("admin.nl-template-body-info") }}
            <textarea
              name="body"
              class="form-control"
              v-model="template.body"
              rows="3"
              @change="errors.clear('body')"
            ></textarea>
            <small class="form-text text-danger" v-if="errors.has('body')">
              {{ errors.get("body") }}
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
props: ["action", "template"],
data() {
  return {
    errors: new Errors(),
  };
},
methods: {
  storeTemplate() {
    var self = this;
    var data = this.template;
    if (this.action == "edit") {
      axios
        .put(this.ajax_prefix + "nl_template/" + this.template.id, data)
        .then((response) => {
          self.$router.push(this.prefix + "nl_templates");

          self.$notify({
              group: "admin",
              text: self.trans("admin.template-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
        })
        .catch((error) => {
          self.errors.record(error);

          self.$notify({
              group: "admin",
              text: self.trans("admin.template-not-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
        });
    } else {
      axios
        .post(this.ajax_prefix + "nl_template", data)
        .then((response) => {
          self.$router.push(this.prefix + "nl_templates");

          self.$notify({
              group: "admin",
              text: self.trans("admin.template-added"),
              type: "success",
              title: self.trans("admin.success")
            });
        })
        .catch((error) => {
          self.errors.record(error);

          self.$notify({
              group: "admin",
              text: self.trans("admin.template-not-added"),
              type: "success",
              title: self.trans("admin.success")
            });
        });
    }
  },
},
};
</script>
