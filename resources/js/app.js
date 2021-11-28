require('./livewire-vue');

import Vue from 'vue'
import store from './store';
import VuexPersist from 'vuex-persist'
require('./bootstrap');
require('./main');
var Turbolinks = require("turbolinks")
Turbolinks.start()

window.AppEvent = new Vue();

new VuexPersist({
  key: 'mp3quranb.net',
  storage: window.localStorage,
  reducer: (state) => ({
    player: state.player,
    favorite: state.favorite,
  }),
}).plugin(store)


const Errors = require("./errors.js");

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

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his childrens
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});

import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
Vue.component('scale-loader', ScaleLoader);

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed);

import Hls from 'hls.js'
window.Hls = Hls;
import 'vue-dplayer/dist/vue-dplayer.css'
import VueDPlayer from 'vue-dplayer'
Vue.component('d-player', VueDPlayer);

import fullscreen from 'vue-fullscreen'
Vue.use(fullscreen)

import 'vue-directive-tooltip/dist/vueDirectiveTooltip.css';
import Tooltip from 'vue-directive-tooltip';
Vue.use(Tooltip);

import Notifications from 'vue-notification'
import velocity from 'velocity-animate'

Vue.use(Notifications, { velocity })

Vue.component('my-dplayer', require('./components/MdPlayer.vue').default);
Vue.component('share-box', require('./components/Share.vue').default);
Vue.component('confirmation', require('./components/Confirmation.vue').default);
Vue.component('quick-access', require('./components/QuickAccess.vue').default);
Vue.component('search-form', require('./components/SearchForm.vue').default);
Vue.component('mushafs-flipbook', require('./components/MushafsFlipbook.vue').default);
Vue.component('alkahf-flipbook', require('./components/AlkahfFlipbook.vue').default);
Vue.component('favorites', require('./components/Favorites.vue').default);
Vue.component('card-sora', require('./components/Sora.vue').default);
Vue.component('sora-show', require('./components/SoraShow.vue').default);
Vue.component('read', require('./components/Read.vue').default);
Vue.component('file-uploader', require('./components/FileUploader.vue').default);
Vue.component('flip-book', require('./components/FlipBook.vue').default);
Vue.component('flip-book-desktop', require('./components/FlipBookDesktop.vue').default);
Vue.component('upload-image', require('./components/UploadImage.vue').default);
Vue.component('loading-spinner', require('./components/LoadingSpinner.vue').default);
Vue.component('card-video', require('./components/VideosItem.vue').default);
Vue.component('card-playlist', require('./components/VideosItemPlaylist.vue').default);
Vue.component('card-logo-video', require('./components/VideosCardLogoVideo.vue').default);
Vue.component('card-reciter', require('./components/ReciterItem.vue').default);
Vue.component('card-radio', require('./components/RadioItem.vue').default);
Vue.component('card-tv', require('./components/TvsItem.vue').default);
Vue.component('tadabor-item', require('./components/TadaborItem.vue').default);

function initiateVue() {
  window.appMain = new Vue({
    el: '#app',
    store: store,
    delimiters: ['${', '}'],
    data: {
      errors: new Errors(),
      show_languages: false,
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
    methods: {
      toggelLanguages() {
        this.show_languages = !this.show_languages;
      },
      emitEvent() {

      },
      getItemAndPlay(url) {
        axios
          .get(url)
          .then(function (response) {
            window.appFoolter.$store.dispatch(
              "addPlayItem",
              response.data
            );
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      handleAbort() { },
      closeLanguages() {
        this.show_languages = false;
      },
    },
  });
}

initiateVue();

document.addEventListener("turbolinks:render", function (event) {
  initiateVue();
});

