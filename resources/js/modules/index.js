export default {
    namespaced: true,
    state: {
        current_page: 1,
        show_tadabor: false,
        reads: [],
        rewayat: [],
    },
    mutations: {
        setReads(state, { reads }) {
            state.reads = reads;
        },
        setRewayat(state, { rewayat }) {
            state.rewayat = rewayat;
        },
        setTadabor(state, { show_tadabor }) {
            state.show_tadabor = show_tadabor;
        },
        appendReads(state, { reads }) {
            for (var i = 0; i < reads.length; i++) {
                state.reads.push(reads[i]);
            }
        },

    },
    actions: {
        setData({ commit, state }, vars) {
            if (typeof window !== 'undefined') {
              }
            
            if (vars.vm.initial) {
                commit('setInitial', { initial: false }, { root: true })
                commit("changelaoding", { loading: false }, { root: true });
                vars.vm.$Progress.finish();
            } else {  
                axios.get(vars.url).then(function (response) {
                    commit('setReads', { reads: response.data.reads })
                    commit('setRewayat', { rewayat: response.data.rewayat })
                    commit('setTadabor', { show_tadabor: response.data.show_tadabor })

                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })

                    vars.vm.$Progress.finish();
                }).catch(function (error) {
                    vars.vm.$Progress.fail()
                });
            }
        },
        moreReads({ commit, state }, url) {
            var page = state.current_page + 1;
            var base = url + '?';
            if (url.includes('?')) {
                base = url + '&';
            }
            if (page > 1) {
                base = base + 'page=' + page + '&';
            }
            var url = base.slice(0, -1);
            axios.get(url).then(function (response) {
                state.current_page = page;
                commit('appendReads', { reads: response.data.reads })
            }).catch(function (error) {
            });

        },
        unsetData({ commit }, url) {
            commit('setReads', { reads: [] })
            commit('setRewayat', { rewayat: [] })
        }
    },
}
