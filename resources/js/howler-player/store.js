import Vue from 'vue'
import Vuex from 'vuex'
import {Howl, Howler} from 'howler';

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
    setDurationSeconds(state, { durationSeconds }) {
      state.durationSeconds = durationSeconds;
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
    displayedTime: (state) => {
      return convertTimeHHMMSS(state.currentSeconds);
    },
    displayedDuration: (state) => {
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
      
      state.audio.pause();
      // state.audio.setAttribute('src', state.source.file); //changed on howler
      state.audio.load();
      
      if ('currentTime' in item) {
       
        commit('setCurrentSeconds', { currentSeconds: item.currentTime });
        // state.audio.currentTime = item.currentTime;//changed on howler
        state.audio.seek(item.currentTime);//changed on howler
      } else {
        commit('setCurrentSeconds', { currentSeconds: 0 });
        // state.audio.currentTime = 0;//changed on howler
        state.audio.seek(0);//changed on howler
      }
      

      dispatch("play");
    },
    toggeleItem({ dispatch, state }) {
      if (state.playing) {
        dispatch("pause");
      } else {
        dispatch("play");
      }''
    },
    load({ commit, state }, item) {
      // if (state.audio.readyState >= 2) {//changed on howler
      if (state.audio.state() == 'loaded') {//changed on howler
        state.loaded = true;

        let durationSeconds = parseInt(state.audio.duration());//changed on howler
        if (!durationSeconds) {
          durationSeconds = 0;
        }

        commit('setDurationSeconds', { durationSeconds: durationSeconds });
        
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
      state.audio.stop();//changed on howler
      // state.audio.currentTime = 0;//changed on howler
      commit('setCurrentSeconds', { currentSeconds: 0 });
      commit("setPlaying", { playing: false });
    },

    setAudio({ state, dispatch, commit }, audioold) {
      // commit("setPlaying", { playing: false });
      state.playing = false;
      // state.audio = document.createElement('audio');//changed on howler
      state.audio = new Howl({//changed on howler
        src: 'https://server8.mp3quran.net/ahmad_huth/076.mp3'//changed on howler
      });//changed on howler

      state.audio.on("fade", () => {//changed on howler
        dispatch("update");
      });
      state.audio.on("end", () => {//changed on howler
        dispatch("nextItem");
      });
      state.audio.on("load", () => {//changed on howler
        dispatch("load");
      });
      // state.audio.on("pause", () => {//changed on howler
      // });
      // state.audio.on("play", () => {//changed on howler
      // });

      // state.audio.setAttribute('controls', 'controls');//changed on howler
      // state.audio.setAttribute('id', 'audioPlayer');//changed on howler
      // if (state.source.file !== 'empty') {//changed on howler
      //   state.audio.setAttribute('src', state.source.file);//changed on howler
      //   state.audio.load();//changed on howler
      // }//changed on howler
      // $('body').append(state.audio);//changed on howler

      state.audio.volume(state.volume / 100);//changed on howler
      state.audio.seek(state.currentSeconds);//changed on howler
      // state.audio.currentTime = state.currentSeconds;//changed on howler
    },

    update({ state, commit }) {
      // commit("setCurrentSeconds", { currentSeconds: parseInt(state.audio.currentTime) });//changed on howler
      commit("setCurrentSeconds", { currentSeconds: parseInt(state.audio.seek()) });//changed on howler
    },


    //audio controles
    setPercentComplete({ state }, value) {
      // let cal = (value * state.audio.duration) / 100;//changed on howler
      let cal = (value * state.audio.duration()) / 100;//changed on howler
      // state.audio.currentTime = parseInt(cal);//changed on howler
      state.audio.seek(parseInt(cal));//changed on howler
    },
    changeVolume({ commit, state }, volume) {
      commit("setVolume", { volume: volume });
      // state.audio.volume = volume / 100;//changed on howler
      state.audio.volume(volume / 100);//changed on howler
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
    bookmarkTsora({ state }) {
      if (state.source.type == 'tsora') {
        let url = window.App.urlBase + '/' + window.App.current_language + '/ajax/tsora/bookmark?id=' + state.source.read_id + '&time=' + state.currentSeconds;
        axios.get(url).then(function (response) {

        }).catch(function (error) {
        });
      }
    },
    clearPlaylist({ commit, dispatch }) {
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
      dispatch("stop");
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
