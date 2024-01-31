import { notify, trans } from './utils';
import Dropzone from "dropzone";

export default class FileUploader {
    constructor(item) {
        var self = this;
        Dropzone.autoDiscover = false;
        this.myDropzone = new Dropzone("#fileUploader", {
            url: window.prefix + "/uploader?_token=" + window.csrftoken,
            thumbnailWidth: 138,
            maxFilesize: 2400,
            uploadMultiple: false,
            clickable: "#addBtn2",
            previewTemplate: document.querySelector("#imagePreview2").innerHTML,
            multiple: false,
            addRemoveLinks: true,
            maxFiles: 1,
            dictDefaultMessage: false,
            dictFallbackMessage: trans("text.dict-fallback-message"),
            dictFallbackText: trans("text.dict-fallback-text"),
            dictFileTooBig: trans("text.dict-file-too-big"),
            dictInvalidFileType: trans("text.dict-invalid-file-type"),
            dictResponseError: trans("text.dict-response-error"),
            dictCancelUpload: '<i class="fas fa-trash"></i>',
            dictUploadCanceled: trans("text.dict-upload-canceled"),
            dictCancelUploadConfirmation: trans(
                "text.dict-cancel-upload-confirmation"
            ),
            dictRemoveFile: '<i class="fas fa-trash"></i>',
            dictMaxFilesExceeded: trans("text.dict-max-files-exceeded"),
            acceptedFiles: "audio/*",
            headers: {
                "My-Awesome-Header": "header value",
            },
            init: function () {
                this.on("success", function (file, response) {
                    // self.$emit("uploaded", response.image_id);
                    if (this.getAcceptedFiles().length > 0) {
                        this.disable();
                        $("#addBtn2").hide();
                    } else {
                        this.enable();
                        $("#addBtn2").show();
                    }
                });
                this.on("removedfile", function (file) {
                    // self.$emit("uploaded", "");
                    if (this.getAcceptedFiles().length > 0) {
                        this.disable();
                        $("#addBtn2").hide();
                    } else {
                        this.enable();
                        $("#addBtn2").show();
                    }
                });
            },
        });
    }

    successNotify() {
        notify(trans("text.copied"), 'success', trans("text.text-copied"));
    }
    errorNotify() {
        notify(trans("text.error"), 'warn', trans("text.error-copying-text"));
    }
}
