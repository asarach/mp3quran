<template>
  <div class="card-radio" :class="{ show: radio.show }">
    <div class="ply-btn" v-if="isLoading">
      <div class="la-line-scale la-sm" style="color: #f5b44a">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="ply-btn" v-else-if="isPlaying" @click="pauseItem()">
      <span class="uni-icon icon-pause" style="color: #f5b44b"></span>
    </div>
    <div
      v-else
      class="ply-btn"
      @click.prevent="
        getItemAndPlay(
          ajax_prefix + '/radio/item?id=' + radio.id,
          '100002-' + radio.id
        )
      "
    >
      <span class="uni-icon icon-play_arrow" style="color: #f5b44b"></span>
    </div>

    <div
      class="radio-info"
      @click.prevent="
        getItemAndPlay(
          ajax_prefix + '/radio/item?id=' + radio.id,
          '100002-' + radio.id
        )
      "
    >
      <div class="radio-name">
        {{ radio.name }}<span>- {{ radio.rewaya_name }}</span>
      </div>
    </div>
    <div class="radio-btn more-btn">
      <span class="uni-icon icon-more-horizontal"></span>
    </div>
    <div class="radio-options">
      <div
        class="radio-btn share-btn"
        v-tooltip="trans('text.share')"
        @click="
          shareItem(radio.share_title, radio.share_url, radio.share_description)
        "
      >
        <span class="uni-icon icon-share"></span>
      </div>
      <div
        class="radio-btn link-btn"
        v-tooltip="trans('text.copy-link')"
        v-clipboard:copy="radio.url"
        v-clipboard:error="clipboardErrorHandler"
        v-clipboard:success="clipboardSuccessHandler"
      >
        <span class="uni-icon icon-link"></span>
      </div>
      <div
        class="radio-btn ike-btn"
        v-if="radiosIncludes"
        v-tooltip="trans('text.remove-from-favorite')"
        @click="removeRadioFavorite(radio.id)"
      >
        <span class="uni-icon icon-favorite" style="color: #f5b44b"></span>
      </div>
      <div
        class="radio-btn deslike-btn"
        v-tooltip="trans('text.add-to-favorite')"
        v-else
        @click="addRadioFavorite(radio.id)"
      >
        <span class="uni-icon icon-favorite_outline"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  props: ["radio"],
  computed: {
    radiosIncludes: function () {
      return this.$store.state.favorite.radios.includes(this.radio.id);
    },
    isPlaying: function () {
      if (
        this.$root.player_state.playing_item == "100002-" + this.radio.id &&
        this.$root.player_state.playing_state == "playing"
      ) {
        return true;
      } else {
        return false;
      }
    },

    isLoading: function () {
      if (
        this.$root.player_state.playing_item == "100002-" + this.radio.id &&
        this.$root.player_state.playing_state == "loading"
      ) {
        return true;
      } else {
        return false;
      }
    },

    ...mapState({
      current_playing_item: (state) => state.playing_item,
    }),
  },
  methods: {
    shareItem(title, url, description) {
      AppEvent.$emit("share", title, url, description);
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
    ...mapActions(["clipboardErrorHandler", "clipboardSuccessHandler"]),
    ...mapActions("favorite", {
      addRadioFavorite: "addRadio",
      removeRadioFavorite: "removeRadio",
    }),
  },
  mounted() {},
};
</script>
