<template>
  <div class="card card-playlist">
    <div class="card-body">
      <router-link rel="alternate" :hreflang="$store.state.current_language" :to="'/' +  $store.state.current_language +'/video/playlist/' + playlist.id">
        <h4 class="card-title">{{playlist.name}}</h4>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["playlist"]
};
</script>
