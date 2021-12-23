import Vue from 'vue'
import store from './store';
import VuexPersist from 'vuex-persist'

window.PlayerEvent = new Vue();
window.PlayerVue = Vue
window.appMain = {}

new VuexPersist({
  key: 'mp3quranb.net_player',
  storage: window.localStorage
}).plugin(store)


//Prototypes 
PlayerVue.prototype.ajax_prefix = window.App.urlBase + '/' + window.App.current_language + '/ajax';
PlayerVue.prototype.prefix = window.App.urlBase + '/' + window.App.current_language + '/';
PlayerVue.prototype.style_version = window.App.style_version;
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
PlayerVue.use(VueClipboard)

PlayerVue.directive('click-outside', {
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
//Components
PlayerVue.component('audio-player', require('./AudioPlayer.vue').default);
PlayerVue.component('mobile-player', require('./MobilePlayer.vue').default);
PlayerVue.component('desktop-player', require('./DesktopPlayer.vue').default);
PlayerVue.component('circle-spin', require('../components/CircleSpin.vue').default);
window.appFoolter = new PlayerVue({
  el: '#appFooter',
  store: store
});