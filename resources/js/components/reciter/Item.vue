<template>
  <div class="card-reciter">
    <router-link  :to="'/' +  current_language +'/' + reciter.slug"  rel="alternate" :hreflang="$store.state.current_language" class="card-reciter-name">{{reciter.name}}</router-link>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  props: ["reciter"],
  data() {
    return {
      notification: {
        message: this.message,
        type: this.type,
        title: this.title
      }
    };
  },
  computed: {
    ...mapState({
      current_language: state => state.current_language,
    })
  },  
  mounted() {}
};
</script>
