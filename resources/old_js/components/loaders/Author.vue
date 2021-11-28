<template>
  <div class="post-simple">
  <content-loader
		:height="77"
		:width="760"
		:speed="2"
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
    :unique-key="uid"
	>
		<rect x="600" y="10" rx="3" ry="3" width="160" height="12.8" /> 
		<rect x="160" y="40" rx="3" ry="3" width="600" height="7" /> 
		<rect x="0" y="0" rx="0" ry="0" width="0" height="0" /> 
		<circle cx="753" cy="70" r="7" /> 
		<rect x="670" y="65" rx="5" ry="5" width="70" height="10" /> 
		<circle cx="653" cy="70" r="7" /> 
		<rect x="607" y="65" rx="5" ry="5" width="32" height="10" /> 
		<circle cx="593" cy="70" r="7" /> 
		<rect x="560" y="65" rx="5" ry="5" width="20" height="10" />
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
