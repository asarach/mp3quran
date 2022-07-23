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
  key: 'mp3quran_n.net',
  storage: window.localStorage,
  reducer: (state) => ({
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


// Sentry.init({
//   Vue,
//   dsn: "https://10d2a5e476d94cc9a533026780ff378c@o1119941.ingest.sentry.io/6171514",
//   integrations: [
//     new Integrations.BrowserTracing({
//       // routingInstrumentation: Sentry.vueRouterInstrumentation(router),
//       tracingOrigins: ["mp3quran.de", "mp3quran.com", /^\//],
//     }),
//   ],
//   tracesSampleRate: 0.75,
// });

Vue.filter('downloadUrl', function (value) {
  if (!value) return ''
  return value.replace('mp3quran.net/', 'mp3quran.net/download/')
})

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

Vue.component('alkahf-flipbook', require('./components/AlkahfFlipbook.vue').default);
Vue.component('file-uploader', require('./components/FileUploader.vue').default);
Vue.component('flip-book', require('./components/FlipBook.vue').default);
Vue.component('flip-book-desktop', require('./components/FlipBookDesktop.vue').default);
Vue.component('mushafs-flipbook', require('./components/MushafsFlipbook.vue').default);

Vue.component('my-dplayer', require('./components/MdPlayer.vue').default);
Vue.component('card-tv', require('./components/TvsItem.vue').default);
Vue.component('upload-image', require('./components/UploadImage.vue').default);
Vue.component('card-logo-video', require('./components/VideosCardLogoVideo.vue').default);
Vue.component('card-video', require('./components/VideosItem.vue').default);
Vue.component('card-playlist', require('./components/VideosItemPlaylist.vue').default);

import { mapActions, mapGetters, mapState } from "vuex";


function initiateVue() {
  window.appMain = new Vue({
    el: '#app',
    store: store,
    delimiters: ['${', '}'],
    data: {
      errors: new Errors(),
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
