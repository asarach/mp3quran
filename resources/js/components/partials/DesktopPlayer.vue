<template>
  <div class="desktop-player">
    <div class="container d-flex">
      <audio ref="audiofile" :src="source.file" style="display: none"></audio>
      <div class="ply-controls">
        <div
          class="ply-btn btn-previous"
          :class="{ disabled: currentPosition() < 1 }"
        >
          <skip-previous-icon fillColor="#0D3A4D" @click="prev" />
        </div>
        <div
          class="ply-btn btn-play-pause"
          v-on:click.prevent="playing = !playing"
          :title="playing ? 'Pause' : 'Play'"
        >
          <pause-icon v-if="playing" fillColor="#0D3A4D" />
          <play-arrow-icon v-else fillColor="#0D3A4D" />
        </div>
        <div
          class="ply-btn btn-next"
          :class="{ disabled: currentPosition() >= playlist.length - 1 }"
        >
          <skip-next-icon @click="next" fillColor="#0D3A4D" />
        </div>
      </div>
      <div class="ply-body">
        <div class="ply-timer">{{ currentTime }}</div>
        <div class="ply-progress">
          <vue-slider :lazy="true" :disabled="durationSeconds == 0"  v-model="percentComplete" tooltip="none" />
        </div>
        <div class="ply-duration">{{ durationTime }}</div>
      </div>

      <div class="ply-options">
        <div class="ply-btn btn-volume">
          <volume-off-icon v-if="volume === 0" fillColor="#0D3A4D" />
          <volume-mute-icon v-else-if="volume <= 15" fillColor="#0D3A4D" />
          <volume-down-icon v-else-if="volume <= 65" fillColor="#0D3A4D" />
          <volume-up-icon v-else fillColor="#0D3A4D" />
          <div class="volume-selector">
            <vue-slider
              v-model="volume"
              direction="btt"
              height="120"
              style="display: inline-block; margin: 12px 2px"
              tooltip="none"
            />
          </div>
        </div>
        <div  class="ply-btn btn-list">
          <playlist-play-icon  v-if="playlist.length > 0" fillColor="#0D3A4D" @click="toggelePlaylist" />
        </div>
      </div>
      <div class="ply-item-info">
        <router-link
          :to="
            '/' +
            $store.state.current_language +
            '/' +
            source.url.split('/').slice(-1)
          "
          rel="alternate"
          :hreflang="$store.state.current_language"
        >
          {{ source.reciter }}
        </router-link>
        <div class="ply-sora">{{ source.name }}</div>
      </div>

      <div v-show="playlist.length > 0" class="ply-playlist" :class="{ opened: show_playlist }">
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
              :class="{
                playing: playing && currentPosition() == index,
              }"
            >
              <div class="drag-handle bg"></div>
              <div class="playlist-avatar drag-handle">
                <div v-if="isLoading(audio)" class="ply-btn btn-play">
                  <scale-loader
                    color="#fff"
                    height="10px"
                    width="2px"
                  ></scale-loader>
                </div>
                <div
                  v-else-if="playing && currentPosition() == index"
                  class="ply-btn btn-pause"
                  @click="pause()"
                >
                  <pause-icon fillColor="#0D3A4D" />
                </div>
                <div v-else class="ply-btn btn-play" @click="playItem(audio)">
                  <play-arrow-icon fillColor="#0D3A4D" />
                </div>
              </div>

              <div class="read-info">
                <div class="read-num">{{ audio.num }}</div>
                <div class="read-sora">{{ audio.name }}</div>
                <div class="read-reciter">
                  {{ audio.reciter }}
                  <template v-if="audio.rewaya">
                    ({{ audio.rewaya }})
                  </template>
                </div>
              </div>
              <div
                class="read-options"
                :class="{
                  opened: show_moreoptions && show_moreoptions_item == audio.id,
                }"
              >
                <div
                  class="ply-btn read-more-btn"
                  @click="toggeleMoreoptions(audio.id)"
                >
                  <more-horiz-icon fillColor="#0D3A4D" />
                </div>
                <div class="ply-btn">
                  <delete-icon
                    fillColor="#0D3A4D"
                    @click="removeFromPlaylist(index)"
                  />
                </div>
                <div class="ply-btn">
                  <share-icon
                    fillColor="#0D3A4D"
                    @click="
                      shareItem(
                        audio.share_title,
                        audio.share_url,
                        audio.share_description
                      )
                    "
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
                <div class="ply-btn"  @click="downloadMp3({ url : audio.file, num : audio.num})">
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
import draggable from "vuedraggable";
import { mapState, mapActions, mapGetters } from "vuex";
const convertTimeHHMMSS = (val) => {
  let hhmmss = new Date(val * 1000).toISOString().substr(11, 8);
  return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
};

