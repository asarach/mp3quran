<template>
  <div class="post-divers">
  <content-loader
		:height="195"
		:width="237"
		:speed="2"
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
    	:unique-key="uid"
	>
		<rect x="5" y="148" rx="3" ry="374" width="227" height="9" /> 
		<rect x="50" y="170" rx="3" ry="3" width="137" height="9" /> 
		<rect x="0" y="0" rx="0" ry="0" width="237" height="132" />
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
