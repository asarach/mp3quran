<template>
  <fullscreen ref="fullscreen" @change="fullscreenChange">
    <div class="alkahf-flipbook">
      <div class="mushafs-options">
        <div class="form-group">
          <label>{{ trans("text.listen") }}</label>
          <select
            class="custom-select"
            v-model="audio"
            @change="getAddPlayItem(audio)"
          >
            <option
              v-for="(sora, index) in read_soar"
              :key="index"
              :value="sora"
            >
              {{ sora.reciter_name }}
            </option>
          </select>
        </div>
        <div
          class="btn share-btn mr-auto"
          @click="
            shareItem(page_share.title, page_share.url, page_share.description)
          "
        >
          <span>{{ trans("text.share") }}</span>
          <span class="uni-icon icon-share" style="color: #fff"></span>
        </div>
        <div class="btn fullscreen-btn" @click="toggleFullscreen">
          <span class="uni-icon icon-fullscreen"  style="color: #fff"></span>
        </div>
      </div>
      <flip-book-desktop
        v-if="style_version !== 'm'"
        :part="part"
        :page="pageNum"
        :kahf="true"
      ></flip-book-desktop>
      <flip-book v-else :part="part" :page="pageNum" :kahf="true"></flip-book>
    </div>
  </fullscreen>
</template>
<script>
import { mapState } from "vuex";

export default {

  computed: {
    ...mapState({
      style_version: (state) => state.settings.style_version,
      read_soar: (state) => state.quran.read_soar,
      page_share: (state) => state.quran.page_share,
    }),
  },
  data() {
    return {
      url: this.ajax_prefix + "/alkahf-surah",
      pageNum: 293,
      audio: {},
      part: {
        start: 294,
        count: 306,
      },
    };
  },

  methods: {
    toggleFullscreen() {
      this.$refs["fullscreen"].toggle();
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    shareItem(title, url, description) {
      AppEvent.$emit("share", title, url, description);
    },
    getAddPlayItem(item) {
      var url = this.ajax_prefix +'/soar/item?r=' + item.read + '&s=' + item.sora;
      window.appFoolter.$store.dispatch("getItemAndPlay", url);
    },
  },

  mounted() {
    this.$store.state.loading = true;
    this.$store.dispatch("quran/setAlkahf", this);
  },

  destroyed() {
    this.$store.dispatch("quran/unsetAlkahf");
  },
};
</script>
