import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const convertTimeHHMMSS = (val) => {
  let hhmmss = new Date(val * 1000).toISOString().substr(11, 8);
  return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
};


export default new Vuex.Store({

  state: {
    audio: undefined,
    currentSeconds: 0,
    durationSeconds: 0,
    playing: false,
    volume: 60,
    show_playlist: false,
    show_moreoptions: false,
    show_moreoptions_item: false,
    loaded: false,
    dragging: false,
    show_fullplayer: false,
    player_state: '',
    playing_item: 1,
    source: {
      file: 'empty',
      share_url: '',
      id: '',
    },
    playlist: [],
    favorite: {
      videos: [],
      radios: [],
      reads: [],
      soar: [],
    },
  },
  mutations: {
    setFavorite(state, { favorite }) {
      console.log(favorite);
      state.favorite = favorite;
    },
    setPlaylist(state, { playlist }) {
      state.playlist = playlist;
    },
    setSource(state, { source }) {
      state.source = source;
      window.appMain.$store.state.playing_item = source.id
    },
    setPlaying(state, { playing }) {
      state.playing = playing;
      window.appMain.$store.state.playing = playing
    },
    setState(state, { player_state }) {
      state.player_state = player_state;
      window.appMain.$store.state.playing_state = player_state
    },
  },
  getters: {
    currentTime: (state) => () => {
      return convertTimeHHMMSS(state.currentSeconds);
    },
    durationTime: (state) => () => {
      return convertTimeHHMMSS(state.durationSeconds);
    },
    soarIncludes: (state, getters) => (item) => {
      if (state.favorite.soar.includes(item)) {
        return true;
      } else {
        return false;
      }
    },
    currentPosition: (state, getters) => (item) => {
      let index = -1;
      for (var i = 0; i < state.playlist.length; i++) {
        if (state.playlist[i].file === state.source.file) {
          index = i;
        }
      }
      return index;
    },
    isPlaying: (state, getters) => () => {
      if (state.source.id == item && state.playing) {
        return true;
      } else {
        return false;
      }
    },
    isLoading: (state, getters) => (item) => {
      if (state.source.id == item.id && state.player_state == 'loading') {
        return true;
      }
      if (item.type == 'radio' && state.source.id == item.id && state.player_state == 'unloaded') {
        return true;
      }
      return false;
    }
  },
  actions: {
    update({ state }) {
      state.currentSeconds = parseInt(state.audio.currentTime);
    },

    onDrop({ commit, state }, dragResult) {
      const { removedIndex, addedIndex, payload } = dragResult;
      if (removedIndex === null && addedIndex === null) return this.playlist;

      const result = [...this.playlist];
      let itemToAdd = payload;

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }
      this.$store.commit("setPlaylist", { playlist: result });
    },
    load({ commit, state }, item) {
      if (this.audio.readyState >= 2) {
        this.loaded = true;
        this.durationSeconds = parseInt(this.audio.duration);
        if (!this.durationSeconds) {
          this.durationSeconds = 0;
        }
        this.$store.commit("setState", { player_state: "loaded" });
        return (this.playing = this.autoPlay);
      }
      throw new Error("Failed to load sound file.");
    },
    load({ commit, state }, id) {
      if (this.show_moreoptions_item == id) {
        this.show_moreoptions_item = false;
        this.show_moreoptions = false;
      } else {
        this.show_moreoptions_item = id;
        this.show_moreoptions = true;
      }
    },
    download({ commit, state }, url) {
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

    addItem({ commit, state }, item) {
      var new_playlist = state.playlist
      var exist = new_playlist.find(function (itm) {
        if (itm.id == item.id)
          return true;
      });
      if (exist == undefined) {
        new_playlist.push(item);
        window.appMain.$store.dispatch("notify", {//tofixe
          group: 'app',
          title: this._vm.trans('text.added'),
          type: 'success',
          text: this._vm.trans('text.item-added-playlist')
        });
      } else {
        window.appMain.$store.dispatch("notify", {//tofixe
          group: 'app',
          title: this._vm.trans('text.not-added'),
          type: 'warn',
          text: this._vm.trans('text.item-exists-in-playlist')
        });
      }

      commit('setPlaylist', { playlist: new_playlist })
      if (state.source.file == 'empty') {
        commit('setSource', { source: item });
      }

    },
    removeItem({ commit, state }, index) {
      let new_playlist = state.playlist.splice(index, 1);
      commit('setPlaylist', { playlist: new_playlist })
    },

    nextItem({ commit, state }) {
      let index = -1;
      for (var i = 0; i < state.playlist.length; i++) {
        if (state.playlist[i].file === state.source.file) {
          index = i;
        }
      }

      var playlistIndex = Math.min(
        state.playlist.length - 1,
        index + 1
      )
      var source = state.playlist[playlistIndex];

      commit('setSource', { source: source });
    },
    prevItem({ commit, state }) {
      let index = -1;
      for (var i = 0; i < state.playlist.length; i++) {
        if (state.playlist[i].file === state.source.file) {
          index = i;
        }
      }

      var playlistIndex = Math.max(
        0,
        index - 1
      )
      var source = state.playlist[playlistIndex];
      commit('setSource', { source: source });
    },
    playItem({ commit, state }, item) {
      commit('setSource', { source: item });
    },
    getItemAndPlay({ dispatch, state }, url) {
      axios.get(url).then(function (response) {
        dispatch('addPlayItem', response.data);
      }).catch(function (error) {
      });
    },
    addPlayItem({ commit, state }, item) {
      var found = false;
      for (var i = 0; i < state.playlist.length; i++) {
        if (state.playlist[i].id == item.id) {
          found = true;
          break;
        }
      }
      if (!found) {
        let new_playlist = state.playlist
        new_playlist.push(item)
        commit('setPlaylist', { playlist: new_playlist })
      }

      if (item.id == state.source.id) {
        PlayerEvent.$emit("player_toggel");
      } else {
        commit('setSource', { source: item });
      }
    },
    getAddPlayItem({ dispatch }, url) {
      axios
        .get(url)
        .then(function (response) {
          dispatch(
            "addPlayItem",
            response.data
          );
        })
        .catch(function (error) {
        });
    },
    clipboardSuccessHandler({ commit, state }, products) {
      window.appMain.$store.dispatch("notify", {//tofixe
        group: 'app',
        title: this._vm.trans('text.copied'),
        type: 'success',
        text: this._vm.trans('text.text-copied')
      })
    },
    clipboardErrorHandler({ commit, state }, products) {
      window.appMain.$store.dispatch("notify", {//tofixe  
        group: 'app',
        title: this._vm.trans('text.error'),
        type: 'error',
        text: this._vm.trans('text.error-copying-text')
      })
    },


    play({ commit, state }, products) {
      this.playing = true;
    },
    pause({ commit, state }, products) {
      this.playing = false;
    },
    stop({ commit, state }, products) {
      this.playing = false;
      this.audio.currentTime = 0;
    },
    prev({ commit, state }, products) {
      this.$store.dispatch("prevItem");
    },
    next({ commit, state }, products) {
      this.$store.dispatch("nextItem");
    },
    playItem({ commit, state }, products) {
      this.$store.dispatch("playItem", item);
    },
    toggelePlaylist({ commit, state }, products) {
      this.show_playlist = !this.show_playlist;
    },

    closePlaylist({ commit, state }, products) {
      this.show_playlist = false;
    },
    clearPlaylist({ commit, state }, products) {
      var source = {
        file: "empty",
      };
      this.$store.commit("setSource", { source: source });
      this.$store.commit("setPlaylist", { playlist: [] });
    },
    shareItem({ commit, state }, title, url, description) {
      if (typeof window !== "undefined") {
        AppEvent.$emit("share", title, url, description);
      }
    },
    addSoraFavorite({ commit, state }, id) {
      window.appMain.$store.dispatch("favorite/addSora", id);
    },
    removeSoraFavorite({ commit, state }, id) {
      window.appMain.$store.dispatch("favorite/removeSora", id);
    },
    downloadMp3({ commit, state }, item) {
      window.appMain.$store.dispatch("download/downloadMp3", item);
    },

  },
});
