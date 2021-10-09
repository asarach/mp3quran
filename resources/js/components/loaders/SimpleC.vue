<template>
  <div class="category-listing">
  <content-loader
		:height="314"
		:width="772"
		:speed="2"
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
    	:unique-key="uid"
	>
		<rect x="462" y="0" rx="0" ry="0" width="310" height="166" /> 

		<rect x="470" y="180" rx="3" ry="3" width="300" height="12.8" /> 
		<rect x="670" y="200" rx="3" ry="3" width="100" height="12.8" /> 
		<rect x="530" y="230" rx="3" ry="3" width="240" height="6.4" /> 

		<circle cx="764" cy="260" r="7" /> 
		<rect x="682" y="255" rx="5" ry="5" width="70" height="10" /> 
		<circle cx="664" cy="260" r="7" /> 
		<rect x="620" y="255" rx="5" ry="5" width="32" height="10" /> 
		<circle cx="604" cy="260" r="7" /> 
		<rect x="572" y="255" rx="5" ry="5" width="20" height="10" />

		<rect x="336" y="0" rx="0" ry="0" width="110" height="59" /> 
		<rect x="15" y="5" rx="3" ry="3" width="300" height="10" /> 
		<rect x="165" y="25" rx="3" ry="3" width="150" height="10" /> 

		<rect x="336" y="76" rx="0" ry="0" width="110" height="59" /> 
		<rect x="15" y="81" rx="3" ry="3" width="300" height="10" /> 
		<rect x="165" y="101" rx="3" ry="3" width="150" height="10" /> 

		<rect x="336" y="152" rx="0" ry="0" width="110" height="59" /> 
		<rect x="15" y="157" rx="3" ry="3" width="300" height="10" /> 
		<rect x="165" y="177" rx="3" ry="3" width="150" height="10" /> 

		<rect x="336" y="228" rx="0" ry="0" width="110" height="59" /> 
		<rect x="15" y="233" rx="3" ry="3" width="300" height="10" /> 
		<rect x="165" y="253" rx="3" ry="3" width="150" height="10" /> 


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
