<template>
  <div class="card card-video">
    <a
      :href="prefix + 'video/' + video.slug"
      rel="alternate"
      :hreflang="$store.state.current_language"
    >
      <img
        :src="video.image"
        class="card-img-top"
        :alt="video.title"
        :title="video.title"
      />
    </a>
    <div class="card-body">
      <a
        :href="prefix + 'video/' + video.slug"
        rel="alternate"
        :hreflang="$store.state.current_language"
      >
        <h4 class="card-title">{{ video.reciter_name }}</h4>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["video"],
};
</script>
