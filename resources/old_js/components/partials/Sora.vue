<template>
  <div class="sora-item">
    <div
      class="ply-btn"
      @click="
        getItemAndPlay(
          ajax_prefix + '/soar/item?r=' + read_id + '&s=' + sora.sora_id
        )
      "
    >
      <scale-loader
        v-if="isLoading"
        color="#0D3A4D"
        height="10px"
        width="2px"
      ></scale-loader>
      <span
        v-else-if="isPlaying"
        class="uni-icon icon-pause"
        style="color: #fff"
      ></span>
      <span
        v-else
        class="uni-icon icon-play_arrow1"
        style="color: #fff"
      ></span>
    </div>
    <div class="sora-info">
      <div class="sora-num">{{ sora.sora_num }}</div>
      <div v-if="sora.reciter_name" class="sora-num">
        {{ sora.reciter_name }}
      </div>
      <div class="sora-name">
        <a
          :href="prefix + sora.read_slug + '/' + sora.sora_id"
          rel="alternate"
          :hreflang="$store.state.current_language"
          class="card-reciter-name"
        >
          {{ sora.sora_name }}
        </a>
      </div>
    </div>
    <div class="sora-btn more-btn">
      <span
        class="uni-icon icon-more-horizontal"
       
      ></span>
    </div>
    <div class="sora-options">
      <div
        class="sora-btn share-btn"
        v-tooltip="trans('text.share')"
        @click="shareItem(share.title, share.sora_link, share.description)"
      >
        <span class="uni-icon icon-share"></span>
      </div>
      <div
        class="sora-btn link-btn"
        v-tooltip="trans('text.copy-link')"
        v-clipboard:copy="sora.sora_link"
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
      <div
        v-else
        class="sora-btn download-btn"
        v-tooltip="trans('text.download')"
        @click="downloadMp3({ url: sora.sora_audio, num: sora.num })"
      >
        <span
          class="uni-icon icon-cloud_download"
         
        ></span>
      </div>

      <div
        class="sora-btn playlist-add"
        v-tooltip="trans('text.add-to-playlist')"
        @click="addItem(audio)"
      >
        <span
          class="uni-icon icon-playlist_add"
         
        ></span>
      </div>
      <div
        class="sora-btn ike-btn"
        v-if="soarIncludes"
        v-tooltip="trans('text.remove-from-favorite')"
        @click="removeSoraFavorite(sora.id)"
      >
        <span class="uni-icon icon-favorite"></span>
      </div>
      <div
        class="sora-btn deslike-btn"
        v-tooltip="trans('text.add-to-favorite')"
        v-else
        @click="addSoraFavorite(sora.id)"
      >
        <span
          class="uni-icon icon-favorite_outline"
         
        ></span>
      </div>
      <div
        class="sora-btn report-btn"
        v-if="sora.sora_report != '-1'"
        v-tooltip="trans('text.report-sora')"
        @click="
          reportSora({
            read: sora.read_slug,
            sora: sora.sora_id,
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
      current_language: (state) => state.current_language,
      downloading: (state) => state.download.downloading,
    }),
  },
  methods: {
    shareItem(title, url, description) {
      AppEvent.$emit("share", title, url, description);
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
    addItem(item) {
      window.appFoolter.$store.dispatch("addItem", item);
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
  mounted() {},
};
</script>
