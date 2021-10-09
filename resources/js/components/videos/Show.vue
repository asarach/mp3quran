<template>
  <div class="main video-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{ trans("text.videos") }}</h1>
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
            <div class="card-video full-width">
              <div class="card-videoplayer">
                <no-ssr>
                  <youtube
                    v-if="video.type == '0'"
                    :video-id="video.youtube_id"
                  ></youtube>
                  <my-dplayer
                    v-else-if="video.url.length > 0"
                    :url="video.url"
                  ></my-dplayer>
                </no-ssr>
              </div>
              <div class="card-videotitle">
                <div class="card-videotitle-name">{{ video.title }}</div>
                <div class="card-videotitle-job">{{ video.reciter_name }}</div>
                <div class="dropdown btn-download">
                  <button
                    class="btn btn-primary  dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <download-icon fillColor="#fff" />
                    {{ trans("text.download") }}
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a
                      class="dropdown-item"
                      v-if="video.type != '0'"
                      :href="video_url + '?download=1'"
                      target="_blank"
                      type="button"
                      download
                      >{{ trans("text.direct-download") }}</a
                    >
                    <router-link class="dropdown-item"  :to="'/' +  $store.state.current_language +'/video/download/' + video.id">{{
                      trans("text.download-with-logo")
                    }}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { getIdFromURL } from "vue-youtube-embed";
import NoSSR from "vue-no-ssr";

export default {
  components: {
    "no-ssr": NoSSR
  },
  computed: {
    ...mapState({
      style_version: (state) => state.settings.style_version,
      video: (state) => state.video.video,
      fav_videos: (state) => state.favorite.videos,
      initial: (state) => state.initial,
    }),
  },

  data() {
    return {
      url: this.ajax_prefix + "/video/" + this.$route.params.slug,
      video_url: "",
      youtube_id: false,
      video_show: false,
    };
  },

  methods: {},
  created() {
    console.log('show page create');
    this.$Progress.start();
    this.$store.state.loading = true;
    this.video_show = false;
    this.$store.dispatch("video/setItem", this);
    this.video_url = this.video.url;
    this.youtube_id = getIdFromURL(this.video.url);
  },
  destroyed() {
    this.$store.dispatch("video/unsetItem");
  },
  watch: {
    video: function (newvideo) {
      this.video_show = true;
      this.video_url = newvideo.url;
      this.youtube_id = getIdFromURL(newvideo.url);
    },
  },
};
</script>
