<template>
  <div>
    <div class="nav-tabs-wrapper">

    
    <ul class="nav nav-tabs">
      <li class="nav-item" v-if="reads.data && reads.data.length != 0">
        <a
          class="nav-link"
          :class="{ active: active_tab == 'reads' }"
          href="#"
          @click.prevent="showTab('reads')"
          >{{ trans("text.reciters") }}</a
        >
      </li>
      <li class="nav-item" v-if="soar.data && soar.data.length != 0">
        <a
          class="nav-link"
          :class="{ active: active_tab == 'soar' }"
          href="#"
          @click.prevent="showTab('soar')"
          >{{ trans("text.soar") }}</a
        >
      </li>
      <li class="nav-item" v-if="radios.data && radios.data.length != 0">
        <a
          class="nav-link"
          :class="{ active: active_tab == 'radios' }"
          href="#"
          @click.prevent="showTab('radios')"
          >{{ trans("text.radios") }}</a
        >
      </li>
      <li class="nav-item" v-if="videos.data && videos.data.length != 0">
        <a
          class="nav-link"
          :class="{ active: active_tab == 'videos' }"
          href="#"
          @click.prevent="showTab('videos')"
          >{{ trans("text.videos") }}</a
        >
      </li>
    </ul>
    </div>
    <div class="tab-content">
      <div class="favorite-tab-pane" v-show="active_tab == 'reads'">
        <div class="row">
          <div class="col-md-12" v-for="read in reads.data" :key="read.id">
            <read :read="read"></read>
          </div>
        </div>

        <button
          type="button"
          v-if="reads.current_page < reads.last_page"
          class="btn btn-success"
          @click="moreReads()"
        >
          <span class="uni-icon icon-more-horizontal" style="color: #fff"></span>
          {{ trans("text.lead-more") }}
        </button>
      </div>
      <div class="favorite-tab-pane" v-show="active_tab == 'soar'">
        <div class="soar-list">
          <ul class="list-unstyled">
            <li v-for="sora in soar.data" :key="sora.id">
              <card-sora
                :sora="sora"
                :rewaya="sora.rewaya_name"
                :read_id="sora.read_id"
                :reciter="sora.reciter_name"
              ></card-sora>
            </li>
          </ul>
        </div>

        <button
          type="button"
          v-if="soar.current_page < soar.last_page"
          class="btn btn-success"
          @click="moreSoar()"
        >
          <span class="uni-icon icon-more-horizontal" style="color: #fff"></span>
          {{ trans("text.lead-more") }}
        </button>
      </div>
      <div class="favorite-tab-pane" v-show="active_tab == 'radios'">
        <card-radio
          v-for="radio in radios.data"
          :key="radio.id"
          :radio="radio"
        ></card-radio>
        <button
          type="button"
          v-if="radios.current_page < radios.last_page"
          class="btn btn-success"
          @click="moreRadios()"
        >
        <span class="uni-icon icon-more-horizontal" style="color: #fff"></span>
          {{ trans("text.lead-more") }}
        </button>
      </div>
      <div class="favorite-tab-pane" v-show="active_tab == 'videos'">
        <card-video
          v-for="video in videos.data"
          :key="video.id"
          :video="video"
        ></card-video>
        <button
          type="button"
          v-if="videos.current_page < videos.last_page"
          class="btn btn-success"
          @click="moreVides()"
        >
        <span class="uni-icon icon-more-horizontal" style="color: #fff"></span>
          {{ trans("text.lead-more") }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      videos: (state) => state.favorite.show.videos,
      radios: (state) => state.favorite.show.radios,
      reads: (state) => state.favorite.show.reads,
      soar: (state) => state.favorite.show.soar,
    }),
  },

  data() {
    return {
      url: this.ajax_prefix + "/favorites",
      active_tab: "reads",
    };
  },

  methods: {
    moreReads() {
      this.$store.dispatch("favorite/moreReads", this.url + "?t=reads");
    },
    moreSoar() {
      this.$store.dispatch("favorite/moreSoar", this.url + "?t=soar");
    },
    moreRadios() {
      this.$store.dispatch("favorite/moreRadios", this.url + "?t=radios");
    },
    moreVides() {
      this.$store.dispatch("favorite/moreVides", this.url + "?t=videos");
    },
    showTab(tab) {
      this.active_tab = tab;
    },
    setActiveTab() {
      if (this.reads.data && this.reads.data.length != 0) {
        this.active_tab = "reads";
      } else if (this.soar.data && this.soar.data.length != 0) {
        this.active_tab = "soar";
      } else if (this.radios.data && this.radios.data.length != 0) {
        this.active_tab = "radios";
      } else if (this.videos.data && this.videos.data.length != 0) {
        this.active_tab = "videos";
      }
    },
  },

  created() {
    this.$store.state.loading = true;
    this.$store.dispatch("favorite/setData", this);
  },

  destroyed() {
    this.$store.dispatch("favorite/unsetData");
  },

  watch: {
    soar: {
      deep: true,
      handler() {
        this.setActiveTab();
      },
    },
    reads: {
      deep: true,
      handler() {
        this.setActiveTab();
      },
    },
    radios: {
      deep: true,
      handler() {
        this.setActiveTab();
      },
    },
    videos: {
      deep: true,
      handler() {
        this.setActiveTab();
      },
    },
    "$route.query.s"(newQuery) {
      this.$Progress.start();
      this.url = this.ajax_prefix + "/favorite?s=" + newQuery;
      this.$store.dispatch("favorite/setData", this);
    },
  },
};
</script>
