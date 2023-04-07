/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./main');




window.Vue = require('vue');
window.Event = new Vue();
Vue.prototype.trans = (string, args) => {
  let value = _.get(window.trans, string, string);
  _.eachRight(args, (paramVal, paramKey) => {
    value = _.replace(value, `:${paramKey}`, paramVal);
  });
  return value;
};

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    current_language: 'ar',
    current_menu: {
      name: '',
      id: '',
      location: '',
    },
  }
})

Vue.prototype.Auth = window.App.user
Vue.prototype.appName = window.App.name
Vue.prototype.prefix = window.App.urlBase + store.state.current_language + '/admin/';
Vue.prototype.ajax_prefix = window.App.urlBase + store.state.current_language + '/admin/ajax/';
Vue.prototype.urlBase = window.App.urlBase;
Vue.prototype.appUrl = window.App.appUrl;


/*** tirth party component ***/

import VueRouter from 'vue-router'
Vue.use(VueRouter)



import vueHeadful from 'vue-headful';
Vue.component('vue-headful', vueHeadful)

import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
Vue.use(Datetime)

import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
Vue.component('multiselect', Multiselect)

import { Settings } from 'luxon'
Settings.defaultLocale = 'ar'

import Notifications from 'vue-notification'
import velocity from 'velocity-animate'

Vue.use(Notifications, { velocity })

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/dist/vueDirectiveTooltip.css';
Vue.use(Tooltip);

/*** Local component ***/

Vue.component('loading-spinner', require('./components/partials/LoadingSpinner.vue').default);
Vue.component('loading-error', require('./components/partials/LoadingError.vue').default);
Vue.component('confirmation', require('./components/partials/Confirmation.vue').default);
Vue.component('filtering', require('./components/partials/Filtering.vue').default);
Vue.component('pagination', require('./components/partials/Pagination.vue').default);
Vue.component('upload-image', require('./components/partials/UploadImage.vue').default);
Vue.component('upload-images', require('./components/partials/UploadImages.vue').default);
Vue.component('upload-file', require('./components/partials/UploadFile.vue').default);

Vue.component('app-form', require('./components/app/Form.vue').default);
Vue.component('page-form', require('./components/page/Form.vue').default);
Vue.component('sora-form', require('./components/sora/Form.vue').default);
Vue.component('language-form', require('./components/language/Form.vue').default);
Vue.component('twenty_read-form', require('./components/twenty_read/Form.vue').default);
Vue.component('radio-form', require('./components/radio/Form.vue').default);
Vue.component('tadabor-form', require('./components/tadabor/Form.vue').default);
Vue.component('reciter-form', require('./components/reciter/Form.vue').default);
Vue.component('tafsir-form', require('./components/tafsir/Form.vue').default);
Vue.component('tsora-form', require('./components/tsora/Form.vue').default);
Vue.component('tv-form', require('./components/tv/Form.vue').default);
Vue.component('ad-form', require('./components/ad/Form.vue').default);
Vue.component('video-form', require('./components/video/Form.vue').default);
Vue.component('link-form', require('./components/link/Form.vue').default);
Vue.component('mushaf-form', require('./components/mushaf/Form.vue').default);
Vue.component('vgroup-form', require('./components/vgroup/Form.vue').default);
Vue.component('rewaya-form', require('./components/rewaya/Form.vue').default);
Vue.component('twenty_rewaya-form', require('./components/twenty_rewaya/Form.vue').default);
Vue.component('server-form', require('./components/server/Form.vue').default);
Vue.component('user-form', require('./components/user/Form.vue').default);
Vue.component('menu-form', require('./components/menu/Form.vue').default);
Vue.component('upload-avatar', require('./components/user/UploadAvatar.vue').default);
Vue.component('clear-cache', require('./components/partials/Cache.vue').default);


Vue.component('newsletter-form', require('./components/newsletter/NewsletterForm.vue').default);
Vue.component('nl-message-form', require('./components/newsletter/MessageForm.vue').default);
Vue.component('nl-subscriber-form', require('./components/newsletter/SubscriberForm.vue').default);
Vue.component('nl-template-form', require('./components/newsletter/TemplateForm.vue').default);
Vue.component('newsletter-nav', require('./components/newsletter/NewsletterNav.vue').default);


import routes from './routes'

/*** Local component ***/
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: routes
})
router.afterEach((to, from) => {
  $('.tip').tooltip('hide');
})

/*** Vuex ***/


const app = new Vue({
  router,
  el: '#app',
  store: store,
  data: {
    animation: {
      enter: {
        opacity: [1, 0],
        translateX: [0, -300],
        scale: [1, 0.2]
      },
      leave: {
        opacity: 0,
        height: 0
      }
    }
  }

});
