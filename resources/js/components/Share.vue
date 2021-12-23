<template>
  <div
    id="share_model"
    class="modal delet-modal fade shareation"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <h5>{{ trans("text.share") }}</h5>
        <social-sharing
          :url="url"
          :title="title"
          :description="description"
          inline-template
        >
          <div class="show-share">
            <network network="whatsapp" class="whatsapp">
              <div class="share-icon whatsapp">
                <span class="uni-icon icon-whatsapp" style="color: #fff"></span>
              </div>
              <span class="text">{{ trans("text.share-whatsapp") }}</span>
            </network>
            <network network="facebook" class="facebook">
              <div class="share-icon facebook">
                <span class="uni-icon icon-facebook" style="color: #fff"></span>
              </div>
              <span class="text">{{ trans("text.share-facebook") }}</span>
            </network>
            <network network="twitter" class="twitter">
              <div class="share-icon twitter">
                <span class="uni-icon icon-twitter" style="color: #fff"></span>
              </div>
              <span class="text">{{ trans("text.share-twitter") }}</span>
            </network>
          </div>
        </social-sharing>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "",
      title: "",
      description: "",
    };
  },
  mounted() {
    let self = this;
    AppEvent.$on("share", function (title, url, description) {
      self.title = title;
      self.url = url;
      self.description = description;
      $("#share_model").modal("show");
    });
  },
};
</script>