export default {
  components: {
    draggable,
  },
  data: () => ({
    audio: undefined,
    currentSeconds: 0,
    durationSeconds: 0,
    loaded: false,
    dragging: false,
    playing: false,
    volume: 60,
    show_playlist: false,
    show_moreoptions: false,
    show_moreoptions_item: false,
  }),

  computed: {
    currentTime() {
      return convertTimeHHMMSS(this.currentSeconds);
    },
    durationTime() {
      return convertTimeHHMMSS(this.durationSeconds);
    },
    percentComplete: {
      get: function () {
        const value = parseInt(
          (this.currentSeconds / this.durationSeconds) * 100
        );
        if (value) {
          return value;
        } else {
          return 0;
        }
      },
      set: function (newValue) {
        let cal = (newValue * this.audio.duration) / 100;
        this.audio.currentTime = parseInt(cal);
      },
    },

    playlist: {
      get() {
        return this.$store.state.player.playlist;
      },
      set(playlist) {
        this.$store.commit("player/setPlaylist", { playlist: playlist });
      },
    },
    ...mapState({
      source: (state) => state.player.source,
    }),
    ...mapGetters({
      soarIncludes: "favorite/soarIncludes",
      currentPosition: "player/currentPosition",
      isLoading: "player/isLoading",
    }),
  },


  methods: {
    load() {
      if (this.audio.readyState >= 2) {
        this.loaded = true;
        this.durationSeconds = parseInt(this.audio.duration);
        if (!this.durationSeconds) {
           this.durationSeconds = 0;
        }
        
        this.$store.commit("player/setState", { player_state: 'loaded' });
        return (this.playing = this.autoPlay);
      }

      throw new Error("Failed to load sound file.");
    },
    update(e) {
      this.currentSeconds = parseInt(this.audio.currentTime);
    },

    play() {
      this.playing = true;
    },
    pause() {
      this.playing = false;
    },
    stop() {
      this.playing = false;
      this.audio.currentTime = 0;
    },
    prev() {
      this.$store.dispatch("player/prevItem");
    },
    next() {
      this.$store.dispatch("player/nextItem");
    },
    playItem(item) {
      this.$store.dispatch("player/playItem", item);
    },

    toggelePlaylist() {
      this.show_playlist = !this.show_playlist;
    },
    closePlaylist() {
      this.show_playlist = false;
    },
    clearPlaylist() {
      var source = {
        file: "empty",
      };
      this.$store.commit("player/setSource", { source: source });
      this.$store.commit("player/setPlaylist", { playlist: [] });
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
    shareItem(title, url, description) {
      if (typeof window !== "undefined") {
        Event.$emit("share", title, url, description);
      }
    },
    ...mapActions("download", {
      downloadMp3: "downloadMp3",
    }),
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
      removeFromPlaylist: "removeItem",
    }),
    ...mapActions("favorite", {
      addSoraFavorite: "addSora",
      removeSoraFavorite: "removeSora",
    }),
  },
  created() {
    var self = this;
    if (typeof window !== "undefined") {
      Event.$on("player_play", function() {
        self.play();
      });
      Event.$on("player_stop", function() {
        self.stop();
      });
      Event.$on("player_toggel", function() {
        self.playing = !self.playing;
      });
      Event.$on("player_pause", function() {
        self.pause();
      });
    }
  },
  mounted() {
    this.audio = this.$refs.audiofile;
    this.audio.addEventListener("timeupdate", this.update);
    this.audio.addEventListener("loadeddata", this.load);
    this.audio.addEventListener("pause", () => {
      this.playing = false;
    });
    this.audio.addEventListener("play", () => {
      this.playing = true;
    });
  },
  
  watch: {
    playing(value) {
      this.$store.commit("player/setPlaying", { playing: value });
      if (value) {
        return this.audio.play();
      }
      this.audio.pause();
    },
    source(value) {
      let self = this;
      this.$store.commit("player/setState", { player_state: 'loading' });
      self.audio.oncanplay = function () {
        self.audio.play();
      };
    },
    volume(value) {
      this.audio.volume = this.volume / 100;
    },
  },
};
</script>