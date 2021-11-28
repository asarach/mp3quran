export default {
    namespaced: true,
    state: {
        soar: [],
        reads: {},
        read_soar: [],
        page: {},
        downloads_order: 'title',
        downloads_dir: 'asc',
        parts: [],
        mushaf_pages: [],
        alkahf_pages: [],
        page_share: [],
        downloads: [],
    },
    mutations: {
        setMushafPages(state, { mushaf_pages }) {
            state.mushaf_pages = mushaf_pages;
        },
        setReadSoar(state, { read_soar }) {
            state.read_soar = read_soar;
        },
        setPage(state, { page }) {
            state.page = page;
        },
        setParts(state, { parts }) {
            state.parts = parts;
        },
        setPageShare(state, { page_share }) {
            state.page_share = page_share;
        },
        setAlkahfPages(state, { alkahf_pages }) {
            state.alkahf_pages = alkahf_pages;
        },
        setDownloads(state, { downloads }) {
            state.downloads = downloads;
        },
        setOrder(state, { order }) {
            state.downloads_order = order;
        },
        setDir(state, { dir }) {
            state.downloads_dir = dir;
        },
        setSoar(state, { soar }) {
            state.soar = soar;
        },
        setReads(state, { reads }) {
            state.reads = reads;
        },
    },
    actions: {
        setData({ commit, state }, vm) {
            axios.get(vm.url).then(function (response) {
                commit('setParts', { parts: response.data.parts })
                commit('changelaoding', { loading: false }, { root: true })
            }).catch(function (error) {
            });
        },
        setAlkahf({ commit }, vm) {
            axios.get(vm.url).then(function (response) {
                commit('setReadSoar', { read_soar: response.data.read_soar })
                commit('setPageShare', { page_share: response.data.page_share })
                commit('changelaoding', { loading: false }, { root: true })
            }).catch(function (error) {
                console.log(error);
            });
        },
        setDownloadsData({ commit, state }, vm) {
            axios.get(vm.url).then(function (response) {
                commit('setDownloads', { downloads: response.data.downloads })
                commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                commit('changelaoding', { loading: false }, { root: true })
            }).catch(function (error) {
            });
        },
        setSoar({ commit, state }, url) {
            axios.get(url).then(function (response) {
                commit('setSoar', { soar: response.data.soar })
            });
        },
        setReads({ commit, state }, url) {
            axios.get(url).then(function (response) {
                commit('setReads', { reads: response.data.reads })
            });
        },
        unsetSoar({ commit }) {
            commit('setSoar', { soar: [] })
        },
        unsetReads({ commit }) {
            commit('setReads', { reads: [] })
        },
        unsetAlkahf({ commit }) {
            commit('setAlkahfPages', { alkahf_pages: [] })
        },
        unsetDownloadsData({ commit }) {
            commit('setDownloads', { downloads: [] })
        },
        unsetData({ commit }, url) {
            commit('setMushafPages', { mushaf_pages: [] })
        },
        orderDownloads({ commit }, data) {
            axios.get(data.url + '?order=' + data.order + '&dir=' + data.dir).then(function (response) {
                commit('setDownloads', { downloads: response.data.downloads })
                commit('setOrder', { order: data.order })
                commit('setDir', { dir: data.dir })
            }).catch(function (error) {
            });
        }
    },
}
