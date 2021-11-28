<template>
  <div class="sidebare-wedget sidebare-free-pens">
  <content-loader
		:height="313"
		:width="303"
		:speed="2"
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
    	:unique-key="uid"
	>
		
		<rect x="0" y="0" rx="0" ry="0" width="303" height="313" />

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
