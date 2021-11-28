<template>
  <div class="tadabor-item">
    <a
      v-if="islink"
      rel="alternate"
      :hreflang="$store.state.current_language"
      :href="prefix + 'tadabor/' + item.id"
    >
      <div class="databor-image">
        <img :src="item.image_url" alt="" />
      </div>
      <div class="databor-text" v-html="item.text"></div>
    </a>
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
          @click="getItemAndPlay(ajax_prefix + '/tadabor/item?id=' + item.id)"
          v-tooltip.top="trans('text.play-tadabor')"
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
           
          ></span>
          <span
            v-else
            class="uni-icon icon-play_arrow1"
           
          ></span>
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
          <span
            class="uni-icon icon-cloud_download"
           
          ></span>
        </div>
      </div>
      <div class="option-btn">
        <div
          v-tooltip.top="trans('text.share-text')"
          v-clipboard:copy="item.text"
          v-clipboard:error="clipboardErrorHandlerText"
          v-clipboard:success="clipboardSuccessHandlerText"
        >
          <span class="uni-icon icon-code"></span>
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
              <span class="icon-twitter" style="color: #52a7e7"></span>
            </div>
          </network>
          <network network="whatsapp" class="whatsapp">
            <div
              class="share-icon whatsapp"
              v-tooltip.top="trans('text.share-whatsapp')"
            >
              <span class="icon-whatsapp" style="color: #43cc63"></span>
            </div>
          </network>
          <network network="facebook" class="facebook">
            <div
              class="share-icon facebook"
              v-tooltip.top="trans('text.share-facebook')"
            >
              <span class="icon-facebook" style="color: #4b69b0"></span>
            </div>
          </network>
          <network network="telegram" class="telegram">
            <div
              class="share-icon telegram"
              v-tooltip.top="trans('text.share-telegram')"
            >
              <span class="icon-telegram" style="color: #2c9bdb"></span>
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
    };
  },
  computed: {
    isPlaying: function () {
      return false;
    },
    isLoading: function () {
      return false;
    }
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
    ...mapActions(["clipboardErrorHandlerText", "clipboardSuccessHandlerText"]),
    ...mapActions("favorite", {
      addSoraFavorite: "addSora",
      removeSoraFavorite: "removeSora",
    }),
  },
  mounted() {},
};
</script>
