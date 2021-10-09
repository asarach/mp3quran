<template>
  <div class="sora-item">
    <div class="ply-btn" @click="addItemToPlaylistAndPlay(audio)">
      <scale-loader
        v-if="isLoading(audio)"
        color="#0D3A4D"
        height="10px"
        width="2px"
      ></scale-loader>
      <pause-icon v-else-if="isPlaying(audio)" fillColor="#0D3A4D" />
      <play-arrow-icon v-else fillColor="#0D3A4D" />
    </div>
    <div class="sora-info">
      <div class="sora-num">{{ sora.sora_num }}</div>
      <div v-if="sora.reciter_name" class="sora-num">
        {{ sora.reciter_name }}
      </div>
      <div class="sora-name">
        <router-link
          :to="
            '/' + current_language + '/' + sora.read_slug + '/' + sora.sora_id
          "
          rel="alternate"
          :hreflang="$store.state.current_language"
          class="card-reciter-name"
        >
          {{ sora.sora_name }}
        </router-link>
      </div>
    </div>
    <div class="sora-btn more-btn">
      <more-horiz-icon fillColor="#0D3A4D" />
    </div>
    <div class="sora-options">
      <div
        class="sora-btn share-btn"
        v-tooltip="trans('text.share')"
        @click="shareItem(share.title, share.url, share.description)"
      >
        <share-icon fillColor="#0D3A4D" />
      </div>
      <div
        class="sora-btn link-btn"
        v-tooltip="trans('text.copy-link')"
        v-clipboard:copy="sora.sora_audio"
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
        @click="downloadMp3({url : sora.sora_audio, num : sora.num})"
      >
        <cloud-download-icon fillColor="#0D3A4D" />
      </div>

      <div
        class="sora-btn playlist-add"
        v-tooltip="trans('text.add-to-playlist')"
        @click="addToPlaylist(audio)"
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
        v-if="sora.sora_report != '-1'"
        v-tooltip="trans('text.report-sora')"
        @click="
          reportSora({ read: sora.read_slug, sora: sora.sora_id, prefix: ajax_prefix })
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
  props: ["sora", "share", "read_id", "reciter", "rewaya"],
  data() {
    return {
      audio: {
        id: this.sora.id,
        read_id: this.sora.read_id,
        sora_id: this.read_id,
        num: this.sora.sora_num,
        name: this.sora.sora_name,
        reciter: this.reciter,
        url: this.share.url,
        rewaya: this.rewaya,
        description: this.share.description,
        file: this.sora.sora_audio,
        share_description: this.share.description,
        share_title: this.share.title,
        share_url: this.share.url,
      },
    };
  },
  computed: {
    ...mapState({
      current_language: (state) => state.current_language,
      downloading: (state) => state.download.downloading,
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
      reportSora: "reportSora"
    }),
  },
  mounted() {},
};
</script>
