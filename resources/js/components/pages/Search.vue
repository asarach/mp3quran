<template>
  <div class="main search-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{trans('text.search')}}</h1>
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
            <ul class="nav nav-tabs">
              <li class="nav-item" v-if="reads.data && reads.data.length != 0">
                <a
                  class="nav-link"
                  :class="{active : active_tab == 'reads'}"
                  href="#"
                  @click.prevent="showTab('reads')"
                >{{trans('text.reads')}}</a>
              </li>
              <li class="nav-item" v-if="reciters.data && reciters.data.length != 0">
                <a
                  class="nav-link"
                  :class="{active : active_tab == 'reciters'}"
                  href="#"
                  @click.prevent="showTab('reciters')"
                >{{trans('text.reciters')}}</a>
              </li>
              <li class="nav-item" v-if="radios.data && radios.data.length != 0">
                <a
                  class="nav-link"
                  :class="{active : active_tab == 'radios'}"
                  href="#"
                  @click.prevent="showTab('radios')"
                >{{trans('text.radios')}}</a>
              </li>
              <li class="nav-item" v-if="videos.data && videos.data.length != 0">
                <a
                  class="nav-link"
                  :class="{active : active_tab == 'videos'}"
                  href="#"
                  @click.prevent="showTab('videos')"
                >{{trans('text.videos')}}</a>
              </li>
              <li class="nav-item" v-if="tvs.data && tvs.data.length != 0">
                <a
                  class="nav-link"
                  :class="{active : active_tab == 'tvs'}"
                  href="#"
                  @click.prevent="showTab('tvs')"
                >{{trans('text.tvs')}}</a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="search-tab-pane" v-show="active_tab == 'reads'">
                <read v-for="read  in reads.data" :key="read.id" :read="read"></read>
                <button
                  type="button"
                  v-if="reads.current_page < reads.last_page"
                  class="btn btn-success"
                  @click="moreReads()"
                >
                  <more-icon fillColor="#fff" />
                  {{trans('text.lead-more')}}
                </button>
              </div>
              <div class="search-tab-pane" v-show="active_tab == 'reciters'">
                <card-reciter
                  v-for="reciter  in reciters.data"
                  :key="reciter.id"
                  :reciter="reciter"
                ></card-reciter>
                <button
                  type="button"
                  v-if="reciters.current_page < reciters.last_page"
                  class="btn btn-success"
                  @click="moreReciters()"
                >
                  <more-icon fillColor="#fff" />
                  {{trans('text.lead-more')}}
                </button>
              </div>
              <div class="search-tab-pane" v-show="active_tab == 'radios'">
                <card-radio
                  v-for="radio  in radios.data"
                  :key="radio.id"
                  :share="{title : radio.share_title, url : radio.share_url, description : radio.share_description}"
                  :radio="radio"
                ></card-radio>
                <button
                  type="button"
                  v-if="radios.current_page < radios.last_page"
                  class="btn btn-success"
                  @click="moreRadios()"
                >
                  <more-icon fillColor="#fff" />
                  {{trans('text.lead-more')}}
                </button>
              </div>
              <div class="search-tab-pane" v-show="active_tab == 'videos'">
                <div class="videos-list">
                  <div class="card-deck" v-for="(deck, index)  in videos_decks" :key="index">
                    <card-video v-for="video  in deck" :key="video.id" :video="video"></card-video>
                  </div>
                </div>
                <button
                  type="button"
                  v-if="videos.current_page < videos.last_page"
                  class="btn btn-success"
                  @click="moreVides()"
                >
                  <more-icon fillColor="#fff" />
                  {{trans('text.lead-more')}}
                </button>
              </div>
              <div class="search-tab-pane" v-show="active_tab == 'tvs'">
                <card-tv v-for="tv  in tvs.data" :key="tv.id" :tv="tv"></card-tv>
                <button
                  type="button"
                  v-if="tvs.current_page < tvs.last_page"
                  class="btn btn-success"
                  @click="moreTvs()"
                >
                  <more-icon fillColor="#fff" />
                  {{trans('text.lead-more')}}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    videos_decks() {
      let array = this.videos.data;
      if (typeof array !== "undefined") {
        let decks = [];

        var i,
          j,
          temparray,
          chunk = 3;
        for (i = 0, j = array.length; i < j; i += chunk) {
          temparray = array.slice(i, i + chunk);
          decks.push(temparray);
        }

        return decks;
      } else {
        return [];
      }
    },

    ...mapState({
      style_version: state => state.settings.style_version,
      videos: state => state.search.videos,
      radios: state => state.search.radios,
      reciters: state => state.search.reciters,
      tvs: state => state.search.tvs,
      reads: state => state.search.reads,
      initial: state => state.initial
    })
  },

  data() {
    return {
      url: this.ajax_prefix + "/search?s=" + this.$route.query.s,
      active_tab: "reads"
    };
  },

  methods: {
    moreReads() {
      this.$store.dispatch("search/moreReads", this.url + "&t=reads");
    },
    moreReciters() {
      this.$store.dispatch("search/moreReciters", this.url + "&t=reciters");
    },
    moreRadios() {
      this.$store.dispatch("search/moreRadios", this.url + "&t=radios");
    },
    moreVides() {
      this.$store.dispatch("search/moreVides", this.url + "&t=videos");
    },
    moreTvs() {
      this.$store.dispatch("search/moreTvs", this.url + "&t=tvs");
    },
    showTab(tab) {
      this.active_tab = tab;
    }
  },

  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("search/setData", this);
  },

  destroyed() {
    this.$store.dispatch("search/unsetData");
  },

  watch: {
    reads: function() {
      if (this.reads.data && this.reads.data.length != 0) {
        this.active_tab = "reads";
      } else if (this.reciters.data && this.reciters.data.length != 0) {
        this.active_tab = "reciters";
      } else if (this.radios.data && this.radios.data.length != 0) {
        this.active_tab = "radios";
      } else if (this.videos.data && this.videos.data.length != 0) {
        this.active_tab = "videos";
      } else if (this.tvs.data && this.tvs.data.length != 0) {
        this.active_tab = "tvs";
      }
    },
    "$route.query.s"(newQuery) {
      this.$Progress.start();
      this.url = this.ajax_prefix + "/search?s=" + newQuery;
      this.$store.dispatch("search/setData", this);
    }
  }
};
</script>
