<template>
  <div class="desktop-player">
    <div class="container d-flex">
      <div class="ply-controls">
        <div class="ply-btn btn-previous" :class="{disabled: currentPosition() < 1}">
          <skip-previous-icon fillColor="#0D3A4D" @click="prev" />
        </div>
        <div class="ply-btn btn-play-pause" @click="togglePlayback">
          <pause-icon v-if="playing" fillColor="#0D3A4D" />
          <play-arrow-icon v-else fillColor="#0D3A4D" />
        </div>
        <div class="ply-btn btn-next" :class="{disabled: currentPosition() >= playlist.length - 1}">
          <skip-next-icon @click="next" fillColor="#0D3A4D" />
        </div>
      </div>
      <div class="ply-body">
        <div class="ply-timer">{{ timer }}</div>
        <div class="ply-progress">
          <vue-slider v-model="progress_bar" tooltip="none" />
        </div>
        <div class="ply-duration">{{ formatTime(duration)}}</div>
      </div>

      <div class="ply-options">
        <div class="ply-btn btn-volume">
          <volume-off-icon v-if="volume === 0" fillColor="#0D3A4D" />
          <volume-mute-icon v-else-if="volume <= 0.15" fillColor="#0D3A4D" />
          <volume-down-icon v-else-if="volume <= 0.65" fillColor="#0D3A4D" />
          <volume-up-icon v-else fillColor="#0D3A4D" />
          <div class="volume-selector">
            <vue-slider
              v-model="volume_bar"
              direction="btt"
              height="120"
              style="display: inline-block; margin: 12px 2px;"
              tooltip="none"
            />
          </div>
        </div>
        <div class="ply-btn btn-list" @click="toggelePlaylist">
          <playlist-play-icon fillColor="#0D3A4D" />
        </div>
      </div>
      <div class="ply-item-info">
        <router-link  :to="'/' +  $store.state.current_language +'/' + source.url.split('/').slice(-1)"  rel="alternate" :hreflang="$store.state.current_language">
            {{source.reciter}}
            </router-link>
        <div class="ply-sora">{{source.name}}</div>
      </div>

      <div class="ply-playlist" :class="{opened: show_playlist}">
        <div class="ply-list-header">
          <div class="ply-btn btn-next" @click="closePlaylist">
            <close-icon fillColor="#0D3A4D" />
          </div>
          <div class="ply-btn btn-next" @click="clearPlaylist">
            <delete-sweep-icon fillColor="#0D3A4D" />
          </div>
        </div>
        <ul class="list-unstyled">
          <draggable v-model="playlist" handle=".drag-handle">
            <li
              v-for="(audio, index) in playlist"
              :key="audio.id"
              :class="{playing: playing && source.read_id == audio.read_id && source.sora_id == audio.sora_id}"
            >
              <div class="drag-handle bg"></div>
              <div class="playlist-avatar drag-handle">
                <div v-if="isLoading(audio)" class="ply-btn btn-play">
                  <scale-loader color="#fff" height="10px" width="2px"></scale-loader>
                </div>
                <div v-else-if="isPlaying(audio)" class="ply-btn btn-pause" @click="pause">
                  <pause-icon fillColor="#0D3A4D" />
                </div>
                <div v-else class="ply-btn btn-play" @click="playItem(audio)">
                  <play-arrow-icon fillColor="#0D3A4D" />
                </div>
              </div>

              <div class="read-info">
                <div class="read-num">{{audio.num}}</div>
                <div class="read-sora">{{audio.name}}</div>
                <div class="read-reciter">{{audio.reciter}} 
                  <template v-if="audio.rewaya">
                      ({{audio.rewaya}})
                  </template>
                  </div>
              </div>
              <div
                class="read-options"
                :class="{opened: show_moreoptions && show_moreoptions_item == audio.id}"
              >
                <div class="ply-btn read-more-btn" @click="toggeleMoreoptions(audio.id)">
                  <more-horiz-icon fillColor="#0D3A4D" />
                </div>
                <div class="ply-btn">
                  <delete-icon fillColor="#0D3A4D" @click="removeFromPlaylist(index)" />
                </div>
                <div class="ply-btn">
                  <share-icon
                    fillColor="#0D3A4D"
                    @click="shareItem(audio.share_title, audio.share_url, audio.share_description)"
                  />
                </div>
                <div
                  class="ply-btn"
                  v-clipboard:copy="audio.file"
                  v-clipboard:error="clipboardErrorHandler"
                  v-clipboard:success="clipboardSuccessHandler"
                >
                  <link-icon fillColor="#0D3A4D" />
                </div>
                <div class="ply-btn">
                  <cloud-download-icon fillColor="#0D3A4D" />
                </div>
                <div
                  class="ply-btn"
                  v-if="soarIncludes(audio.id)"
                  @click="removeSoraFavorite(audio.id)"
                >
                  <heart-icon fillColor="#0D3A4D" />
                </div>
                <div class="ply-btn" v-else @click="addSoraFavorite(audio.id)">
                  <heart-outline-icon fillColor="#0D3A4D" />
                </div>
              </div>
            </li>
          </draggable>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VueHowler from "vue-howler";
