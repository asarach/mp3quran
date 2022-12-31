<div class="image-uploader" data-type="{{ $type }}">
  <div id="imageUploader" class="dropzone-box text-center">
    <div id="addBtn2">
      <span>{{ trans("text.add-image") }}</span>
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