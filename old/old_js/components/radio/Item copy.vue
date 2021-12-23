<template>
  <div class="card-radio">
    <div class="ply-btn" @click="addItemToPlaylistAndPlay()">
      <scale-loader v-if="isLoading(source)" color="#0D3A4D" height="10px" width="2px"></scale-loader>
      <pause-icon v-else-if="isPlaying(source)" fillColor="#0D3A4D" />
      <play-arrow-icon v-else fillColor="#0D3A4D" />
    </div>
    <div class="radio-info" @click="addItemToPlaylistAndPlay()">
      <div class="radio-name">{{radio.name}}<span>- {{radio.rewaya_name}}</span></div>
    </div>
    <div class="radio-btn more-btn">
      <more-horiz-icon fillColor="#0D3A4D" />
    </div>
    <div class="radio-options">
      <div class="radio-btn share-btn" v-tooltip="trans('text.share')" @click="shareItem(share.title, share.url + '?play=' + radio.slug , share.description)">
        <share-icon fillColor="#0D3A4D" />
      </div>
      <div class="radio-btn link-btn" v-tooltip="trans('text.copy-link')" v-clipboard:copy="radio.url" v-clipboard:error="clipboardErrorHandler" v-clipboard:success="clipboardSuccessHandler">
        <link-icon fillColor="#0D3A4D" />
      </div>
      <div
        class="radio-btn ike-btn"
        v-if="radiosIncludes(radio.id)"
        v-tooltip="trans('text.remove-from-favorite')"
        @click="removeRadioFavorite(radio.id)"
      >
        <heart-icon fillColor="#f5b44b" />
      </div>
      <div class="radio-btn deslike-btn" v-tooltip="trans('text.add-to-favorite')" v-else @click="addRadioFavorite(radio.id)">
        <heart-outline-icon fillColor="#0D3A4D" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["radio", "share"],
  computed: {
    source() {
      var source = {
        id:'100002-' + this.radio.id ,
        read_id: this.radio.id,
        sora_id: '100002',
        num: '000',
        name: this.radio.name,
        share_title: this.radio.name,
        reciter: '',
        type: 'radio',
        url: this.share.url,
        share_url: this.share.url,
        description: this.share.description,
        share_description: this.share.description,
        file:this.radio.url,
      }
      return source;
    },
    ...mapGetters({
      radiosIncludes: "favorite/radiosIncludes",
      isPlaying: "player/isPlaying",
      isLoading: "player/isLoading"
    })
  },
  methods: {
    shareItem(title, url, description) {
      if (typeof window !== "undefined") {
        Event.$emit("share", title, url, description);
      }
    },
    download(url) {
      var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
      var xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = function() {
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
    addItemToPlaylistAndPlay() {
      this.$store.dispatch("player/playItem", this.source);
      if (typeof window !== "undefined") {
        Event.$emit("player_play");
      }
    },

    ...mapActions([
      'clipboardErrorHandler', 
      'clipboardSuccessHandler' 
    ]),

    ...mapActions("favorite", {
      addRadioFavorite: "addRadio",
      removeRadioFavorite: "removeRadio"
    })
  },
  mounted() {
    if (this.$route.query.play == this.radio.slug) {
      this.addItemToPlaylistAndPlay();
    }
  }
};
</script>
