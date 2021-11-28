export default {
    namespaced: true,
    state: {
        videos: [],
        radios: [],
        reciters: [],
        tvs: [],
        reads: [],
    },
    mutations: {
        setVideos(state, { videos }) {
            state.videos = videos;
        },
        setReciters(state, { reciters }) {
            state.reciters = reciters;
        },
        setRadios(state, { radios }) {
            state.radios = radios;
        },
        setTvs(state, { tvs }) {
            state.tvs = tvs;
        },
        setReads(state, { reads }) {
            state.reads = reads;
        },
        appendVideos(state, { videos }) {
            for (var i = 0; i < videos.data.length; i++) {
                state.videos.data.push(videos.data[i]);
            }
            state.videos.current_page = videos.current_page;
            state.videos.last_page = videos.last_page;
        },
        appendReciters(state, { reciters }) {
            for (var i = 0; i < reciters.data.length; i++) {
                state.reciters.data.push(reciters.data[i]);
            }
            state.reciters.current_page = reciters.current_page;
            state.reciters.last_page = reciters.last_page;
        },
        appendRadios(state, { radios }) {
            for (var i = 0; i < radios.data.length; i++) {
                state.radios.data.push(radios.data[i]);
            }
            state.radios.current_page = radios.current_page;
            state.radios.last_page = radios.last_page;
        },
        appendTvs(state, { tvs }) {
            for (var i = 0; i < tvs.data.length; i++) {
                state.tvs.data.push(tvs.data[i]);
            }
            state.tvs.current_page = tvs.current_page;
            state.tvs.last_page = tvs.last_page;
        },
        appendReads(state, { reads }) {
            for (var i = 0; i < reads.data.length; i++) {
                state.reads.data.push(reads.data[i]);
            }
            state.reads.current_page = reads.current_page;
            state.reads.last_page = reads.last_page;
        },
    },
    actions: {
        setData({ commit, state }, vm) {
            if (vm.initial) {
                commit('setInitial', { initial: false }, { root: true })
                commit("changelaoding", { loading: false }, { root: true });
                vm.$Progress.finish();
            } else {
                axios.get(vm.url).then(function (response) {
                    commit('setVideos', { videos: response.data.videos })
                    commit('setReciters', { reciters: response.data.reciters })
                    commit('setRadios', { radios: response.data.radios })
                    commit('setTvs', { tvs: response.data.tvs })
                    commit('setReads', { reads: response.data.reads })

                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })

                    vm.$Progress.finish();
                }).catch(function (error) {
                    vm.$Progress.fail()
                });
            }
        },

        moreReciters({ commit, state }, url) {
            var page = state.reciters.current_page + 1;
            var base = url + '&';
            if (page > 1) {
                base = base + 'page=' + page + '&';
            }
            var url = base.slice(0, -1);
            axios.get(url).then(function (response) {
                commit('appendReciters', { reciters: response.data.reciters })
            }).catch(function (error) {
            });
        },
        moreVideos({ commit, state }, url) {
            var page = state.videos.current_page + 1;
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
            var page = state.radios.current_page + 1;
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
            var page = state.reads.current_page + 1;
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
        moreTvs({ commit, state }, url) {
            var page = state.tvs.current_page + 1;
            var base = url + '&';
            if (page > 1) {
                base = base + 'page=' + page + '&';
            }
            var url = base.slice(0, -1);
            axios.get(url).then(function (response) {
                commit('appendTvs', { tvs: response.data.tvs })
            }).catch(function (error) {
            });
        },

        unsetData({ commit }, url) {
            commit('setVideos', { videos: [] })
            commit('setReciters', { reciters: [] })
            commit('setRadios', { radios: [] })
            commit('setTvs', { tvs: [] })
            commit('setReads', { reads: [] })

        },
    },
}
