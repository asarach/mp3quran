<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('front.vgroups')" />
    <section class="content-header">
      <h1>{{ trans('front.vgroups')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="prefix + 'vgroups'">
            <i class="fa fa-dashboard"></i>
            {{ trans('front.vgroups')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ trans('admin.edit-vgroup')}}</li>
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
          <vgroup-form :action="'edit'" :vgroup="vgroup"></vgroup-form>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-24">
          <div class="card">
            <form role="form" @submit.prevent="translatePage()">
              <div class="card-head">
                <h3 class="card-title">{{ trans('front.translations')}}</h3>
              </div>
              <div class="card-body table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col" style="width: 20%">{{ trans('admin.language')}}</th>
                      <th scope="col" style="width: 80%">{{ trans('text.name')}}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="translation in translations" :key="translation.id">
                      <th scope="row">{{translation.language}}</th>
                      <td>
                        <div class="form-group">
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            v-model="translation.name"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-footer clearfix">
                <div class="float-left">
                  <button type="submit" class="btn btn-info btn-sm">{{ trans('admin.save')}}</button>
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
export default {
  data() {
    return {
      show_spinner: true,
      show_error: false,
      translations: [],
      vgroup: {
        name: "",
        slug: "",
        status: 0
      }
    };
  },
  methods: {
    editVgroup() {
      var self = this;
      axios
        .get(this.ajax_prefix + "vgroup/edit/" + self.$route.params.id)
        .then(function(response) {
          self.vgroup = response.data.vgroup;
          self.translations = response.data.translations;
          self.show_spinner = false;
        })
        .catch(function(error) {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    },
    translatePage() {
      var self = this;
      var data = this.translations;
      axios
        .post(
          this.ajax_prefix + "vgroup/translations/" + self.$route.params.id,
          data
        )
        .then(function(response) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.vgroup-edited"),
            type: "success",
            title: self.trans("admin.success")
          });
        })
        .catch(function(error) {
          self.$notify({
            group: "admin",
            text: self.trans("admin.vgroup-not-edited"),
            type: "warning",
            title: self.trans("admin.warning")
          });
        });
    }
  },
  mounted() {
    this.editVgroup();
  }
};
</script>
