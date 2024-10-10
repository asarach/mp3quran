<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('text.radios')" />
    <section class="content-header">
      <h1>{{ trans('text.radios')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('text.radios')}}</li>
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
        <div class="col-lg-16">
          <div class="card">
            <div class="card-head">
              <h3 class="card-title">{{ trans('text.all-radios')}}</h3>
              <div class="card-tools">
                <router-link :to="prefix + 'radio_cats'">
                    <button class="btn btn-primary btn-sm">
                      {{ trans("admin.radio_cats") }}
                    </button>
                  </router-link>
              </div>
            </div>
            <div class="card-body table-responsive p-0">
              <filtering
                :list="list"
                :query="query"
                :radio_cats="radio_cats"
                @filter="filterRadios"
                @order="orderRadios"
              ></filtering>
              <table class="table table-hover table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">{{ trans('admin.reciter')}}</th>
                    <th scope="col">{{ trans('admin.mushaf')}}</th>
                    <th scope="col">{{ trans('admin.category')}}</th>
                    <th
                      scope="col"
                      style="width: 60px;text-align: center;"
                    >{{ trans('admin.list')}}</th>
                    <th
                      scope="col"
                      style="width:90px;text-align: center;"
                    >{{ trans('admin.options')}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(radio, item) in radios.data" :key="radio.id">
                    
                    <td scope="row">{{radio.id}}</td>
                    <td>{{ radio.reciter_name }}</td>
                    <td>{{ radio.mushaf }}</td>
                    <td>{{ radio.category }}</td>
                    <td class="text-center">
                      <a
                        v-if="radio.list !== 1"
                        href="#"
                        class="text-danger"
                        @click.prevent="changeList(radio.id, 1, item)"
                      >
                        <i class="fas fa-ban"></i>
                      </a>
                      <a
                        v-else
                        href="#"
                        class="text-success"
                        @click.prevent="changeList(radio.id, 0, item)"
                      >
                        <i class="fas fa-check"></i>
                      </a>
                    </td>
                    <td class="text-center">
                      
                      <ul  class="list-inline p-0 m-0">
                        <li class="list-inline-item">
                          <router-link
                            :to="prefix + 'radio/edit/' + radio.id "
                            data-placement="left"
                            class="tip btn-uni edit"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.edit-radio')"
                          >
                            <i class="fas fa-pen"></i>
                          </router-link>
                        </li>
                        <li class="list-inline-item">
                          <a
                            href="#"
                            data-placement="left"
                            class="tip btn-uni delete"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.delete-radio')"
                            @click.prevent="deleteRadio(radio.id, item)"
                          >
                            <i class="fas fa-trash"></i>
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer clearfix">
              <div class="row">
                <div class="col">
                  <pagination :pagination="radios" @paginate="getRadios()" :offset="4"></pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <radio-form
            :action="'create'"
            :radio_cats="radio_cats"
            @refrech="getRadios()"
            :reciters="reciters"
            :rewayat="rewayat"
            :mushafs="mushafs"
            :radio="radio"
          ></radio-form>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show_spinner: true,
      show_error: false,
      radios: {},
      mushafs: {},
      rewayat: {},
      reciters: {},
      radio_cats: {},
      sort: this.$route.params.sort,
      direction: this.$route.params.direction,
      radio: {
        name: "",
        url: "",
        list: 0,
        mushaf: {},
        reciter: {},
        rewaya: {},
        radio_cat: {},
      },
      filters: {
        statu: "",
        query: "",
        radio_cat: "",
        type: ""
      },
      query: true,
      list: ["0", "1"]
    };
  },
  methods: {
    getRadios() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then(response => {
          self.radios = response.data.radios;
          self.reciters = response.data.reciters;
          self.mushafs = [{ id: null, name: 'None' }, ...response.data.mushafs];
          self.rewayat = [{ id: null, name: 'None' }, ...response.data.rewayat];
          self.radio_cats = response.data.radio_cats;
          self.show_spinner = false;
          window.scroll(0, 0);
        })
        .catch(error => {
          self.show_spinner = false;
          self.show_error = error.response.list;
        });
    },
    filterRadios(filters) {
      this.filters = filters;
      this.radios.current_page = undefined;
      this.getRadios();
    },
    orderRadios(order) {
      this.sort = order.sort;
      this.direction = order.direction;
      this.radios.current_page = undefined;
      this.getRadios();
    },
    preparUrl() {
      var base = this.ajax_prefix + "radios?";
      var page = this.radios.current_page;
      if (page !== undefined) {
        base += "page=" + page + "&";
      }
      if (this.sort) {
        base += "sort=" + this.sort + "&";
      }
      if (this.direction) {
        base += "direction=" + this.direction + "&";
      }
      if (this.filters.radio) {
        base += "radio=" + this.filters.radio.id + "&";
      }
      if (this.filters.radio_cat) {
        base += "radio_cat=" + this.filters.radio_cat.id + "&";
      }
      if (this.filters.statu) {
        base += "statu=" + this.filters.statu + "&";
      }
      if (this.filters.query) {
        base += "q=" + this.filters.query + "&";
      }
      if (this.filters.type) {
        base += "type=" + this.filters.type + "&";
      }

      return base.slice(0, -1);
    },

    deleteRadio(id, key) {
      var self = this;
      Event.$off("confirmed");
      Event.$emit("confirm");
      Event.$on("confirmed", function() {
        self.confirmDalete(id, key);
      });
    },

    confirmDalete(id, key) {
      var self = this;
      var forced = "?forced=true";      
      axios
        .delete(this.ajax_prefix + "radio/" + id + forced)
        .then(function(response) {
          self.$delete(self.radios.data, key);

          self.$notify({
            group: "admin",
            text: self.trans("admin.radio-deleted"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.radio-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    changeList: function(id, list, item) {
      var self = this;
      axios
        .get(this.ajax_prefix + "radio/" + id + "/list/" + list)
        .then(response => {
          self.radios.data[item].list = parseInt(response.data.list);
          self.$notify({
            group: "admin",
            title: self.trans("admin.success"),
            type: "success",
            text: self.trans("admin.radio-list-changed")
          });
        })
        .catch(error => {
          self.$notify({
            group: "admin",
            text: self.trans("admin.radio-list-not-changed"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
    restorRadio(id) {
      var self = this;
      axios
        .get(this.ajax_prefix + "radio/restore/" + id)
        .then(function(response) {
          self.getRadios();
          self.$notify({
            group: "admin",
            text: self.trans("admin.radio-restored"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.radio-not-restored"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    }
  },
  mounted() {
    this.getRadios();
  }
};
</script>
