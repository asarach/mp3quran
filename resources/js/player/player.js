import Vue from 'vue'
import store from './store';
import VuexPersist from 'vuex-persist'

window.PlayerEvent = new Vue();
window.PlayerVue = Vue

new VuexPersist({
  key: 'mp3quranb.net_player',
  storage: window.localStorage,
  // reducer: (state) => ({
  //   player: state,
  // }),
}).plugin(store)


//Prototypes 
PlayerVue.prototype.trans = (string, args) => {
  let value = _.get(window.trans, string, string);
  _.eachRight(args, (paramVal, paramKey) => {
    value = _.replace(value, `:${paramKey}`, paramVal);
  });
  return value;
};

//Packages 
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
PlayerVue.component('vue-slider', VueSlider);

import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
PlayerVue.component('scale-loader', ScaleLoader);

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

//Components
PlayerVue.component('audio-player', require('./AudioPlayer.vue').default);
PlayerVue.component('mobile-player', require('./MobilePlayer.vue').default);
PlayerVue.component('desktop-player', require('./DesktopPlayer.vue').default);

window.appFoolter = new PlayerVue({
  el: '#appFooter',
  store: store
});