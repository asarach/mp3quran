<template>
  <div class="card">
    <form role="form" @submit.prevent="storeTadabor()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">
          {{ trans("admin.create-tadabor") }}
        </h3>
        <h3 v-else class="card-title">{{ trans("admin.edit-tadabor") }}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="form-group">
          <label class="col-form-label">{{ trans("text.title") }}</label>
          <input
            type="text"
            name="title"
            class="form-control"
            v-model="tadabor.title"
            @keydown="errors.clear('title')"
          />
          <small class="form-text text-danger" v-if="errors.has('title')">{{
            errors.get("title")
          }}</small>
        </div>

        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.audio_url") }}</label>
          <input
            type="text"
            name="audio_url"
            class="form-control"
            v-model="tadabor.audio_url"
            @keydown="errors.clear('audio_url')"
          />
          <small class="form-text text-danger" v-if="errors.has('audio_url')">{{
            errors.get("audio_url")
          }}</small>
        </div>

        
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.image_url") }}</label>
          <input
            type="text"
            name="image_url"
            class="form-control"
            v-model="tadabor.image_url"
            @keydown="errors.clear('image_url')"
          />
          <small class="form-text text-danger" v-if="errors.has('image_url')">{{
            errors.get("image_url")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.video_url") }}</label>
          <input
            type="text"
            name="video_url"
            class="form-control"
            v-model="tadabor.video_url"
            @keydown="errors.clear('video_url')"
          />
          <small class="form-text text-danger" v-if="errors.has('video_url')">{{
            errors.get("video_url")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.text") }}</label>
          <textarea
            id="descr"
            name="text"
            class="form-control"
            v-model="tadabor.text"
            rows="10"
            @change="errors.clear('text')"
          ></textarea>
          <small class="form-text text-danger" v-if="errors.has('text')">{{
            errors.get("text")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.sora") }}</label>
          <multiselect
            v-model="tadabor.sora"
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
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.reciter") }}</label>
          <multiselect
            v-model="tadabor.reciter"
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
                  v-model="tadabor.status"
                />
                <label
                  class="custom-control-label"
                  for="customRadiostatus1"
                  >{{ trans("admin.active") }}</label
                >
              </div>
            </div>
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="0"
                  id="customRadiostatus2"
                  class="custom-control-input"
                  v-model="tadabor.status"
                />
                <label
                  class="custom-control-label"
                  for="customRadiostatus2"
                  >{{ trans("admin.deactive") }}</label
                >
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
  props: ["action", "soar",  "reciters", "tadabor"],
  data() {
    return {
      errors: new Errors(),
    };
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    imageUploaded(image) {
      this.tadabor.image = image;
    },
    storeTadabor() {
      var self = this;
      var data = this.tadabor;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "tadabor/" + this.tadabor.id, data)
          .then((response) => {
            self.$router.push(this.prefix + "tadabors");
            self.$notify({
              group: "admin",
              text: self.trans("admin.tadabor-edited"),
              type: "success",
              title: self.trans("admin.success"),
            });
          })
          .catch((error) => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.tadabor-not-edited"),
              type: "warning",
              title: self.trans("admin.warning"),
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "tadabor", data)
          .then((response) => {
            self.$router.push(this.prefix + "tadabors");
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.tadabor-added"),
              type: "success",
              title: self.trans("admin.success"),
            });
          })
          .catch((error) => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.tadabor-not-added"),
              type: "warning",
              title: self.trans("admin.warning"),
            });
          });
      }
    },
    initEditor(soar, level) {
      var self = this;
      $(document).ready(function () {
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
              items: ["Undo", "Redo"],
            },
            {
              name: "styles",
              items: ["Cut", "Copy", "Paste", "PasteText", "PasteFromWord"],
            },
            {
              name: "styles",
              items: ["Styles", "Format"],
            },
            {
              name: "basicstyles",
              items: ["Bold", "Italic", "Strike", "-", "RemoveFormat"],
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
                "Blockquote",
              ],
            },
            {
              name: "links",
              items: ["Link", "Unlink"],
            },

            {
              name: "tools",
              items: ["Maximize"],
            },
            {
              name: "insert",
              items: ["Image", "Youtube", "Table"],
            },
            {
              name: "editing",
              items: ["Scayt", "Source"],
            },
          ],
        };

        CKEDITOR.replace("descr", options);
        CKEDITOR.instances.descr.on("change", function () {
          self.tadabor.text = CKEDITOR.instances.descr.getData();
        });
        CKEDITOR.instances.descr.on("instanceReady", () => {
          CKEDITOR.instances.descr.setData(self.tadabor.html_content);
        });
      });
    },
  },
};
</script>
