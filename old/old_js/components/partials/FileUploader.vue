<template>
  <div class="file-uploader w-100">
    <div :id="'imageUploader2'" class="dropzone text-center">
      <div id="addBtn2">
        <span>{{ trans("text.add-file") }}</span>
      </div>
      <div id="imagePreview2" class="d-none">
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
import { mapState } from "vuex";
import Dropzone from "dropzone";

export default {
  computed: {
    ...mapState({
      style_version: (state) => state.settings.style_version,
      current_language: (state) => state.current_language,
      uploads: (state) => state.uploader.uploads,
      initial: (state) => state.initial,
    }),
  },

  data() {
    return {
      url: this.ajax_prefix + "/uploader",
      filename: "",
    };
  },

  mounted() {
    var self = this;
    Dropzone.autoDiscover = false;
    var myDropzone = new Dropzone("#imageUploader2", {
      url: this.prefix + "uploader?_token=" + window.csrftoken,
      thumbnailWidth: 138,
      maxFilesize: 2400,
      uploadMultiple: false,
      clickable: "#addBtn2",
      previewTemplate: document.querySelector("#imagePreview2").innerHTML,
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
      acceptedFiles: "audio/*",
      headers: {
        "My-Awesome-Header": "header value",
      },
      init: function () {
        this.on("success", function (file, response) {
          self.$emit("uploaded", response.image_id);
          if (this.getAcceptedFiles().length > 0) {
            this.disable();
            $("#addBtn2").hide();
          } else {
            this.enable();
            $("#addBtn2").show();
          }
        });
        this.on("removedfile", function (file) {
          self.$emit("uploaded", "");
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
  },
};
</script>
