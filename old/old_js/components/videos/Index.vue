<template>
  <div class="main videos-index">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{trans('text.videos')}}</h1>
            <div class="header-options"></div>
          </div>
          <div class="col-lg-19">
            <ads-header></ads-header>
          </div>
        </div>
      </div>
    </div>
    <div class="show-body">
      <div class="container">
        <div class="row">
          <div v-if="style_version == 'r'" class="col-md-5">
            <desktop-sidebar></desktop-sidebar>
          </div>
          <div class="col-lg-19" id="sticky-container">
            <div class="show-filters">
              <div class="filter-name">
                <input
                  type="text"
                  class="form-control"
                  name="sora"
                  v-model="search_query"
                  :placeholder="trans('text.search')"
                />
              </div>
            </div>
            <div class="videos-list">
                <card-playlist v-for="playlist  in playlists" :key="playlist.id" :playlist="playlist"></card-playlist>
            </div>
            <div class="load-more">
              <button type="button" class="btn btn-light" @click.prevent="loadMore()">{{ trans('text.lead-more')}}</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      style_version: state => state.settings.style_version,
      playlists: state => state.video.playlists.data,
      initial: state => state.initial
    })
  },

  data() {
    return {
      url: this.ajax_prefix + "/videos",
      search_query: ""
    };
  },

  methods: {
    loadMore() {
      this.$store.dispatch("video/morePlaylists", this.url + "more");
    }
  },
  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("video/setPlaylists", this);
  },
  destroyed() {
    this.$store.dispatch("video/unsetPlaylists");
  },
  watch: {
    search_query: function(q) {
      this.url = this.ajax_prefix + "/videos?q=" + q;
      this.$store.dispatch("video/setPlaylists", this);
    }
  }
};
</script>
