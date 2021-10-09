export default {
    namespaced: true,
    state: {
        tvs: [],
    },
    mutations: {
        setTvs(state, { tvs }) {
            state.tvs = tvs;
        },
    },
    actions: {
        setData({ commit }, vm) {
            if (vm.initial) {
                commit('setInitial', { initial: false }, { root: true })
                commit("changelaoding", { loading: false }, { root: true });
                vm.$Progress.finish();
            } else {
                axios.get(vm.url).then(function (response) {
                    commit('setTvs', { tvs: response.data.tvs })
                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })
    
                    vm.$Progress.finish();
                }).catch(function (error) {
                    vm.$Progress.fail()
                });
            }

            
        },
        unsetData({ commit }, url) {
            commit('setTvs', { tvs: [] })
        }
    },
}
