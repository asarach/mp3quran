import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'
import reciter from './modules/reciter'
import tv from './modules/tv'
import app from './modules/app'
import uploader from './modules/uploader'
import radio from './modules/radio'
import tadabor from './modules/tadabor'
import download from './modules/download'
import search from './modules/search'
import video from './modules/video'
import quran from './modules/quran'
import page from './modules/page'
import player from './modules/player'
import favorite from './modules/favorite'
import report from './modules/report'
import list from './modules/list'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    index,
    reciter,
    tv,
    app,
    uploader,
    radio,
    tadabor,
    video,
    download,
    quran,
    search,
    player,
    favorite,
    report,
    list,
    page,
  },
  state: {
    current_menu: {
      name: '',
      id: '',
      location: '',
    },
    initial: true,
    subscribed: false,
    stats: {},
    settings: {},
    languages: [],
    all_ads: [],
    current_language: '',
    page_title: '',
    trans: {},
    main_menu: [],
    posts_metas: [],
    last_comments: [],
    last_news: [],
    loading: false,
  },
  getters: {
    getTrans: (state) => (string, args) => {
      var string = string.split(".");
      let value = state.trans[string[0]][string[1]];
      if (value) {
        for (var arg in args) {
          value = value.replace(`:${arg}`, args[arg]);
        }
      } else {
        value = string['1'];
      }

      return value
    },
  },
  actions: {
    newsletterSubscribe({ commit, state }, vm) {
      var data = {
        email: vm.email
      }
      axios
        .post(vm.url, data)
        .then((response) => {
          commit('setSubscribed', {subscribed: true})
          Vue.notify({
            group: 'app',
            title: this.getters.getTrans('text.you-subscribed'),
            type: 'success',
            text: this.getters.getTrans('text.you-subscribed-test')
          })
        })
        .catch((error) => {
          Vue.notify({
            group: 'app',
            title: this.getters.getTrans('text.you-not-subscribed'),
            type: 'error',
            text: this.getters.getTrans('text.you-not-subscribed-test')
          })
        });
    },
    clipboardErrorHandler({ commit, state }, products) {
      Vue.notify({
        group: 'app',
        title: this.getters.getTrans('text.error'),
        type: 'error',
        text: this.getters.getTrans('text.error-copying-text')
      })
    },
    clipboardSuccessHandler({ commit, state }, products) {
      Vue.notify({
        group: 'app',
        title: this.getters.getTrans('text.copied'),
        type: 'success',
        text: this.getters.getTrans('text.text-copied')
      })
    },
    clipboardErrorHandlerText({ commit, state }, products) {
      Vue.notify({
        group: 'app',
        title: this.getters.getTrans('text.error'),
        type: 'error',
        text: this.getters.getTrans('text.error-copying-code')
      })
    },
    clipboardSuccessHandlerText({ commit, state }, products) {
      Vue.notify({
        group: 'app',
        title: this.getters.getTrans('text.copied'),
        type: 'success',
        text: this.getters.getTrans('text.code-copied')
      })
    }
  },

  mutations: {
    setStats(state, { stats }) {
      state.stats = stats;
    },
    setInitial(state, { initial }) {
      if (typeof window !== 'undefined') {
        state.initial = initial;
      }
    },

    setSettings(state, { settings }) {
      state.settings = settings;
    },
    setLanguages(state, { languages }) {
      state.languages = languages;
    },
    setSubscribed(state, { subscribed }) {
      state.subscribed = subscribed;
    },
    setAllAds(state, { all_ads }) {
      state.all_ads = all_ads;
    },
    setCurrentLanguages(state, { current_language }) {
      state.current_language = current_language;
    },
    setPageTitle(state, { page_title }) {
      state.page_title = page_title;
    },
    setTrans(state, { trans }) {
      state.trans = trans;
    },
    setMainMenu(state, { main_menu }) {
      state.main_menu = main_menu;
    },
    changelaoding(state, { loading }) {
      state.loading = loading;
    },
    setPostsMetas(state, { posts_metas }) {
      state.posts_metas = posts_metas;
    },
    setLastNews(state, { last_news }) {
      state.last_news = last_news;
    },
    setLastComments(state, { last_comments }) {
      state.last_comments = last_comments;
    },
    appendPostsMetas(state, { posts_metas }) {
      Object.assign(state.posts_metas, posts_metas)
    },
  },
});
