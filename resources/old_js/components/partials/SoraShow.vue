<template>
  <div class="sora-item sora-show-item">
    <div
      class="ply-btn"
      @click="
        getItemAndPlay(
          ajax_prefix + '/soar/item?r=' + sora.read_id + '&s=' + sora.sora_id
        )
      "
    >
      <scale-loader
        v-if="isLoading"
        color="#0D3A4D"
        height="10px"
        width="2px"
      ></scale-loader>
      <pause-icon v-else-if="isPlaying" fillColor="#0D3A4D" />
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
        @click="downloadMp3({ url: sora.file, num: sora.num })"
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
        v-if="soarIncludes"
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
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  props: ["sora"],

  computed: {
    isPlaying: function () {
      return false;
    },
    isLoading: function () {
      return false;
    },
    soarIncludes: function () {
      return this.$store.state.favorite.soar.includes(this.sora.id);
    },
    ...mapState({
      style_version: (state) => state.settings.style_version,
      downloading: (state) => state.download.downloading,
    }),
  },

  methods: {
    shareItem(title, url, description) {
      if (typeof window !== "undefined") {
        AppEvent.$emit("share", title, url, description);
      }
    },
    getItemAndPlay(url) {
      axios
        .get(url)
        .then(function (response) {
          window.appFoolter.$store.dispatch("addPlayItem", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    ...mapActions(["clipboardErrorHandler", "clipboardSuccessHandler"]),

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
    this.$store.state.loading = true;
  },
};
</script>