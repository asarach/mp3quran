<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('text.radio_cats')" />
    <section class="content-header">
      <h1>{{ trans('text.radio_cats')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('text.radio_cats')}}</li>
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
              <h3 class="card-title">{{ trans('text.all-radio_cats')}}</h3>
              <div class="card-tools">
                
              </div>
            </div>
            <div class="card-body table-responsive p-0">
              <table class="table table-hover table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">{{ trans('admin.name')}}</th>
                    <th
                      scope="col"
                      style="width:90px;text-align: center;"
                    >{{ trans('admin.options')}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(radio_cat, item) in radio_cats.data" :key="radio_cat.id">
                    
                    <td scope="row">{{radio_cat.id}}</td>
                    <td>{{ radio_cat.name }}</td>
                    <td class="text-center">
                      
                      <ul  class="list-inline p-0 m-0">
                        <li class="list-inline-item">
                          <router-link
                            :to="prefix + 'radio_cat/edit/' + radio_cat.id "
                            data-placement="left"
                            class="tip btn-uni edit"
                            data-toggle="tooltip"
                            title
                            :data-original-title="trans('admin.edit-radio_cat')"
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
                            :data-original-title="trans('admin.delete-radio_cat')"
                            @click.prevent="deleteRadioCat(radio_cat.id, item)"
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
                  <pagination :pagination="radio_cats" @paginate="getRadioCats()" :offset="4"></pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <radio-cat-form
            :action="'create'"
            @refrech="getRadioCats()"
            :radio_cat="radio_cat"
          ></radio-cat-form>
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
      radio_cats: {},
      sort: this.$route.params.sort,
      direction: this.$route.params.direction,
      radio_cat: {
        name: "",
      },
    };
  },
  methods: {
    getRadioCats() {
      var self = this;
      var url = this.preparUrl();
      axios
        .get(url)
        .then(response => {
          self.radio_cats = response.data.radio_cats;
          self.show_spinner = false;
          window.scroll(0, 0);
        })
        .catch(error => {
          self.show_spinner = false;
          self.show_error = error.response.list;
        });
    },
    preparUrl() {
      var base = this.ajax_prefix + "radio_cats?";
      var page = this.radio_cats.current_page;
      if (page !== undefined) {
        base += "page=" + page + "&";
      }

      return base.slice(0, -1);
    },

    deleteRadioCat(id, key) {
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
        .delete(this.ajax_prefix + "radio_cat/" + id + forced)
        .then(function(response) {
          self.$delete(self.radio_cats.data, key);

          self.$notify({
            group: "admin",
            text: self.trans("admin.radio_cat-deleted"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.radio_cat-not-deleted"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    },
  },
  mounted() {
    this.getRadioCats();
  }
};
</script>
