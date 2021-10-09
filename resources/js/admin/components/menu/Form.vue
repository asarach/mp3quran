<template>
  <div class="card">
    <form role="form" @submit.prevent="storeMenu()">
      <div class="card-head">
        <h3 v-if="action == 'create'" class="card-title">
          {{ trans("admin.create-menu") }}
        </h3>
        <h3 v-else class="card-title">{{ trans("admin.edit-menu") }}</h3>
      </div>
      <div class="card-body table-responsive">
        <div class="row">
          <div class="col-md-24">
            <div class="form-group">
              <label class="col-form-label">{{ trans("admin.title") }}</label>
              <input
                type="text"
                name="title"
                class="form-control"
                v-model="menu.title"
                @keydown="errors.clear('title')"
              />
              <small class="form-text text-danger" v-if="errors.has('title')">
                {{ errors.get("title") }}
              </small>
            </div>
            <div class="form-group">
              <label class="col-form-label">{{ trans("admin.link") }}</label>
              <input
                type="text"
                name="slug"
                class="form-control"
                v-model="menu.slug"
                @keydown="errors.clear('slug')"
              />
              <small class="form-text text-danger" v-if="errors.has('slug')">
                {{ errors.get("slug") }}
              </small>
            </div>
            <div class="form-group">
              <label class="col-form-label">{{
                trans("admin.placement")
              }}</label>
              <select
                v-model="menu.place"
                @change="errors.clear('place')"
                class="custom-select custom-select-lg mb-3"
              >
                <option
                  v-for="(place, index) in places"
                  :key="index"
                  :value="place"
                >
                  {{ trans("text.menu-" + place) }}
                </option>
              </select>
              <small class="form-text text-danger" v-if="errors.has('place')">{{
                errors.get("place")
              }}</small>
            </div>
            <div class="form-group">
              <label class="col-form-label">{{
                trans("admin.order_num")
              }}</label>
              <input
                type="number"
                name="order_num"
                class="form-control"
                v-model="menu.order_num"
                @keydown="errors.clear('order_num')"
              />
              <small
                class="form-text text-danger"
                v-if="errors.has('order_num')"
                >{{ errors.get("order_num") }}</small
              >
            </div>
            <div class="form-group">
              <label class="col-form-label">{{ trans("admin.icon") }}</label>
              <input
                type="text"
                name="icon"
                class="form-control"
                v-model="menu.icon"
                @keydown="errors.clear('icon')"
              />
              <small class="form-text text-danger" v-if="errors.has('icon')">
                {{ errors.get("icon") }}
              </small>
            </div>
            <div class="form-group soar-checkboxs">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  v-model="languages_check"
                  class="custom-control-input"
                  @change="languagesChange()"
                  id="languagesCheck"
                />
                <label class="custom-control-label" for="languagesCheck">{{
                  trans("text.all")
                }}</label>
              </div>
              <div
                v-for="language in languages"
                :key="language.id"
                class="custom-control custom-checkbox"
              >
                <input
                  type="checkbox"
                  v-model="menu.languages[language.id]"
                  class="custom-control-input"
                  :id="'languagesCheckbox' + language.id"
                />
                <label
                  class="custom-control-label"
                  :for="'languagesCheckbox' + language.id"
                  >{{ language.id }} - {{ language.name }}</label
                >
              </div>
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
                      v-model="menu.status"
                    />
                    <label
                      class="custom-control-label"
                      for="customRadiostatus1"
                    >
                      {{ trans("admin.active") }}
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      value="0"
                      id="customRadiostatus2"
                      class="custom-control-input"
                      v-model="menu.status"
                    />
                    <label
                      class="custom-control-label"
                      for="customRadiostatus2"
                    >
                      {{ trans("admin.deactive") }}
                    </label>
                  </div>
                </div>
              </div>
              <small class="form-text text-danger" v-if="errors.has('status')">
                {{ errors.get("status") }}
              </small>
            </div>
          </div>
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
  props: ["action", "menu", "languages", "places"],

  data() {
    return {
      errors: new Errors(),
      languages_check: false,
    };
  },

  mounted() {},

  methods: {
    languagesChange() {
      var items = {};
      for (let index = 0; index < this.languages.length; index++) {
        this.menu.languages[this.languages[index].id] = this.languages_check;
      }
    },
    storeMenu() {
      var self = this;
      var data = this.menu;
      if (this.action == "edit") {
        axios
          .put(this.ajax_prefix + "menu/" + this.menu.id, data)
          .then((response) => {
            self.$router.push(this.prefix + "menus");
            Event.$emit(
              "notify",
              self.trans("admin.menu-edited"),
              "success",
              self.trans("text.success")
            );
          })
          .catch((error) => {
            self.errors.record(error);
            Event.$emit(
              "notify",
              self.trans("admin.menu-not-edited"),
              "warning",
              self.trans("text.warning")
            );
          });
      } else {
        axios
          .post(this.ajax_prefix + "menu", data)
          .then((response) => {
            self.$emit("refrech");
            Event.$emit(
              "notify",
              self.trans("admin.menu-added"),
              "success",
              self.trans("text.success")
            );
          })
          .catch((error) => {
            self.errors.record(error);
            Event.$emit(
              "notify",
              self.trans("admin.menu-not-added"),
              "warning",
              self.trans("text.warning")
            );
          });
      }
    },
  },
};
</script>