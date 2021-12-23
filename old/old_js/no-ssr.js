import Vue from 'vue'

import store from './store';
import VuexPersist from 'vuex-persist'

new VuexPersist({
    key: 'mp3quranb.net',
    storage: window.localStorage,
    reducer: (state) => ({
      player: state.player,
      favorite: state.favorite,
    }),
}).plugin(store)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import Hls from 'hls.js'
window.Hls = Hls;
//window.Hls = Hls
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'
Vue.component('d-player', VueDPlayer);

import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
Vue.component('scale-loader', ScaleLoader);

import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
Vue.component('multiselect', Multiselect)

import VueCoreVideoPlayer from 'vue-core-video-player'
Vue.use(VueCoreVideoPlayer)

var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

import SweetModal from 'sweet-modal-vue/src/plugin.js'
Vue.use(SweetModal)

import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)

import Notifications from 'vue-notification'
import velocity      from 'velocity-animate'

Vue.use(Notifications, { velocity })

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

Vue.component('vue-slider', VueSlider);

import {Circle8 } from 'vue-loading-spinner'
Vue.component('circle-spin', Circle8 );

import fullscreen from 'vue-fullscreen'
Vue.use(fullscreen)


import Affix from 'vue-affix';
Vue.use(Affix);

Vue.component('audio-player', require('./components/partials/AudioPlayer.vue').default);
Vue.component('mobile-player', require('./components/partials/MobilePlayer.vue').default);
Vue.component('desktop-player', require('./components/partials/DesktopPlayer.vue').default);
Vue.component('my-dplayer', require('./components/partials/MdPlayer.vue').default);
Vue.component('upload-image', require('./components/partials/UploadImage.vue').default);

import 'vue-directive-tooltip/dist/vueDirectiveTooltip.css';

