<template>
  <div class="main mushafs-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{trans('text.quran')}}</h1>
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
              <div class="mushafs-flipbook">
                <div class="mushafs-options">
                  <div class="form-group">
                    <select class="custom-select" v-model="sora" @change="getReads()">
                      <option value class="d-none" disabled selected>{{trans('text.sora')}}</option>
                      <option v-for="(sora,index) in soar" :key="index" :value="sora">{{sora.name}}</option>
                    </select>
                  </div>
                  <div class="form-group mr-md-2">
                    <select
                      class="custom-select"
                      v-model="read"
                      @change="getItemAndPlay('/ajax/soar/item?r=' +  read + '&s=' + sora.id )"
                    >
                      <option value class="d-none" disabled selected>{{trans('text.listen')}}</option>
                      <option v-for="(read,index) in reads" :key="index" :value="read.id">
                        {{read.reciter_name}} -
                        <span>{{read.rewaya_name}}</span>
                      </option>
                    </select>
                  </div>
                  <div class="form-group mr-auto">
                    <select class="custom-select" v-model="pageNum">
                      <option value="0" class="d-none" disabled selected>{{trans('text.part')}}</option>
                      <option
                        v-for="(part,index) in parts"
                        :key="index"
                        :value="part.start_page"
                      >{{part.name}}</option>
                    </select>
                  </div>
                  <div class="btn fullscreen-btn" @click="toggleFullscreen">
                    <fullscreen-icon fillColor="#0D3A4D" />
                  </div>
                </div>
                <no-ssr>
                  <flip-book-desktop v-if="style_version !== 'm'" :part="part" :page="pageNum" :kahf="false"></flip-book-desktop>
                  <flip-book v-else :part="part" :page="pageNum" :kahf="false"></flip-book>
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
    part() {
      return {
          start: 1,
          count: 609
        };
    },
    ...mapState({
      style_version: state => state.settings.style_version,
      soar: state => state.list.soar,
      reads: state => state.list.reads,
      parts: state => state.quran.parts,
      initial: state => state.initial
    })
  },

  components: {
    "no-ssr": NoSSR
  },

  data() {
    return {
      fullscreen: false,
      url: this.ajax_prefix + "/mushaf",
      pageNum: 0,
      read: "",
      sora: ""
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
    changePart(index) {
      this.part = this.parts[index];
    },
    startPage() {
      this.pageNum = 1;
    },
    lastPage() {
      this.pageNum = this.mushaf_pages.length - 1;
    },
    getReads() {
      this.$store.dispatch(
        "list/setReads",
        "/ajax/reads/list?s=" + this.sora.id
      );
    },
    ...mapActions("player", {
      getItemAndPlay: "getItemAndPlay"
    })
  },
  mounted() {
    this.$store.dispatch("list/setSoar", "/ajax/soar/list");
  },
  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("quran/setData", this);
  },

  destroyed() {
    this.$store.dispatch("quran/unsetData");
  },
  watch: {
    sora: function(val) {
      if (this.sora.start_page % 2 || this.style_version == 'm' ) {
        this.pageNum = this.sora.start_page;
      } else {
        this.pageNum = this.sora.start_page - 1;
      }
    }
  }
};
</script>
