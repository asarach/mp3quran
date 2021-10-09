<template>
  <div class="card card-video">
    <router-link rel="alternate" :hreflang="$store.state.current_language" :to="'/' +  $store.state.current_language +'/' + 'video/' + video.slug">
      <img :src="video.image" class="card-img-top" :alt="video.title" :title="video.title" />
    </router-link>
    <div class="card-body">
      <router-link rel="alternate" :hreflang="$store.state.current_language" :to="'/' +  $store.state.current_language +'/' + 'video/' + video.slug">
        <h4 class="card-title">{{video.reciter_name}}</h4>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["video"]
};
</script>
