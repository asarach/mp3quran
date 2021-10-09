// router.js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var routes_base = '/:lang/';
export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    routes: [{
        path: routes_base,
        component: require('./components/Index.vue').default
    },
    {
        path: routes_base + 'newsletter',
        component: require('./components/pages/Newsletter.vue').default
    },
    {
        path: routes_base + 'favorites',
        component: require('./components/pages/Favorites.vue').default
    },
    {
        path: routes_base + 'reciters',
        component: require('./components/reciter/Index.vue').default
    },

    {
        path: routes_base + 'radios',
        component: require('./components/radio/Index.vue').default
    },
    {
        path: routes_base + 'mushaf',
        component: require('./components/quran/Index.vue').default
    },
    {
        path: routes_base + 'tadabor',
        component: require('./components/tadabor/Index.vue').default
    },
    {
        path: routes_base + 'tadabor/:id',
        component: require('./components/tadabor/Show.vue').default
    },
    {
        path: routes_base + 'alkahf-surah',
        component: require('./components/quran/Alkahf.vue').default
    },
    
    {
        path: routes_base + 'live',
        component: require('./components/tvs/Index.vue').default
    },
    {
        path: routes_base + 'videos',
        component: require('./components/videos/Index.vue').default
    },
    {
        path: routes_base + 'video/playlist/:id',
        component: require('./components/videos/Playlist.vue').default
    },
    {
        path: routes_base + 'video/:slug',
        component: require('./components/videos/Show.vue').default
    },
    {
        path: routes_base + 'video/download/:id',
        component: require('./components/videos/Download.vue').default
    },
    {
        path: routes_base + 'quran-download',
        component: require('./components/pages/Download.vue').default
    },
    {
        path: routes_base + 'apps',
        component: require('./components/pages/Apps.vue').default
    },
    {
        path: routes_base + 'api',
        component: require('./components/pages/Api.vue').default
    },
    // {
    //     path: routes_base + 'uploader',
    //     component: require('./components/pages/Uploader.vue').default
    // },
    {
        path: routes_base + 'about',
        component: require('./components/pages/About.vue').default
    },
    {
        path: routes_base + 'privacy',
        component: require('./components/pages/Privacy.vue').default
    },
    {
        path: routes_base + 'contact-us',
        component: require('./components/pages/Contact.vue').default
    },
    {
        path: routes_base + 'sitemap',
        component: require('./components/pages/Sitemap.vue').default
    },
    {
        path: routes_base + 'search',
        component: require('./components/pages/Search.vue').default
    },
    {
        path: routes_base + ':slug',
        component: require('./components/reciter/Show.vue').default
    },
    {
        path: routes_base + ':slug/:sora',
        component: require('./components/reciter/Sora.vue').default
    },

    ]
})
