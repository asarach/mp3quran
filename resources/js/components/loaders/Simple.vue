<template>
  <div class="post-simple">
  <content-loader
  v-if='$store.state.settings.style_version != "m"'
		:height="100"
		:width="760"
		:speed="2"
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
    :unique-key="uid"
	>
		<rect x="27" y="10" rx="3" ry="3" width="550" height="12.8" /> 
		<rect x="127" y="40" rx="3" ry="3" width="450" height="6.4" /> 
		<rect x="590" y="-0.33" rx="0" ry="0" width="170" height="100" /> 
		<rect x="0" y="0" rx="0" ry="0" width="0" height="0" /> 
		<circle cx="570" cy="70" r="7" /> 
		<rect x="488" y="65" rx="5" ry="5" width="70" height="10" /> 
		<circle cx="470" cy="70" r="7" /> 
		<rect x="426" y="65" rx="5" ry="5" width="32" height="10" /> 
		<circle cx="410" cy="70" r="7" /> 
		<rect x="378" y="65" rx="5" ry="5" width="20" height="10" />
	</content-loader>
	<content-loader
	v-else
		:height="270"
		:width="504"
		:speed="2"
		primaryColor="#d8d8d8"
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
