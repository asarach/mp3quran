export default {
    namespaced: true,
    state: {
        videos: [],
        playlists: [],
        errors: {},
        video_generated_url: '',
        video_show: false,
        progressing: false,
        progress: 0,
        video: {
            url: ''
        },
    },
    mutations: {
        setVideos(state, { videos }) {
            state.videos = videos;
        },
        setProgressing(state, { progressing }) {
            state.progressing = progressing;
        },
        setGeneratedUrl(state, { video_generated_url }) {
            state.video_generated_url = video_generated_url;
        },
        setErrors(state, { errors }) {
            state.errors = errors;
        },
        setProgress(state, { progress }) {
            state.progress = progress;
        },
        setPlaylists(state, { playlists }) {
            state.playlists = playlists;
        },
        setVideo(state, { video }) {
            state.video = video;
        },
        setVideoShow(state, { show }) {
            state.video_show = show;
        },
        appendVideos(state, { videos }) {
            for (var i = 0; i < videos.length; i++) {
                state.videos.data.push(videos[i]);
            }
        },
        appendPlaylists(state, { playlists }) {
            for (var i = 0; i < playlists.length; i++) {
                state.playlists.data.push(playlists[i]);
            }
        },
    },
    actions: {
        async generateVideo({ commit, state }, indata) {
            let data = {
                place: indata.place,
                video: indata.video,
                image: indata.image,
            }
            await axios.post(indata.url_base + "/generate", data).then(function (response) {
                commit('setProgressing', { progressing: response.data.progressing })
                commit('setGeneratedUrl', { video_generated_url: response.data.generated_url })
            }).catch(function (error) {
                if (error.response.data.errors) {
                    commit('setErrors', { errors: error.response.data.errors })
                }
                
                commit('setProgressing', { progressing: false })
            });

            if (state.progressing) {
                var myInterval = setInterval(() => {
                    if (state.progress == 100) {
                        commit('setProgressing', { progressing: false })
                        clearInterval(myInterval);
                    }else{
                        axios.get(indata.url_base + "/progress").then(function (response) {
                            commit('setProgress', { progress: response.data.progress })
                        }).catch(function (error) {
                        });
                    }
                }, 1000);
            }
            
        },
        setPlaylists({ commit }, vm) {
            if (vm.initial) {
                commit('setInitial', { initial: false }, { root: true })
                commit("changelaoding", { loading: false }, { root: true });
                vm.$Progress.finish();
            } else {
                axios.get(vm.url).then(function (response) {
                    commit('setPlaylists', { playlists: response.data.playlists })
                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })

                    vm.$Progress.finish();
                }).catch(function (error) {
                    vm.$Progress.fail()
                });
            }
        },
        setData({ commit }, vm) {
            if (vm.initial) {
                commit('setInitial', { initial: false }, { root: true })
                commit("changelaoding", { loading: false }, { root: true });
                vm.$Progress.finish();
            } else {
                axios.get(vm.url).then(function (response) {
                    commit('setVideos', { videos: response.data.videos })
                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })

                    vm.$Progress.finish();
                }).catch(function (error) {
                    vm.$Progress.fail()
                });
            }


        },
        setItemShow({ commit }, show) {
            commit('setVideo', { show: show })
        },
        setItem({ commit }, vm) {
            if (vm.initial) {
                commit('setInitial', { initial: false }, { root: true })
                commit("changelaoding", { loading: false }, { root: true });
                vm.$Progress.finish();
            } else {
                axios.get(vm.url).then(function (response) {
                    commit('setVideo', { video: response.data.video })
                    commit('setPageTitle', { page_title: response.data.page_title }, { root: true })
                    commit('changelaoding', { loading: false }, { root: true })
                    vm.$Progress.finish();
                }).catch(function (error) {
                    vm.$Progress.fail()
                });
            }
        },
        setItemDownload({ commit }, vm) {
        },
        moreVideos({ commit, state }, url) {
            var page = state.videos.current_page + 1;
            var base = url + '?';
            if (url.includes('?')) {
                base = url + '&';
            }
            if (page > 1) {
                base = base + 'page=' + page + '&';
            }
            var url = base.slice(0, -1);
            axios.get(url).then(function (response) {
                commit('appendVideos', { videos: response.data.videos.data })
                state.videos.current_page = response.data.videos.current_page
            }).catch(function (error) {
            });
        },
        morePlaylists({ commit, state }, url) {
            var page = state.playlists.current_page + 1;
            var base = url + '?';
            if (url.includes('?')) {
                base = url + '&';
            }
            if (page > 1) {
                base = base + 'page=' + page + '&';
            }
            var url = base.slice(0, -1);
            axios.get(url).then(function (response) {
                commit('appendPlaylists', { playlists: response.data.playlists.data })
                state.playlists.current_page = response.data.playlists.current_page
            }).catch(function (error) {
            });

        },
        unsetData({ commit }, url) {
            commit('setVideos', { videos: [] })
        },
        unsetPlaylists({ commit }, url) {
            commit('setPlaylists', { playlists: [] })
        },
        unsetItem({ commit }, url) {
            commit('setVideo', { video: {} })
            commit('setVideoShow', { video_show: false })
        }
    },
}
