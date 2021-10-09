export default {
    namespaced: true,
    state: {
        page_content: {},
        honeypot: {},
    },
    mutations: {
        setPage(state, { page_content }) {
            state.page_content = page_content;
        },
        setHoneypot(state, { honeypot }) {
            state.honeypot = honeypot;
        }
    },
    actions: {
        setData({ commit, state }, vm) {
            if (vm.initial) {
                commit('setInitial', { initial: false }, { root: true })
                commit("changelaoding", { loading: false }, { root: true });
                vm.$Progress.finish();
            } else {
                axios.get(vm.url).then(function (response) {
                    commit('setPage', { page_content: response.data.page_content })
                    console.log('honeypotooo');
                    console.log(response.data.honeypot);
                    commit('setHoneypot', { honeypot: response.data.honeypot })
                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })
                    vm.$Progress.finish();
                }).catch(function (error) {
                    vm.$Progress.fail()
                });
            }
        },

        unsetData({ commit }, url) {
            commit('setPage', { page_content: {} })
        }
    },
}
