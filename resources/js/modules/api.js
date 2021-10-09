export default {
    namespaced: true,
    state: {
        apis: [],
    },
    mutations: {
        setApi(state, { apis }) {
            state.apis = apis;
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
                    commit('setApi', { apis: response.data.apis })
                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })
                    vm.$Progress.finish();
                }).catch(function (error) {
                    vm.$Progress.fail()
                });
            }
        },
        unsetData({ commit }, url) {
            commit('setApi', { api: [] })
        }
    },
}
