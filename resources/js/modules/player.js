import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        player_state: '',
        playing: false,
        playing_item: 1,
        source: {
            file: 'empty',
        },
        playlist: [],
    },
    mutations: {
        setPlaylist(state, { playlist }) {
            state.playlist = playlist;
        },
        setSource(state, { source }) {
            state.source = source;
        },
        setPlaying(state, { playing }) {
            state.playing = playing;
        },
        setState(state, { player_state }) {
            state.player_state = player_state;
        },
    },
    getters: {
        isPlaying: (state, getters) => (item) => {
            if (state.source.id == item.id && state.playing) {
                return true;
            } else {
                return false;
            }
        },
        currentPosition: (state, getters) => (item) => {
            let index = -1;
            for (var i=0; i < state.playlist.length; i++) {
                if (state.playlist[i].file ===  state.source.file) {
                    index = i;
                }
            }
            return index;
        },
        isLoading: (state, getters) => (item) => {
            if (state.source.id == item.id && state.player_state == 'loading') {
                return true;
            }
            if (item.type == 'radio' && state.source.id == item.id && state.player_state == 'unloaded') {
                return true;
            }
            return false;
        }
    },
    actions: {
        addItem({ commit, state }, item) {
            var new_playlist = state.playlist
            var exist = new_playlist.find(function(itm) {
                if(itm.id == item.id)
                    return true;
            });

            if (exist == undefined) {
                new_playlist.push(item);
                Vue.notify({
                    group: 'app',
                    title: this.getters.getTrans('text.not-added'),
                    type: 'success',
                    text: this.getters.getTrans('text.item-added-playlist')
                })
            }else{
                Vue.notify({
                    group: 'app',
                    title: this.getters.getTrans('text.added'),
                    type: 'warn',
                    text: this.getters.getTrans('text.item-exists-in-playlist')
                })
            }

            commit('setPlaylist', { playlist: new_playlist })
            if (state.source.file == 'empty') {
                commit('setSource', { source: item });
            }
            
        },
        removeItem({ commit, state }, index) {
            state.playlist.splice(index, 1);
        },

        nextItem({ commit, state }) {
            let index = -1;
            for (var i=0; i < state.playlist.length; i++) {
                if (state.playlist[i].file ===  state.source.file) {
                    index = i;
                }
            }

            var playlistIndex = Math.min(
                state.playlist.length - 1,
                index + 1
            )
            var source = state.playlist[playlistIndex];

            commit('setSource', { source: source });
        },
        prevItem({ commit, state }) {
            let index = -1;
            for (var i=0; i < state.playlist.length; i++) {
                if (state.playlist[i].file ===  state.source.file) {
                    index = i;
                }
            }
            
            var playlistIndex = Math.max(
                0,
                index - 1
            )
            var source = state.playlist[playlistIndex];
            commit('setSource', { source: source });
        },
        playItem({ commit, state }, item) {
            commit('setSource', { source: item });
        },
        getItemAndPlay({ dispatch, state }, url) {
            axios.get(url).then(function (response) {
                dispatch('addPlayItem', response.data);
            }).catch(function (error) {
            });

            //commit('setSource', { source: item });
        },
        addPlayItem({ commit, state }, item) {
            var found = false;
            for (var i = 0; i < state.playlist.length; i++) {
                if (state.playlist[i].id == item.id) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                let new_playlist = state.playlist
                new_playlist.push(item)
                commit('setPlaylist', { playlist: new_playlist })
            }

            if (item.id == state.source.id) {
                Event.$emit("player_toggel");
            } else {
                commit('setSource', { source: item });
            }
        },
    },
}
