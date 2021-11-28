import Vue from 'vue'
import App from './components/App.vue'
import store from './store';
import router from './router';


if (typeof window !== 'undefined') {
    require('./bootstrap');
    require('./main');
    require('./no-ssr');
    window.Event = new Vue();
}
require('./icons');

Vue.prototype.trans = (string, args) => {
    return store.getters.getTrans(string, args);
};
Vue.prototype.ajax_prefix = '/ajax';
Vue.prototype.prefix ='/' +  store.state.current_language +'/';

import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})



import UniqueId from 'vue-unique-id';
Vue.use(UniqueId);

import Tooltip from 'vue-directive-tooltip';
Vue.use(Tooltip);

import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed);

import Notifications from 'vue-notification'
import velocity      from 'velocity-animate'

Vue.use(Notifications, { velocity })



var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

if (typeof window !== 'undefined') {
    Vue.component('loading-spinner', require('./components/partials/LoadingSpinner.vue').default);
    Vue.prototype.scrollToTop = (x, y) => window.scrollTo(x, y);  

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
}




Vue.component('loading-error', require('./components/partials/LoadingError.vue').default);
Vue.component('confirmation', require('./components/partials/Confirmation.vue').default);
Vue.component('share', require('./components/partials/Share.vue').default);
Vue.component('search-form', require('./components/partials/SearchForm.vue').default);
Vue.component('flip-book-desktop', require('./components/partials/FlipBookDesktop.vue').default);
Vue.component('flip-book', require('./components/partials/FlipBook.vue').default);
Vue.component('router-link-asa', require('./components/partials/RouterLinkb.vue').default);
Vue.component('quick-access', require('./components/partials/QuickAccess.vue').default);
Vue.component('newsletter-subscribe', require('./components/partials/Newsletter.vue').default);


Vue.component('desktop-sidebar', require('./components/partials/Sidebar.vue').default);

Vue.component('sora', require('./components/partials/Sora.vue').default);
Vue.component('read', require('./components/partials/Read.vue').default);

Vue.component('card-reciter', require('./components/reciter/Item.vue').default);
Vue.component('card-radio', require('./components/radio/Item.vue').default);
Vue.component('card-tv', require('./components/tvs/Item.vue').default);
Vue.component('card-video', require('./components/videos/Item.vue').default);
Vue.component('card-playlist', require('./components/videos/ItemPlaylist.vue').default);

Vue.component('loader-simple', require('./components/loaders/Simple.vue').default);
Vue.component('loader-simpleb', require('./components/loaders/SimpleB.vue').default);
Vue.component('loader-simpled', require('./components/loaders/SimpleD.vue').default);
Vue.component('loader-video', require('./components/loaders/Video.vue').default);
Vue.component('loader-author', require('./components/loaders/Author.vue').default);
Vue.component('loader-simplevs', require('./components/loaders/SimpleVs.vue').default);
Vue.component('loader-mobile', require('./components/loaders/Mobile.vue').default);
Vue.component('loader-simples', require('./components/loaders/SimpleS.vue').default);
Vue.component('loader-simplev', require('./components/loaders/SimpleV.vue').default);
Vue.component('loader-simplec', require('./components/loaders/SimpleC.vue').default);
Vue.component('loader-simplep', require('./components/loaders/SimpleP.vue').default);
Vue.component('loader-simplepo', require('./components/loaders/SimplePo.vue').default);
Vue.component('loader-simplef', require('./components/loaders/SimpleF.vue').default);

Vue.component('tadabor-item', require('./components/tadabor/Item.vue').default);



Vue.component('ads-header', require('./components/ads/Header.vue').default);
Vue.component('campaign', require('./components/partials/Campaign.vue').default);

Vue.component('mobile', require('./components/Mobile.vue').default);
Vue.component('desktop', require('./components/Desktop.vue').default);


const app = new Vue({
  router,
  el: '#app',
  store: store,
});
