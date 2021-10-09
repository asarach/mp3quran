
<template>
  <div v-if="source.file != 'empty'" class="audio-player">
    <desktop-player
      v-if="type == 'desktop'"
      :sources="source.file"
      :formats="['mp3']"
      :autoplay="true"
      :html5="true"
    ></desktop-player>
    <mobile-player 
    v-else 
    :sources="source.file" 
    :formats="['mp3']"
    :autoplay="true"
    :html5="true"></mobile-player>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: ["type"],
  computed: {
    ...mapState({
      source: state => state.player.source,
      playlist: state => state.player.playlist
    })
  },
  created() {
    if (!this.source || !this.source.file) {
      var source = {
        file: "empty"
      };
      this.$store.commit("player/setSource", { source: source });
    }
    for (let i = 0; i < this.playlist.length; i++) {
      if (!this.playlist[i]) {
        this.$store.dispatch("player/removeItem", i);
      }
    }
  }
};
</script>
