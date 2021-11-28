import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        videos: [],
        radios: [],
        reads: [],
        soar: [],
        show: {
            videos: [],
            radios: [],
            reads: [],
            soar: [],
        }
    },
    mutations: {
        setVideos(state, { videos }) {
            state.videos = videos;
        },
        setRadios(state, { radios }) {
            state.radios = radios;
        },
        setReads(state, { reads }) {
            state.reads = reads;
        },
        setSoar(state, { soar }) {
            state.soar = soar;
        },
        setShowVideos(state, { videos }) {
            state.show.videos = videos;
        },
        setShowRadios(state, { radios }) {
            state.show.radios = radios;
        },
        setShowReads(state, { reads }) {
            state.show.reads = reads;
        },
        setShowSoar(state, { soar }) {
            state.show.soar = soar;
        },
        appendVideos(state, { videos }) {
            for (var i = 0; i < videos.data.length; i++) {
                state.show.videos.data.push(videos.data[i]);
            }
            state.show.videos.current_page = videos.current_page;
            state.show.videos.last_page = videos.last_page;
        },
        appendSoar(state, { soar }) {
            for (var i = 0; i < soar.data.length; i++) {
                state.show.soar.data.push(soar.data[i]);
            }
            state.show.soar.current_page = soar.current_page;
            state.show.soar.last_page = soar.last_page;
        },
        appendRadios(state, { radios }) {
            for (var i = 0; i < radios.data.length; i++) {
                state.show.radios.data.push(radios.data[i]);
            }
            state.show.radios.current_page = radios.current_page;
            state.show.radios.last_page = radios.last_page;
        },
        appendReads(state, { reads }) {
            for (var i = 0; i < reads.data.length; i++) {
                state.show.reads.data.push(reads.data[i]);
            }
            state.show.reads.current_page = reads.current_page;
            state.show.reads.last_page = reads.last_page;
        },
    },
    getters: {
        soarIncludes: (state, getters) => (item) => {
            if (state.soar.includes(item)) {
                return true;
            } else {
                return false;
            }
        },
        readsIncludes: (state, getters) => (item) => {
            if (state.reads.includes(item)) {
                return true;
            } else {
                return false;
            }
        },
        radiosIncludes: (state, getters) => (item) => {
            if (state.radios.includes(item)) {
                return true;
            } else {
                return false;
            }
        },
        videosIncludes: (state, getters) => (item) => {
            if (state.videos.includes(item)) {
                return true;
            } else {
                return false;
            }
        },

    },
    actions: {
        setData({ commit, state }, vm) {
                let data = {
                    videos: state.videos,
                    radios: state.radios,
                    reads: state.reads,
                    soar: state.soar,
                }
                axios.post("ajax/favorites", data).then(function (response) {

                    commit('setShowVideos', { videos: response.data.videos })
                    commit('setShowSoar', { soar: response.data.soar })
                    commit('setShowRadios', { radios: response.data.radios })
                    commit('setShowReads', { reads: response.data.reads })

                    commit('changelaoding', { loading: false }, { root: true })

                }).catch(function (error) {
                });
            

        },
        moreSoar({ commit, state }, url) {
            var page = state.show.soar.current_page + 1;
            var base = 'ajax/favorites?t=reads&';
            if (page > 1) {
                base = base + 'page=' + page + '&';
            }
            var url = base.slice(0, -1);
            let data = {
                soar: state.soar,
            }
            axios.post(url, data).then(function (response) {
                commit('appendSoar', { soar: response.data.soar })
            }).catch(function (error) {
            });
        },
        moreVideos({ commit, state }, url) {
            var page = state.show.videos.current_page + 1;
            var base = url + '&';
            if (page > 1) {
                base = base + 'page=' + page + '&';
            }
            var url = base.slice(0, -1);
            axios.get(url).then(function (response) {
                commit('appendVideos', { videos: response.data.videos })
            }).catch(function (error) {
            });
        },
        moreRadios({ commit, state }, url) {
            var page = state.show.radios.current_page + 1;
            var base = url + '&';
            if (page > 1) {
                base = base + 'page=' + page + '&';
            }
            var url = base.slice(0, -1);
            axios.get(url).then(function (response) {
                commit('appendRadios', { radios: response.data.radios })
            }).catch(function (error) {
            });
        },
        moreReads({ commit, state }, url) {
            var page = state.show.reads.current_page + 1;
            var base = url + '&';
            if (page > 1) {
                base = base + 'page=' + page + '&';
            }
            var url = base.slice(0, -1);
            axios.get(url).then(function (response) {
                commit('appendReads', { reads: response.data.reads })
            }).catch(function (error) {
            });
        },
        unsetData({ commit }, url) {
            commit('setShowVideos', { videos: [] })
            commit('setShowRadios', { radios: [] })
            commit('setShowSoar', { soar: [] })
            commit('setShowReads', { reads: [] })

        },
        clearFavorites({ commit }, url) {
            commit('setVideos', { videos: [] })
            commit('setRadios', { radios: [] })
            commit('setReads', { reads: [] })
            commit('setSoar', { soar: [] })

            commit('setShowVideos', { videos: [] })
            commit('setShowRadios', { radios: [] })
            commit('setShowSoar', { soar: [] })
            commit('setShowReads', { reads: [] })
        },

        addVideo({ commit, state }, item) {
            var new_videos = state.videos
            if (!new_videos.includes(item)) {
                new_videos.push(item)
            }
            Vue.notify({
                group: 'app',
                title: this.getters.getTrans('text.added'),
                type: 'success',
                text: this.getters.getTrans('text.video-added-favorites')
            })
            commit('setVideos', { videos: new_videos })
        },
        removeVideo({ commit, state }, item) {
            var i = state.videos.indexOf(item);
            var videos = state.videos.slice(0, i).concat(state.videos.slice(i + 1, state.videos.length));
            commit('setVideos', { videos: videos })
            Vue.notify({
                group: 'app',
                title: this.getters.getTrans('text.removed'),
                type: 'warn',
                text: this.getters.getTrans('text.video-removed-favorites')
            })
        },
        addRadio({ commit, state }, item) {
            var new_radios = state.radios
            if (!new_radios.includes(item)) {
                new_radios.push(item)
            }
            Vue.notify({
                group: 'app',
                title: this.getters.getTrans('text.added'),
                type: 'success',
                text: this.getters.getTrans('text.radio-added-favorites')
            })
            commit('setRadios', { radios: new_radios })
        },
        removeRadio({ commit, state }, item) {
            var i = state.radios.indexOf(item);
            var radios = state.radios.slice(0, i).concat(state.radios.slice(i + 1, state.radios.length));
            commit('setRadios', { radios: radios })
            Vue.notify({
                group: 'app',
                title: this.getters.getTrans('text.removed'),
                type: 'warn',
                text: this.getters.getTrans('text.radio-removed-favorites')
            })
        },
        addRead({ commit, state }, item) {
            var new_reads = state.reads
            if (!new_reads.includes(item)) {
                new_reads.push(item)
            }
            Vue.notify({
                group: 'app',
                title: this.getters.getTrans('text.added'),
                type: 'success',
                text: this.getters.getTrans('text.read-added-favorites')
            })
            commit('setReads', { reads: new_reads })
        },
        removeRead({ commit, state }, item) {
            var i = state.reads.indexOf(item);
            var reads = state.reads.slice(0, i).concat(state.reads.slice(i + 1, state.reads.length));
            commit('setReads', { reads: reads })
            Vue.notify({
                group: 'app',
                title: this.getters.getTrans('text.removed'),
                type: 'warn',
                text: this.getters.getTrans('text.read-removed-favorites')
            })
        },
        addSora({ commit, state }, item) {
            var new_soar = state.soar
            if (!new_soar.includes(item)) {
                new_soar.push(item)
            }
            Vue.notify({
                group: 'app',
                title: this.getters.getTrans('text.added'),
                type: 'success',
                text: this.getters.getTrans('text.sora-added-favorites')
            })
            commit('setSoar', { soar: new_soar })
        },
        removeSora({ commit, state }, item) {
            var i = state.soar.indexOf(item);
            var soar = state.soar.slice(0, i).concat(state.soar.slice(i + 1, state.soar.length));
            commit('setSoar', { soar: soar })
            Vue.notify({
                group: 'app',
                title: this.getters.getTrans('text.removed'),
                type: 'warn',
                text: this.getters.getTrans('text.sora-removed-favorites')
            })
        },
    },
}
