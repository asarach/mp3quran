<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('admin.dashboard')" />
    <section class="content-header">
      <h1>{{ trans('admin.dashboard')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item active">{{ trans('admin.dashboard')}}</li>
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
        <div class="col-lg-4">
          <div class="card index-stats ins-blue">
            <h3>{{stats.reciters}}</h3>
            <p>{{trans('text.reciters')}}</p>
            <router-link :to="prefix + 'reciters'">
              <i class="fas fa-radio"></i>
              <span>{{ trans('admin.details')}}</span>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card index-stats ins-teal">
            <h3>{{stats.reads}}</h3>
            <p>{{trans('text.reads')}}</p>
            <router-link :to="prefix + 'reads'">
              <i class="fas fa-user-md"></i>
              <span>{{ trans('admin.details')}}</span>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card index-stats ins-teal">
            <h3>{{stats.radios}}</h3>
            <p>{{trans('text.radios')}}</p>
            <router-link :to="prefix + 'radios'">
              <i class="fas fa-comment-medical"></i>
              <span>{{ trans('admin.details')}}</span>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card index-stats ins-orange">
            <h3>{{stats.tvs}}</h3>
            <p>{{trans('text.tvs')}}</p>
            <router-link :to="prefix + 'tvs'">
              <i class="fas fa-file-medical"></i>
              <span>{{ trans('admin.details')}}</span>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card index-stats ins-green">
            <h3>{{stats.videos}}</h3>
            <p>{{trans('text.videos')}}</p>
            <router-link :to="prefix + 'videos'">
              <i class="fas fa-camera"></i>
              <span>{{ trans('admin.details')}}</span>
            </router-link>
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
      stats: {},
      show_spinner: true,
      show_error: false
    };
  },
  methods: {
    getIndex() {
      var self = this;
      axios
        .get(this.ajax_prefix)
        .then(response => {
          self.stats = response.data.stats;
          self.show_spinner = false;
        })
        .catch(error => {
          self.show_spinner = false;
          self.show_error = error.response.status;
        });
    }
  },
  mounted() {
    this.getIndex();
  }
};
</script>
