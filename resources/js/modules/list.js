export default {
    namespaced: true,
    state: {
        soar: [],
        reads: {},
        reciters: [],
    },
    mutations: {
        setSoar(state, { soar }) {
            state.soar = soar;
        },
        setReads(state, { reads }) {
            state.reads = reads;
        },
        setReciters(state, { reciters }) {
            state.reciters = reciters;
        },
    },
    actions: {
        setSoar({ commit, state }, url) {
            axios.get(url).then(function (response) {
                commit('setSoar', { soar: response.data.soar })
            });
        },
        unsetSoar({ commit }) {
            commit('setSoar', { soar: [] })
        },
        setReads({ commit, state }, url) {
            axios.get(url).then(function (response) {
                commit('setReads', { reads: response.data.reads })
            });
        },
        unsetReads({ commit }) {
            commit('setReads', { reads: [] })
        },
        setReciters({ commit, state }, url) {
            axios.get(url).then(function (response) {
                commit('setReciters', { reciters: response.data.reciters })
            });
        },
        unsetReciters({ commit }) {
            commit('setReciters', { reciters: [] })
        },
    },
}
