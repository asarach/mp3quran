<template>
  <div class="image-uploader avatar">
    <div :id="'imageUploader'" class="dropzone text-center">
      <div id="addBtn">
        <span>{{trans('admin.add-avatar')}}</span>
      </div>
      <div id="imagePreview">
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
  props: ["avatar"],

  mounted() {
    var self = this;
    Dropzone.autoDiscover = false;

    var myDropzone = new Dropzone("#imageUploader", {
      url: self.prefix + "ajax/user/upload-avatar?_token=" + App.csrfToken,
      thumbnailWidth: 150,
      maxFilesize: 2,
      uploadMultiple: false,
      clickable: "#addBtn",
      previewTemplate: document.querySelector("#imagePreview").innerHTML,
      multiple: false,
      addRemoveLinks: true,
      maxFiles: 1,
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
      acceptedFiles: "image/png,image/jpeg",
      headers: {
        "My-Awesome-Header": "header value"
      },
      init: function() {
        this.on('success', function(file, response) {
          self.$emit("uploaded", response.avatar);
          if (this.getAcceptedFiles().length > 0) {
            this.disable();
            $("#addBtn").hide();
          } else {
            this.enable();
            $("#addBtn").show();
          }
        });
        this.on("removedfile", function(file) {
          self.$emit("uploaded", "");
          if (this.getAcceptedFiles().length > 0) {
            this.disable();
            $("#addBtn").hide();
          } else {
            this.enable();
            $("#addBtn").show();
          }
        });
        if (self.avatar) {
          var mockFile = {
            name: self.avatar.file_name.substring(
              self.avatar.file_name.lastIndexOf("/") + 1
            ),
            size: 12345
          };
          this.emit("addedfile", mockFile);
          self.$emit("uploaded", self.avatar.file_name);
          this.emit("thumbnail", mockFile, self.avatar.file_path);
          this.emit("complete", mockFile);
          this.disable();
          $("#addBtn").hide();
        }
      }
    });
  }
};
</script>
