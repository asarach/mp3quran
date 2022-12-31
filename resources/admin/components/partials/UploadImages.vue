<template>
  <div class="image-uploader">
    <div :id="'imageUploader4'" class="dropzone text-center">
      <div id="addBtn4">
        <span>{{trans('admin.add-image')}}</span>
      </div>
      <div id="imagePreview4" class="d-none">
        <div class="dz-preview dz-file-preview">
          <div class="dz-image">
            <img data-dz-thumbnail />
          </div>
          <div class="dz-success-mark">
            <i class="far fa-check-circle"></i>
          </div>
          <div class="dz-error-mark">
            <i class="fas fa-exclamation-circle"></i>
          </div>
          <div class="dz-error-message">
            <span data-dz-errormessage></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Dropzone from "dropzone";
export default {
  props: ["images", "type", "nbr"],

  mounted() {
    var self = this;
    Dropzone.autoDiscover = false;

    var myDropzone = new Dropzone("#imageUploader4", {
      url:
        self.prefix +
        "ajax/medias/upload?type=" +
        self.type +
        "&_token=" +
        App.csrfToken,
      thumbnailWidth: 150,
      maxFilesize: 20,
      uploadMultiple: false,
      clickable: "#addBtn4",
      previewTemplate: document.querySelector("#imagePreview4").innerHTML,
      multiple: false,
      addRemoveLinks: true,
      maxFiles: 100,
      dictDefaultMessage: false,
      dictFallbackMessage: self.trans("text.dict-fallback-message"),
      dictFallbackText: self.trans("text.dict-fallback-text"),
      dictFileTooBig: self.trans("text.dict-file-too-big"),
      dictInvalidFileType: self.trans("text.dict-invalid-file-type"),
      dictResponseError: self.trans("text.dict-response-error"),
      dictCancelUpload: '<i class="fas fa-trash"></i>',
      dictUploadCanceled: self.trans("text.dict-upload-canceled"),
      dictCancelUploadConfirmation: self.trans(
        "text.dict-cancel-upload-confirmation"
      ),
      dictRemoveFile: '<i class="fas fa-trash"></i>',
      dictMaxFilesExceeded: self.trans("text.dict-max-files-exceeded"),
      acceptedFiles: "image/png,image/jpeg,image/gif",
      headers: {
        "My-Awesome-Header": "header value"
      },
      init: function() {
        this.on('success', function(file, response) {
          self.$emit("uploaded", {
            key: file.upload.uuid,
            val: response.image_id
          });
          if (this.getAcceptedFiles().length > 100) {
            this.disable();
            $("#addBtn4").hide();
          } else {
            this.enable();
            $("#addBtn4").show();
          }
        });
        this.on("removedfile", function(file) {
          if (file.upload == undefined) {
            self.$emit("removed", file.name);
          } else {
            self.$emit("removed", file.upload.uuid);
          }
          if (this.getAcceptedFiles().length > 100) {
            this.disable();
            $("#addBtn4").hide();
          } else {
            this.enable();
            $("#addBtn4").show();
          }
        });
        if (self.images) {
          var i;
          for (i = 0; i < self.images.length; i++) {
            var mockFile = { name: self.images[i].file_id, size: 12345 };
            this.emit("addedfile", mockFile);
            this.emit("thumbnail", mockFile, self.images[i].file_path);
            this.emit("complete", mockFile);
            self.$emit("uploaded", {
              key: self.images[i].file_id,
              val: self.images[i].file_id
            });
          }
        }
      }
    });
  }
};
</script>
