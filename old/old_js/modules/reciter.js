export default {
    namespaced: true,
    state: {
        reciters: [],
        reciter: {},
        sora: {},
        active_read: '',
        reads: [],
        letters: [],
    },
    mutations: {
        
        setReciters(state, { reciters }) {
            state.reciters = reciters;
        },
        setReads(state, { reads }) {
            state.reads = reads;
        },
        setLetters(state, { letters }) {
            state.letters = letters;
        },
        setReciter(state, { reciter }) {
            state.reciter = reciter;
        },
        setSoraData(state, { sora }) {
            state.sora = sora;
        },
        setActiveRead(state, { active_read }) {
            state.active_read = active_read;
        },
        appendReciters(state, { reciters }) {
            for (var i = 0; i < reciters.length; i++) {
                state.reciters.push(reciters[i]);
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
                    commit('setReciters', { reciters: response.data.reciters })
                    commit('setLetters', { letters: response.data.letters })
                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })
                    vm.$Progress.finish();
                }).catch(function (error) {
                    vm.$Progress.fail()
                });
            }
        },
        setItem({ commit }, vars) {
            if (vars.vm.initial) {
                commit('setInitial', { initial: false }, { root: true })
                commit("changelaoding", { loading: false }, { root: true });
                vars.vm.$Progress.finish();
            } else {
                axios.get(vars.url).then(function (response) {                
                    commit('setReads', { reads: response.data.reciter_reads })
                    commit('setReciter', { reciter: response.data.reciter })
                    commit('setActiveRead', { active_read: response.data.active_read })
                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })
                    vars.vm.$Progress.finish();
                }).catch(function (error) {
                    vars.vm.$Progress.fail()
                });
            }
        },
        
        setSora({ commit }, vars) {
            if (vars.vm.initial) {
                commit('setInitial', { initial: false }, { root: true })
                commit("changelaoding", { loading: false }, { root: true });
                vars.vm.$Progress.finish();
            } else {
                axios.get(vars.url).then(function (response) {                
                    commit('setSoraData', { sora: response.data.sora })
                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })
                    vars.vm.$Progress.finish();
                }).catch(function (error) {
                    vars.vm.$Progress.fail()
                });
            }
        },
        
        moreReciters({ commit, state }, url) {
            var page = state.reciters.current_page + 1;
            var base = url + '?';
            if (url.includes('?')) {
                base = url + '&';
            }
            if (page > 1) {
                base = base + 'page=' + page + '&';
            }
            var url = base.slice(0, -1);
            axios.get(url).then(function (response) {
                commit('appendReciters', { reciters: response.data.reciters })
            }).catch(function (error) {
            });

        },
        unsetData({ commit }, url) {
            commit('setReciters', { reciters: [] })
        },
        unsetSora({ commit }, url) {
            commit('setSoraData', { sora: [] })
        },
        unsetItem({ commit }, url) {
            commit('setReciter', { reciter: {} })
            commit('setActiveRead', { active_read: '' })
            commit('setReads', { reads :[] })
        }
    },
}
