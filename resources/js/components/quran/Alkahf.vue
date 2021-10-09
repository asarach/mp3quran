<template>
  <div class="main alkahf-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{ trans("text.surah-al-kahfi") }}</h1>
            <div class="header-options"></div>
          </div>
          <div class="col-lg-19">
            <ads-header></ads-header>
          </div>
        </div>
      </div>
    </div>
    <div class="show-body">
      <div class="container">
        <div class="row">
          <div v-if="style_version == 'r'" class="col-md-5">
            <desktop-sidebar></desktop-sidebar>
          </div>
          <div class="col-lg-19" id="sticky-container">
            <fullscreen ref="fullscreen" @change="fullscreenChange">
              <div class="alkahf-flipbook">
                <div class="mushafs-options">
                  <div class="form-group">
                    <label>{{ trans("text.listen") }}</label>
                    <select
                      class="custom-select"
                      v-model="audio"
                      @change="addItemToPlaylistAndPlay(audio)"
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
                    class="btn share-btn"
                    @click="
                      shareItem(
                        page_share.title,
                        page_share.url,
                        page_share.description
                      )
                    "
                  >
                    <span>{{ trans("text.share") }}</span>
                    <share-icon fillColor="#0D3A4D" />
                  </div>
                  <div class="btn fullscreen-btn" @click="toggleFullscreen">
                    <fullscreen-icon fillColor="#0D3A4D" />
                  </div>
                </div>
                <no-ssr>
                  <flip-book-desktop
                    v-if="style_version !== 'm'"
                    :part="part"
                    :page="pageNum"
                    :kahf="true"
                  ></flip-book-desktop>
                  <flip-book
                    v-else
                    :part="part"
                    :page="pageNum"
                    :kahf="true"
                  ></flip-book>
                </no-ssr>
              </div>
            </fullscreen>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import NoSSR from "vue-no-ssr";

export default {
  computed: {
    ...mapState({
      style_version: (state) => state.settings.style_version,
      read_soar: (state) => state.quran.read_soar,
      page: (state) => state.quran.page,
      page_share: (state) => state.quran.page_share,
      initial: (state) => state.initial,
    }),
  },

  components: {
    "no-ssr": NoSSR,
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
      this.$refs["fullscreen"].toggle(); // recommended
      // this.fullscreen = !this.fullscreen // deprecated
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    shareItem(title, url, description) {
      if (typeof window !== "undefined") {
        Event.$emit("share", title, url, description);
      }
    },
    nextPage() {
      this.$refs.flipbook.flipLeft();
    },
    ...mapActions("player", {
      addItemToPlaylistAndPlay: "addPlayItem",
    }),
  },

  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("quran/setAlkahf", this);
  },

  destroyed() {
    this.$store.dispatch("quran/unsetAlkahf");
  },
};
</script>
