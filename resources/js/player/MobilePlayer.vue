<template>
  <div class="mobile-player">
    <audio ref="audiofile" :src="source.file" style="display: none"></audio>
    <div
      class="sply-progress"
      :style="'width: ' + percentComplete + '%;'"
    ></div>
    <div class="ply-controls">
      <div
        class="ply-btn btn-previous"
        :class="{ disabled: currentPosition() < 1 }"
      >
        <span
          class="uni-icon icon-skip_previous"
         
          @click="prev"
        ></span>
      </div>
      <div
        class="ply-btn btn-play-pause"
        v-on:click.prevent="playing = !playing"
        :title="playing ? 'Pause' : 'Play'"
      >
        <span class="uni-icon icon-pause" v-if="playing"></span>
        <span class="uni-icon icon-play_arrow1" v-else></span>
      </div>
      <div
        class="ply-btn btn-next"
        :class="{ disabled: currentPosition() >= playlist.length - 1 }"
      >
        <span
          class="uni-icon icon-skip_next"
          @click="next"
         
        ></span>
      </div>
    </div>
    <div class="ply-item-info" @click="showFullplayer">
      <div class="ply-reader">{{ source.reciter }}</div>
      <div class="ply-sora">{{ source.name }}</div>
    </div>
    <div class="ply-options">
      <div class="ply-btn btn-volume">
        <span class="uni-icon icon-volume_off"></span>
        <span
          class="uni-icon icon-volume_off"
          v-if="volume === 0"
         
        ></span>
        <span
          class="uni-icon icon-volume_mute"
          v-else-if="volume <= 15"
         
        ></span>
        <span
          class="uni-icon icon-volume_down"
          v-else-if="volume <= 65"
         
        ></span>
        <span class="uni-icon icon-volume_up" v-else></span>

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
      <div class="ply-btn btn-list" @click="toggelePlaylist">
        <span class="uni-icon icon-playlist_play"></span>
      </div>
    </div>
    <div class="ply-fullplayer" :class="{ opened: show_fullplayer }">
      <div class="fply-header">
        <div class="fply-reader">
          <span>{{ source.reciter }}</span>
        </div>
        <div class="fply-sora">{{ source.name }}</div>
      </div>
      <div class="fply-body">
        <div class="fply-timer">{{ currentTime }}</div>
        <div class="fply-progress">
          <vue-slider :lazy="true" v-model="percentComplete" tooltip="none" />
        </div>
        <div class="fply-duration">{{ durationTime }}</div>
      </div>
      <div class="fply-controls">
        <div
          class="ply-btn btn-previous"
          :class="{ disabled: currentPosition() < 1 }"
        >
          <span
            class="uni-icon icon-skip_previous"
            @click="prev"
            style="color: #fff"
          ></span>
        </div>
        <div
          class="ply-btn btn-play-pause"
          v-on:click.prevent="playing = !playing"
          :title="playing ? 'Pause' : 'Play'"
        >
          <span class="uni-icon icon-pause" v-if="playing"></span>
          <span class="uni-icon icon-play_arrow1" v-else style="color: #fff"></span>
        </div>
        <div
          class="ply-btn btn-next"
          :class="{ disabled: currentPosition() >= playlist.length - 1 }"
        >
          <span class="uni-icon icon-skip_next" @click="next" style="color: #fff"></span>
        </div>
      </div>
      <div class="fply-footer">
        <ul class="list-unstyled">
          <li
            v-for="(audio, index) in playlist"
            :key="audio.id"
            :class="{ playing: playing && currentPosition() == index }"
            @click="playItem(audio)"
          >
            <div class="read-info">
              <div class="read-sora">{{ audio.name }}</div>
              <div class="read-reciter">{{ audio.reciter }}</div>
            </div>
            <div class="read-options">
              <div
                class="ply-btn read-like-btn"
                v-if="soarIncludes(audio.id)"
                @click="removeSoraFavorite(audio.id)"
              >
                <span class="uni-icon icon-favorite" style="color: #f5b44b"></span>
              </div>
              <div
                class="ply-btn read-like-btn"
                v-else
                @click="addSoraFavorite(audio.id)"
              >
                <span class="uni-icon icon-favorite_outline" style="color: #fff"></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="fply-close" @click="closeFullplayer">
        <span class="uni-icon icon-keyboard_arrow_down" style="color: #fff"></span>
      </div>
    </div>
    <div class="ply-playlist" :class="{ opened: show_playlist }">
      <div class="ply-list-header">
        <div class="ply-btn btn-next" @click="closePlaylist">
          <span class="uni-icon icon-clear"></span>
        </div>
        <div class="ply-btn btn-next" @click="clearPlaylist">
          <span class="uni-icon icon-delete_sweep"></span>
        </div>
      </div>
      <ul class="list-unstyled">
        <draggable v-model="playlist" handle=".drag-handle">
          <li
            v-for="(audio, index) in playlist"
            :key="audio.id"
            :class="{ playing: playing && currentPosition() == index }"
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
                @click="pause"
              >
                <span class="uni-icon icon-pause"></span>
              </div>
              <div v-else class="ply-btn btn-play" @click="playItem(audio)">
                <span class="uni-icon icon-play_arrow"></span>
              </div>
            </div>
            <div class="read-info">
              <div class="read-num">{{ audio.num }}</div>
              <div class="read-sora">{{ audio.name }}</div>
              <div class="read-reciter">
                {{ audio.reciter }}
                <template v-if="audio.rewaya"> ({{ audio.rewaya }}) </template>
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
                <span
                  class="uni-icon icon-more-horizontal"
                 
                ></span>
              </div>
              <div class="ply-btn">
                <span
                  class="uni-icon icon-delete"
                 
                  @click="removeItem(index)"
                ></span>
              </div>
              <div class="ply-btn">
                <span
                  class="uni-icon icon-share"
                 
                  @click="
                    shareItem(
                      audio.share_title,
                      audio.share_url,
                      audio.share_description
                    )
                  "
                ></span>
              </div>
              <div
                class="ply-btn"
                v-clipboard:copy="audio.file"
                v-clipboard:error="clipboardErrorHandler"
                v-clipboard:success="clipboardSuccessHandler"
              >
                <span class="uni-icon icon-link"></span>
              </div>
              <div
                class="ply-btn"
                @click="downloadMp3({ url: audio.file, num: audio.num })"
              >
                <span class="uni-icon icon-cloud_download"></span>
              </div>
              <div
                class="ply-btn"
                v-if="soarIncludes(audio.id)"
                @click="removeSoraFavorite(audio.id)"
              >
                <span class="uni-icon icon-favorite"></span>
              </div>
              <div class="ply-btn" v-else @click="addSoraFavorite(audio.id)">
                <span
                  class="uni-icon icon-favorite_outline"
                 
                ></span>
              </div>
            </div>
          </li>
        </draggable>
      </ul>
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
  data() {
    return {
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
      show_fullplayer: false,
    };
  },
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
        return this.$store.state.playlist;
      },
      set(playlist) {
        this.$store.commit("setPlaylist", { playlist: playlist });
      },
    },
    ...mapState({
      source: (state) => state.source,
    }),
    ...mapGetters({
      soarIncludes: "favorite/soarIncludes",
      currentPosition: "currentPosition",
      isLoading: "isLoading",
    }),
  },
  methods: {
    load() {
      if (this.audio.readyState >= 2) {
        this.loaded = true;
        this.durationSeconds = parseInt(this.audio.duration);
        this.$store.commit("setState", { player_state: "loaded" });
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
      this.$store.dispatch("prevItem");
    },
    next() {
      this.$store.dispatch("nextItem");
    },
    playItem(item) {
      this.$store.dispatch("playItem", item);
    },
    showFullplayer() {
      this.show_fullplayer = true;
    },
    closeFullplayer() {
      this.show_fullplayer = false;
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
        file: "empty",
      };
      this.$store.commit("setSource", { source: source });
      this.$store.commit("setPlaylist", { playlist: [] });
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
      xhr.onload = function () {
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
    ...mapActions(["clipboardErrorHandler", "clipboardSuccessHandler", "removeItem"]),
    ...mapActions("favorite", {
      addSoraFavorite: "addSora",
      removeSoraFavorite: "removeSora",
    }),
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
  created() {
    var self = this;
    if (typeof window !== "undefined") {
      PlayerEvent.$on("player_play", function () {
        self.play();
      });
      PlayerEvent.$on("player_stop", function () {
        self.stop();
      });
      PlayerEvent.$on("player_toggel", function () {
        self.playing = !self.playing;
      });
      PlayerEvent.$on("player_pause", function () {
        self.pause();
      });
    }
  },
  watch: {
    playing(value) {
      this.$store.commit("setPlaying", { playing: value });
      if (value) {
        return this.audio.play();
      }
      this.audio.pause();
    },
    source(value) {
      let self = this;
      this.$store.commit("setState", { player_state: "loading" });
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