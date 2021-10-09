<template>
  <div class="campaign">
    <sweet-modal ref="campaignModal">
      <h5 class="title-1">{{trans('text.campaign-title-1')}}</h5>
      <h5 class="title-2">{{trans('text.campaign-title-2')}}</h5>
      <h5 class="title-3">{{trans('text.campaign-title-3')}}</h5>
      <div class="campaign-row">
        <div class="campaign-col">
          <h5>{{trans('text.campaign-title-4')}}</h5>
          <span class="cercle">
            2
            <span>$</span>
          </span>
        </div>
        <div class="campaign-col">
          <h5>{{trans('text.campaign-title-5')}}</h5>
          <span class="cercle">
            10
            <span>$</span>
          </span>
        </div>
      </div>
      <div class="campaign-rom">
        <div class="campaign-btn">
        <a href="https://ensany.com/campaign/3401/38" target="_blank" rel="noopener noreferrer">
          {{trans('text.campaign-btn-1')}}
        </a>
        </div>
        <div class="campaign-btn-2" @click="close">{{trans('text.campaign-btn-2')}}</div>
      </div>
    </sweet-modal>
  </div>
</template>
<script>
export default {
  methods: {
    close: function () {
      this.$refs.campaignModal.close();
      this.$cookie.set("campaign_status", "closed", 30 * 12 * 5);
    },
  },
  mounted() {
    //this.$cookie.delete("campaign_status");
    var status = this.$cookie.get("campaign_status");
    if (typeof window !== "undefined" && status !== "closed") {
      this.$refs.campaignModal.open();
    }
  },
};
</script>
