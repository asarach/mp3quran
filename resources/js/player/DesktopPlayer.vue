<template>
  <div class="desktop-player" v-click-outside="closePlaylist">
    <div class="container d-flex">
      <audio ref="audiofile" :src="source.file" style="display: none"></audio>
      <div class="ply-controls">
        <div
          class="ply-btn btn-previous"
          :class="{ disabled: currentPosition() < 1 }"
        >
          <span class="uni-icon icon-skip_previous" @click="prev"></span>
        </div>
        <div
          class="ply-btn btn-play-pause"
          v-on:click.prevent="playing = !playing"
          :title="playing ? 'Pause' : 'Play'"
        >
          <span
            v-if="playing"
            style="color: #fff"
            class="uni-icon icon-pause"
          ></span>
          <span
            class="uni-icon icon-play_arrow1"
            v-else
            style="color: #fff"
          ></span>
        </div>
        <div
          class="ply-btn btn-next"
          :class="{ disabled: currentPosition() >= playlist.length - 1 }"
        >
          <span class="uni-icon icon-skip_next" @click="next"></span>
        </div>
      </div>
      <div class="ply-body">
        <div class="ply-timer">{{ currentTime }}</div>
        <div class="ply-progress">
          <vue-slider
            :lazy="true"
            :disabled="durationSeconds == 0"
            v-model="percentComplete"
            tooltip="none"
          />
        </div>
        <div class="ply-duration">{{ durationTime }}</div>
      </div>

      <div class="ply-options">
        <div class="ply-btn btn-volume">
          <span class="uni-icon icon-volume_off" v-if="volume === 0"></span>
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
        <div v-if="playlist.length > 0" class="ply-btn btn-list">
          <span
            class="uni-icon icon-playlist_play"
            @click="toggelePlaylist"
          ></span>
        </div>
      </div>
      <div class="ply-item-info">
        <a
          :href="prefix + source.page_url"
          rel="alternate"
          :hreflang="$store.state.current_language"
        >
          {{ source.reciter }}
        </a>
        <div class="ply-sora">{{ source.name }}</div>
      </div>

      <div
        v-show="playlist.length > 0"
        class="ply-playlist"
        :class="{ opened: show_playlist }"
      >
        <div class="ply-list-header">
          <div class="ply-btn btn-next" @click="closePlaylist">
            <span class="uni-icon icon-clear"></span>
          </div>
          <div class="ply-btn btn-next" @click="clearPlaylist">
            <span class="uni-icon icon-delete_sweep"></span>
          </div>
        </div>
        <ul class="list-unstyled">
          <Container @drop="onDrop">
            <Draggable v-for="(audio, index) in playlist" :key="audio.id">
              <li
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
                    <span class="uni-icon icon-pause"></span>
                  </div>
                  <div v-else class="ply-btn btn-play" @click="playItem(audio)">
                    <span class="uni-icon icon-play_arrow1"></span>
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
                    opened:
                      show_moreoptions && show_moreoptions_item == audio.id,
                  }"
                >
                  <div
                    class="ply-btn read-more-btn"
                    @click="toggeleMoreoptions(audio.id)"
                  >
                    <span class="uni-icon icon-more-horizontal"></span>
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
                  <div
                    class="ply-btn"
                    v-else
                    @click="addSoraFavorite(audio.id)"
                  >
                    <span class="uni-icon icon-favorite_outline"></span>
                  </div>
                </div>
              </li>
            </Draggable>
          </Container>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { Container, Draggable } from "vue-smooth-dnd";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    Container,
    Draggable,
  },

  computed: {
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
    ...mapState({
      source: (state) => state.source,
      audio: (state) => state.audio,
      playlist: (state) => state.playlist,
      currentSeconds: (state) => state.currentSeconds,
      durationSeconds: (state) => state.durationSeconds,
      playing: (state) => state.playing,
      volume: (state) => state.volume,
      show_playlist: (state) => state.show_playlist,
      show_moreoptions: (state) => state.show_moreoptions,
      show_moreoptions_item: (state) => state.show_moreoptions_item,
    }),
    ...mapGetters({
      soarIncludes: "soarIncludes",
      currentPosition: "currentPosition",
      isLoading: "isLoading",
    }),
  },

  methods: {
    ...mapActions([
      "onDrop",
      "load",
      "toggeleMoreoptions",
      "clipboardErrorHandler",
      "clipboardSuccessHandler",
      "removeItem",
    ]),
  },
  mounted() {
    this.audio = this.$refs.audiofile;
    this.audio.addEventListener("timeupdate", this.update);
    this.audio.addEventListener("ended", this.next);
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