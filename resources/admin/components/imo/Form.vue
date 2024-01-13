<template>
  <div class="card">
    <form role="form" @submit.prevent="storeAlbum()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">
          {{ trans("admin.create--imo-album") }}
        </h3>
        <h3 v-else class="card-title">{{ trans("admin.update-imo-album") }}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="row">
          <div class="form-group mx-2 w-25">
            <multiselect
              v-model="read"
              selected-label
              select-label
              deselect-label
              :options="reads"
              :placeholder="trans('admin.read')"
              label="title"
              track-by="id"
              @select="selectRead"
              :multiple="false"
            >
              <span slot="noResult">{{ trans("admin.no-item-found") }}</span>
            </multiselect>
          </div>
        </div>
        <!-- album data -->
        <div class="row">
          <div class="form-group mx-2">
            <label class="col-form-label">album_id</label>
            <input
              type="text"
              name="album_id"
              class="form-control"
              v-model="album.album_id"
              @keydown="errors.clear('album_id')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.album_id')"
              >{{ errors.get("album_list." + 0 + ".album_id") }}</small
            >
          </div>

          <div class="form-group mx-2">
            <label class="col-form-label">album_cover</label>
            <input
              type="text"
              name="album_cover"
              class="form-control"
              v-model="album.album_cover"
              @keydown="errors.clear('album_cover')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.album_cover')"
              >{{ errors.get("album_list." + 0 + ".album_cover") }}</small
            >
          </div>
          <div class="form-group mx-2">
            <label class="col-form-label">album_title</label>
            <input
              type="text"
              name="album_title"
              class="form-control"
              v-model="album.album_title"
              @keydown="errors.clear('album_title')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.album_title')"
              >{{ errors.get("album_list." + 0 + ".album_title") }}</small
            >
          </div>
          <div class="form-group mx-2">
            <label class="col-form-label">album_desc</label>
            <input
              type="text"
              name="album_desc"
              class="form-control"
              v-model="album.album_desc"
              @keydown="errors.clear('album_desc')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.album_desc')"
              >{{ errors.get("album_list." + 0 + ".album_desc") }}</small
            >
          </div>
          <div class="form-group mx-2">
            <label class="col-form-label">album_lang</label>
            <input
              type="text"
              name="album_lang"
              class="form-control"
              v-model="album.album_lang"
              @keydown="errors.clear('album_lang')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.album_lang')"
              >{{ errors.get("album_list." + 0 + ".album_lang") }}</small
            >
          </div>
          <div class="form-group mx-2">
            <label class="col-form-label">album_type</label>
            <input
              type="text"
              name="album_type"
              class="form-control"
              v-model="album.album_type"
              @keydown="errors.clear('album_type')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.album_type')"
              >{{ errors.get("album_list." + 0 + ".album_type") }}</small
            >
          </div>
          <div class="form-group mx-2">
            <label class="col-form-label">album_label</label>
            <input
              type="text"
              name="album_label"
              class="form-control"
              v-model="album.album_label"
              @keydown="errors.clear('album_label')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.album_label')"
              >{{ errors.get("album_list." + 0 + ".album_label") }}</small
            >
          </div>

          <div class="form-group mx-2">
            <label class="col-form-label">album_nature</label>
            <input
              type="text"
              name="album_nature"
              class="form-control"
              v-model="album.album_nature"
              @keydown="errors.clear('album_nature')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.album_nature')"
              >{{ errors.get("album_list." + 0 + ".album_nature") }}</small
            >
          </div>

          <div class="form-group mx-2">
            <label class="col-form-label">album_duration</label>
            <input
              type="text"
              name="album_duration"
              class="form-control"
              v-model="album.album_duration"
              @keydown="errors.clear('album_duration')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.album_duration')"
              >{{ errors.get("album_list." + 0 + ".album_duration") }}</small
            >
          </div>
          <div class="form-group mx-2">
            <label class="col-form-label">album_score</label>
            <input
              type="text"
              name="album_score"
              class="form-control"
              v-model="album.album_score"
              @keydown="errors.clear('album_score')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.album_score')"
              >{{ errors.get("album_list." + 0 + ".album_score") }}</small
            >
          </div>
          <div class="form-group mx-2">
            <label class="col-form-label">album_time</label>
            <input
              type="text"
              name="album_time"
              class="form-control"
              v-model="album.album_time"
              @keydown="errors.clear('album_time')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.album_time')"
              >{{ errors.get("album_list." + 0 + ".album_time") }}</small
            >
          </div>
          <div class="form-group mx-2">
            <label class="col-form-label">author_name</label>
            <input
              type="text"
              name="author_name"
              class="form-control"
              v-model="album.author_name"
              @keydown="errors.clear('author_name')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.author_name')"
              >{{ errors.get("album_list." + 0 + ".author_name") }}</small
            >
          </div>
          <div class="form-group mx-2">
            <label class="col-form-label">author_avatar</label>
            <input
              type="text"
              name="author_avatar"
              class="form-control"
              v-model="album.author_avatar"
              @keydown="errors.clear('author_avatar')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.author_avatar')"
              >{{ errors.get("album_list." + 0 + ".author_avatar") }}</small
            >
          </div>
          <div class="form-group mx-2">
            <label class="col-form-label">author_desc</label>
            <input
              type="text"
              name="author_desc"
              class="form-control"
              v-model="album.author_desc"
              @keydown="errors.clear('author_desc')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.author_desc')"
              >{{ errors.get("album_list." + 0 + ".author_desc") }}</small
            >
          </div>
          <div class="form-group mx-2">
            <label class="col-form-label">album_level</label>
            <input
              type="text"
              name="album_level"
              class="form-control"
              v-model="album.album_level"
              @keydown="errors.clear('album_level')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.album_level')"
              >{{ errors.get("album_list." + 0 + ".album_level") }}</small
            >
          </div>
          <div class="form-group mx-2">
            <label class="col-form-label">item_type</label>
            <input
              type="text"
              name="item_type"
              class="form-control"
              v-model="album.item_type"
              @keydown="errors.clear('item_type')"
            />
            <small
              class="form-text text-danger"
              v-if="errors.has('album_list.' + 0 + '.item_type')"
              >{{ errors.get("album_list." + 0 + ".item_type") }}</small
            >
          </div>
        </div>
        <!-- end album data -->
        <!-- album items data -->
        <div class="row">
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">item_id</th>
                <th scope="col">item_index</th>
                <th scope="col">item_title</th>
                <th scope="col">item_lang</th>
                <th scope="col">item_desc</th>
                <th scope="col">item_duration</th>
                <th scope="col">item_time</th>
                <th scope="col">item_url</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.item_id">
                <td>
                  <div class="form-group mx-2">
                    <input
                      type="text"
                      name="item_id"
                      class="form-control"
                      v-model="item.item_id"
                      @keydown="errors.clear('item_id')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('item_list.' + 0 + '.item_id')"
                      >{{ errors.get("item_list." + 0 + ".item_id") }}</small
                    >
                  </div>
                </td>
                <td>
                  <div class="form-group mx-2">
                    <input
                      type="text"
                      name="item_index"
                      class="form-control"
                      v-model="item.item_index"
                      @keydown="errors.clear('item_index')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('item_list.' + 0 + '.item_index')"
                      >{{ errors.get("item_list." + 0 + ".item_index") }}</small
                    >
                  </div>
                </td>
                <td>
                  <div class="form-group mx-2">
                    <input
                      type="text"
                      name="item_title"
                      class="form-control"
                      v-model="item.item_title"
                      @keydown="errors.clear('item_title')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('item_list.' + 0 + '.item_title')"
                      >{{ errors.get("item_list." + 0 + ".item_title") }}</small
                    >
                  </div>
                </td>
                <td>
                  <div class="form-group mx-2">
                    <input
                      type="text"
                      name="item_lang"
                      class="form-control"
                      v-model="item.item_lang"
                      @keydown="errors.clear('item_lang')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('item_list.' + 0 + '.item_lang')"
                      >{{ errors.get("item_list." + 0 + ".item_lang") }}</small
                    >
                  </div>
                </td>
                <td>
                  <div class="form-group mx-2">
                    <input
                      type="text"
                      name="item_desc"
                      class="form-control"
                      v-model="item.item_desc"
                      @keydown="errors.clear('item_desc')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('item_list.' + 0 + '.item_desc')"
                      >{{ errors.get("item_list." + 0 + ".item_desc") }}</small
                    >
                  </div>
                </td>
                <td>
                  <div class="form-group mx-2">
                    <input
                      type="text"
                      name="item_duration"
                      class="form-control"
                      v-model="item.item_duration"
                      @keydown="errors.clear('item_duration')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('item_list.' + 0 + '.item_duration')"
                      >{{
                        errors.get("item_list." + 0 + ".item_duration")
                      }}</small
                    >
                  </div>
                </td>
                <td>
                  <div class="form-group mx-2">
                    <input
                      type="text"
                      name="item_time"
                      class="form-control"
                      v-model="item.item_time"
                      @keydown="errors.clear('item_time')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('item_list.' + 0 + '.item_time')"
                      >{{ errors.get("item_list." + 0 + ".item_time") }}</small
                    >
                  </div>
                </td>
                <td>
                  <div class="form-group mx-2">
                    <input
                      type="text"
                      name="item_url"
                      class="form-control"
                      v-model="item.item_url"
                      @keydown="errors.clear('item_url')"
                    />
                    <small
                      class="form-text text-danger"
                      v-if="errors.has('item_list.' + 0 + '.item_url')"
                      >{{ errors.get("item_list." + 0 + ".item_url") }}</small
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- end album items data -->
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
  props: ["reads"],
  data() {
    return {
      album: {
        album_id: "",
        album_cover: "",
        album_title: "",
        album_desc: "",
        album_lang: "",
        album_type: "",
        album_label: "",
        album_nature: "",
        album_duration: "",
        album_score: "",
        album_time: "",
        author_name: "",
        author_avatar: "",
        author_desc: "",
        album_level: "",
        item_type: "",
      },
      action: "create",
      items: [],
      read: {},
      soar: {},
      errors: new Errors(),
    };
  },
  mounted() {
    console.log("asa");
  },
  methods: {
    selectRead(item, index) {
      var self = this;
      var url = this.ajax_prefix + "imo/" + item.id;
      axios
        .get(url)
        .then((response) => {
          // self.read = response.data.read;
          self.album.album_id = response.data.read.id;
          self.album.album_cover = response.data.read.cover;
          self.album.album_title =
            response.data.read.title + " - " + response.data.read.rewaya.name;
          self.album.album_desc = response.data.read.description;
          self.album.album_lang = response.data.lang;
          self.album.album_type = response.data.read.rewaya.name;
          self.album.album_label = "";
          self.album.album_nature = "";
          self.album.album_duration = 0;
          self.album.album_score = "4.2";
          self.album.album_time = response.data.read.time;
          self.album.author_name = response.data.read.reciter.name;
          self.album.author_avatar = "";
          self.album.author_desc = response.data.read.reciter.description;
          self.album.album_level = "3+";
          self.album.item_type = "audio";

          // add each item of response.data.read.soar to soar array
          let album_duration = 0;
          response.data.read.soar.forEach((sora) => {
            let item = {
              item_id: sora.id,
              item_index: sora.num,
              item_title: sora.name,
              item_lang: response.data.lang,
              item_desc:
                sora.name +
                " - " +
                response.data.read.title +
                " - " +
                response.data.read.rewaya.name,
              item_duration: this.totalSeconds(sora.pivot.duration),
              item_time: response.data.read.time,
              item_url: response.data.read.base_url + this.itemUrl(sora.num),
            };
            // add item to soar object
            self.items.push(item);
            album_duration += this.totalSeconds(sora.pivot.duration);
          });

          self.album.album_duration = album_duration;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    itemUrl(sora) {
      let url = "";
      if (sora < 10) {
        url += "00" + sora + ".mp3";
      } else if (sora < 100) {
        url += "0" + sora + ".mp3";
      } else {
        url += sora + ".mp3";
      }
      return url;
    },
    totalSeconds(time) {
      let parts = time.split(":");
      let hours = 0,
        minutes = 0,
        seconds = 0;

      if (parts.length === 3) {
        hours = parseInt(parts[0]);
        minutes = parseInt(parts[1]);
        seconds = parseInt(parts[2]);
      } else if (parts.length === 2) {
        minutes = parseInt(parts[0]);
        seconds = parseInt(parts[1]);
      }

      return hours * 3600 + minutes * 60 + seconds;
    },
    storeAlbum() {
      var self = this;
      var data = {
        album: this.album,
        items: this.items,
      };

      axios
        .post(this.ajax_prefix + "imo", data)
        .then((response) => {
          console.log(response);
          if (response.data.message && response.data.message == "Validation error") {
            self.errors.record({
              response: { data: { errors: response.data.data } },
            });
            self.$notify({
              group: "admin",
              text: self.trans("admin.error-not-added"),
              type: "warning",
              title: self.trans("admin.warning"),
            });
          } else {
            self.$notify({
              group: "admin",
              text: self.trans("admin.album-added"),
              type: "success",
              title: self.trans("admin.success"),
            });

            
          }
        })
        .catch((error) => {

          self.$notify({
            group: "admin",
            text: self.trans("admin.album-not-added"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
  },
};
</script>
