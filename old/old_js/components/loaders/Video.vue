<template>
<div class="col-md-6">

  <div class="card post-videos">
  <content-loader
		:height="175"
		:width="269"
		:speed="2"
		primaryColor="#dadce0"
		secondaryColor="#c2c4ca"
    	:unique-key="uid"
	>
		<rect x="5" y="150" rx="2" ry="2" width="259" height="12" /> 
		<rect x="0" y="0" rx="0" ry="0" width="269" height="136" />
	</content-loader>
  </div>
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
