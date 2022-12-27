<template>
  <div class="card-tv">
    <h3>{{tv.name}}</h3>
    <div id="dplayer"></div>
  </div>
</template>
<script>
export default {
  props: ["tv"]
};
</script>
