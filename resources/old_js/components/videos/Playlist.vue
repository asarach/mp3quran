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
            <div class="videos-list pt-3">
              <div class="card-deck" v-for="(deck, index)  in decks" :key="index">
                <card-video v-for="video  in deck" :key="video.id" :video="video"></card-video>
              </div>
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
    decks() {
      let array = this.videos;
      if (typeof array !== "undefined") {
        let decks = [];

        var i,
          j,
          temparray,
          chunk = 3;
        for (i = 0, j = array.length; i < j; i += chunk) {
          temparray = array.slice(i, i + chunk);
          decks.push(temparray);
        }

        return decks;
      } else {
        return [];
      }
    },

    ...mapState({
      style_version: state => state.settings.style_version,
      videos: state => state.video.videos.data,
      initial: state => state.initial
    })
  },

  data() {
    return {
      url: this.ajax_prefix + "/video/playlist/"+ this.$route.params.id,
      search_query: ""
    };
  },

  methods: {
    loadMore() {
      this.$store.dispatch("video/moreVideos", this.url + "more");
    }
  },
  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("video/setData", this);
  },
  destroyed() {
    this.$store.dispatch("video/unsetData");
  },
  watch: {
    search_query: function(q) {
      this.url = this.ajax_prefix + "/videos?q=" + q;
      this.$store.dispatch("video/setData", this);
    }
  }
};
</script>
