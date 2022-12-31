import { notify, trans } from './utils';
import Dropzone from "dropzone";

export default class ImageUploader {
    constructor(item) {
        let self = this;
        this.type = item.dataset.type;
        this.image = false;
        this.image_id = '';

        Dropzone.autoDiscover = false;
        var myDropzone = new Dropzone("#imageUploader", {
            url:
                window.prefix +
                "/medias/upload?type=" +
                self.type +
                "&_token=" +
                window.csrftoken,
            thumbnailWidth: 138,
            maxFilesize: 24,
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
            acceptedFiles: "image/png,image/jpeg",
            headers: {
                "My-Awesome-Header": "header value",
            },
            init: function () {
                this.on("success", function (file, response) {
                    self.image_id = response.image_id;
                    if (this.getAcceptedFiles().length > 0) {
                        this.disable();
                        $("#addBtn2").hide();
                    } else {
                        this.enable();
                        $("#addBtn2").show();
                    }
                });
                this.on("removedfile", function (file) {
                    self.image_id = '';
                    if (this.getAcceptedFiles().length > 0) {
                        this.disable();
                        $("#addBtn2").hide();
                    } else {
                        this.enable();
                        $("#addBtn2").show();
                    }
                });
                if (self.image) {
                    var mockFile = { name: image.file_name, size: 12345 };
                    this.emit("addedfile", mockFile);
                    $emit("uploaded", image.file_name);
                    this.emit("thumbnail", mockFile, image.file_path);
                    this.emit("complete", mockFile);
                    this.disable();
                    $("#addBtn2").hide();
                }
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
