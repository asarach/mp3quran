export default {
    namespaced: true,
    state: {
        items: [],
        item: {},
    },
    mutations: {
        setItems(state, { items }) {
            state.items = items;
        },
        setItem(state, { item }) {
            state.item = item;
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
                    commit('setItems', { items: response.data.items })
                    commit('list/setSoar', { soar: response.data.soar }, { root: true })

                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })

                    vm.$Progress.finish();
                }).catch(function (error) {
                    vm.$Progress.fail()
                });
            }
        },
        setSingleData({ commit, state }, vm) {
            if (vm.initial) {
                commit('setInitial', { initial: false }, { root: true })
                commit("changelaoding", { loading: false }, { root: true });
                vm.$Progress.finish();
            } else {
                axios.get(vm.url).then(function (response) {
                    commit('setItem', { item: response.data.item })
                    
                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })

                    vm.$Progress.finish();
                }).catch(function (error) {
                    vm.$Progress.fail()
                });
            }
        },
        unsetData({ commit }, url) {
            commit('setItems', { items: [] })
        },
        unsetSingleData({ commit }, url) {
            commit('setItem', { item: {} })
        }
    },
}
