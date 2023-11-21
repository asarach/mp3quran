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
        @click="getItemAndPlay(ajax_prefix + '/tadabor/item?id=' + item.id, 'tb' + item.id)"
      >
        <span class="uni-icon icon-play_arrow" style="color: #fff"></span>
        {{ trans("text.play") }}
      </div>

      <a class="download-btn" :href="item.audio_url | downloadUrl">
        <div>
          <span class="uni-icon icon-cloud_download"></span>
          {{ trans("text.download") }}
        </div>
      </a>
    </div>

    <div class="databor-options">
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
              <span class="uni-icon icon-x" style="color: #000"></span>
            </div>
          </network>
          <network network="whatsapp" class="whatsapp">
            <div
              class="share-icon whatsapp"
              v-tooltip.top="trans('text.share-whatsapp')"
            >
              <span
                class="uni-icon icon-whatsapp"
                style="color: #43cc63"
              ></span>
            </div>
          </network>
          <network network="facebook" class="facebook">
            <div
              class="share-icon facebook"
              v-tooltip.top="trans('text.share-facebook')"
            >
              <span
                class="uni-icon icon-facebook"
                style="color: #4b69b0"
              ></span>
            </div>
          </network>
          <network network="telegram" class="telegram">
            <div
              class="share-icon telegram"
              v-tooltip.top="trans('text.share-telegram')"
            >
              <span
                class="uni-icon icon-telegram"
                style="color: #2c9bdb"
              ></span>
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
  props: ["item", "islink", "showitem"],
  data() {
    return {
      downloading: false,
    };
  },
  computed: {
     isPlaying: function () {
      if (
        this.$root.player_state.playing_item == 'tb' + this.item.id &&
        this.$root.player_state.playing_state == "playing"
      ) {
        return true;
      } else {
        return false;
      }
    },

    isLoading: function () {
      if (
        this.$root.player_state.playing_item == 'tb' + this.item.id &&
        this.$root.player_state.playing_state == "loading"
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    shareItem(title, url, description) {
      if (typeof window !== "undefined") {
        Event.$emit("share", title, url, description);
      }
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
    
    ...mapActions(["clipboardErrorHandlerText", "clipboardSuccessHandlerText"]),
  },
  mounted() {},
};
</script>
