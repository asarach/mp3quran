import Vue from 'vue'

export default {
    namespaced: true,
    actions: {
        reportSora({ commit, state }, vm) {
            let self = this;
            axios.get(vm.prefix+ '/' + vm.read + '/' + vm.sora + '/report').then(function (response) {
                if (response.data.success) {
                    Vue.notify({
                        group: 'app',
                        title: self.getters.getTrans('text.reported'),
                        type: 'success',
                        text: self.getters.getTrans('text.sora-reported-success')
                    })
                } else {
                    Vue.notify({
                        group: 'app',
                        title: self.getters.getTrans('text.not-reported'),
                        type: 'warn',
                        text: self.getters.getTrans('text.sora-reported-warn')
                    })
                }

            }).catch(function (error) {
                Vue.notify({
                    group: 'app',
                    title: self.getters.getTrans('text.not-reported'),
                    type: 'warn',
                    text: self.getters.getTrans('text.sora-reported-warn')
                })
            });
        }
    },
}
