export default {
    namespaced: true,
    state: {
        radios: [],
        rewayat: [],
    },
    mutations: {
        setRadios(state, { radios }) {
            state.radios = radios;
        },
        setRewayat(state, { rewayat }) {
            state.rewayat = rewayat;
        },
        appendRadios(state, { radios }) {
            for (var i = 0; i < radios.length; i++) {
                state.radios.push(radios[i]);
            }
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
                 
                    commit('setRadios', { radios: response.data.radios })
                    commit('setRewayat', { rewayat: response.data.rewayat })

                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })

                    vm.$Progress.finish();
                }).catch(function (error) {
                    vm.$Progress.fail()
                });
            }
        },
        moreRadios({ commit, state }, url) {
            var page = state.radios.current_page + 1;
            var base = url + '?';
            if (url.includes('?')) {
                base = url + '&';
            }
            if (page > 1) {
                base = base + 'page=' + page + '&';
            }
            var url = base.slice(0, -1);
            axios.get(url).then(function (response) {
                commit('appendRadios', { radios: response.data.radios })
            }).catch(function (error) {
            });

        },
        unsetData({ commit }, url) {
            commit('setRadios', { radios: [] })
            commit('setRewayat', { rewayat: [] })
        }
    },
}
