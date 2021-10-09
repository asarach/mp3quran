import app from './app';

app.$store.commit('setStats', { stats: window.stats });
app.$store.commit('setSettings', { settings: window.settings });
app.$store.commit('setSubscribed', { subscribed: window.subscribed });
app.$store.commit('setLanguages', { languages: window.languages });
app.$store.commit('setAllAds', { all_ads: window.all_ads });
app.$store.commit('setCurrentLanguages', { current_language: window.current_language });
app.$store.commit('setPageTitle', { page_title: window.page_title });
app.$store.commit('setTrans', { trans: window.trans });
app.$store.commit('setMainMenu', { main_menu: window.main_menu });
app.$store.commit('changelaoding', { loading: false }, { root: true })
app.$store.commit('setInitial', { initial: true }, { root: true })
//set index data
if (window.page == 'home') {
    app.$store.commit('index/setReads', { reads: window.reads })
    app.$store.commit('index/setRewayat', { rewayat: window.rewayat })
    app.$store.commit('index/setTadabor', { show_tadabor: window.show_tadabor })
}

if (window.page == 'search') {
    app.$store.commit('search/setVideos', { videos: window.videos });
    app.$store.commit('search/setReciters', { reciters: window.reciters });
    app.$store.commit('search/setRadios', { radios: window.radios });
    app.$store.commit('search/setTvs', { tvs: window.tvs });
    app.$store.commit('search/setReads', { reads: window.reads });
}

if (window.page == 'tvs') {
    app.$store.commit('tv/setTvs', { tvs: window.tvs })
}
if (window.page == 'apps') {
    app.$store.commit('app/setApps', { apps: window.apps })
}
if (window.page == 'videos') {
    app.$store.commit('video/setVideos', { videos: window.videos })
}
if (window.page == 'playlists') {
    app.$store.commit('video/setPlaylists', { playlists: window.playlists })
}
if (window.page == 'video') {
    app.$store.commit('video/setVideo', { video: window.video })
    app.$store.commit('video/setVideoShow', { show: true })
}
if (window.page == 'video-download') {
    app.$store.commit('video/setVideo', { video: window.video })
    app.$store.commit('video/setVideoShow', { show: true })
}
if (window.page == 'radios') {
    app.$store.commit('radio/setRadios', { radios: window.radios })
    app.$store.commit('radio/setRewayat', { rewayat: window.rewayat })
}
if (window.page == 'tadabors') {
    app.$store.commit('tadabor/setItems', { items: window.items })
    app.$store.commit('list/setSoar', { soar: window.soar })
}
if (window.page == 'tadabor') {
    app.$store.commit('tadabor/setItem', { item: window.item })
}
if (window.page == 'mushaf') {
    app.$store.commit('quran/setMushafPages', { mushaf_pages: window.mushaf_pages })
    app.$store.commit('quran/setParts', { parts: window.parts })
}
if (window.page == 'alkahf') {
    app.$store.commit('quran/setAlkahfPages', { alkahf_pages: window.alkahf_pages })
    app.$store.commit('quran/setReadSoar', { read_soar: window.read_soar })
    app.$store.commit('quran/setPage', { page: window.page })
    app.$store.commit('quran/setPageShare', { page_share: window.page_share })
}
if (window.page == 'downloads') {
    app.$store.commit('quran/setDownloads', { downloads: window.downloads })
}
if (window.page == 'reciters') {
    app.$store.commit('reciter/setReciters', { reciters: window.reciters })
    app.$store.commit('reciter/setLetters', { letters: window.letters })

}
if (window.page == 'sora') {
    app.$store.commit('reciter/setSoraData', { sora: window.sora })
}
if (window.page == 'reciter') {
    app.$store.commit('reciter/setReads', { reads: window.reciter_reads })
    app.$store.commit('reciter/setReciter', { reciter: window.reciter })
    app.$store.commit('reciter/setActiveRead', { active_read: window.active_read })
}
if (window.page == 'page') {
    app.$store.commit('page/setPage', { page_content: window.page_content })
}
if (window.honeypot) {
    app.$store.commit('page/setHoneypot', { honeypot: window.honeypot })
}



app.$mount('#app', true);