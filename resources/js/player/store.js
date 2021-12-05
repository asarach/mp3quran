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
      state.favorite = favorite;
    },
    setPlaylist(state, { playlist }) {
      state.playlist = playlist;
    },
    setVolume(state, { volume }) {
      state.volume = volume;
    },
    setCurrentSeconds(state, { currentSeconds }) {
      state.currentSeconds = currentSeconds;
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
    currentTime: (state) => {
      return convertTimeHHMMSS(state.currentSeconds);
    },
    durationTime: (state) => {
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
    setAudio({ state, dispatch }, audio) {
      audio.addEventListener("timeupdate", () => {
        dispatch("update");
      });
      audio.addEventListener("ended", () => {
        dispatch("next");
      });
      audio.addEventListener("loadeddata", () => {
        dispatch("load");
      });
      audio.addEventListener("pause", () => {
        dispatch("pause");
      });
      audio.addEventListener("play", () => {
        dispatch("play");
      });
      state.audio = audio;
      state.audio.volume = state.volume / 100;
      state.audio.currentTime = state.currentSeconds;
    },

    update({ state, commit }) {
      commit("setCurrentSeconds", { currentSeconds: parseInt(state.audio.currentTime) });
    },

    onDrop({ commit, state }, dragResult) {
      const { removedIndex, addedIndex, payload } = dragResult;
      if (removedIndex === null && addedIndex === null) return state.playlist;

      const result = [...state.playlist];
      let itemToAdd = payload;

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }
      commit("setPlaylist", { playlist: result });
    },
    load({ commit, state }, item) {
      if (state.audio.readyState >= 2) {
        state.loaded = true;
        state.durationSeconds = parseInt(state.audio.duration);
        if (!state.durationSeconds) {
          state.durationSeconds = 0;
        }
        commit("setState", { player_state: "loaded" });
        return (state.playing = state.autoPlay);
      }
      throw new Error("Failed to load sound file.");
    },
    toggeleMoreoptions({ commit, state }, id) {
      if (state.show_moreoptions_item == id) {
        state.show_moreoptions_item = false;
        state.show_moreoptions = false;
      } else {
        state.show_moreoptions_item = id;
        state.show_moreoptions = true;
      }
    },
    setPercentComplete({ state }, value) {
      let cal = (value * state.audio.duration) / 100;
      state.audio.currentTime = parseInt(cal);
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

    addItem({ commit, state, dispatch }, item) {
      var new_playlist = state.playlist
      var exist = new_playlist.find(function (itm) {
        if (itm.id == item.id)
          return true;
      });
      if (exist == undefined) {
        new_playlist.push(item);
        window.appMain.$store.dispatch("notify", {//tofixe
          group: 'app',
          title: state._vm.trans('text.added'),
          type: 'success',
          text: state._vm.trans('text.item-added-playlist')
        });
      } else {
        window.appMain.$store.dispatch("notify", {//tofixe
          group: 'app',
          title: state._vm.trans('text.not-added'),
          type: 'warn',
          text: state._vm.trans('text.item-exists-in-playlist')
        });
      }

      commit('setPlaylist', { playlist: new_playlist })
      if (state.source.file == 'empty') {
        commit('setSource', { source: item });
        dispatch("changeSource", item);
      }

    },
    removeItem({ commit, state }, index) {
      let new_playlist = state.playlist.splice(index, 1);
      commit('setPlaylist', { playlist: new_playlist })
    },

    nextItem({ commit, state, dispatch }) {
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
      dispatch("changeSource", source);
    },
    prevItem({ commit, state, dispatch }) {
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
      dispatch("changeSource", source);
    },
    playItem({ commit, dispatch }, item) {
      commit('setSource', { source: item });
      dispatch("changeSource", item);
    },
    getItemAndPlay({ dispatch, state }, url) {
      axios.get(url).then(function (response) {
        dispatch('addPlayItem', response.data);
      }).catch(function (error) {
      });
    },
    addPlayItem({ commit, state, dispatch }, item) {
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
        dispatch("changeSource", item);
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
        title: state._vm.trans('text.copied'),
        type: 'success',
        text: state._vm.trans('text.text-copied')
      })
    },
    clipboardErrorHandler({ commit, state }, products) {
      window.appMain.$store.dispatch("notify", {//tofixe  
        group: 'app',
        title: state._vm.trans('text.error'),
        type: 'error',
        text: state._vm.trans('text.error-copying-text')
      })
    },
    changeSource({ commit, state }, source) {
      commit("setState", { player_state: "loading" });
      state.audio.oncanplay = function () {
        state.audio.play();
      };
    },
    changeVolume({ commit, state }, volume) {
      commit("setVolume", { volume: volume });
      state.audio.volume = volume / 100;
    },
    play({ state }) {
      state.playing = true;
      state.audio.play();
    },
    pause({ state }) {
      state.playing = false;
      state.audio.pause();
    },
    toggelItem({ dispatch, state }) {
      if (state.playing) {
        dispatch("pause");
      } else {
        dispatch("play");
      }
    },
    stop({ commit, state }, products) {
      state.playing = false;
      state.audio.currentTime = 0;
    },
    toggelePlaylist({ commit, state }, products) {
      state.show_playlist = !state.show_playlist;
    },

    closePlaylist({ commit, state }, products) {
      state.show_playlist = false;
    },
    clearPlaylist({ commit, state }, products) {
      var source = {
        file: "empty",
      };
      commit("setSource", { source: source });
      commit("setPlaylist", { playlist: [] });
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
