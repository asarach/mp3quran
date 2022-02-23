<template>
  <div class="card-radio" :class="{show: radio.show}">
    <div
      class="ply-btn"
      @click.prevent="
        getItemAndPlay(
          ajax_prefix + '/radio/item?id=' + radio.id,
          '100002-' + radio.id
        )
      "
    >
      <scale-loader
        v-if="isLoading({ type: 'radio', id: '100002-' + radio.id })"
        color="#0D3A4D"
        height="10px"
        width="2px"
      ></scale-loader>
      <span
        v-else-if="isPlaying({ type: 'radio', id: '100002-' + radio.id })"
        class="uni-icon icon-pause"
        style="color: #f5b44b"
      ></span>
      <span
        v-else
        class="uni-icon icon-play_arrow"
        style="color: #f5b44b"
      ></span>
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
    ...mapGetters(["isPlaying", "isLoading"]),
    ...mapState({
      current_playing_item: (state) => state.playing_item,
    }),
  },
  methods: {
    shareItem(title, url, description) {
      AppEvent.$emit("share", title, url, description);
    },
    download(url) {
      var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
      var xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = function () {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = filename;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
      };
      xhr.open("GET", url);
      xhr.send();
    },
    getItemAndPlay(url, playing_item) {
      if (this.current_playing_item != playing_item) {
        window.appFoolter.$store.commit("setState", {
          playing_state: "loading",
          playing_item: playing_item,
          playing_type: "radio",
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

    ...mapActions(["clipboardErrorHandler", "clipboardSuccessHandler"]),

    ...mapActions("favorite", {
      addRadioFavorite: "addRadio",
      removeRadioFavorite: "removeRadio",
    }),
  },
  mounted() {},
};
</script>
