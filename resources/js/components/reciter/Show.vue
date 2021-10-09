<template>
  <div class="main reciter-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-13">
            <h1>{{reciter.name}} - {{read.rewaya_name}}</h1>
            <div class="header-options">
              <button
                type="button"
                class="btn btn-primary"
                v-if=" read.radio_url.length > 0"
                @click="toggelRadio()"
              >
                <radio-icon fillColor="#fff" />
                {{trans('text.listen-to-radio')}}
              </button>
              <a v-if="read.itunes && read.itunes.length > 0 " :href="read.itunes" target="_blank" type="button" class="btn btn-primary">
                <itunes-icon fillColor="#fff" />
                {{trans('text.itunes')}}
              </a>
              <a
                v-if="read.torrent && read.torrent != '0'"
                :href="read.torrent"
                target="_blank"
                type="button"
                class="btn btn-primary"
              >
                <cloud-download-icon fillColor="#fff" />
                {{trans('text.torrent')}}
              </a>
            </div>
          </div>
          <div class="col-lg-11 d-flex-cc">
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
            <div class="show-filters">
              <div class="filter-soar">
                <input
                  type="text"
                  class="form-control"
                  name="sora"
                  v-model="search_query"
                  :placeholder="trans('text.search-for-sora')"
                />
              </div>
              <div
                class="filter-soar like-btn"
                v-if="soarIncludes(read.read_id)"
                @click="removeReadFavorite(read.read_id)"
              >
                <heart-icon fillColor="#f5b44b" />
              </div>
              <div class="filter-soar deslike-btn" v-else @click="addReadFavorite(read.read_id)">
                <heart-outline-icon fillColor="#0D3A4D" />
              </div>
              <div class="filter-rewaya mr-auto" v-if="reciter.reads && reciter.reads.length > 1">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="triggerIdrewaya"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >{{read.rewaya_name + read.mushaf_name}}</button>
                  <div class="dropdown-menu" aria-labelledby="triggerIdrewaya">
                        <router-link  
                        v-for="(read,index) in reciter.reads"
                        :key="read.read_id"
                        class="dropdown-item"
                        :to="'/' +  current_language +'/' + read.slug"  
                        rel="alternate" :hreflang="$store.state.current_language" 
                        >{{read.rewaya_name + read.mushaf_name}}</router-link>

                  </div>
                </div>
              </div>
            </div>
            <div class="soar-list">
              <div class="row">
                <div class="col-md-12">
                  <ul class="list-unstyled">
                    <li v-for="sora in soar_part_a" :key="sora.id">
                      <sora
                        :sora="sora"
                        :rewaya="read.rewaya_name"
                        :read_id="read.read_id"
                        :reciter="reciter.name"
                        :share="{title : read.share_title, url : read.share_url, description : read.share_description}"
                      ></sora>
                    </li>
                  </ul>
                </div>
                <div class="col-md-12">
                  <ul class="list-unstyled">
                    <li v-for="sora in soar_part_b" :key="sora.id">
                      <sora
                        :sora="sora"
                        :rewaya="read.rewaya_name"
                        :read_id="read.read_id"
                        :reciter="reciter.name"
                        :share="{title : read.share_title, url : read.share_url, description : read.share_description}"
                      ></sora>
                    </li>
                  </ul>
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
    read() {
      if (
        typeof this.reciter.reads !== "undefined" &&
        this.reciter.reads.length > 0
      ) {
        return this.reciter.reads[this.active_read];
      } else {
        return {
          soar: [],
          radio_url: ""
        };
      }
    },
    soarold() {
      if (typeof this.reciter.reads !== "undefined") {
        let filtered = this.reciter.reads[this.active_read].soar;
        let q = this.search_query;
        if (q) {
          filtered = [];
          let q1 = q.replace("ا", "أ");
          let q2 = q.replace("ا", "إ");
          let array = [q1, q2, q];
          for (let index = 0; index < array.length; index++) {
            let filtered1 = this.reciter.reads[this.active_read].soar.filter(
              m => {
                return m.sora_name.indexOf(array[index]) > -1;
              }
            );
            filtered = new Set([...filtered, ...filtered1]);
          }
        }
        return filtered;
      } else {
        return [];
      }
    },
    soar_part_a() {
      if (typeof this.reciter.reads !== "undefined") {
        let all_soar = this.reciter.reads[this.active_read].soar;
        var number = all_soar.length / 2;
        return all_soar.slice(0, number + 1);
      } else {
        return [];
      }
    },
    soar_part_b() {
      if (typeof this.reciter.reads !== "undefined") {
        let all_soar = this.reciter.reads[this.active_read].soar;
        var number = all_soar.length / 2;
        return all_soar.slice(number + 1, number * 2);
      } else {
        return [];
      }
    },

    ...mapState({
      style_version: state => state.settings.style_version,
      current_language: state => state.current_language,
      reciter: state => state.reciter.reciter,
      active_read: state => state.reciter.active_read,
      initial: state => state.initial
    }),

    ...mapGetters({
      soarIncludes: "favorite/readsIncludes",
      isPlaying: "player/isPlaying",
      readsIncludes: "favorite/readsIncludes"
    })
  },

  data() {
    return {
      url: this.ajax_prefix + "/" + this.$route.params.slug,
      current_read: 0,
      search_query: ""
    };
  },

  methods: {
    toggelRadio() {
      var source = {
        id: "100002-" + this.reciter.reads[this.active_read].read_id,
        read_id: this.reciter.reads[this.active_read].read_id,
        sora_id: "100002",
        num: "000",
        name: this.trans("text.live-radio"),
        share_title: this.trans("text.live-radio"),
        reciter: this.reciter.name,
        url: this.read.share_url,
        share_url: this.read.share_url,
        description: this.read.share_description,
        share_description: this.read.share_description,
        file: this.reciter.reads[this.active_read].radio_url
      };      

      this.$store.dispatch("player/playItem", source);
      if (typeof window !== "undefined") {
        Event.$emit("player_play");
      }
    },
    playAll() {
      let items = this.soar;
      for (let i = 0; i < items.length; i++) {
        var source = {
          id: items[i].id,
          read_id: this.reciter.reads[this.active_read].read_id,
          sora_id: items[i].sora_id,
          num: items[i].sora_num,
          name: items[i].sora_name,
          share_title: items[i].sora_name,
          reciter: this.reciter.name,
          url: this.read.share_url,
          share_url: this.read.share_url,
          description: this.read.share_description,
          share_description: this.read.share_description,
          file: items[i].sora_audio
        };

        this.$store.dispatch("player/addItem", items[i]);
      }
      this.$store.dispatch("player/playItem", source);
      if (typeof window !== "undefined") {
        Event.$emit("player_play");
      }
    },
    selectRewaya(index) {
      this.current_read = index;
    },
    ...mapActions("favorite", {
      addReadFavorite: "addRead",
      removeReadFavorite: "removeRead"
    })
  },
  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("reciter/setItem", { vm: this, url: this.url });
  },
  destroyed() {
    this.$store.dispatch("reciter/unsetItem");
  },
  watch: {
    search_query: function(q) {
      var url = this.url + "?q=" + q;
      this.$store.dispatch("reciter/setItem", { vm: this, url: url });
    },
    $route(to, from) {
      var url = this.ajax_prefix + "/" + to.params.slug;
      this.$Progress.start();
      this.$store.state.loading = true;
      this.$store.dispatch("reciter/setItem", { vm: this, url: url });

    }
  }
};
</script>
