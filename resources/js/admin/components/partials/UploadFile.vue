<template>
  <div class="file-uploader">
    <div :id="'fileUploader3'" class="dropzone text-center">
      <div id="addBtn3">
        <span>{{trans('admin.add-file')}}</span>
      </div>
      <div id="filePreview3" class="d-none">
        <div class="dz-preview dz-file-preview">
          <div class="dz-details">
            <div class="dz-filename">
              <span data-dz-name></span>
            </div>
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
  props: ["file", "type", "nbr"],

  mounted() {
    var self = this;
    Dropzone.autoDiscover = false;

    var myDropzone = new Dropzone("#fileUploader3", {
      url:
        self.prefix +
        "ajax/file/upload?type=" +
        self.type +
        "&_token=" +
        App.csrfToken,
      thumbnailWidth: 150,
      maxFilesize: 50,
      uploadMultiple: false,
      clickable: "#addBtn3",
      previewTemplate: document.querySelector("#filePreview3").innerHTML,
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
      //acceptedFiles: 'doc,docx,PDF',
      headers: {
        "My-Awesome-Header": "header value"
      },
      init: function() {
        this.on('success',function(file, response) {
          self.$emit("uploaded", response.file_id);
          if (this.getAcceptedFiles().length > 0) {
            this.disable();
            $("#addBtn3").hide();
          } else {
            this.enable();
            $("#addBtn3").show();
          }
        });
        this.on("removedfile", function(file) {
          self.$emit("uploaded", "");
          if (this.getAcceptedFiles().length > 0) {
            this.disable();
            $("#addBtn3").hide();
          } else {
            this.enable();
            $("#addBtn3").show();
          }
        });
        if (self.file) {
          var mockFile = {
            name: self.file.file_name.substring(
              self.file.file_name.lastIndexOf("/") + 1
            ),
            size: 12345
          };
          this.emit("addedfile", mockFile);
          self.$emit("uploaded", self.file.file_name);
          this.emit("complete", mockFile);
          this.disable();
          $("#addBtn3").hide();
        }
      }
    });
  }
};
</script>
