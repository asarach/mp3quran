<template>
  <div class="sidebare-video-u-item">
  <content-loader
		:height="270"
		:width="504"
		:speed="2"
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
    	:unique-key="uid"
	>
		<rect x="0" y="0" rx="0" ry="0" width="504" height="270" /> 
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
