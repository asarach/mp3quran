<template>
  <div class="content-wrapper">
    <vue-headful
      :title="trans('admin.dashboard_title') + ' | ' + trans('text.radios')"
    />
    <section class="content-header">
      <h1>{{ trans("text.radios") }}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans("admin.dashboard") }}
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="prefix + 'radios'">
            <i class="fa fa-dashboard"></i>
            {{ trans("text.radios") }}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans("admin.edit-radio") }}</li>
      </ol>
    </section>
    <div v-if="show_spinner" class="loading-spinner">
      <loading-spinner />
    </div>
    <div v-else-if="show_error" class="page-error">
      <loading-error :type="show_error" />
    </div>
    <section v-else class="content">
      <div class="row">
        <div class="col-lg-24">
          <radio-form
            :action="'edit'"
            :radio_cats="radio_cats"
            :reciters="reciters"
            :rewayat="rewayat"
            :mushafs="mushafs"
            :radio="radio"
          ></radio-form>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-24">
          <div class="card">
            <form role="form" @submit.prevent="updateList()">
              <div class="card-head">
                <h3 class="card-title">{{ trans("front.list") }}</h3>
              </div>
              <div class="card-body table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col" style="width: 35%">
                        {{ trans("admin.name") }}
                      </th>
                      <th scope="col" style="width: 40%">
                        {{ trans("text.url") }}
                      </th>
                      <th scope="col" style="width: 10%">
                        {{ trans("text.language") }}
                      </th>
                      <th scope="col" style="width: 10%">
                        {{ trans("text.seq_id") }}
                      </th>
                      <th scope="col" style="width: 5%">
                        {{ trans("text.options") }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in listItems"
                      :key="index"
                    >
                      <td>
                        <div class="form-group">
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            v-model="item.name"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group">
                          <input
                            type="text"
                            name="url"
                            class="form-control"
                            v-model="item.url"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group">
                          <input
                            type="text"
                            name="language"
                            class="form-control"
                            v-model="item.language"
                          />
                        </div>
                      </td>
                      
                      <td>
                        <div class="form-group">
                          <input
                            type="text"
                            name="seq_id"
                            class="form-control"
                            v-model="item.seq_id"
                          />
                        </div>
                      </td>
                      <td class="text-center">
                        <a
                            href="#"
                            data-placement="left"
                            class="tip btn-uni delete"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.delete-item')"
                            @click.prevent="deleteItem(index)"
                          >
                            <i class="fas fa-trash"></i>
                          </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button type="button" class="btn btn-danger btn-sm" @click="addItem">Add Item</button>
              </div>
              <div class="card-footer clearfix">
                <div class="float-left">
                  <button type="submit" class="btn btn-info btn-sm">
                    {{ trans("admin.save") }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
const { DateTime } = require("luxon");

export default {
  data() {
    return {
      show_spinner: true,
      show_error: false,
      listItems: [],
      mushafs: {},
      rewayat: {},
      reciters: {},
      radio_cats: {},
      radio: {
        name: "",
        slug: "",
        url: "",
        image: "",
        read: {},
        rewaya: {},
        status: 0,
      },
    };
  },
  methods: {
    editradio() {
      var self = this;
      axios
        .get(this.ajax_prefix + "radio/edit/" + self.$route.params.id)
        .then(function (response) {
          self.radio = response.data.radio;
          self.listItems = response.data.listItems;
          self.reciters = response.data.reciters;
          self.mushafs = [{ id: null, name: 'None' }, ...response.data.mushafs];
          self.rewayat = [{ id: null, name: 'None' }, ...response.data.rewayat];
          self.radio_cats = response.data.radio_cats;

          self.show_spinner = false;
        })
        .catch(function (error) {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    },
    updateList() {
      var self = this;
      var data = this.listItems;
      axios
        .post(
          this.ajax_prefix + "radio/list/" + self.$route.params.id,
          data
        )
        .then(function (response) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.radio-edited"),
            type: "success",
            title: self.trans("admin.success"),
          });
        })
        .catch(function (error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.radio-not-edited"),
            type: "warning",
            title: self.trans("admin.warning"),
          });
        });
    },
    addItem() {
      this.listItems.push({
        name: '',
        url: '',
        language: '',
        seq_id: ''
      });
    },
    deleteItem(index) {
      this.listItems.splice(index, 1);
    }
  },
  mounted() {
    this.editradio();
  },
};
</script>
