<template>
  <div class="card">
    <form role="form" @submit.prevent="storeUser()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">{{ trans('admin.create-page')}}</h3>
        <h3 v-else class="card-title">{{ trans('admin.edit-page')}}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="row">
          <div class="col-lg-17">
            <div class="form-group">
              <label class="col-form-label">{{ trans('text.name')}}</label>
              <input
                type="text"
                name="name"
                class="form-control"
                v-model="page.name"
                @keydown="errors.clear('name')"
              />
              <small class="form-text text-danger" v-if="errors.has('name')">{{errors.get('name')}}</small>
            </div>
            <div v-if="action == 'edit'" class="form-group">
              <label class="col-form-label">{{ trans('admin.slug')}}</label>
              <input
                type="text"
                name="slug"
                class="form-control"
                v-model="page.slug"
                @keydown="errors.clear('slug')"
              />
              <small class="form-text text-danger" v-if="errors.has('slug')">{{errors.get('slug')}}</small>
            </div>
            <div class="form-group">
              <label class="col-form-label">{{ trans('admin.title')}}</label>
              <input
                type="text"
                name="title"
                class="form-control"
                v-model="page.title"
                @keydown="errors.clear('title')"
              />
              <small
                class="form-text text-danger"
                v-if="errors.has('title')"
              >{{errors.get('title')}}</small>
            </div>
            <div class="form-group">
              <label class="col-form-label">{{ trans('admin.content')}}</label>
              <textarea
                id="descr"
                name="content"
                class="form-control"
                v-model="page.content"
                rows="10"
                @change="errors.clear('content')"
              ></textarea>
              <small
                class="form-text text-danger"
                v-if="errors.has('content')"
              >{{errors.get('content')}}</small>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="form-group">
              <label class="col-form-label">{{ trans('admin.description')}}</label>
              <textarea
                name="description"
                class="form-control"
                v-model="page.description"
                rows="3"
                @change="errors.clear('description')"
              ></textarea>
              <small
                class="form-text text-danger"
                v-if="errors.has('description')"
              >{{errors.get('description')}}</small>
            </div>
            <div class="form-group">
              <label>{{ trans('admin.status')}}</label>
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="1"
                  id="customRadio1"
                  class="custom-control-input"
                  v-model="page.status"
                />
                <label class="custom-control-label" for="customRadio1">{{ trans('admin.active')}}</label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="0"
                  id="customRadio2"
                  class="custom-control-input"
                  v-model="page.status"
                />
                <label class="custom-control-label" for="customRadio2">{{ trans('admin.deactive')}}</label>
              </div>
              <small
                class="form-text text-danger"
                v-if="errors.has('status')"
              >{{errors.get('status')}}</small>
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
  props: ["action", "page"],
  data() {
    return {
      errors: new Errors()
    };
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    storeUser() {
      var self = this;
      var data = this.page;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "page/" + this.page.id, data)
          .then(response => {
            self.$router.push(this.prefix + "pages");
            self.$notify({
              group: "admin",
              text: self.trans("admin.page-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.page-not-edited"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "page", data)
          .then(response => {
            self.$router.push(this.prefix + "pages");
            self.$notify({
              group: "admin",
              text: self.trans("admin.page-added"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.page-not-added"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      }
    },
    initEditor(soar, level) {
      var self = this;
      $(document).ready(function() {
        var options = {
          height: "50vh",
          language: "ar",
          filebrowserImageUploadUrl:
            self.ajax_prefix +
            "images/ckupload?_token=" +
            App.csrfToken +
            "&type=image",
          toolbar: [
            {
              name: "clipboard",
              items: ["Undo", "Redo"]
            },
            {
              name: "styles",
              items: ["Cut", "Copy", "Paste", "PasteText", "PasteFromWord"]
            },
            {
              name: "styles",
              items: ["Styles", "Format"]
            },
            {
              name: "basicstyles",
              items: ["Bold", "Italic", "Strike", "-", "RemoveFormat"]
            },
            {
              name: "paragraph",
              items: [
                "NumberedList",
                "BulletedList",
                "-",
                "Outdent",
                "Indent",
                "-",
                "Blockquote"
              ]
            },
            {
              name: "links",
              items: ["Link", "Unlink"]
            },

            {
              name: "tools",
              items: ["Maximize"]
            },
            {
              name: "insert",
              items: ["Image", "Youtube", "Table"]
            },
            {
              name: "editing",
              items: ["Scayt", "Source"]
            }
          ]
        };

        CKEDITOR.replace("descr", options);
        CKEDITOR.instances.descr.on("change", function() {
          self.page.content = CKEDITOR.instances.descr.getData();
        });
        CKEDITOR.instances.descr.on("instanceReady", () => {
          CKEDITOR.instances.descr.setData(self.page.html_content);
        });
      });
    }
  }
};
</script>
