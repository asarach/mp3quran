<template>
  <div v-if="ads && ads.length > 0 " class="header-ads">
    <div v-for="(ad, index) in ads" :key="index" class="ha-item">
      <a :href="ad.url" target="_blank">
        <img
          :src="ad.image"
          :alt="ad.name"
          class="img-responsive"
        />
      </a>
    </div>
  </div>
</template>
<script>
import { mapState} from "vuex";

export default {
  computed: {
    ...mapState({
      ads: state => state.all_ads.place_1
    })
  }
};
</script>
