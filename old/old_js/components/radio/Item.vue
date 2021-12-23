<template>
  <div class="card-radio">
    <div
      class="ply-btn"
      @click.prevent="
        getItemAndPlay(ajax_prefix + '/radio/item?id=' + radio.id)
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
    <div
      class="radio-info"
      @click.prevent="
        getItemAndPlay(ajax_prefix + '/radio/item?id=' + radio.id)
      "
    >
      <div class="radio-name">
        {{ radio.name }}<span>- {{ radio.rewaya_name }}</span>
      </div>
    </div>
    <div class="radio-btn more-btn">
      <more-horiz-icon fillColor="#0D3A4D" />
    </div>
    <div class="radio-options">
      <div
        class="radio-btn share-btn"
        v-tooltip="trans('text.share')"
        @click="
          shareItem(
            radio.share_title,
            radio.share_url + '?play=' + radio.slug,
            radio.share_description
          )
        "
      >
        <share-icon fillColor="#0D3A4D" />
      </div>
      <div
        class="radio-btn link-btn"
        v-tooltip="trans('text.copy-link')"
        v-clipboard:copy="radio.url"
        v-clipboard:error="clipboardErrorHandler"
        v-clipboard:success="clipboardSuccessHandler"
      >
        <link-icon fillColor="#0D3A4D" />
      </div>
      <div
        class="radio-btn ike-btn"
        v-if="radiosIncludes"
        v-tooltip="trans('text.remove-from-favorite')"
        @click="removeRadioFavorite(radio.id)"
      >
        <heart-icon fillColor="#f5b44b" />
      </div>
      <div
        class="radio-btn deslike-btn"
        v-tooltip="trans('text.add-to-favorite')"
        v-else
        @click="addRadioFavorite(radio.id)"
      >
        <heart-outline-icon fillColor="#0D3A4D" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["radio"],
  computed: {
    isPlaying: function () {
      return false;
    },
    isLoading: function () {
      return false;
    },
    radiosIncludes: function () {
      return this.$store.state.favorite.radios.includes(this.radio.id);
    },
  },
  methods: {
    shareItem(title, url, description) {
      if (typeof window !== "undefined") {
        AppEvent.$emit("share", title, url, description);
      }
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
    getItemAndPlay(url) {
      axios
        .get(url)
        .then(function (response) {
          window.appFoolter.$store.dispatch(
            "addPlayItem",
            response.data
          );
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    ...mapActions(["clipboardErrorHandler", "clipboardSuccessHandler"]),

    ...mapActions("favorite", {
      addRadioFavorite: "addRadio",
      removeRadioFavorite: "removeRadio",
    }),
  },
  mounted(){
    
  }
};
</script>
