<template>
  <div class="sidebare-video-u-item">
  <content-loader
		:height="164"
		:width="292"
		:speed="2"
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
    	:unique-key="uid"
	>
		<rect x="0" y="0" rx="0" ry="0" width="292" height="164" /> 
	</content-loader>
  </div>
</template>
<script>
import { ContentLoader } from "vue-content-loader"
export default {
   components: {
      ContentLoader
    },
};
</script>
