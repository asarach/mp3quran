<template>
  <div class="card card-playlist">
    <div class="card-body">
      <a
        :href="prefix + 'video/playlist/' + playlist.id"
        rel="alternate"
        :hreflang="$store.state.current_language"
      >
        <h4 class="card-title">{{ playlist.name }}</h4>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["playlist"],
};
</script>
