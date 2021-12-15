<template>
  <fullscreen ref="fullscreen" @change="fullscreenChange">
    <div class="mushafs-flipbook">
      <div class="mushafs-options">
        <div class="form-group">
          <select class="custom-select" v-model="sora" @change="getReads()">
            <option value class="d-none" disabled selected>
              {{ trans("text.sora") }}
            </option>
            <option v-for="(sora, index) in soar" :key="index" :value="sora">
              {{ sora.name }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <select
            class="custom-select"
            v-model="read"
            @change="
              getAddPlayItem({read:read, sora:  sora.id})
            "
          >
            <option value class="d-none" disabled selected>
              {{ trans("text.listen") }}
            </option>
            <option
              v-for="(read, index) in reads"
              :key="index"
              :value="read.id"
            >
              {{ read.reciter_name }} -
              <span>{{ read.rewaya_name }}</span>
            </option>
          </select>
        </div>
        <div class="form-group">
          <select class="custom-select" v-model="pageNum">
            <option value="0" class="d-none" disabled selected>
              {{ trans("text.part") }}
            </option>
            <option
              v-for="(part, index) in parts"
              :key="index"
              :value="part.start_page"
            >
              {{ part.name }}
            </option>
          </select>
        </div>
        <div class="btn fullscreen-btn" @click="toggleFullscreen">
          <span class="uni-icon icon-fullscreen" style="color: #fff;"></span>
        </div>
      </div>
      <flip-book-desktop
        v-if="style_version !== 'm'"
        :part="part"
        :page="pageNum"
        :kahf="false"
      ></flip-book-desktop>
      <flip-book v-else :part="part" :page="pageNum" :kahf="false"></flip-book>
    </div>
  </fullscreen>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    part() {
      return {
        start: 1,
        count: 609,
      };
    },
    ...mapState({
      soar: (state) => state.quran.soar,
      reads: (state) => state.quran.reads,
      parts: (state) => state.quran.parts,
    }),
  },
  data() {
    return {
      fullscreen: false,
      url: this.ajax_prefix + "/mushaf",
      pageNum: 0,
      read: "",
      sora: "",
    };
  },

  methods: {
    toggleFullscreen() {
      this.$refs["fullscreen"].toggle(); 
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    getReads() {
      this.$store.dispatch(
        "quran/setReads",
        this.ajax_prefix + "/reads/list?s=" + this.sora.id
      );
    },
    getAddPlayItem(item) {
      var url = this.ajax_prefix +'/soar/item?r=' + item.read + '&s=' + item.sora;
      window.appFoolter.$store.dispatch("getAddPlayItem", url);
    },
  },
  mounted() {
    this.$store.state.loading = true;
    this.$store.dispatch("quran/setData", this);
    this.$store.dispatch("quran/setSoar", this.ajax_prefix + "/soar/list");
  },
  destroyed() {
    this.$store.dispatch("quran/unsetData");
  },
  watch: {
    sora: function (val) {
      if (this.sora.start_page % 2 || this.style_version == "m") {
        this.pageNum = this.sora.start_page;
      } else {
        this.pageNum = this.sora.start_page - 1;
      }
    },
  },
};
</script>
