<template>
  <div class="card-tv">
    <h3>{{tv.name}}</h3>
    <d-player :options='options'></d-player>
  </div>
</template>
<script>
export default {
  props: ["tv"],
  data() {
    return {
      options: {
        live: true,
        video: {
            url: this.tv.url,
            pic: 'demo.jpg',
            thumbnails: 'thumbnails.jpg',
        },
      }
    };
  },
  methods: {},
  mounted() {}
};
</script>
