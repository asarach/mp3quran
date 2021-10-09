import app from './app';
import renderVueComponentToString from 'vue-server-renderer/basic';

app.$router.push(context.url);


// Set vuex data
app.$store.commit('setStats', { stats: context.stats });
app.$store.commit('setSettings', { settings: context.settings });
app.$store.commit('setSubscribed', { subscribed: context.subscribed });
app.$store.commit('setLanguages', { languages: context.languages });
app.$store.commit('setAllAds', { all_ads: context.all_ads });
app.$store.commit('setCurrentLanguages', { current_language: context.current_language });
app.$store.commit('setPageTitle', { page_title: context.page_title });
app.$store.commit('setTrans', { trans: context.trans });
app.$store.commit('setMainMenu', { main_menu: context.main_menu });

app.$store.commit('changelaoding', { loading: false }, { root: true })
//set index data
if (context.page == 'home') {
    app.$store.commit('index/setReads', { reads: context.reads })
    app.$store.commit('index/setRewayat', { rewayat: context.rewayat })
    app.$store.commit('index/setTadabor', { show_tadabor: context.show_tadabor })
}

if (context.page == 'search') {
    app.$store.commit('search/setVideos', { videos: context.videos });
    app.$store.commit('search/setReciters', { reciters: context.reciters });
    app.$store.commit('search/setRadios', { radios: context.radios });
    app.$store.commit('search/setTvs', { tvs: context.tvs });
    app.$store.commit('search/setReads', { reads: context.reads });
}

if (context.page == 'tvs') {
    app.$store.commit('tv/setTvs', { tvs: context.tvs })
}
if (context.page == 'apps') {
    app.$store.commit('app/setApps', { apps: context.apps })
}
if (context.page == 'playlists') {
    app.$store.commit('video/setPlaylists', { playlists: context.playlists })
}
if (context.page == 'videos') {
    app.$store.commit('video/setVideos', { videos: context.videos })
}
if (context.page == 'video') {
    app.$store.commit('video/setVideo', { video: context.video })
    app.$store.commit('video/setVideoShow', { show: true })
}
if (context.page == 'video-download') {
    app.$store.commit('video/setVideo', { video: context.video })
    app.$store.commit('video/setVideoShow', { show: true })
}
if (context.page == 'radios') {
    app.$store.commit('radio/setRadios', { radios: context.radios })
    app.$store.commit('radio/setRewayat', { rewayat: context.rewayat })
}
if (context.page == 'tadabors') {
    app.$store.commit('tadabor/setItems', { items: context.items })
    app.$store.commit('list/setSoar', { soar: context.soar })
}
if (context.page == 'tadabor') {
    app.$store.commit('tadabor/setItem', { item: context.item })
}
if (context.page == 'mushaf') {
    app.$store.commit('quran/setMushafPages', { mushaf_pages: context.mushaf_pages })
    app.$store.commit('quran/setParts', { parts: context.parts })
}

if (context.page == 'alkahf') {
    app.$store.commit('quran/setAlkahfPages', { alkahf_pages: context.alkahf_pages })
    app.$store.commit('quran/setReadSoar', { read_soar: context.read_soar })
    app.$store.commit('quran/setPage', { page: context.page })
    app.$store.commit('quran/setPageShare', { page_share: context.page_share })
}
if (context.page == 'downloads') {
    app.$store.commit('quran/setDownloads', { downloads: context.downloads })
}
if (context.page == 'reciters') {
    app.$store.commit('reciter/setReciters', { reciters: context.reciters })
    app.$store.commit('reciter/setLetters', { letters: context.letters })

}
if (context.page == 'sora') {
    app.$store.commit('reciter/setSoraData', { sora: context.sora })
}
if (context.page == 'reciter') {
    app.$store.commit('reciter/setReads', { reads: context.reciter_reads })
    app.$store.commit('reciter/setReciter', { reciter: context.reciter })
    app.$store.commit('reciter/setActiveRead', { active_read: context.active_read })
}
if (context.page == 'page') {
    app.$store.commit('page/setData', { page_content: context.page_content })
}
if (context.honeypot) {
    app.$store.commit('page/setHoneypot', { honeypot: context.honeypot })
}

renderVueComponentToString(app, (err, res) => {
    if (err) {
      throw new Error(err);
  }
  dispatch(res);
  });


  