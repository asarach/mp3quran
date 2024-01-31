<template>
  <div class="sora-item sora-show-item showoptions">
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
    <div class="ssi-btns">
      <div class="ply-btn" v-if="isLoading">
        <div class="la-line-scale la-sm">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="ply-btn" v-else-if="isPlaying" @click="pauseItem()">
        <span class="uni-icon icon-pause" style="color: #fff"></span>
        {{ trans("text.pause") }}
      </div>
      <div
        class="ply-btn"
        v-else
        @click="
          getItemAndPlay(
            ajax_prefix + '/soar/item?r=' + sora.read_id + '&s=' + sora.sora_id,
            sora.id
          )
        "
      >
        <span class="uni-icon icon-play_arrow" style="color: #fff"></span>
        {{ trans("text.play") }}
      </div>

      <a class="download-btn" :href="sora.file | downloadUrl">
        <div>
          <span class="uni-icon icon-cloud_download"></span>
          {{ trans("text.download") }}
        </div>
      </a>
    </div>
    <div class="sora-options">
      <div
        class="sora-btn share-btn"
        v-tooltip="trans('text.share')"
        @click="
          shareItem(sora.share_title, sora.share_url, sora.share_description)
        "
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
        v-if="inFavorites"
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
        :data-read="sora.read_slug"
        :data-sora="sora.id"
        :data-prefix="ajax_prefix"
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
  data() {
    return {
      inFavorites: false,
    };
  },
  computed: {
    isPlaying: function () {
      if (
        this.$root.player_state.playing_item == this.sora.id &&
        this.$root.player_state.playing_state == "playing"
      ) {
        return true;
      } else {
        return false;
      }
    },

    isLoading: function () {
      if (
        this.$root.player_state.playing_item == this.sora.id &&
        this.$root.player_state.playing_state == "loading"
      ) {
        return true;
      } else {
        return false;
      }
    },

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
          window.player.addItem(response.data);
        })
        .catch(function (error) {});
    },
    pauseItem() {
      window.player.pause();
    },
    getItemAndPlay(url, playing_item) {
      if (this.$root.player_state.playing_item != playing_item) {
        this.$root.player_state.playing_state = "loading";
        this.$root.player_state.playing_item = playing_item;
        axios
          .get(url)
          .then(function (response) {
            window.player.addAndPlayItem(response.data);
          })
          .catch(function (error) {});
      } else {
        window.player.play();
      }
    },
    ...mapActions([
      "clipboardErrorHandler",
      "clipboardSuccessHandler",
    ]),

    ...mapActions("download", {
      downloadMp3: "downloadMp3",
    }),
     addSoraFavorite(sora_id) {
      window.favorites.addItem(sora_id, "soar");
      Vue.notify({
        group: "app",
        title: this.trans("text.added"),
        type: "success",
        text: this.trans("text.sora-added-favorites"),
      });
    },
    removeSoraFavorite(sora_id) {
      window.favorites.removeItem(sora_id, "soar");
      Vue.notify({
        group: "app",
        title: this.trans("text.removed"),
        type: "warn",
        text: this.trans("text.sora-removed-favorites"),
      });
    },
  },
   mounted() {
    this.inFavorites = window.favorites.soar.includes(this.sora.id);
    window.addEventListener("favoritesChange", () => {
      this.inFavorites = window.favorites.soar.includes(this.sora.id);
    });
  },
  created() {
    this.$store.state.loading = true;
  },
};
</script>