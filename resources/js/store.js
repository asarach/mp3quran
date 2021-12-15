import Vue from 'vue'
import Vuex from 'vuex'

import quran from './modules/quran'
import favorite from './modules/favorite'
import download from './modules/download'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    quran,
    favorite,
    download
  },
  state: {
    current_menu: {
      name: '',
      id: '',
      location: '',
    },
    initial: true,
    playing: false,
    playing_item: '',
    playing_type: '',
    playing_state: '',
    subscribed: false,
    stats: {},
    settings: {},
    languages_test: [],
    languages: [],
    all_ads: [],
    current_language: '',
    page_title: '',
    trans: window.trans,
    main_menu: [],
    posts_metas: [],
    last_comments: [],
    last_news: [],
    loading: false,
  },
  getters: {
    isPlaying: (state, getters) => (item) => {
      if (state.playing_item == item.id && state.playing) {
        return true;
      } else {
        return false;
      }
    },
    isLoading: (state, getters) => (item) => {
      if (state.playing_item == item.id && state.playing_state == 'loading') {
        return true;
      }
      if (state.playing_type == 'radio' && state.playing_item == item.id && state.playing_state == 'unloaded') {
        return true;
      }
      return false;
    },
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
          commit('setSubscribed', { subscribed: true })
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
      console.log('copy');
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
    },
    reportSora({ commit, state }, item) {
      let self = this;
      axios
        .get(
          item.prefix +
          "/" +
          item.read +
          "/" +
          item.sora +
          "/report"
        )
        .then(function (response) {
          if (response.data.success) {
            Vue.notify({
              group: "app",
              title: self.getters.getTrans("text.reported"),
              type: "success",
              text: self.getters.getTrans("text.sora-reported-success"),
            });
          } else {
            Vue.notify({
              group: "app",
              title: self.getters.getTrans("text.not-reported"),
              type: "warn",
              text: self.getters.getTrans("text.sora-reported-warn"),
            });
          }
        })
        .catch(function (error) {
          Vue.notify({
            group: "app",
            title: self.getters.getTrans("text.not-reported"),
            type: "warn",
            text: self.getters.getTrans("text.sora-reported-warn"),
          });
        });
    },

    notify({ commit, state }, note) {
      Vue.notify({
        group: note.group,
        title: note.title,
        type: note.type,
        text: note.text
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
    addLanguagesTets(state, { language }) {
      state.languages_test.push(language);
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
