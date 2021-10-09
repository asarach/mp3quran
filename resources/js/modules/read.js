export default {
    namespaced: true,
    state: {
        reads: [],
        read: {},
        reads: [],
    },
    mutations: {
        setReads(state, { reads }) {
            state.reads = reads;
        },
        setReads(state, { reads }) {
            state.reads = reads;
        },
        setRead(state, { read }) {
            state.read = read;
        },
        appendReads(state, { reads }) {
            for (var i = 0; i < reads.length; i++) {
                state.reads.push(reads[i]);
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
                    commit('setReads', { reads: response.data.reads })
                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })
                    vm.$Progress.finish();
                }).catch(function (error) {
                    vm.$Progress.fail()
                });
            }
        },
        setItem({ commit }, vm) {
            axios.get(vm.url).then(function (response) {                
                commit('setReads', { reads: response.data.read_reads })
                commit('setRead', { read: response.data.read })
                commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                commit('changelaoding', { loading: false }, { root: true })
                vm.$Progress.finish();
            }).catch(function (error) {
                vm.$Progress.fail()
            });
        },
        
        moreReads({ commit, state }, url) {
            var page = state.reads.current_page + 1;
            var base = url + '?';
            if (url.includes('?')) {
                base = url + '&';
            }
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
            commit('setReads', { reads: [] })
        },
        unsetItem({ commit }, url) {
            commit('setRead', { read: {} })
            commit('setReads', { reads :[] })
        }
    },
}
