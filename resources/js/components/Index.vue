<template>
  <div class="main home-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div v-if="style_version != 'm'" class="header-options">
              <quick-access inclass="btn btn-primary"></quick-access>
            </div>
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
            <div class="nav-tabs-wrapper">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a
                    href="#"
                    :class="{ active: type == 'all' }"
                    class="nav-link"
                    @click="getAll()"
                    >{{ trans("text.all") }}</a
                  >
                </li>
                <li v-if="show_tadabor" class="nav-item">
                  <router-link-asa
                    class="nav-link"
                    :class="{ active: type == 'discover' }"
                    :to="'/' + $store.state.current_language + '/tadabor'"
                    exact
                  >
                    {{ trans("text.tadabor-btn") }}
                  </router-link-asa>
                </li>
                <li v-if="style_version == 'm'" class="nav-item">
                  <quick-access inclass="nav-link"></quick-access>
                </li>
                <li v-if="style_version == 'm'" class="nav-item">
                  <router-link-asa
                    class="nav-link"
                    :class="{ active: type == 'newsletter' }"
                    :to="'/' + $store.state.current_language + '/newsletter'"
                    exact
                  >
                    {{ trans("text.newsletter") }}
                  </router-link-asa>
                </li>
              </ul>
            </div>
            <div class="show-filters">
              <div class="filter-soar">
                <input
                  type="text"
                  class="form-control"
                  name="sora"
                  v-model="search_query"
                  :placeholder="trans('text.search-for-reciter')"
                />
              </div>
              <div class="filter-rewaya mr-auto">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="triggerIdrewaya"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {{ selected_rewaya }}
                  </button>
                  <div class="dropdown-menu" aria-labelledby="triggerIdrewaya">
                    <a
                      class="dropdown-item"
                      href="#"
                      @click="selectRewaya('none')"
                      >{{ trans("text.all") }}</a
                    >
                    <a
                      class="dropdown-item"
                      href="#"
                      v-for="(rewaya, index) in rewayat"
                      :key="rewaya.id"
                      @click="selectRewaya(index)"
                      >{{ rewaya.name }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="home-reads letters">
              <div v-if="type == 'all'" class="reads-list letters">
                <div
                  v-for="(group, letter) in reads"
                  :key="letter"
                  :id="'letter_' + letter"
                  class="home-read-group"
                >
                  <h3
                    class="hrg-letter"
                    v-if="group.length > 0 && letter.length > 0"
                  >
                    {{ letter }}
                  </h3>
                  <div class="row" v-if="group.length > 0">
                    <div
                      v-for="(read, index) in group"
                      v-if="read.reciter_name"
                      :key="index"
                      class="col-md-8"
                    >
                      <div class="card-read" :title="read.soar_count">
                        <div class="card-read-title">
                          <router-link
                            rel="alternate"
                            :hreflang="$store.state.current_language"
                            :to="
                              '/' +
                              $store.state.current_language +
                              '/' +
                              read.slug
                            "
                            >{{ read.reciter_name }}</router-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="type == 'all'" class="side-letters">
                <affix
                  relative-element-selector="#sticky-container"
                  :scrollAffix="true"
                  :offset="{ top: 10, bottom: 10 }"
                  style="width: 32px"
                >
                  <ul class="list-unstyled">
                    <li v-for="(group, letter) in reads" :key="letter">
                      <a :href="'#letter_' + letter">{{ letter }}</a>
                    </li>
                  </ul>
                </affix>
              </div>

              <div v-else class="reads-list">
                <div class="row">
                  <div
                    v-for="(read, index) in reads"
                    v-if="read.reciter_name"
                    :key="index"
                    class="col-md-8"
                  >
                    <div class="card-read">
                      <div class="card-read-title">
                        <router-link
                          rel="alternate"
                          :hreflang="$store.state.current_language"
                          :to="
                            '/' +
                            $store.state.current_language +
                            '/' +
                            read.slug
                          "
                          >{{ read.reciter_name }}</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    selected_rewaya() {
      if (this.rewayat[this.rewaya]) {
        return this.rewayat[this.rewaya].name;
      } else {
        return this.trans("text.select-rewaya");
      }
    },
    ...mapState({
      style_version: (state) => state.settings.style_version,
      reads: (state) => state.index.reads,
      show_tadabor: (state) => state.index.show_tadabor,
      rewayat: (state) => state.index.rewayat,
      initial: (state) => state.initial,
    }),
    ...mapGetters({
      soarIncludes: "favorite/soarIncludes",
      isPlaying: "player/isPlaying",
    }),
  },

  data() {
    return {
      url: this.ajax_prefix + "/",
      search_query: "",
      rewaya: "none",
      type: "all",
    };
  },

  methods: {
    showQuickAccess() {
      $("#quick_access").modal("show");
    },
    getAll() {
      this.$Progress.start();
      this.$store.state.loading = true;
      let url = this.url + "?t=all";
      this.$store.dispatch("index/setData", { vm: this, url: url });
      this.type = "all";
    },
    getRecent() {
      this.$Progress.start();
      this.$store.state.loading = true;
      let url = this.url + "?t=recent";
      this.type = "recent";

      this.$store.dispatch("index/setData", { vm: this, url: url });
    },
    getListen() {
      this.$Progress.start();
      this.$store.state.loading = true;
      let url = this.url + "?t=popular";
      this.$store.dispatch("index/setData", { vm: this, url: url });
      this.type = "popular";
    },
    getDiscover() {
      this.$Progress.start();
      this.$store.state.loading = true;
      let url = this.url + "?t=discover";
      this.$store.dispatch("index/setData", { vm: this, url: url });
      this.type = "discover";
    },
    loadMore() {
      this.$store.dispatch("index/moreReads", this.url + "more-reads");
    },
    selectRewaya(index) {
      if (index == "none") {
        var url = this.url + "?r=0";
      } else {
        var url = this.url + "?r=" + this.rewayat[index].id;
      }

      if (this.type) {
        url = url + "&t=" + this.type;
      }
      if (this.search_query) {
        url = url + "&q=" + this.search_query;
      }
      this.rewaya = index;
      this.$store.dispatch("index/setData", { vm: this, url: url });
    },
    ...mapActions("favorite", {
      addSoraFavorite: "addSora",
      removeSoraFavorite: "removeSora",
    }),
  },
  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("index/setData", { vm: this, url: this.url });
    this.type = "all";
  },
  destroyed() {
    this.$store.dispatch("index/unsetData");
  },
  watch: {
    search_query: function (q) {
      console.log(q);
      let url = this.url + "?q=" + q;
      if (this.type) {
        url = url + "&t=" + this.type;
      }

      if (this.rewayat[this.rewaya] && this.rewayat[this.rewaya].id) {
        url = url + "&r=" + this.rewayat[this.rewaya].id;
      }
      this.$store.dispatch("index/setData", { vm: this, url: url });
    },
  },
};
</script>
