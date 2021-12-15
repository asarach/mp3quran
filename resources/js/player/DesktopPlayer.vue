<template>
  <div class="desktop-player" v-click-outside="closePlaylist">
    <div class="container d-flex">
      <div class="ply-controls">
        <div
          class="ply-btn btn-previous"
          :class="{ disabled: currentPosition() < 1 }"
        >
          <span class="uni-icon icon-skip_previous" @click="prevItem"></span>
        </div>
        <div
          class="ply-btn btn-play-pause"
          @click.prevent="toggeleItem"
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
          <span class="uni-icon icon-skip_next" @click="nextItem"></span>
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
              v-model="currentVolume"
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
          :href="prefix + source.read_slug"
          rel="alternate"
          :hreflang="current_language"
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
            <Draggable v-for="(item, index) in playlist" :key="item.id">
              <li
                :class="{
                  playing: playing && currentPosition() == index,
                }"
              >
                <div class="drag-handle bg"></div>
                <div class="playlist-avatar drag-handle">
                  <div v-if="isLoading(item)" class="ply-btn btn-play">
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
                  <div v-else class="ply-btn btn-play" @click="loadAndPlayItem(item)">
                    <span class="uni-icon icon-play_arrow1"></span>
                  </div>
                </div>

                <div class="read-info">
                  <div class="read-num">{{ item.num }}</div>
                  <div class="read-sora">{{ item.name }}</div>
                  <div class="read-reciter">
                    {{ item.reciter }}
                    <template v-if="item.rewaya">
                      ({{ item.rewaya }})
                    </template>
                  </div>
                </div>
                <div
                  class="read-options"
                  :class="{
                    opened:
                      show_moreoptions && show_moreoptions_item == item.id,
                  }"
                >
                  <div
                    class="ply-btn read-more-btn"
                    @click="toggeleMoreoptions(item.id)"
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
                          item.share_title,
                          item.share_url,
                          item.share_description
                        )
                      "
                    ></span>
                  </div>
                  <div
                    class="ply-btn"
                    v-clipboard:copy="item.file"
                    v-clipboard:error="clipboardErrorHandler"
                    v-clipboard:success="clipboardSuccessHandler"
                  >
                    <span class="uni-icon icon-link"></span>
                  </div>
                  <a class="ply-btn" :href="item.file" target="_blank"
                    ><span class="uni-icon icon-cloud_download"></span
                  ></a>

                  <div
                    class="ply-btn"
                    v-if="soarIncludes(item.id)"
                    @click="removeSoraFavorite(item.id)"
                  >
                    <span
                      class="uni-icon icon-favorite"
                      style="color: #f2a01b"
                    ></span>
                  </div>
                  <div class="ply-btn" v-else @click="addSoraFavorite(item.id)">
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
    currentVolume: {
      get() {
        return this.$store.state.volume;
      },
      set(value) {
        this.$store.dispatch("changeVolume", value);
      },
    },
    percentComplete: {
      get() {
        const value = parseInt(
          (this.currentSeconds / this.durationSeconds) * 100
        );
        if (value) {
          return value;
        } else {
          return 0;
        }
      },
      set(value) {
        this.$store.dispatch("setPercentComplete", value);
      },
    },

    ...mapState({
      current_language: (state) => state.current_language,
      source: (state) => state.source,
      audio: (state) => state.audio,
      playlist: (state) => state.playlist,
      currentSeconds: (state) => state.currentSeconds,
      durationSeconds: (state) => state.durationSeconds,
      playing: (state) => state.playing,
      volume: (state) => state.volume,
      show_playlist: (state) => state.show_playlist,
      show_moreoptions: (state) => state.show_moreoptions,
      show_fullplayer: (state) => state.show_fullplayer,
      show_moreoptions_item: (state) => state.show_moreoptions_item,
    }),
    ...mapGetters({
      durationTime: "durationTime",
      currentTime: "currentTime",
      soarIncludes: "soarIncludes",
      currentPosition: "currentPosition",
      isLoading: "isLoading",
    }),
  },

  methods: {
    ...mapActions([
      "onDrop",
      "load",
      "pause",
      "nextItem",
      "prevItem",
      "loadAndPlayItem",
      "toggeleItem",
      "changeVolume",
      "clearPlaylist",
      "toggelePlaylist",
      "closePlaylist",
      "toggeleMoreoptions",
      "clipboardErrorHandler",
      "clipboardSuccessHandler",
      "removeSoraFavorite",
      "addSoraFavorite",
      "shareItem",
      "removeItem",
      "showFullplayer",
      "closeFullplayer",
    ]),
  },
  mounted() {
    this.$store.dispatch("setAudio", this.$refs.audiofile);
  },
  created() {
    var self = this;
    PlayerEvent.$on("player_play", function () {
      self.$store.dispatch("play");
    });
    PlayerEvent.$on("player_stop", function () {
      self.$store.dispatch("stop");
    });
    PlayerEvent.$on("player_toggel", function () {
      self.$store.dispatch("toggeleItem");
    });
    PlayerEvent.$on("player_pause", function () {
      self.$store.dispatch("pause");
    });
  },
};
</script>