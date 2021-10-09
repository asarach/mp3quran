export default {
    namespaced: true,
    state: {
        downloading: false,
    },
    mutations: {
        setDownloading(state, { downloading }) {
            state.downloading = downloading;
        },
    },
    actions: {
        downloadMp3({commit}, data) {
            console.log(data);
            commit('setDownloading', { downloading: true });
            axios({
                method: 'get',
                // url: 'http://mp3quran.de/015.mp3',
                url: data.url,
                responseType: 'arraybuffer'
              })
              .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', data.num + '.mp3') //or any other extension
                document.body.appendChild(link)
                link.click()
                commit('setDownloading', { downloading: false });
              })
              .catch((error) => console.log(error))
        },
        downloadOld(url) {
            var self = this;
            var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
            var xhr = new XMLHttpRequest();
            xhr.responseType = "blob";
            self.downloading = true;
      
            xhr.onload = function () {
              var a = document.createElement("a");
              a.href = window.URL.createObjectURL(xhr.response);
              a.download = filename;
              a.style.display = "none";
              document.body.appendChild(a);
              a.click();
              self.downloading = false;
            };
            xhr.open("GET", url);
            xhr.send();
          },
    },
}
