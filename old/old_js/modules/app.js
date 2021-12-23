export default {
    namespaced: true,
    state: {
        apps: [],
    },
    mutations: {
        setApps(state, { apps }) {
            state.apps = apps;
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
                    commit('setApps', { apps: response.data.apps })
                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })
                    vm.$Progress.finish();
                }).catch(function (error) {
                    vm.$Progress.fail()
                });
            }
        },
        unsetData({ commit }, url) {
            commit('setApps', { apps: [] })
        }
    },
}
