require('./livewire-vue');

import Vue from 'vue'
import store from './store';
import VuexPersist from 'vuex-persist'

require('./bootstrap');
require('../resources/js/main');
var Turbolinks = require("turbolinks")
Turbolinks.start()

window.AppEvent = new Vue();

new VuexPersist({
  key: 'mp3quran_n.net',
  storage: window.localStorage,
  reducer: (state) => ({
    favorite: state.favorite,
  }),
}).plugin(store)



window.Vue = Vue

Vue.prototype.trans = (string, args) => {
  let value = _.get(window.trans, string, string);
  _.eachRight(args, (paramVal, paramKey) => {
    value = _.replace(value, `:${paramKey}`, paramVal);
  });
  return value;
};

Vue.prototype.ajax_prefix = window.App.urlBase + '/' + window.App.current_language + '/ajax';
Vue.prototype.prefix = window.App.urlBase + '/' + window.App.current_language + '/';
Vue.prototype.style_version = window.App.style_version;


import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
Vue.component('scale-loader', ScaleLoader);


      import VueYouTubeEmbed from 'vue-youtube-embed'
      Vue.use(VueYouTubeEmbed);


import { mapActions, mapGetters, mapState } from "vuex";


function initiateVue() {
  window.appMain = new Vue({
    el: '#app',
    store: store,
    delimiters: ['${', '}'],
    data: {
      show_languages: false,
      player_state: {
        playing_state: null,
        playing_item: null,
        playing_type: null,
      },
      animation: {
        enter: {
          opacity: [1, 0],
          translateX: [0, -300],
          scale: [1, 0.2],
        },
        leave: {
          opacity: 0,
          height: 0,
        },
      },
    },
    computed: {
      ...mapGetters(["isPlaying", "isLoading"]),
    },
    methods: {
      toggelLanguages() {
        this.show_languages = !this.show_languages;
      },
      shareItem(title, url, description) {
        AppEvent.$emit("share", title, url, description);
      },
      emitEvent() {

      },
      getItemAndPlay(url) {
        axios
          .get(url)
          .then(function (response) {
            window.player.addAndPlayItem(response.data);
          })
          .catch(function (error) {
          });
      },
      loadPalylist(id, name) {
        let self = this;
        axios
          .get(this.ajax_prefix + "/playlist/" + id)
          .then(function (response) {
            window.player.loadPalylist(response.data, id, name);
            Vue.notify({
              group: 'app',
              title: self.trans('text.done'),
              type: 'success',
              text: self.trans('text.playlist-loaded-text'),
            })
          })
          .catch(function (error) {
            Vue.notify({
              group: 'app',
              title: self.trans('text.error'),
              type: 'success',
              text: self.trans('text.playlist-not-loaded-text'),
            })
          });
      },
      deletePalylist(id) {
        let self = this;
        axios
          .delete(this.ajax_prefix + "/playlist/" + id)
          .then(function (response) {
            // window.location.reload(false); 
            Turbolinks.visit(window.location.toString(), { action: 'replace' })
            Vue.notify({
              group: 'app',
              title: self.trans('text.done'),
              type: 'success',
              text: self.trans('text.playlist-deleted-text'),
            })
          })
          .catch(function (error) {
            Vue.notify({
              group: 'app',
              title: self.trans('text.error'),
              type: 'success',
              text: self.trans('text.playlist-not-deleted-text'),
            })
          });
      },
      handleAbort() { },
      closeLanguages() {
        this.show_languages = false;
      },
    },
    mounted() {
      let self = this;
      var MainLoading = document.getElementById("MainLoading");
      MainLoading.style.display = "none";
      window.addEventListener("changeState", (event) => {
        self.player_state = event.detail;
      });
    }
  });
}
initiateVue();

document.addEventListener("turbolinks:before-visit", function (event) {
  var MainLoading = document.getElementById("MainLoading");
  MainLoading.style.display = "flex";
});
document.addEventListener("turbolinks:render", function (event) {
  initiateVue();
});
