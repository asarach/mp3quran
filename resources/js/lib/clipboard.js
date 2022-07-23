import { notify, trans } from './utils';

export default class Clipboard {
    constructor(text) {
        this.text = text;
    }
    copy() {
        let value

        if (typeof this.text !== 'string') {
            try {
                value = JSON.stringify(this.text)
            } catch (e) {
                this.errorNotify();
            }
        } else {
            value = this.text
        }

        const textarea = document.createElement('textarea')

        textarea.addEventListener('focusin', e => e.stopPropagation());
        textarea.value = value
        textarea.setAttribute('readonly', '')
        textarea.style.cssText = 'position:fixed;pointer-events:none;z-index:-9999;opacity:0;'

        document.body.appendChild(textarea)

        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            textarea.contentEditable = true
            textarea.readOnly = true

            const range = document.createRange()

            range.selectNodeContents(textarea)

            const selection = window.getSelection()

            selection.removeAllRanges()
            selection.addRange(range)
            textarea.setSelectionRange(0, 999999)
        } else {
            textarea.select()
        }
        try {
            document.execCommand('copy');
            this.successNotify();
        } catch (err) {
            this.errorNotify();
        }

    }
    successNotify() {
        notify(trans("text.copied"), 'success', trans("text.text-copied"));
    }
    errorNotify() {
        notify(trans("text.error"), 'warn', trans("text.error-copying-text"));
    }
}