import draggable from "vuedraggable";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  mixins: [VueHowler],
  components: {
    draggable
  },
  data() {
    return {
      show_volume: false,
      show_moreoptions: false,
      show_moreoptions_item: false,
      show_playlist: false
    };
  },
  computed: {
    timer() {
      return this.formatTime(this.seek);
    },
    progress_bar: {
      get: function() {
        return this.progress * 100;
      },
      set: function(newValue) {
        this.setProgress(newValue / 100);
      }
    },
    volume_bar: {
      get: function() {
        return this.volume * 100;
      },
      set: function(newValue) {
        this.setVolume(newValue / 100);
      }
    },
    player_state() {
      if (this.$data._howl) {
        return this.$data._howl.state();
      } else {
        return "";
      }
    },
    playlist: {
      get() {
        return this.$store.state.player.playlist;
      },
      set(playlist) {
        this.$store.commit("player/setPlaylist", { playlist: playlist });
      }
    },
    ...mapState({
      source: state => state.player.source
    }),
    ...mapGetters({
      soarIncludes: "favorite/soarIncludes",
      currentPosition: "player/currentPosition",
      isPlaying: "player/isPlaying",
      isLoading: "player/isLoading"
    })
  },
  created() {
    
    var self = this;
    this.setVolume( 0.5);
    if (typeof window !== "undefined") {
      PlayerEvent.$on("player_play", function() {
        setTimeout(function() {
          self.togglePlayback();
        }, 500);
      });
      PlayerEvent.$on("player_stop", function() {
        self.stop();
      });
      PlayerEvent.$on("player_toggel", function() {
        self.togglePlayback();
      });
      PlayerEvent.$on("player_pause", function() {
        self.pause();
      });
    }
  },
  methods: {
    prev() {
      this.stop();
      this.$store.dispatch("player/prevItem");
    },
    next() {
      this.stop();
      this.$store.dispatch("player/nextItem");
    },

    playItem(item) {
      this.stop();
      this.$store.dispatch("player/playItem", item);
    },
    openVolume() {
      this.show_volume = true;
    },
    closeVolume() {
      this.show_volume = false;
    },
    toggelePlaylist() {
      this.show_playlist = !this.show_playlist;
    },
    toggeleMoreoptions(id) {
      if (this.show_moreoptions_item == id) {
        this.show_moreoptions_item = false;
        this.show_moreoptions = false;
      } else {
        this.show_moreoptions_item = id;
        this.show_moreoptions = true;
      }
    },
    closePlaylist() {
      this.show_playlist = false;
    },
    clearPlaylist() {
      var source = {
        file: "empty"
      };
      this.$store.commit("player/setSource", { source: source });
      this.$store.commit("player/setPlaylist", { playlist: [] });
    },

    formatTime(secs) {
      if (secs == "Infinity") {
        return '∞';
      } else {
        secs = Math.round(secs);
        var minutes = Math.floor(secs / 60) || 0;
        var seconds = secs - minutes * 60 || 0;

        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
      }
    },
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
    ...mapActions(["clipboardErrorHandler", "clipboardSuccessHandler"]),
    ...mapActions("player", {
      removeFromPlaylist: "removeItem"
    }),
    ...mapActions("favorite", {
      addSoraFavorite: "addSora",
      removeSoraFavorite: "removeSora"
    })
  },
  watch: {
    seek: function(newpseek, oldseek) {
      if (newpseek > this.duration - 0.5) {
        this.next();
      }
    },
    playing: function(newplaying, oldplaying) {
      this.$store.commit("player/setPlaying", { playing: newplaying });
    },
    player_state: function(newstate, oldstate) {
      this.$store.commit("player/setState", { player_state: newstate });
    }
  }
};
</script>