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
    playing_state: '',
    playing_item: '',
    playing_type: '',
    source: {
      file: "empty",
      id: "",
      name: "",
      num: "",
      read_id: "",
      read_slug: "",
      reciter: "",
      share_description: "",
      share_title: "",
      share_url: "",
      sora_id: "",
      type: "",
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
    setCurrentTime(state, { currentTime }) {
      state.currentTime = currentTime;
    },
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
    setState(state, { playing_state, playing_item, playing_type }) {
      state.playing_type = playing_type;
      window.appMain.$store.state.playing_type = playing_type;
      state.playing_item = playing_item;
      window.appMain.$store.state.playing_item = playing_item;
      state.playing_state = playing_state;
      window.appMain.$store.state.playing_state = playing_state;
    },
  },
  getters: {
    currentTime: (state) => {
      return convertTimeHHMMSS(state.currentSeconds);
    },
    durationTime: (state) => {
      return convertTimeHHMMSS(state.durationSeconds);
    },
    favoriteIncludes: (state, getters) => (item, type) => {
      let includ = false;
      if (window.appMain.$store) {
        switch (type) {
          case 'sora':
            if (window.appMain.$store.state.favorite.soar.includes(item)) {
              includ = true;
            }
            break;
          case 'radio':
            if (window.appMain.$store.state.favorite.radios.includes(item)) {
              includ = true;
            }
            break;
        }
      }

      return includ;
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
      if (state.source.id == item.id && state.playing_state == 'loading') {
        return true;
      }
      if (item.type == 'radio' && state.source.id == item.id && state.playing_state == 'unloaded') {
        return true;
      }
      return false;
    }
  },
  actions: {
    getItemAndPlay({ dispatch, state }, url) {
      axios.get(url).then(function (response) {
        dispatch('addAndPlayItem', response.data);
      }).catch(function (error) {
        console.log(error);
      });
    },
    addAndPlayItem({ commit, state, dispatch }, item) {
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
        dispatch("toggeleItem");
      } else {
        dispatch("loadAndPlayItem", item);
      }
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
          title: window.appFoolter.trans('text.added'),
          type: 'success',
          text: window.appFoolter.trans('text.item-added-playlist')
        });
      } else {
        window.appMain.$store.dispatch("notify", {//tofixe
          group: 'app',
          title: window.appFoolter.trans('text.not-added'),
          type: 'warn',
          text: window.appFoolter.trans('text.item-exists-in-playlist')
        });
      }
      commit('setPlaylist', { playlist: new_playlist })
      if (state.source.file == 'empty') {
        commit('setSource', { source: item });
      }

    },
    removeItem({ commit, state }, index) {
      let new_playlist = state.playlist;
      new_playlist.splice(index, 1)
      commit('setPlaylist', { playlist: new_playlist })
    },
    loadAndPlayItem({ commit, dispatch, state }, item) {
      commit("setState", {
        playing_state: "loading",
        playing_item: item.id,
        playing_type: state.playing_type,
      });

      commit('setSource', { source: item });
      commit('setCurrentTime', { currentTime: 0 });
      state.audio.currentTime = 0;
      state.audio.pause();
      state.audio.setAttribute('src', state.source.file);
      state.audio.load();
      dispatch("play");
    },
    toggeleItem({ dispatch, state }) {
      if (state.playing) {
        dispatch("pause");
      } else {
        dispatch("play");
      }
    },
    load({ commit, state }, item) {
      if (state.audio.readyState >= 2) {
        state.loaded = true;
        state.durationSeconds = parseInt(state.audio.duration);
        if (!state.durationSeconds) {
          state.durationSeconds = 0;
        }
        console.log('playing_state load');
        commit("setState", {
          playing_state: 'loaded',
          playing_item: state.playing_item,
          playing_type: state.playing_type,
        });

        return true;
      }
      throw new Error("Failed to load sound file.");
    },
    nextItem({ state, dispatch }) {
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
      var item = state.playlist[playlistIndex];
      dispatch("loadAndPlayItem", item);
    },
    prevItem({ state, dispatch }) {
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
      var item = state.playlist[playlistIndex];
      dispatch("loadAndPlayItem", item);
    },
    play({ commit, state }) {
      state.audio.play();
      commit("setPlaying", { playing: true });
    },
    pause({ commit, state }) {
      state.audio.pause();
      commit("setPlaying", { playing: false });
    },

    stop({ commit, state }, products) {
      commit("setPlaying", { playing: false });
      state.audio.currentTime = 0;
    },

    setAudio({ state, dispatch, commit }, audioold) {
      // commit("setPlaying", { playing: false });
      state.playing = false;
      state.audio = document.createElement('audio');
      state.audio.addEventListener("timeupdate", () => {
        dispatch("update");
      });
      state.audio.addEventListener("ended", () => {
        dispatch("nextItem");
      });
      state.audio.addEventListener("loadeddata", () => {
        dispatch("load");
      });
      // state.audio.addEventListener("pause", () => {
      // });
      // state.audio.addEventListener("play", () => {
      // });

      state.audio.setAttribute('controls', 'controls');
      state.audio.setAttribute('id', 'audioPlayer');
      if (state.source.file !== 'empty') {
        state.audio.setAttribute('src', state.source.file);
        state.audio.load();
      }
      $('body').append(state.audio);

      state.audio.volume = state.volume / 100;
      state.audio.currentTime = state.currentSeconds;
    },

    update({ state, commit }) {
      commit("setCurrentSeconds", { currentSeconds: parseInt(state.audio.currentTime) });
    },


    //audio controles
    setPercentComplete({ state }, value) {
      let cal = (value * state.audio.duration) / 100;
      state.audio.currentTime = parseInt(cal);
    },
    changeVolume({ commit, state }, volume) {
      commit("setVolume", { volume: volume });
      state.audio.volume = volume / 100;
    },


    //Additional actions
    toggeleMoreoptions({ commit, state }, id) {
      if (state.show_moreoptions_item == id) {
        state.show_moreoptions_item = false;
        state.show_moreoptions = false;
      } else {
        state.show_moreoptions_item = id;
        state.show_moreoptions = true;
      }
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
    clipboardSuccessHandler({ commit, state }, products) {
      window.appMain.$store.dispatch("notify", {//tofixe
        group: 'app',
        title: window.appFoolter.trans('text.copied'),
        type: 'success',
        text: window.appFoolter.trans('text.text-copied')
      })
    },
    clipboardErrorHandler({ commit, state }, products) {
      window.appMain.$store.dispatch("notify", {//tofixe  
        group: 'app',
        title: window.appFoolter.trans('text.error'),
        type: 'error',
        text: window.appFoolter.trans('text.error-copying-text')
      })
    },
    toggelePlaylist({ state }) {
      state.show_playlist = !state.show_playlist;
    },

    closePlaylist({ state }) {
      state.show_playlist = false;
    },
    clearPlaylist({ commit }) {
      var source = {
        file: "empty",
        id: "",
        name: "",
        num: "",
        read_id: "",
        read_slug: "",
        reciter: "",
        share_description: "",
        share_title: "",
        share_url: "",
        sora_id: "",
        type: "",
      };
      commit("setSource", { source: source });
      commit("setPlaylist", { playlist: [] });
    },
    shareItem({ }, title, url, description) {
      AppEvent.$emit("share", title, url, description);
    },
    addItemFavorite({ }, { item, type }) {

      switch (type) {
        case 'sora':
          window.appMain.$store.dispatch("favorite/addSora", item);
          break;
        case 'radio':
          window.appMain.$store.dispatch("favorite/addRadio", item);
          break;
      }

    },
    removeItemFavorite({ }, { item, type }) {
      switch (type) {
        case 'sora':
          window.appMain.$store.dispatch("favorite/removeSora", item);
          break;
        case 'radio':
          window.appMain.$store.dispatch("favorite/removeRadio", item);
          break;
      }
    },
    downloadMp3({ }, item) {
      window.appMain.$store.dispatch("download/downloadMp3", item);
    },
    showFullplayer({ state }) {
      state.show_fullplayer = true;
    },
    closeFullplayer({ state }) {
      state.show_fullplayer = false;
    },
  },
});
