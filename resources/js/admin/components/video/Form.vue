<template>
  <div class="card">
    <form role="form" @submit.prevent="storeVideo()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">{{ trans('admin.create-video')}}</h3>
        <h3 v-else class="card-title">{{ trans('admin.edit-video')}}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="form-group">
          <label class="col-form-label">{{ trans('admin.title')}}</label>
          <input
            type="text"
            name="title"
            class="form-control"
            v-model="video.title"
            @keydown="errors.clear('title')"
          />
          <small class="form-text text-danger" v-if="errors.has('title')">{{errors.get('title')}}</small>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">{{ trans('admin.type')}}</label>
          <select class="form-control" name="type" v-model="video.type" id="exampleFormControlSelect1">
            <option value="0">{{trans('admin.youtube-embad')}}</option>
            <option value="1">{{trans('admin.youtube-url')}}</option>
            <option value="2">{{trans('admin.video-url')}}</option>
          </select>
          <small class="form-text text-danger" v-if="errors.has('type')">{{errors.get('type')}}</small>
        </div>
        <div v-if="action == 'edit'" class="form-group">
          <label class="col-form-label">{{ trans('admin.slug')}}</label>
          <input
            type="text"
            name="slug"
            class="form-control"
            v-model="video.slug"
            @keydown="errors.clear('slug')"
          />
          <small class="form-text text-danger" v-if="errors.has('slug')">{{errors.get('slug')}}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans('admin.url')}}</label>
          <input
            type="text"
            name="url"
            class="form-control"
            v-model="video.url"
            @keydown="errors.clear('url')"
          />
          <small class="form-text text-danger" v-if="errors.has('url')">{{errors.get('url')}}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans('admin.description')}}</label>
          <textarea
            name="description"
            class="form-control"
            v-model="video.description"
            rows="3"
            @change="errors.clear('description')"
          ></textarea>
          <small
            class="form-text text-danger"
            v-if="errors.has('description')"
          >{{errors.get('description')}}</small>
        </div>

        <div class="form-group">
          <multiselect
            v-model="video.reciter"
            selected-label
            select-label
            deselect-label
            :options="reciters"
            :placeholder="trans('admin.reciter')"
            label="name"
            track-by="id"
            :multiple="false"
          >
            <span slot="noResult">{{trans('admin.no-item-found')}}</span>
          </multiselect>
          <small
            class="form-text text-danger"
            v-if="errors.has('reciter')"
          >{{errors.get('reciter')}}</small>
        </div>
        <div class="form-group">
          <multiselect
            v-model="video.vgroup"
            selected-label
            select-label
            deselect-label
            :options="vgroups"
            :placeholder="trans('admin.vgroup')"
            label="name"
            track-by="id"
            :multiple="false"
          >
            <span slot="noResult">{{trans('admin.no-item-found')}}</span>
          </multiselect>
          <small
            class="form-text text-danger"
            v-if="errors.has('vgroup')"
          >{{errors.get('vgroup')}}</small>
        </div>

        <div class="form-group">
          <label class="col-form-label">{{ trans('admin.image')}}</label>
          <upload-image @uploaded="imageUploaded" :image="video.old_image" type="videos" nbr="322"></upload-image>
          <small class="form-text text-danger" v-if="errors.has('image')">{{errors.get('image')}}</small>
        </div>
        <div class="form-group">
          <label>{{ trans('admin.status')}}</label>
          <div class="row">
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="1"
                  id="customRadiostatus1"
                  class="custom-control-input"
                  v-model="video.status"
                />
                <label
                  class="custom-control-label"
                  for="customRadiostatus1"
                >{{ trans('admin.active')}}</label>
              </div>
            </div>
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="0"
                  id="customRadiostatus2"
                  class="custom-control-input"
                  v-model="video.status"
                />
                <label
                  class="custom-control-label"
                  for="customRadiostatus2"
                >{{ trans('admin.deactive')}}</label>
              </div>
            </div>
          </div>
          <small class="form-text text-danger" v-if="errors.has('status')">{{errors.get('status')}}</small>
        </div>
        <div class="form-group">
          <label>{{ trans('admin.featured')}}</label>
          <div class="row">
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="1"
                  id="customRadiofeatured1"
                  class="custom-control-input"
                  v-model="video.featured"
                />
                <label
                  class="custom-control-label"
                  for="customRadiofeatured1"
                >{{ trans('admin.yes')}}</label>
              </div>
            </div>
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="0"
                  id="customRadiofeatured2"
                  class="custom-control-input"
                  v-model="video.featured"
                />
                <label
                  class="custom-control-label"
                  for="customRadiofeatured2"
                >{{ trans('admin.yes')}}</label>
              </div>
            </div>
          </div>
          <small
            class="form-text text-danger"
            v-if="errors.has('featured')"
          >{{errors.get('featured')}}</small>
        </div>
      </div>
      <div class="card-footer clearfix">
        <div class="float-right">
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
  props: ["action", "video", "reciters", 'vgroups'],
  data() {
    return {
      errors: new Errors()
    };
  },
  methods: {
    imageUploaded(image) {
      this.video.image = image;
    },
    storeVideo() {
      var self = this;
      var data = this.video;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "video/" + this.video.id, data)
          .then(response => {
            self.$router.push(this.prefix + "videos");
            self.$notify({
              group: "admin",
              text: self.trans("admin.video-edited"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.video-not-edited"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "video", data)
          .then(response => {
            self.$router.push(this.prefix + "videos");
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.video-added"),
              type: "success",
              title: self.trans("admin.success")
            });
          })
          .catch(error => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.video-not-added"),
              type: "warning",
              title: self.trans("admin.warning")
            });
          });
      }
    }
  }
};
</script>
