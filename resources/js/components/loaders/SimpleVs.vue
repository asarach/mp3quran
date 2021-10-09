<template>
  <div class="sidebare-video">
  <content-loader
		:height="66"
		:width="292"
		:speed="2"
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
    	:unique-key="uid"
	>
		<rect x="175" y="0" rx="0" ry="0" width="117" height="66" /> 

		<rect x="10" y="5" rx="3" ry="3" width="160" height="10" /> 
		<rect x="70" y="25" rx="3" ry="3" width="100" height="10" /> 

		<rect x="113" y="53" rx="2" ry="2" width="54" height="6" /> 
		<rect x="65" y="53" rx="2" ry="2" width="40" height="6" />
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
