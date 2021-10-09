<template>
  <div class="card">
    <form role="form" @submit.prevent="storeRead()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">
          {{ trans("admin.create-read") }}
        </h3>
        <h3 v-else class="card-title">{{ trans("admin.edit-read") }}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.title") }}</label>
          <input
            type="text"
            name="title"
            class="form-control"
            v-model="read.title"
            @keydown="errors.clear('title')"
          />
          <small class="form-text text-danger" v-if="errors.has('title')">{{
            errors.get("title")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.slug") }}</label>
          <input
            type="text"
            name="slug"
            class="form-control"
            v-model="read.slug"
            @keydown="errors.clear('slug')"
          />
          <small class="form-text text-danger" v-if="errors.has('slug')">{{
            errors.get("slug")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.url") }}</label>
          <input
            type="text"
            name="url"
            class="form-control"
            v-model="read.url"
            @keydown="errors.clear('url')"
          />
          <small class="form-text text-danger" v-if="errors.has('url')">{{
            errors.get("url")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("text.torrent") }}</label>
          <input
            type="text"
            name="torrent"
            class="form-control"
            v-model="read.torrent"
            @keydown="errors.clear('torrent')"
          />
          <small class="form-text text-danger" v-if="errors.has('torrent')">{{
            errors.get("torrent")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("text.itunes") }}</label>
          <input
            type="text"
            name="itunes"
            class="form-control"
            v-model="read.itunes"
            @keydown="errors.clear('itunes')"
          />
          <small class="form-text text-danger" v-if="errors.has('itunes')">{{
            errors.get("itunes")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.video") }}</label>
          <input
            type="text"
            name="video"
            class="form-control"
            v-model="read.video"
            @keydown="errors.clear('video')"
          />
          <small class="form-text text-danger" v-if="errors.has('video')">{{
            errors.get("video")
          }}</small>
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.description") }}</label>
          <textarea
            name="description"
            class="form-control"
            v-model="read.description"
            rows="3"
            @change="errors.clear('description')"
          ></textarea>
          <small
            class="form-text text-danger"
            v-if="errors.has('description')"
            >{{ errors.get("description") }}</small
          >
        </div>
        <div class="form-group">
          <label class="col-form-label">{{ trans("admin.keywords") }}</label>
          <textarea
            name="keywords"
            class="form-control"
            v-model="read.keywords"
            rows="3"
            @change="errors.clear('keywords')"
          ></textarea>
          <small class="form-text text-danger" v-if="errors.has('keywords')">{{
            errors.get("keywords")
          }}</small>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <multiselect
                v-model="read.mushaf"
                selected-label
                select-label
                deselect-label
                :options="mushafs"
                :placeholder="trans('admin.mushaf')"
                label="name"
                track-by="id"
                :multiple="false"
              >
                <span slot="noResult">{{ trans("admin.no-item-found") }}</span>
              </multiselect>
              <small
                class="form-text text-danger"
                v-if="errors.has('mushaf')"
                >{{ errors.get("mushaf") }}</small
              >
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <multiselect
                v-model="read.reciter"
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
              <small
                class="form-text text-danger"
                v-if="errors.has('reciter')"
                >{{ errors.get("reciter") }}</small
              >
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <multiselect
                v-model="read.rewaya"
                selected-label
                select-label
                deselect-label
                :options="rewayat"
                :placeholder="trans('admin.rewaya')"
                label="name"
                track-by="id"
                :multiple="false"
              >
                <span slot="noResult">{{ trans("admin.no-item-found") }}</span>
              </multiselect>
              <small
                class="form-text text-danger"
                v-if="errors.has('rewaya')"
                >{{ errors.get("rewaya") }}</small
              >
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <multiselect
                v-model="read.server"
                selected-label
                select-label
                deselect-label
                :options="servers"
                :placeholder="trans('admin.server')"
                label="name"
                track-by="id"
                :multiple="false"
              >
                <span slot="noResult">{{ trans("admin.no-item-found") }}</span>
              </multiselect>
              <small
                class="form-text text-danger"
                v-if="errors.has('server')"
                >{{ errors.get("server") }}</small
              >
            </div>
          </div>
        </div>
        <div class="form-group soar-checkboxs">
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              v-model="soar_check"
              class="custom-control-input"
              @change="soarChange()"
              id="soarCheck"
            />
            <label class="custom-control-label" for="soarCheck">{{
              trans("text.all")
            }}</label>
          </div>
          <div
            v-for="sora in soar"
            :key="sora.id"
            class="custom-control custom-checkbox"
          >
            <input
              type="checkbox"
              v-model="read.soar[sora.id]"
              class="custom-control-input"
              :id="'soarCheckbox' + sora.id"
            />
            <label class="custom-control-label" :for="'soarCheckbox' + sora.id"
              >{{ sora.id }} - {{ sora.name }}</label
            >
            <div
              v-if="
                report_soar[sora.id] > 0 ||
                report_soar[sora.id] == '-1'
              "
              class="dropdown"
            >
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                :id="'dropdownMenuButton' + sora.id"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ report_soar[sora.id] }}
              </button>
              <div
                class="dropdown-menu"
                :ariaLabelledby="'dropdownMenuButton' + sora.id"
              >
                <a
                  class="dropdown-item"
                  @click.prevent="changeReport(sora.id, 'clear')"
                  v-if="report_soar[sora.id] != '-1'"
                  href="#"
                  >{{ trans("admin.clear") }}</a
                >
                <a
                  class="dropdown-item"
                  @click.prevent="changeReport(sora.id, 'enable')"
                  v-if="report_soar[sora.id] == '-1'"
                  href="#"
                  >{{ trans("admin.enable") }}</a
                >
                <a
                  class="dropdown-item"
                  @click.prevent="changeReport(sora.id, 'disable')"
                  v-else
                  href="#"
                  >{{ trans("admin.disable") }}</a
                >
              </div>
            </div>
          </div>

          <small class="form-text text-danger" v-if="errors.has('soar')">{{
            errors.get("soar")
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
                  v-model="read.status"
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
                  v-model="read.status"
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
        <div class="form-group">
          <label>{{ trans("admin.featured") }}</label>
          <div class="row">
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="1"
                  id="customRadiofeatured1"
                  class="custom-control-input"
                  v-model="read.featured"
                />
                <label
                  class="custom-control-label"
                  for="customRadiofeatured1"
                  >{{ trans("admin.active") }}</label
                >
              </div>
            </div>
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="0"
                  id="customRadiofeatured2"
                  class="custom-control-input"
                  v-model="read.featured"
                />
                <label
                  class="custom-control-label"
                  for="customRadiofeatured2"
                  >{{ trans("admin.deactive") }}</label
                >
              </div>
            </div>
          </div>
          <small class="form-text text-danger" v-if="errors.has('featured')">{{
            errors.get("featured")
          }}</small>
        </div>
        <div class="form-group">
          <label>{{ trans("admin.promoted") }}</label>
          <div class="row">
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="1"
                  id="customRadiopromoted1"
                  class="custom-control-input"
                  v-model="read.promoted"
                />
                <label
                  class="custom-control-label"
                  for="customRadiopromoted1"
                  >{{ trans("admin.active") }}</label
                >
              </div>
            </div>
            <div class="col">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  value="0"
                  id="customRadiopromoted2"
                  class="custom-control-input"
                  v-model="read.promoted"
                />
                <label
                  class="custom-control-label"
                  for="customRadiopromoted2"
                  >{{ trans("admin.deactive") }}</label
                >
              </div>
            </div>
          </div>
          <small class="form-text text-danger" v-if="errors.has('promoted')">{{
            errors.get("promoted")
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
  props: [
    "action",
    "read",
    "mushafs",
    "rewayat",
    "report_soar",
    "servers",
    "reciters",
    "soar",
  ],
  data() {
    return {
      errors: new Errors(),
      soar_check: false,
    };
  },
  mounted() {},
  methods: {
    imageUploaded(image) {
      this.read.image = image;
    },
    soarChange() {
      var items = {};
      for (let index = 0; index < this.soar.length; index++) {
        this.read.soar[this.soar[index].id] = this.soar_check;
      }
    },
    changeReport(sora_id, chnage) {
      var self = this;
      axios
        .get(
          this.ajax_prefix +
            "read/" +
            self.$route.params.id +
            "/report/" +
            chnage +
            "/" +
            sora_id
        )
        .then(function (response) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.report-edited"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.report-not-edited"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    storeRead() {
      var self = this;
      var data = this.read;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "read/" + this.read.id, data)
          .then((response) => {
            self.$router.push(this.prefix + "reads");
            self.$notify({
              group: "admin",
              text: self.trans("admin.read-edited"),
              type: "success",
              title: self.trans("admin.success"),
            });
          })
          .catch((error) => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.read-not-edited"),
              type: "warning",
              title: self.trans("admin.warning"),
            });
          });
      } else {
        axios
          .post(this.ajax_prefix + "read", data)
          .then((response) => {
            self.$router.push(this.prefix + "reads");
            self.$emit("refrech");
            self.$notify({
              group: "admin",
              text: self.trans("admin.read-added"),
              type: "success",
              title: self.trans("admin.success"),
            });
          })
          .catch((error) => {
            self.errors.record(error);
            self.$notify({
              group: "admin",
              text: self.trans("admin.read-not-added"),
              type: "warning",
              title: self.trans("admin.warning"),
            });
          });
      }
    },
  },
};
</script>
