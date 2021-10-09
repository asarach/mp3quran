<template>
  <div class="post-simple">
  <content-loader
		:height="100"
		:width="496"
		:speed="2"
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
    	:unique-key="uid"
	>
		<rect x="10" y="10" rx="3" ry="3" width="300" height="12.8" /> 
		<rect x="210" y="30" rx="3" ry="3" width="100" height="12.8" /> 
		<rect x="70" y="55" rx="3" ry="3" width="240" height="6.4" /> 
		<rect x="326" y="0" rx="0" ry="0" width="170" height="100" /> 
		<circle cx="304" cy="85" r="7" /> 
		<rect x="222" y="80" rx="5" ry="5" width="70" height="10" /> 
		<circle cx="204" cy="85" r="7" /> 
		<rect x="160" y="80" rx="5" ry="5" width="32" height="10" /> 
		<circle cx="144" cy="85" r="7" /> 
		<rect x="112" y="80" rx="5" ry="5" width="20" height="10" />
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
