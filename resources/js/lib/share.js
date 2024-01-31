let $window = typeof window !== 'undefined' ? window : null

export default class Share {
    constructor(params) {
        this.url = encodeURIComponent(params.url);
        this.description = encodeURIComponent(params.description);
        this.title = encodeURIComponent(params.title);
        this.key = '';
        this.link = '';
        this.popup = {
            width: 626,
            height: 436
        }
    }
    showModal() {
        $("#share_model").modal("show");
    }
    shareOn(network) {
        this.key = network.toLowerCase();
        switch (network) {
            case 'whatsapp':
                this.link = this.shareOnWhatsappLink();
                break;
            case 'facebook':
                this.link = this.shareOnFacebookLink();
                break;
            case 'twitter':
                this.link = this.shareOnTwitterLink();
                break;
        }
        this.resizePopup();

        // If a popup window already exist, we close it and trigger a change event.
        if (this.popupWindow && this.popupInterval) {
            clearInterval(this.popupInterval)

            // Force close (for Facebook)
            this.popupWindow.close()

            this.emit('change')
        }
        this.popupWindow = $window.open(
            this.link,
            'sharer-' + this.key,
            ',height=' + this.popup.height +
            ',width=' + this.popup.width +
            ',left=' + this.popupLeft +
            ',top=' + this.popupTop +
            ',screenX=' + this.popupLeft +
            ',screenY=' + this.popupTop
        )
        // If popup are prevented (AdBlocker, Mobile App context..), popup.window stays undefined and we can't display it
        if (!this.popupWindow) return

        this.popupWindow.focus()

        // Create an interval to detect popup closing event
        this.popupInterval = setInterval(() => {
            if (!this.popupWindow || this.popupWindow.closed) {
                clearInterval(this.popupInterval)

                this.popupWindow = null

                this.emit('close')
            }
        }, 500)

        this.emit('open')

    }
    shareOnWhatsappLink() {
        return 'https://api.whatsapp.com/send?text=' + this.title + '%0D%0A' + this.url + '%0D%0A' + this.description;
    }
    shareOnFacebookLink() {
        return 'https://www.facebook.com/sharer/sharer.php?u=' + this.url + '&title=' + this.title + '&description=' + this.description;
    }
    shareOnTwitterLink() {
        return 'https://twitter.com/intent/tweet?text=' + this.title + '&url=' + this.url;
    }
    resizePopup() {
        const width = $window.innerWidth || (document.documentElement.clientWidth || $window.screenX)
        const height = $window.innerHeight || (document.documentElement.clientHeight || $window.screenY)
        const systemZoom = width / $window.screen.availWidth

        this.popupLeft = (width - this.popup.width) / 2 / systemZoom + ($window.screenLeft !== undefined ? $window.screenLeft : $window.screenX)
        this.popupTop = (height - this.popup.height) / 2 / systemZoom + ($window.screenTop !== undefined ? $window.screenTop : $window.screenY)
    }
    touch() {
        window.open(this.shareLink, '_blank')
        this.emit('open')
    }
    emit(name) {
        // this.$emit('share_network_' + name, this.key, this.url)
        // this.emit(name, this.key, this.url)
    }
}
