<template>
  <div class="sidebare-video">
  <content-loader
		:height="64"
		:width="292"
		:speed="2"
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
    	:unique-key="uid"
	>
		<circle cx="260" cy="32" r="32" /> 

		<rect x="10" y="15" rx="3" ry="3" width="205" height="10" /> 
		<rect x="100" y="40" rx="3" ry="3" width="115" height="8" /> 
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
