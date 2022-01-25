<template>
  <div class="sora-item sora-show-item showoptions">
    <div
      class="ply-btn"
      @click="
        getItemAndPlay(
          ajax_prefix + '/soar/item?r=' + sora.read_id + '&s=' + sora.sora_id,
          sora.id
        )
      "
    >
      <scale-loader
        v-if="isLoading({ type: 'sora', id: sora.id })"
        color="#0D3A4D"
        height="10px"
        width="2px"
      ></scale-loader>
      <span
        v-else-if="isPlaying({ type: 'sora', id: sora.id })"
        class="uni-icon icon-pause"
        style="color: #fff"
      ></span>
      <span v-else class="uni-icon icon-play_arrow" style="color: #fff"></span>
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
        @click="shareItem(sora.share_title, sora.share_url, sora.share_description)"
      >
        <span class="uni-icon icon-share"></span>
      </div>
      <div
        class="sora-btn link-btn"
        v-tooltip="trans('text.copy-link')"
        v-clipboard:copy="sora.file"
        v-clipboard:error="clipboardErrorHandler"
        v-clipboard:success="clipboardSuccessHandler"
      >
        <span class="uni-icon icon-link"></span>
      </div>
      <div
        v-if="downloading"
        class="sora-btn downloading"
        v-tooltip="trans('text.downloading')"
      >
        <img :src="'/img/icons/downloading.svg'" width="60" alt="" />
      </div>
      <a
        v-else
        class="sora-btn download-btn"
        v-tooltip="trans('text.download')"
        :href="sora.file  | downloadUrl"
        ><span class="uni-icon icon-cloud_download"></span
      ></a>

      <div
        class="sora-btn playlist-add"
        v-tooltip="trans('text.add-to-playlist')"
        @click="
          addItem(
            ajax_prefix + '/soar/item?r=' + sora.read_id + '&s=' + sora.sora_id
          )
        "
      >
        <span class="uni-icon icon-playlist_add"></span>
      </div>
      <div
        class="sora-btn ike-btn"
        v-if="soarIncludes"
        v-tooltip="trans('text.remove-from-favorite')"
        @click="removeSoraFavorite(sora.id)"
      >
        <span class="uni-icon icon-favorite" style="color: #f5b44b"></span>
      </div>
      <div
        class="sora-btn deslike-btn"
        v-tooltip="trans('text.add-to-favorite')"
        v-else
        @click="addSoraFavorite(sora.id)"
      >
        <span class="uni-icon icon-favorite_outline"></span>
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
        <span class="uni-icon icon-warning"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  props: ["sora"],

  computed: {
    soarIncludes: function () {
      return this.$store.state.favorite.soar.includes(this.sora.id);
    },
    ...mapGetters(["isPlaying", "isLoading"]),
    ...mapState({
      current_playing_item: (state) => state.playing_item,
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
    addItem(url) {
      axios
        .get(url)
        .then(function (response) {
          window.appFoolter.$store.dispatch("addItem", response.data);
        })
        .catch(function (error) {
        });
    },
    getItemAndPlay(url, playing_item) {
      if (this.current_playing_item != playing_item) {
        window.appFoolter.$store.commit("setState", {
          playing_state: "loading",
          playing_item: playing_item,
          playing_type: "sora",
        });
      }
      axios
        .get(url)
        .then(function (response) {
          window.appFoolter.$store.dispatch("addAndPlayItem", response.data);
        })
        .catch(function (error) {
        });
    },
    ...mapActions([
      "reportSora",
      "clipboardErrorHandler",
      "clipboardSuccessHandler",
    ]),

    ...mapActions("download", {
      downloadMp3: "downloadMp3",
    }),
    ...mapActions("favorite", {
      addSoraFavorite: "addSora",
      removeSoraFavorite: "removeSora",
    }),
  },

  created() {
    this.$store.state.loading = true;
  },
};
</script>