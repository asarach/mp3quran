
<template>
  <select
    class="custom-select"
    v-model="audio"
    @change="addItemToPlaylistAndPlay(audio.id)"
  >
    <option v-for="(sora, index) in soar" :key="index" :value="sora">
      {{ sora.reciter_name }}
    </option>
  </select>
</template>
<script>

export default {
  props: ["soar"],
  data() {
    return {
      audio: {},
    };
  },
  methods: {
    addItemToPlaylistAndPlay(id) {
      axios
        .get('ajax/soar/item?id=' + id)
        .then(function (response) {
          window.appFoolter.$store.dispatch("addPlayItem", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
