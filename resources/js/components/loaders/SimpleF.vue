<template>
  <div class="sidebare-wedget sidebare-free-pens">
  <content-loader
		:height="209"
		:width="316"
		:speed="2"
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
    	:unique-key="uid"
	>
		
		<rect x="0" y="0" rx="0" ry="0" width="316" height="114" />

		<rect x="8" y="134" rx="3" ry="374" width="300" height="12" /> 

		<rect x="8" y="160" rx="3" ry="374" width="300" height="9" /> 
		<rect x="178" y="180" rx="3" ry="3" width="130" height="9" /> 

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
