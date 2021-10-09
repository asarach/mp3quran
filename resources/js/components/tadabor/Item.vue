<template>
  <div class="tadabor-item">
    <router-link
      v-if="islink"
      rel="alternate"
      :hreflang="$store.state.current_language"
      :to="'/' + $store.state.current_language + '/tadabor/' + item.id"
    >
      <div class="databor-image">
        <img :src="item.image_url" alt="" />
      </div>
      <div class="databor-text" v-html="item.text"></div>
    </router-link>
    <div v-else>
      <div class="databor-image">
        <img :src="item.image_url" alt="" />
      </div>
      <div class="databor-text" v-html="item.text"></div>
    </div>
    <div class="databor-options">
      <div class="option-btn">
        <div
          class="ply-btn"
          @click="addItemToPlaylistAndPlay(audio)"
          v-tooltip.top="trans('text.play-tadabor')"
        >
          <scale-loader
            v-if="isLoading(audio)"
            color="#0D3A4D"
            height="10px"
            width="2px"
          ></scale-loader>
          <pause-icon v-else-if="isPlaying(audio)" fillColor="#0D3A4D" />
          <play-arrow-icon v-else fillColor="#0D3A4D" />
        </div>
      </div>
      <div class="option-btn">
        <div
          v-if="downloading"
          class="sora-btn downloading"
          v-tooltip.top="trans('text.downloading')"
        >
          <scale-loader
            color="#0D3A4D"
            height="10px"
            width="2px"
          ></scale-loader>
        </div>
        <div
          v-else
          class="sora-btn download-btn"
          v-tooltip.top="trans('text.download-tadabor')"
          @click="download(item.audio_url)"
        >
          <cloud-download-icon fillColor="#0D3A4D" />
        </div>
      </div>
      <div class="option-btn">
        <div
         v-tooltip.top="trans('text.share-text')"
          v-clipboard:copy="item.text"
          v-clipboard:error="clipboardErrorHandlerText"
          v-clipboard:success="clipboardSuccessHandlerText"
        >
          <code-icon fillColor="#0D3A4D" />
        </div>
      </div>

      <social-sharing
        :url="item.share_url"
        :title="item.share_title"
        :description="item.share_description"
        inline-template
      >
        <div class="show-share">
          <network network="twitter" class="twitter">
            <div
              class="share-icon twitter"
              v-tooltip.top="trans('text.share-twitter')"
            >
              <twitter-icon fillColor="#52a7e7" />
            </div>
          </network>
          <network network="whatsapp" class="whatsapp">
            <div
              class="share-icon whatsapp"
              v-tooltip.top="trans('text.share-whatsapp')"
            >
              <whatsapp-icon fillColor="#43cc63" />
            </div>
          </network>
          <network network="facebook" class="facebook">
            <div
              class="share-icon facebook"
              v-tooltip.top="trans('text.share-facebook')"
            >
              <facebook-icon fillColor="#4B69B0" />
            </div>
          </network>
          <network network="telegram" class="telegram">
            <div
              class="share-icon telegram"
              v-tooltip.top="trans('text.share-telegram')"
            >
              <telegram-icon fillColor="#2c9bdb" />
            </div>
          </network>
        </div>
      </social-sharing>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  props: ["item", "islink"],
  data() {
    return {
      downloading: false,
      audio: {
        id: "tb" + this.item.id,
        read_id: "read_id",
        sora_id: "sora_id",
        num: this.item.id,
        name: this.item.title,
        reciter: this.item.reciter_name,
        url: "url",
        rewaya: this.item.rewaya_name,
        description: this.item.share_description,
        file: this.item.audio_url,
        share_description: this.item.share_description,
        share_title: this.item.share_title,
        share_url: this.item.share_url,
      },
    };
  },
  computed: {
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
    download(url) {
      var self = this;
      var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
      var xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      self.downloading = true;

      xhr.onload = function () {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = filename;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        self.downloading = false;
      };
      xhr.open("GET", url);
      xhr.send();
    },
    ...mapActions(["clipboardErrorHandlerText", "clipboardSuccessHandlerText"]),
    ...mapActions("player", {
      addToPlaylist: "addItem",
      addItemToPlaylistAndPlay: "addPlayItem",
    }),
    ...mapActions("favorite", {
      addSoraFavorite: "addSora",
      removeSoraFavorite: "removeSora",
    }),
  },
  mounted() {},
};
</script>
