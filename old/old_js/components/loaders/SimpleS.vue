<template>
  <div class="col-md-12">
  <content-loader
		:height="147"
		:width="138"
		:speed="2"
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
    	:unique-key="uid"
	>
		<rect x="0" y="79" rx="3" ry="374" width="138" height="9" /> 
		<rect x="0" y="94" rx="3" ry="3" width="138" height="9" /> 
		<rect x="50" y="109" rx="3" ry="3" width="88" height="9" /> 
		<rect x="0" y="0" rx="0" ry="0" width="138" height="74" />
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
