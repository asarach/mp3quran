<template>
  <div class="main sora-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{ trans("text.sora") }}</h1>
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
          <div class="col-lg-19 pt-3" id="sticky-container">
            <div class="sora-item sora-show-item">
              <div class="ply-btn" @click="addItemToPlaylistAndPlay(sora)">
                <scale-loader
                  v-if="isLoading(sora)"
                  color="#0D3A4D"
                  height="10px"
                  width="2px"
                ></scale-loader>
                <pause-icon v-else-if="isPlaying(sora)" fillColor="#0D3A4D" />
                <play-arrow-icon v-else fillColor="#0D3A4D" />
              </div>
              <div class="sora-info">
                <div class="sora-name">
                  {{ sora.name }}
                </div>
                <div class="sora-reciter">
                  {{ sora.reciter }}
                </div>
                <div class="sora-rewaya">
                  {{ sora.rewaya }}
                </div>
              </div>
              <div class="sora-options">
                <div
                  class="sora-btn share-btn"
                  v-tooltip="trans('text.share')"
                  @click="shareItem(sora.title, sora.url, sora.description)"
                >
                  <share-icon fillColor="#0D3A4D" />
                </div>
                <div
                  class="sora-btn link-btn"
                  v-tooltip="trans('text.copy-link')"
                  v-clipboard:copy="sora.url"
                  v-clipboard:error="clipboardErrorHandler"
                  v-clipboard:success="clipboardSuccessHandler"
                >
                  <link-icon fillColor="#0D3A4D" />
                </div>
                <div
                  v-if="downloading"
                  class="sora-btn downloading"
                  v-tooltip="trans('text.downloading')"
                >
                  <img :src="'/img/icons/downloading.svg'" width="60" alt="" />
                </div>
                <div
                  v-else
                  class="sora-btn download-btn"
                  v-tooltip="trans('text.download')"
                  @click="downloadMp3({ url : sora.file, num : sora.num})"
                >
                  <cloud-download-icon fillColor="#0D3A4D" />
                </div>

                <div
                  class="sora-btn playlist-add"
                  v-tooltip="trans('text.add-to-playlist')"
                  @click="addToPlaylist(sora)"
                >
                  <playlist-plus-icon fillColor="#0D3A4D" />
                </div>
                <div
                  class="sora-btn ike-btn"
                  v-if="soarIncludes(sora.id)"
                  v-tooltip="trans('text.remove-from-favorite')"
                  @click="removeSoraFavorite(sora.id)"
                >
                  <heart-icon fillColor="#f5b44b" />
                </div>
                <div
                  class="sora-btn deslike-btn"
                  v-tooltip="trans('text.add-to-favorite')"
                  v-else
                  @click="addSoraFavorite(sora.id)"
                >
                  <heart-outline-icon fillColor="#0D3A4D" />
                </div>
                <div
                  class="sora-btn report-btn"
                  v-if="sora.report != '-1'"
                  v-tooltip="trans('text.report-sora')"
                  @click="
                    reportSora({
                      read: sora.read_slug,
                      sora: sora.id,
                      prefix: ajax_prefix,
                    })
                  "
                >
                  <alert-icon fillColor="#0D3A4D" />
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
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      url:
        this.ajax_prefix +
        "/" +
        this.$route.params.slug +
        "/" +
        this.$route.params.sora,
      audio: {},
    };
  },

  computed: {
    ...mapState({
      style_version: (state) => state.settings.style_version,
      downloading: (state) => state.download.downloading,
      sora: (state) => state.reciter.sora,
      initial: (state) => state.initial,
      current_language: (state) => state.current_language,
    }),
    ...mapGetters({
      soarIncludes: "favorite/soarIncludes",
      isPlaying: "player/isPlaying",
      isLoading: "player/isLoading",
    }),
  },

  methods: {
    shareItem(title, url, description) {
      if (typeof window !== "undefined") {
        Event.$emit("share", title, url, description);
      }
    },
    
    
    ...mapActions(["clipboardErrorHandler", "clipboardSuccessHandler"]),
    ...mapActions("player", {
      addToPlaylist: "addItem",
      addItemToPlaylistAndPlay: "addPlayItem",
    }),
    ...mapActions("download", {
      downloadMp3: "downloadMp3",
    }),
    ...mapActions("favorite", {
      addSoraFavorite: "addSora",
      removeSoraFavorite: "removeSora",
    }),
    ...mapActions("report", {
      reportSora: "reportSora",
    }),
  },

  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("reciter/setSora", { vm: this, url: this.url });
  },

  destroyed() {
    this.$store.dispatch("reciter/unsetSora");
  },
};
</script>
