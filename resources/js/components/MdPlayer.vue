
<template>
<div>
  <d-player :options="options" ref="vidplayer"></d-player>
</div>
</template>
<script>

export default {
  props: ["url"],

  data() {
    return {
      options: {
        // autoplay: true,
        live: false,
        video: {
          url: this.url,
          pic: "demo.jpg",
          thumbnails: "thumbnails.jpg",
        },
      },
    };
  },

  mounted() {       
        var cw = $('.dplayer').width() * 9 / 16;
        $('.dplayer').css({'height':cw+'px'});
    }
};
</script>
