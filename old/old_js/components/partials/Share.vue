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
                <whatsapp-icon fillColor="#37B1E1" />
              </div>
              <span class="text">{{ trans("text.share-whatsapp") }}</span>
            </network>
            <network network="facebook" class="facebook">
              <div class="share-icon facebook">
                <facebook-icon fillColor="#4B69B0" />
              </div>
              <span class="text">{{ trans("text.share-facebook") }}</span>
            </network>
            <network network="twitter" class="twitter">
              <div class="share-icon twitter">
                <twitter-icon fillColor="#37B1E1" />
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
    console.log('share mounted');
    AppEvent.$on("share", function (title, url, description) {
      self.title = title;
      self.url = url;
      self.description = description;
      $("#share_model").modal("show");
    });
  },
};
</script>
