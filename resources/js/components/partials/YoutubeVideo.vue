<template>
  <youtube :rewaya-id="rewayaId"></youtube>
</template>

<script>
import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'

export default {
    props: {
        url: '',
    },
    data() {
        return {
            rewayaId: '',
            startTime: '',
        };
    },
    mounted() {
      this.rewayaId = getIdFromURL(this.url);
      this.startTime = getTimeFromURL(this.url);
  	}
}
</script>
